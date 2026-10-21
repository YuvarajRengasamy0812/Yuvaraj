// Local visit log for `npm run dev` / `npm run preview`.
// Visits are appended to analytics/visitors.json in the project.
// On Netlify the same API is served by netlify/functions/visits.mjs instead.
// Privacy: the visitor's IP is only used for a one-off country lookup and is
// never written to disk. City is not stored either.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { MAX_BODY, buildVisit, dailyCounts } from "./visitShared.js";

const MAX_VISITS = 5000;

const isPrivateIp = (ip) =>
  !ip || ip === "::1" || ip.startsWith("127.") || ip.startsWith("10.") || ip.startsWith("192.168.") || /^172\.(1[6-9]|2\d|3[01])\./.test(ip) || ip.startsWith("fe80") || ip.startsWith("fc") || ip.startsWith("fd");

const geoCache = new Map();

async function lookupCountry(ip) {
  if (isPrivateIp(ip)) return { country: "Local network", countryCode: "" };
  if (geoCache.has(ip)) return geoCache.get(ip);

  try {
    const response = await fetch(`http://ip-api.com/json/${encodeURIComponent(ip)}?fields=status,country,countryCode`, { signal: AbortSignal.timeout(2500) });
    const data = await response.json();
    const result = data.status === "success" ? { country: data.country, countryCode: data.countryCode } : { country: "Unknown", countryCode: "" };
    geoCache.set(ip, result);
    return result;
  } catch {
    return { country: "Unknown", countryCode: "" };
  }
}

const clientIp = (req) => {
  const forwarded = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim();
  return (forwarded || req.socket.remoteAddress || "").replace(/^::ffff:/, "");
};

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    let tooLarge = false;
    req.on("data", (chunk) => {
      if (tooLarge) return;
      body += chunk;
      if (body.length > MAX_BODY) tooLarge = true;
    });
    req.on("end", () => (tooLarge ? reject(Object.assign(new Error("Body too large"), { status: 413 })) : resolve(body)));
    req.on("error", reject);
  });
}

export default function visitorLog({ file = "analytics/visitors.json" } = {}) {
  let filePath;
  let writing = Promise.resolve();

  const load = async () => {
    try {
      return JSON.parse(await readFile(filePath, "utf8"));
    } catch {
      return [];
    }
  };

  // Writes are chained so two visits arriving together don't clobber each other.
  const append = (visit) => {
    writing = writing.then(async () => {
      const visits = await load();
      visits.push(visit);
      await mkdir(path.dirname(filePath), { recursive: true });
      await writeFile(filePath, JSON.stringify(visits.slice(-MAX_VISITS), null, 2));
    });
    return writing;
  };

  const middleware = async (req, res, next) => {
    if (!req.url.startsWith("/api/visits")) return next();
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "no-store");

    try {
      if (req.method === "POST") {
        const payload = JSON.parse((await readBody(req)) || "{}");
        const geo = await lookupCountry(clientIp(req));
        await append(buildVisit(payload, { userAgent: String(req.headers["user-agent"] || ""), ownHost: String(req.headers.host || "").split(":")[0], geo }));
        res.statusCode = 204;
        return res.end();
      }

      if (req.method === "GET") {
        const visits = await load();
        return res.end(JSON.stringify({ visits: visits.slice(-500).reverse(), total: visits.length, days: dailyCounts(visits) }));
      }

      res.statusCode = 405;
      return res.end(JSON.stringify({ error: "Method not allowed" }));
    } catch (error) {
      res.statusCode = error.status || 400;
      return res.end(JSON.stringify({ error: error.message }));
    }
  };

  return {
    name: "visitor-log",
    configResolved(config) {
      filePath = path.resolve(config.root, file);
    },
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}


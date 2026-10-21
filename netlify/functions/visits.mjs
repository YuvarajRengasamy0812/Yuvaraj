// Netlify version of the visit log. Served at /api/visits through the
// rewrite in netlify.toml. Visits are kept in Netlify Blobs, one JSON array
// per UTC day, so nothing outside Netlify needs to be set up.
// Country comes from Netlify's own geo lookup; the IP is never stored.

import { getStore } from "@netlify/blobs";
import { MAX_BODY, buildVisit, dailyCounts } from "../../server/visitShared.js";

const KEEP_DAYS = 30;
const MAX_PER_DAY = 5000;
const MAX_ATTEMPTS = 20;

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const json = (body, status = 200) =>
  new Response(body === null ? null : JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

const dayKey = (offsetDays = 0) => `day/${new Date(Date.now() - offsetDays * 86400000).toISOString().slice(0, 10)}`;

// Append with optimistic concurrency: if another request wrote the same day
// in between, re-read and try again instead of overwriting it.
async function appendVisit(store, visit) {
  const key = dayKey();
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt += 1) {
    // back off a little (with jitter) so colliding requests spread out
    if (attempt > 0) await pause(15 + Math.random() * 40 * attempt);
    const current = await store.getWithMetadata(key, { type: "json" });
    const visits = Array.isArray(current?.data) ? current.data : [];
    if (visits.length >= MAX_PER_DAY) return;
    visits.push(visit);

    const result = current?.etag ? await store.setJSON(key, visits, { onlyIfMatch: current.etag }) : await store.setJSON(key, visits, { onlyIfNew: true });
    if (result.modified) return;
  }
}

async function readRecent(store) {
  const buckets = await Promise.all(Array.from({ length: KEEP_DAYS }, (_, i) => store.get(dayKey(i), { type: "json" }).catch(() => null)));
  return buckets.filter(Array.isArray).flat().sort((a, b) => a.time.localeCompare(b.time));
}

export default async (req, context) => {
  const store = getStore({ name: "visits", consistency: "strong" });

  if (req.method === "POST") {
    const raw = await req.text();
    if (raw.length > MAX_BODY) return json({ error: "Body too large" }, 413);

    let payload;
    try {
      payload = JSON.parse(raw || "{}");
    } catch {
      return json({ error: "Invalid JSON" }, 400);
    }

    const visit = buildVisit(payload, {
      userAgent: req.headers.get("user-agent") || "",
      ownHost: new URL(req.url).hostname,
      geo: { country: context.geo?.country?.name, countryCode: context.geo?.country?.code },
    });

    await appendVisit(store, visit);
    return json(null, 204);
  }

  if (req.method === "GET") {
    const visits = await readRecent(store);
    return json({ visits: visits.slice(-500).reverse(), total: visits.length, days: dailyCounts(visits), rangeDays: KEEP_DAYS });
  }

  return json({ error: "Method not allowed" }, 405);
};

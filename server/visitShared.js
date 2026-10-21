// Shared by the local Vite visit log (server/visitorLog.js) and the
// Netlify function (netlify/functions/visits.mjs) so both record visits the same way.

export const MAX_BODY = 4 * 1024;

const sources = [
  { name: "Instagram", hosts: ["instagram.com"], ua: /Instagram/i },
  { name: "LinkedIn", hosts: ["linkedin.com", "lnkd.in"], ua: /LinkedInApp/i },
  { name: "Facebook", hosts: ["facebook.com", "fb.com", "fb.me"], ua: /FBAN|FBAV/i },
  { name: "X / Twitter", hosts: ["t.co", "x.com", "twitter.com"] },
  { name: "WhatsApp", hosts: ["whatsapp.com", "wa.me"], ua: /WhatsApp/i },
  { name: "GitHub", hosts: ["github.com"] },
  { name: "Google", hosts: ["google."] },
  { name: "Bing", hosts: ["bing.com"] },
  { name: "YouTube", hosts: ["youtube.com", "youtu.be"] },
];

function detectSource({ referrer, utm }, userAgent, ownHost) {
  if (utm) {
    const hit = sources.find((source) => source.name.toLowerCase().startsWith(utm.toLowerCase()));
    return hit ? hit.name : utm.slice(0, 40);
  }

  const appHit = sources.find((source) => source.ua && source.ua.test(userAgent));
  if (appHit) return appHit.name;

  if (!referrer) return "Direct";
  let host = "";
  try {
    host = new URL(referrer).hostname.replace(/^www\.|^l\.|^m\./, "");
  } catch {
    return "Direct";
  }
  if (ownHost && host === ownHost) return "Direct";

  const hit = sources.find((source) => source.hosts.some((h) => host === h || host.endsWith(`.${h}`) || host.startsWith(h)));
  return hit ? hit.name : host;
}

function detectBrowser(ua) {
  if (/Instagram/i.test(ua)) return "Instagram app";
  if (/LinkedInApp/i.test(ua)) return "LinkedIn app";
  if (/FBAN|FBAV/i.test(ua)) return "Facebook app";
  if (/Edg\//.test(ua)) return "Edge";
  if (/OPR\/|Opera/.test(ua)) return "Opera";
  if (/SamsungBrowser/.test(ua)) return "Samsung Internet";
  if (/Firefox|FxiOS/.test(ua)) return "Firefox";
  if (/Chrome|CriOS/.test(ua)) return "Chrome";
  if (/Safari/.test(ua)) return "Safari";
  return "Other";
}

function detectOs(ua) {
  if (/iPhone|iPad|iPod/.test(ua)) return "iOS";
  if (/Android/.test(ua)) return "Android";
  if (/Windows/.test(ua)) return "Windows";
  if (/Mac OS X|Macintosh/.test(ua)) return "macOS";
  if (/Linux/.test(ua)) return "Linux";
  return "Other";
}

const detectDevice = (ua) => (/iPad|Tablet/.test(ua) ? "Tablet" : /Mobi|Android|iPhone/.test(ua) ? "Mobile" : "Desktop");

const clean = (value, max = 120) => (typeof value === "string" ? value.slice(0, max) : "");

// Turns the browser's payload + request info into the record we store.
// `geo` is { country, countryCode } — never an IP or city.
export function buildVisit(payload, { userAgent = "", ownHost = "", geo }) {
  return {
    id: clean(payload.visitorId, 40),
    time: new Date().toISOString(),
    page: clean(payload.path, 160) || "/",
    source: detectSource({ referrer: clean(payload.referrer, 300), utm: clean(payload.utm, 40) }, userAgent, ownHost),
    country: geo?.country || "Unknown",
    countryCode: geo?.countryCode || "",
    browser: detectBrowser(userAgent),
    os: detectOs(userAgent),
    device: detectDevice(userAgent),
    language: clean(payload.language, 20),
  };
}

// { "2026-10-20": 12, ... } for the last 14 days (UTC dates)
export function dailyCounts(visits, days = 14) {
  const counts = {};
  for (let i = days - 1; i >= 0; i -= 1) counts[new Date(Date.now() - i * 86400000).toISOString().slice(0, 10)] = 0;
  visits.forEach((visit) => {
    const day = visit.time.slice(0, 10);
    if (day in counts) counts[day] += 1;
  });
  return counts;
}

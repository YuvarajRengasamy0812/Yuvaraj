import { useEffect } from "react";

const safeStorage = (store) => {
  try {
    const key = "__probe__";
    store.setItem(key, key);
    store.removeItem(key);
    return store;
  } catch {
    return null;
  }
};

// Anonymous id so the visitors page can count unique people. Not linked to anything else.
const getVisitorId = () => {
  const store = safeStorage(window.localStorage);
  let id = store?.getItem("yr-visitor-id");
  if (!id) {
    id = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
    store?.setItem("yr-visitor-id", id);
  }
  return id;
};

// In a single-page app document.referrer only means something on the first load,
// so remember where this session came from and send it with every page view.
const getEntry = () => {
  const store = safeStorage(window.sessionStorage);
  const saved = store?.getItem("yr-visit-entry");
  if (saved) return JSON.parse(saved);

  const params = new URLSearchParams(window.location.search);
  const entry = { referrer: document.referrer, utm: params.get("utm_source") || params.get("ref") || "" };
  store?.setItem("yr-visit-entry", JSON.stringify(entry));
  return entry;
};

export function useVisitTracker(path) {
  useEffect(() => {
    if (path === "/visitors") return;

    const body = JSON.stringify({
      ...getEntry(),
      path,
      visitorId: getVisitorId(),
      language: navigator.language,
    });

    fetch("/api/visits", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true }).catch(() => {});
  }, [path]);
}

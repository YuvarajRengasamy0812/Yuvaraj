import { useEffect, useState } from "react";
import AppLink from "./AppLink";
import { DoorEnter } from "./Icons";

const ONLINE_WINDOW = 5 * 60 * 1000;

// Hero pill that links to the visitors page and shows how many people are on the site right now.
export default function ActiveButton({ className = "" }) {
  const [online, setOnline] = useState(null);

  useEffect(() => {
    let alive = true;
    const load = () =>
      fetch("/api/visits")
        .then((response) => (response.ok ? response.json() : null))
        .then((data) => {
          if (!alive || !data) return;
          const since = Date.now() - ONLINE_WINDOW;
          setOnline(new Set(data.visits.filter((visit) => new Date(visit.time).getTime() > since).map((visit) => visit.id)).size);
        })
        .catch(() => {});

    load();
    const interval = window.setInterval(load, 30000);
    return () => {
      alive = false;
      window.clearInterval(interval);
    };
  }, []);

  return (
    <AppLink to="/visitors" className={`active-btn ${className}`.trim()} aria-label="See who is visiting this site">
      <i className="active-btn-dot" aria-hidden="true" />
      <span>Active</span>
      {online !== null && <small>{online} online</small>}
      <DoorEnter size={19} />
    </AppLink>
  );
}

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedPageHero from "../components/AnimatedPageHero";
import {
  Clock,
  Compass,
  Eye,
  Facebook,
  Github,
  Globe,
  Instagram,
  Linkedin,
  MapPin,
  MessageCircle,
  Monitor,
  RefreshCw,
  Search,
  Smartphone,
  Tablet,
  Users,
  XLogo,
} from "../components/Icons";
import visitorsHero from "../../assets/images/contact/hero/contact-hero-banner.png";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const ONLINE_WINDOW = 5 * 60 * 1000;
const REFRESH_MS = 15000;

const sourceIcons = {
  Instagram,
  LinkedIn: Linkedin,
  Facebook,
  "X / Twitter": XLogo,
  WhatsApp: MessageCircle,
  GitHub: Github,
  Google: Search,
  Bing: Search,
  Direct: Compass,
};
const deviceIcons = { Desktop: Monitor, Mobile: Smartphone, Tablet };

// Regional-indicator letters turn "IN" into 🇮🇳
const flag = (code) => (code && code.length === 2 ? String.fromCodePoint(...[...code.toUpperCase()].map((c) => 127397 + c.charCodeAt(0))) : "");

const countBy = (items, key) => {
  const counts = new Map();
  items.forEach((item) => counts.set(item[key], (counts.get(item[key]) || 0) + 1));
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
};

const percent = (part, whole) => (whole ? Math.round((part / whole) * 100) : 0);

const timeAgo = (iso) => {
  const seconds = Math.round((Date.now() - new Date(iso).getTime()) / 1000);
  if (seconds < 45) return "just now";
  if (seconds < 3600) return `${Math.max(1, Math.round(seconds / 60))} min ago`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)} h ago`;
  return new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short" }).format(new Date(iso));
};

const pageName = (page) => (page === "/" ? "Home" : page.replace(/^\//, "").replace(/[-/]/g, " "));

// Eases from the previous value to the new one so live refreshes feel smooth.
function AnimatedNumber({ value }) {
  const [shown, setShown] = useState(0);
  const from = useRef(0);

  useEffect(() => {
    const start = performance.now();
    const begin = from.current;
    let frame;
    const step = (now) => {
      const t = Math.min((now - start) / 700, 1);
      const next = Math.round(begin + (value - begin) * (1 - Math.pow(1 - t, 3)));
      setShown(next);
      if (t < 1) frame = requestAnimationFrame(step);
      else from.current = value;
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return shown.toLocaleString("en-IN");
}

function TrendChart({ days }) {
  const entries = Object.entries(days);
  const max = Math.max(1, ...entries.map(([, count]) => count));
  const total = entries.reduce((sum, [, count]) => sum + count, 0);
  const label = (day) => new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short" }).format(new Date(`${day}T00:00:00Z`));

  return (
    <article className="vz-card vz-trend" data-aos="fade-up">
      <header className="vz-card-head">
        <div>
          <h3>Visits per day</h3>
          <p>Last {entries.length} days · {total.toLocaleString("en-IN")} visits</p>
        </div>
      </header>

      <div className="vz-chart" role="img" aria-label={`Visits per day, peak ${max}`}>
        <div className="vz-chart-grid" aria-hidden="true">
          <span data-value={max} />
          <span data-value={Math.round(max / 2)} />
          <span data-value={0} />
        </div>
        <div className="vz-chart-bars">
          {entries.map(([day, count], index) => (
            <div className="vz-bar" key={day} tabIndex={0} data-tip={`${label(day)} · ${count} visit${count === 1 ? "" : "s"}`}>
              <i style={{ height: `${(count / max) * 100}%`, "--bar-i": index }} />
              <small>{index === entries.length - 1 ? "Today" : index % 3 === 0 ? label(day) : ""}</small>
            </div>
          ))}
        </div>
      </div>

      <table className="sr-only">
        <caption>Visits per day</caption>
        <tbody>
          {entries.map(([day, count]) => (
            <tr key={day}><th>{day}</th><td>{count}</td></tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

function RankCard({ title, rows, total, icon, delay = 0, renderLabel, empty = "Nothing yet" }) {
  return (
    <article className="vz-card" data-aos="fade-up" data-aos-delay={delay}>
      <header className="vz-card-head"><h3>{title}</h3></header>
      {rows.length === 0 ? (
        <p className="vz-empty">{empty}</p>
      ) : (
        <ul className="vz-rank">
          {rows.slice(0, 6).map(([name, count]) => {
            const Icon = icon?.(name);
            return (
              <li key={name} title={`${name}: ${count} (${percent(count, total)}%)`}>
                <span className="vz-rank-icon">{Icon ? <Icon size={16} /> : renderLabel ? renderLabel(name) : <Globe size={16} />}</span>
                <div className="vz-rank-body">
                  <div>
                    <span>{name}</span>
                    <b>{count}<small>{percent(count, total)}%</small></b>
                  </div>
                  <i><em style={{ width: `${Math.max(3, percent(count, total))}%` }} /></i>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </article>
  );
}

export default function Visitors() {
  useDocumentTitle("Visitors | Yuvaraj R");
  const [state, setState] = useState({ status: "loading", visits: [], total: 0, days: {}, rangeDays: null });
  const [updatedAt, setUpdatedAt] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const load = useCallback(() => {
    setSpinning(true);
    return fetch("/api/visits")
      .then((response) => {
        if (!response.ok) throw new Error("unavailable");
        return response.json();
      })
      .then((data) => {
        setState({ status: "ready", visits: data.visits, total: data.total, days: data.days || {}, rangeDays: data.rangeDays || null });
        setUpdatedAt(new Date());
      })
      .catch(() => setState((current) => ({ ...current, status: "offline" })))
      .finally(() => window.setTimeout(() => setSpinning(false), 500));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 40 });
    load();
    const interval = window.setInterval(load, REFRESH_MS);
    return () => window.clearInterval(interval);
  }, [load]);

  // New cards appear once data arrives; let AOS pick them up.
  useEffect(() => {
    AOS.refresh();
  }, [state.status]);

  const summary = useMemo(() => {
    const { visits } = state;
    const today = new Date().toDateString();
    const since = Date.now() - ONLINE_WINDOW;

    return {
      unique: new Set(visits.map((visit) => visit.id)).size,
      today: visits.filter((visit) => new Date(visit.time).toDateString() === today).length,
      online: new Set(visits.filter((visit) => new Date(visit.time).getTime() > since).map((visit) => visit.id)).size,
      sources: countBy(visits, "source"),
      countries: countBy(visits, "country"),
      browsers: countBy(visits, "browser"),
      devices: countBy(visits, "device"),
      pages: countBy(visits, "page"),
      countryCodes: Object.fromEntries(visits.map((visit) => [visit.country, visit.countryCode])),
    };
  }, [state]);

  const sample = state.visits.length;
  const kpis = [
    { label: "Online now", value: summary.online, icon: Eye, live: true },
    { label: "Visits today", value: summary.today, icon: Clock },
    { label: state.rangeDays ? `Visits · ${state.rangeDays} days` : "Total visits", value: state.total, icon: Compass },
    { label: "Unique visitors", value: summary.unique, icon: Users },
  ];

  return (
    <>
      <AnimatedPageHero
        eyebrow="Visitors"
        title="Who's Been Stopping By"
        text="A live, anonymous log of visits to this site: where people came from, which country, and what they opened it on."
        image={visitorsHero}
        showActive={false}
      />

      <section className="vz">
        <div className="vz-inner">
          <header className="vz-head" data-aos="fade-up">
            <div>
              <span className="vz-live"><i aria-hidden="true" /> Live</span>
              <h2>Site activity</h2>
              <p>
                {updatedAt ? `Updated ${updatedAt.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}` : "Connecting…"} · refreshes every {REFRESH_MS / 1000}s · no IPs or cities stored
              </p>
            </div>
            <button type="button" className={`vz-refresh${spinning ? " is-spinning" : ""}`} onClick={load} aria-label="Refresh now">
              <RefreshCw size={18} />
              <span>Refresh</span>
            </button>
          </header>

          {state.status === "offline" && (
            <div className="vz-notice" data-aos="fade-in">
              The visit log isn't reachable. Locally it runs inside the Vite server (<code>npm run dev</code>); on Netlify it needs the <code>visits</code> function from this repo to be deployed.
            </div>
          )}

          <div className="vz-kpis">
            {kpis.map((kpi, index) => {
              const Icon = kpi.icon;
              return (
                <article key={kpi.label} className={`vz-kpi${kpi.live ? " is-live" : ""}`} data-aos="zoom-in-up" data-aos-delay={index * 90}>
                  <span className="vz-kpi-icon"><Icon size={20} /></span>
                  <strong>{state.status === "loading" ? "–" : <AnimatedNumber value={kpi.value} />}</strong>
                  <small>{kpi.label}</small>
                </article>
              );
            })}
          </div>

          <div className="vz-split">
            <TrendChart days={state.days} />
            <RankCard title="Where they came from" rows={summary.sources} total={sample} icon={(name) => sourceIcons[name]} delay={100} />
          </div>

          <div className="vz-grid">
            <RankCard
              title="Countries"
              rows={summary.countries}
              total={sample}
              renderLabel={(name) => <span className="vz-flag">{flag(summary.countryCodes[name]) || <MapPin size={16} />}</span>}
            />
            <RankCard title="Devices" rows={summary.devices} total={sample} icon={(name) => deviceIcons[name]} delay={80} />
            <RankCard title="Browsers" rows={summary.browsers} total={sample} icon={() => Globe} delay={160} />
            <RankCard title="Most viewed pages" rows={summary.pages} total={sample} icon={() => Eye} delay={240} />
          </div>

          <article className="vz-card vz-feed" data-aos="fade-up">
            <header className="vz-card-head">
              <div>
                <h3>Recent visits</h3>
                <p>Latest {Math.min(sample, 30)} of {sample.toLocaleString("en-IN")}</p>
              </div>
            </header>

            {sample === 0 ? (
              <p className="vz-empty">{state.status === "loading" ? "Loading…" : "No visits logged yet. Open the site in another tab to see one appear."}</p>
            ) : (
              <ol className="vz-feed-list">
                {state.visits.slice(0, 30).map((visit, index) => {
                  const SourceIcon = sourceIcons[visit.source] || Globe;
                  const DeviceIcon = deviceIcons[visit.device] || Monitor;
                  return (
                    <li key={`${visit.time}-${index}`} style={{ "--i": Math.min(index, 10) }}>
                      <span className="vz-feed-avatar" title={visit.source}><SourceIcon size={18} /></span>
                      <div className="vz-feed-body">
                        <p>
                          Someone from <b>{flag(visit.countryCode)} {visit.country}</b> opened <b className="vz-feed-page">{pageName(visit.page)}</b>
                          {visit.source !== "Direct" ? <> via <b>{visit.source}</b></> : null}
                        </p>
                        <div className="vz-feed-meta">
                          <span><DeviceIcon size={13} /> {visit.device} · {visit.os}</span>
                          <span>{visit.browser}</span>
                          {visit.language ? <span>{visit.language}</span> : null}
                        </div>
                      </div>
                      <time dateTime={visit.time} title={new Date(visit.time).toLocaleString()}>{timeAgo(visit.time)}</time>
                    </li>
                  );
                })}
              </ol>
            )}
          </article>
        </div>
      </section>
    </>
  );
}

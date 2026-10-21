import { useEffect, useState } from "react";
import AppLink from "./AppLink";
import { Building2, Camera, Code2, Compass, GraduationCap, Home, Layers, LayoutGrid, Mail, Moon, Sun, User, X } from "./Icons";
import { navItems } from "../data/portfolio";

// Mobile / tablet navigation: a floating icon bar at the bottom of the screen
// (Instagram-style). The first four pages sit on the bar; the rest live in "More".
const icons = {
  "/": Home,
  "/about": User,
  "/education": GraduationCap,
  "/skills": Code2,
  "/projects": Layers,
  "/gallery": Camera,
  "/company": Building2,
  "/travel": Compass,
  "/contact": Mail,
};

const barPaths = ["/", "/about", "/projects", "/travel"];

const isActive = (path, currentPath) => currentPath === path || (path !== "/" && currentPath?.startsWith(`${path}/`));

export default function BottomNav({ currentPath }) {
  const [moreOpen, setMoreOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => document.documentElement.getAttribute("data-theme") === "dark");
  const barItems = barPaths.map((path) => navItems.find((item) => item.path === path)).filter(Boolean);
  const moreItems = navItems.filter((item) => !barPaths.includes(item.path));
  const moreActive = moreItems.some((item) => isActive(item.path, currentPath));

  useEffect(() => setMoreOpen(false), [currentPath]);

  // Keep the sheet's theme button in sync with whatever the header applied.
  useEffect(() => {
    const sync = () => setIsDark(document.documentElement.getAttribute("data-theme") === "dark");
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!moreOpen) return undefined;
    const onKey = (event) => event.key === "Escape" && setMoreOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [moreOpen]);

  return (
    <div className={`bnav${moreOpen ? " is-open" : ""}`}>
      <button type="button" className="bnav-backdrop" aria-label="Close menu" tabIndex={moreOpen ? 0 : -1} onClick={() => setMoreOpen(false)} />

      <div className="bnav-sheet" role="dialog" aria-label="More pages" aria-hidden={!moreOpen}>
        <div className="bnav-sheet-grid">
          {moreItems.map((item, index) => {
            const Icon = icons[item.path] ?? LayoutGrid;
            return (
              <AppLink
                key={item.path}
                to={item.path}
                currentPath={currentPath}
                className="bnav-sheet-link"
                activeClassName="active"
                style={{ "--i": index }}
                tabIndex={moreOpen ? 0 : -1}
              >
                <span><Icon size={22} /></span>
                {item.label}
              </AppLink>
            );
          })}
          <button
            type="button"
            className="bnav-sheet-link"
            style={{ "--i": moreItems.length }}
            tabIndex={moreOpen ? 0 : -1}
            onClick={() => window.dispatchEvent(new Event("portfolio-toggle-theme"))}
          >
            <span>{isDark ? <Sun size={22} /> : <Moon size={22} />}</span>
            {isDark ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </div>

      <nav className="bnav-bar" aria-label="Main">
        {barItems.map((item) => {
          const Icon = icons[item.path];
          return (
            <AppLink key={item.path} to={item.path} currentPath={currentPath} className="bnav-link" activeClassName="active" aria-label={item.label}>
              <Icon size={23} />
            </AppLink>
          );
        })}
        <button
          type="button"
          className={`bnav-link${moreActive || moreOpen ? " active" : ""}`}
          onClick={() => setMoreOpen((value) => !value)}
          aria-label="More pages"
          aria-expanded={moreOpen}
        >
          {moreOpen ? <X size={23} /> : <LayoutGrid size={23} />}
        </button>
      </nav>
    </div>
  );
}

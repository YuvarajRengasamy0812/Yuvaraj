import { Moon, Sun } from "./Icons";
import { useEffect, useState } from "react";
import { images, navItems } from "../data/portfolio";
import { useClock } from "../hooks/useDateTime";
import AppLink from "./AppLink";

const getInitialTheme = () => {
  const savedTheme = window.localStorage.getItem("portfolio-theme");
  if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export default function Header({ currentPath }) {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const clock = useClock();
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => setTheme((value) => (value === "dark" ? "light" : "dark"));

  // The mobile bottom nav has its own theme button; it asks the header to flip.
  useEffect(() => {
    window.addEventListener("portfolio-toggle-theme", toggleTheme);
    return () => window.removeEventListener("portfolio-toggle-theme", toggleTheme);
  }, []);

  return (
    <header className={`topbar${scrolled ? " is-scrolled" : ""}`}>
      <div className="topbar-pill">
        <AppLink to="/" currentPath={currentPath} className="topbar-logo" aria-label="Yuvaraj R – home">
          <img src={images.logo} alt="Yuvaraj R" />
        </AppLink>

        <nav className="topbar-nav" aria-label="Main">
          {navItems.map((item) => (
            <AppLink key={item.path} to={item.path} currentPath={currentPath} className="topbar-link" activeClassName="active">
              {item.label}
            </AppLink>
          ))}
        </nav>

        <div className="topbar-actions">
          {clock && (
            <time className="topbar-clock" dateTime={clock.iso} title={clock.full}>
              <i className="topbar-clock-live" aria-hidden="true" />
              <span className="topbar-clock-time">
                {clock.hours}:{clock.minutes}
                <small>{clock.period}</small>
              </span>
              <span className="topbar-clock-date">{clock.weekday} - {clock.day} {clock.month}</span>
            </time>
          )}

          <button className="topbar-icon-btn" type="button" onClick={toggleTheme} aria-label={`Switch to ${isDark ? "light" : "dark"} mode`} title={isDark ? "Light mode" : "Dark mode"}>
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
}

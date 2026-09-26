import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { images, navItems } from "../data/portfolio";
import { useDateTime } from "../hooks/useDateTime";
import AppLink from "./AppLink";

const getInitialTheme = () => {
  const savedTheme = window.localStorage.getItem("portfolio-theme");
  if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

export default function Header({ currentPath }) {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(getInitialTheme);
  const dateTime = useDateTime();
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((value) => (value === "dark" ? "light" : "dark"));

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <AppLink to="/" currentPath={currentPath} className="brand" aria-label="Yuvaraj home" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <img src={images.logo} alt="Yuvaraj" />
          </span>
          <span className="brand-copy">
            <strong>Yuvaraj R</strong>
            <span>Full Stack Developer</span>
          </span>
        </AppLink>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <AppLink key={item.path} to={item.path} currentPath={currentPath} className="nav-link" activeClassName="active">
              {item.label}
            </AppLink>
          ))}
        </nav>

        <div className="header-meta">
          <span className="header-date">{dateTime}</span>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}>
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
            <span>{isDark ? "Light" : "Dark"}</span>
          </button>
        </div>

        <button className="icon-button mobile-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <AppLink key={item.path} to={item.path} currentPath={currentPath} className="mobile-nav-link" activeClassName="active" onClick={() => setOpen(false)}>
              {item.label}
            </AppLink>
          ))}
        </nav>
      )}
    </header>
  );
}

import { Menu, Moon, X } from "lucide-react";
import { useState } from "react";
import { images, navItems } from "../data/portfolio";
import { useDateTime } from "../hooks/useDateTime";
import AppLink from "./AppLink";

export default function Header({ currentPath }) {
  const [open, setOpen] = useState(false);
  const dateTime = useDateTime();

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <AppLink to="/" currentPath={currentPath} className="brand" aria-label="Yuvaraj home" onClick={() => setOpen(false)}>
          <img src={images.logo} alt="Yuvaraj" />
        </AppLink>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <AppLink key={item.path} to={item.path} currentPath={currentPath} className="nav-link" activeClassName="active">
              {item.label}
            </AppLink>
          ))}
        </nav>

        <div className="header-meta">
          <span>{dateTime}</span>
          <Moon size={16} />
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
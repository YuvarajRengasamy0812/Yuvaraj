import { Github, Linkedin, Mail, MapPin, Phone, XLogo } from "./Icons";
import { navItems, profile } from "../data/portfolio";
import AppLink from "./AppLink";

const socials = [
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "X", href: profile.twitter, icon: XLogo },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

const contacts = [
  { label: "Address", value: profile.address, icon: MapPin, href: `https://www.google.com/maps?q=${encodeURIComponent(profile.address)}` },
  { label: "Phone", value: profile.phone, icon: Phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}` },
  { label: "Email", value: profile.email, icon: Mail, href: `mailto:${profile.email}` },
];

export default function Footer({ currentPath }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2>Yuvaraj Portfolio</h2>
          <p>Thanks for stopping by. If you have a project in mind, a question, or just want to talk about code, my inbox is always open.</p>
          <div className="footer-socials">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
        <div>
          <h3>Quick links</h3>
          <div className="footer-links">
            {navItems.map((item) => (
              <AppLink key={item.path} to={item.path} currentPath={currentPath}>{item.label}</AppLink>
            ))}
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <ul className="footer-contact">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <li key={contact.label}>
                  <span><Icon size={17} /></span>
                  <a href={contact.href} target={contact.label === "Address" ? "_blank" : undefined} rel="noreferrer">
                    <small>{contact.label}</small>
                    {contact.value}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <p className="footer-credit">© {new Date().getFullYear()} Yuvaraj R. Designed and coded by me.</p>
      <p className="footer-privacy">This site keeps an anonymous visit log (page, source, country, browser). No IP addresses are stored. <AppLink to="/visitors" currentPath={currentPath}>See it live</AppLink></p>
    </footer>
  );
}

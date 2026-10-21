import { useEffect, useRef, useState } from "react";

// Hand-drawn icon set for the portfolio.
// Every glyph is drawn on a 24px grid with a 1.8 stroke and round joins,
// so the set stays consistent without pulling in a third-party icon pack.

function Icon({ size = 24, strokeWidth = 1.8, className = "", children, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`yr-icon ${className}`.trim()}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

const draw = (name, shape) => {
  const Glyph = (props) => <Icon {...props}>{shape}</Icon>;
  Glyph.displayName = name;
  return Glyph;
};

/* Arrows & navigation */
export const ArrowLeft = draw("ArrowLeft", <path d="M19 12H5.5M10.5 6.5 5 12l5.5 5.5" />);
export const ArrowRight = draw("ArrowRight", <path d="M5 12h13.5M13.5 6.5 19 12l-5.5 5.5" />);
export const ArrowUpRight = draw("ArrowUpRight", <path d="M7 17 17 7M9 7h8v8" />);
export const ArrowDownCircle = draw("ArrowDownCircle", <><circle cx="12" cy="12" r="9" /><path d="M12 7.5v8.5M8.5 12.8 12 16.3l3.5-3.5" /></>);
export const ChevronLeft = draw("ChevronLeft", <path d="m15 5-7 7 7 7" />);
export const ChevronRight = draw("ChevronRight", <path d="m9 5 7 7-7 7" />);
export const ExternalLink = draw("ExternalLink", <path d="M14 4h6v6M20 4l-9 9M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10" />);
export const Menu = draw("Menu", <path d="M4 7h16M4 12h10.5M4 17h16" />);
export const X = draw("X", <path d="M6 6l12 12M18 6 6 18" />);

/* Interface */
export const Download = draw("Download", <path d="M12 3.5v11M7.5 10.5 12 15l4.5-4.5M4 17v1.5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V17" />);
export const Share2 = draw("Share2", <><circle cx="18" cy="5.5" r="2.5" /><circle cx="6" cy="12" r="2.5" /><circle cx="18" cy="18.5" r="2.5" /><path d="m8.2 10.8 7.6-4.1M8.2 13.2l7.6 4.1" /></>);
export const Eye = draw("Eye", <><path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" /><circle cx="12" cy="12" r="3" /></>);
export const ZoomIn = draw("ZoomIn", <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.5 15.5 5 5M8 10.5h5M10.5 8v5" /></>);
export const ZoomOut = draw("ZoomOut", <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.5 15.5 5 5M8 10.5h5" /></>);
export const Play = draw("Play", <path d="M7.5 4.8v14.4a.8.8 0 0 0 1.2.7l11-7.2a.8.8 0 0 0 0-1.4l-11-7.2a.8.8 0 0 0-1.2.7z" />);
export const CheckCircle2 = draw("CheckCircle2", <><circle cx="12" cy="12" r="9" /><path d="m8 12.3 2.7 2.7 5.5-5.6" /></>);
export const Moon = draw("Moon", <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />);
export const Sun = draw("Sun", <><circle cx="12" cy="12" r="4" /><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" /></>);
export const Clock = draw("Clock", <><circle cx="12" cy="12" r="9" /><path d="M12 7v5.2l3.3 2" /></>);
export const CalendarDays = draw("CalendarDays", <><rect x="3.5" y="5" width="17" height="15.5" rx="2.5" /><path d="M8 3v4M16 3v4M3.5 10h17M8 14h.01M12 14h.01M16 14h.01M8 17.2h.01M12 17.2h.01" /></>);

/* Contact */
export const Mail = draw("Mail", <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m3.5 7 8.5 6 8.5-6" /></>);
export const Phone = draw("Phone", <path d="M5 3.5h3l1.5 4.5-2 1.3a11 11 0 0 0 5.2 5.2l1.3-2 4.5 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5.5a2 2 0 0 1 2-2z" />);
export const Send = draw("Send", <path d="M21 3 3 10.5l7 3 3 7zM21 3 10 13.5" />);
export const MapPin = draw("MapPin", <><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.4" /></>);

/* Places & travel */
export const Home = draw("Home", <path d="M3.5 10.5 12 3.5l8.5 7M5.5 9v10.5A1.5 1.5 0 0 0 7 21h3.5v-5.5h3V21H17a1.5 1.5 0 0 0 1.5-1.5V9" />);
export const Building2 = draw("Building2", <path d="M4 21V5.5A1.5 1.5 0 0 1 5.5 4h7A1.5 1.5 0 0 1 14 5.5V21M14 10h4.5a1.5 1.5 0 0 1 1.5 1.5V21M2.5 21h19M7.5 8h3M7.5 12h3M7.5 16h3M17 14v.01M17 17.5v.01" />);
export const Compass = draw("Compass", <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></>);
export const Route = draw("Route", <><circle cx="6" cy="18" r="2.5" /><circle cx="18" cy="6" r="2.5" /><path d="M8.5 18H16a3 3 0 0 0 0-6H8a3 3 0 0 1 0-6h7.5" /></>);
export const Camera = draw("Camera", <><path d="M4 8.5a2 2 0 0 1 2-2h2L9.5 4h5L16 6.5h2a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" /><circle cx="12" cy="13" r="3.5" /></>);
export const Cloud = draw("Cloud", <path d="M7 18.5h10a4 4 0 0 0 .6-7.95A5.5 5.5 0 0 0 6.9 9.3 4.6 4.6 0 0 0 7 18.5z" />);

/* Work & study */
export const Briefcase = draw("Briefcase", <><rect x="3" y="7" width="18" height="13" rx="2.5" /><path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7M3 12.5h18M11 12.5v1.5h2v-1.5" /></>);
export const BriefcaseBusiness = Briefcase;
export const GraduationCap = draw("GraduationCap", <path d="M2.5 9 12 4.5 21.5 9 12 13.5zM6.5 11v4.5c1.6 1.6 3.4 2.4 5.5 2.4s3.9-.8 5.5-2.4V11M21.5 9v5" />);
export const BookOpenText = draw("BookOpenText", <path d="M3 5.5c3-.9 6-.6 9 1.2v12.8c-3-1.8-6-2.1-9-1.2zM21 5.5c-3-.9-6-.6-9 1.2v12.8c3-1.8 6-2.1 9-1.2zM6 9.5h3M6 12.5h3M15 9.5h3" />);
export const Users = draw("Users", <><circle cx="9" cy="8.5" r="3.2" /><path d="M3 20c.6-3.4 3-5.3 6-5.3s5.4 1.9 6 5.3M15.5 5.6a3 3 0 0 1 0 5.8M17.5 14.9c1.9.6 3.2 2.3 3.5 5.1" /></>);
export const Trophy = draw("Trophy", <path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5.5a2.5 2.5 0 0 0 2.6 3.4M16 6h2.5a2.5 2.5 0 0 1-2.6 3.4M12 13v4M8.5 20.5h7M10 17h4l.5 3.5h-5z" />);
export const Rocket = draw("Rocket", <><path d="m12.5 15.5-4-4c1.8-4.6 5.4-7.6 11-8-.4 5.6-3.4 9.2-7 12zM8.5 11.5H5l2.2-3.3h3.3M12.5 15.5V19l3.3-2.2v-3.3M5.5 18.5c.4-1.8 1.3-2.8 2.8-3 .2 1.5-.9 2.6-2.8 3z" /><circle cx="15" cy="9" r="1.4" /></>);
export const Lightbulb = draw("Lightbulb", <path d="M9.5 18h5M10.5 21h3M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.3 1.1 2.2h5c0-.9.4-1.6 1.1-2.2A6 6 0 0 0 12 3z" />);
export const PenLine = draw("PenLine", <path d="M4 20h4.5L19 9.5a2.1 2.1 0 0 0-3-3L5.5 17v3zM14.5 8l3 3M13 20h7" />);
export const Quote = draw("Quote", <path d="M9.5 7C6.5 7.8 5 10 5 13v4h4.5v-4.5H7c0-2 .9-3.2 2.5-3.8zM19 7c-3 .8-4.5 3-4.5 6v4H19v-4.5h-2.5c0-2 .9-3.2 2.5-3.8z" />);

/* Tech & skills */
export const Code2 = draw("Code2", <path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5M13.5 4.5l-3 15" />);
export const Terminal = draw("Terminal", <><rect x="3" y="4.5" width="18" height="15" rx="2.5" /><path d="m7 9.5 3 2.5-3 2.5M12.5 15h4.5" /></>);
export const Server = draw("Server", <><rect x="3.5" y="4" width="17" height="7" rx="2" /><rect x="3.5" y="13" width="17" height="7" rx="2" /><path d="M7.5 7.5h.01M7.5 16.5h.01M11 7.5h5.5M11 16.5h5.5" /></>);
export const Database = draw("Database", <><ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" /><path d="M4.5 5.5v13c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8v-13M4.5 12c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8" /></>);
export const LineChart = draw("LineChart", <path d="M3.5 3.5v15a2 2 0 0 0 2 2h15M7.5 15l3.5-4.5 3 2.5 5-6.5" />);
export const BarChart = draw("BarChart", <path d="M4 20.5h16M6.5 17v-5M11 17V7M15.5 17v-7.5M19.5 17V4.5" />);
export const CreditCard = draw("CreditCard", <><rect x="2.5" y="5" width="19" height="14" rx="2.5" /><path d="M2.5 9.5h19M6 15h4" /></>);
export const ShieldCheck = draw("ShieldCheck", <path d="M12 3 4.5 6v5.5c0 4.6 3.1 8.2 7.5 9.5 4.4-1.3 7.5-4.9 7.5-9.5V6zM9 12l2.2 2.2L15.5 10" />);
export const Zap = draw("Zap", <path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11H12z" />);
export const Palette = draw("Palette", <><path d="M12 3a9 9 0 1 0 0 18c1.2 0 1.8-.8 1.8-1.7 0-.5-.2-.9-.5-1.3-.3-.4-.5-.8-.5-1.3 0-1 .8-1.7 1.8-1.7h2.1A4.3 4.3 0 0 0 21 10.7C21 6.4 17 3 12 3z" /><path d="M7.5 11.5h.01M9.5 7.5h.01M14.5 7.5h.01" /></>);
export const Layers = draw("Layers", <path d="m12 3.5 9 4.5-9 4.5L3 8zM3 12.5l9 4.5 9-4.5M3 16.5l9 4.5 9-4.5" />);

/* Brand marks (outline versions) */
export const Linkedin = draw("Linkedin", <><rect x="3" y="3" width="18" height="18" rx="3.5" /><path d="M7.5 10.5v6M7.5 7.5v.01M11 16.5v-6M11 13.2c0-1.6 1.1-2.7 2.5-2.7s2.5.9 2.5 2.7v3.3" /></>);
export const Github = draw("Github", <path d="M9 19c-4 1.3-4-2-5.5-2.5M14.5 21v-3.2c0-.9.1-1.3-.5-1.9 2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.3 3.2 5.3 3.5 5.3 3.5a4.3 4.3 0 0 0-.1 3.2 4.6 4.6 0 0 0-1.3 3.2c0 4.6 2.8 5.7 5.5 6-.6.6-.6 1.2-.5 1.9V21" />);
export const XLogo = draw("XLogo", <path d="M4 4h4.5L20 20h-4.5zM20 4l-6.8 7.4M10.8 12.6 4 20" />);

/* Door used on every "go to another page" link.
   Closed by default; when the parent link/button is hovered or focused the
   door swings open (left edge travels to the right hinge) and a small person
   walks through it. Motion lives in index.css under "Door link animation". */
export function DoorEnter({ size = 20, strokeWidth = 1.8, className = "", ...rest }) {
  return (
    <Icon size={size} strokeWidth={strokeWidth} className={`door-icon ${className}`} {...rest}>
      <path d="M3 21h18" />
      <rect className="door-dark" x="7" y="4" width="10" height="17" fill="currentColor" stroke="none" />
      <g className="door-walker">
        <circle cx="12" cy="8" r="1.7" />
        <path d="M12 10v5.5M12 11.8l-2.3 2.6M12 11.8l2.3 2.6" />
        <path className="door-leg door-leg-a" d="M12 15.5l-1.8 4.5" />
        <path className="door-leg door-leg-b" d="M12 15.5l1.8 4.5" />
      </g>
      <rect x="6" y="3" width="12" height="18" rx="1" />
      <g className="door-panel">
        <rect x="7" y="4" width="10" height="17" fill="currentColor" fillOpacity="0.14" />
        <circle cx="9.2" cy="12.5" r="0.9" fill="currentColor" stroke="none" />
      </g>
    </Icon>
  );
}

/* Download that "saves" itself: on click the arrow drops into the tray,
   a file slides into place and a tick appears. Hover gives a small nudge.
   Motion lives in index.css under "Download save animation". */
export function DownloadSave({ size = 18, strokeWidth = 1.8, className = "", ...rest }) {
  const ref = useRef(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const trigger = ref.current?.closest("a, button");
    if (!trigger) return undefined;
    let timer;

    const onClick = () => {
      window.clearTimeout(timer);
      setSaved(false);
      // next frame so the animation restarts on repeat clicks
      window.requestAnimationFrame(() => setSaved(true));
      timer = window.setTimeout(() => setSaved(false), 2600);
    };

    trigger.addEventListener("click", onClick);
    return () => {
      trigger.removeEventListener("click", onClick);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`yr-icon dl-icon${saved ? " is-saved" : ""} ${className}`.trim()}
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      <g className="dl-arrow">
        <path d="M12 3.5v10M8 9.5l4 4 4-4" />
      </g>
      <path className="dl-check" d="m8.5 9 2.5 2.5 4.5-5" pathLength="1" />
      <rect className="dl-file" x="8" y="16" width="8" height="2.2" rx="0.9" fill="currentColor" stroke="none" />
      <path className="dl-tray" d="M4 14.5v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
    </svg>
  );
}

/* Travel: Dubai story */
export const BurjKhalifa = draw("BurjKhalifa", <path d="M12 2v3M10.5 21V9.5L12 5l1.5 4.5V21M8 21v-6.5l2.5-2M16 21v-6.5l-2.5-2M4 21h16" />);
export const Plane = draw("Plane", <path d="M12 2.5c-.9 0-1.5.7-1.5 1.6v5.4L3 14v2l7.5-2.2v4.6L8.5 20v1.5l3.5-1 3.5 1V20l-2-1.6v-4.6L21 16v-2l-7.5-4.5V4.1c0-.9-.6-1.6-1.5-1.6z" />);
export const BedSpace = draw("BedSpace", <><path d="M3 19V6M3 15h18v4M21 15v-2.5A2.5 2.5 0 0 0 18.5 10H11v5" /><circle cx="7" cy="12" r="1.8" /></>);
export const LaptopCode = draw("LaptopCode", <><rect x="4" y="5" width="16" height="11" rx="1.5" /><path d="M2.5 19.5h19M10 8.5l-2 2 2 2M14 8.5l2 2-2 2" /></>);
export const MarketStall = draw("MarketStall", <path d="M3.5 9 5 4h14l1.5 5M3.5 9a2.1 2.1 0 0 0 4.25 0 2.1 2.1 0 0 0 4.25 0 2.1 2.1 0 0 0 4.25 0 2.1 2.1 0 0 0 4.25 0M5 11.5V20h14v-8.5M10 20v-5h4v5" />);
export const TeaCup = draw("TeaCup", <path d="M5 9h11v5a4.5 4.5 0 0 1-4.5 4.5h-2A4.5 4.5 0 0 1 5 14zM16 10.5h1.5a2.3 2.3 0 0 1 0 4.6H16M4 21h13M9 3.5c-.6.9-.6 1.8 0 2.7M12.5 3.5c-.6.9-.6 1.8 0 2.7" />);
export const HardHat = draw("HardHat", <path d="M3.5 17.5h17M5 17.5v-3a7 7 0 0 1 14 0v3M10 7.8v3.7M14 7.8v3.7M10 7.8a7 7 0 0 1 4 0" />);
export const Coins = draw("Coins", <><circle cx="9" cy="9" r="5.5" /><path d="M15.6 9.6a5.5 5.5 0 1 1-6 6M7.5 7h1.6a2 2 0 0 1 0 4H7.5zM7.5 7v4" /></>);
export const Wallet = draw("Wallet", <><path d="M4 8V7.5A2.5 2.5 0 0 1 6.5 5H17v3" /><rect x="4" y="8" width="16" height="11.5" rx="2.5" /><path d="M20 12h-3.5a1.75 1.75 0 0 0 0 3.5H20" /></>);
export const Hourglass = draw("Hourglass", <path d="M6.5 3h11M6.5 21h11M7.5 3c0 4 4.5 5.5 4.5 9s-4.5 5-4.5 9M16.5 3c0 4-4.5 5.5-4.5 9s4.5 5 4.5 9M9.5 18.5h5" />);
export const Scales = draw("Scales", <path d="M12 4v16M8 20h8M5 7h14M5 7l-2.5 6a2.5 2.5 0 0 0 5 0zM19 7l-2.5 6a2.5 2.5 0 0 0 5 0z" />);
export const HomeHeart = draw("HomeHeart", <path d="M3.5 11 12 4l8.5 7M6 9.5v10h12v-10M12 17s-3-1.8-3-3.7a1.6 1.6 0 0 1 3-.8 1.6 1.6 0 0 1 3 .8c0 1.9-3 3.7-3 3.7z" />);
export const PalmTree = draw("PalmTree", <path d="M12 21c0-5 .5-8 1-10M13 11c-1.5-3-4.5-4-8-3 2.5.5 4.5 1.5 6 3M13 11c1-3 4-4.5 7.5-4-2.5 1-4.5 2.2-5.5 4M13 11c-3-.5-6 .5-7.5 3M13 11c3-.3 5.5 1 7 3.5M8 21h9" />);
export const ShoppingBag = draw("ShoppingBag", <path d="M5 8h14l-1 12.5H6zM9 8V6.5a3 3 0 0 1 6 0V8" />);
export const RunningShoe = draw("RunningShoe", <path d="M3 17.5h18M3 17.5v-3l4-6 3 2 2.5-1 1 3 5 1.5a2.5 2.5 0 0 1 2.5 2.5v1M8 12.5l1.5 1M10.5 11.5l1.5 1" />);
export const Smile = draw("Smile", <><circle cx="12" cy="12" r="9" /><path d="M8.5 14.5c1.9 2 5.1 2 7 0M9 9.5h.01M15 9.5h.01" /></>);
export const Backpack = draw("Backpack", <path d="M7 8a5 5 0 0 1 10 0v11.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 19.5zM10 3.5h4M9.5 13h5v3.5h-5z" />);
export const Leaf = draw("Leaf", <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14zM5 19l7-7" />);

/* Analytics page extras */
export const Instagram = draw("Instagram", <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.3 6.7h.01" /></>);
export const Facebook = draw("Facebook", <path d="M14.5 21v-7.5h2.7l.4-3.2h-3.1V8.4c0-.9.3-1.6 1.6-1.6h1.6V4a20 20 0 0 0-2.4-.1c-2.4 0-4 1.4-4 4.1v2.3H8.6v3.2h2.7V21" />);
export const MessageCircle = draw("MessageCircle", <path d="M20.5 11.6a8.4 8.4 0 0 1-12.3 7.4L3.5 20.5l1.5-4.6a8.4 8.4 0 1 1 15.5-4.3z" />);
export const Search = draw("Search", <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.5 15.5 5 5" /></>);
export const Globe = draw("Globe", <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3z" /></>);
export const RefreshCw = draw("RefreshCw", <path d="M20 11a8 8 0 0 0-14.3-4.6L4 8.5M4 4v4.5h4.5M4 13a8 8 0 0 0 14.3 4.6l1.7-2.1M20 20v-4.5h-4.5" />);
export const Monitor = draw("Monitor", <><rect x="2.5" y="4" width="19" height="12.5" rx="2" /><path d="M8.5 20.5h7M12 16.5v4" /></>);
export const Smartphone = draw("Smartphone", <><rect x="6.5" y="2.5" width="11" height="19" rx="2.5" /><path d="M11 18.5h2" /></>);
export const Tablet = draw("Tablet", <><rect x="4" y="2.5" width="16" height="19" rx="2.5" /><path d="M11 18.5h2" /></>);

/* Bottom navigation */
export const User = draw("User", <><circle cx="12" cy="8" r="4" /><path d="M4.5 20.5c.9-3.9 3.8-6 7.5-6s6.6 2.1 7.5 6" /></>);
export const LayoutGrid = draw("LayoutGrid", <><rect x="3.5" y="3.5" width="7" height="7" rx="2" /><rect x="13.5" y="3.5" width="7" height="7" rx="2" /><rect x="3.5" y="13.5" width="7" height="7" rx="2" /><rect x="13.5" y="13.5" width="7" height="7" rx="2" /></>);

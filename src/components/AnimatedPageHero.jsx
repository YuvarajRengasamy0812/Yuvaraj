import { ChevronRight } from "lucide-react";
import AppLink from "./AppLink";

const motionItems = Array.from({ length: 42 }, (_, index) => ({
  left: `${(index * 29) % 100}%`,
  top: `${8 + ((index * 41) % 80)}%`,
  delay: `${(index % 14) * 0.22}s`,
  duration: `${7 + (index % 7)}s`,
  size: `${8 + (index % 6) * 7}px`,
  drift: `${index % 2 === 0 ? 38 : -34}px`,
  depth: `${0.72 + (index % 5) * 0.12}`,
  type: index % 6,
}));

const snowItems = Array.from({ length: 54 }, (_, index) => ({
  left: `${(index * 17) % 100}%`,
  delay: `${(index % 18) * 0.34}s`,
  duration: `${8 + (index % 8)}s`,
  size: `${3 + (index % 4) * 2}px`,
  sway: `${index % 2 === 0 ? 42 : -38}px`,
}));

export default function AnimatedPageHero({ eyebrow, title, text, image, portrait, variant = "default", snow = false }) {
  return (
    <section className={`animated-page-hero animated-page-hero--${variant}`}>
      <img src={image} alt={`${eyebrow} banner`} />
      <div className="animated-page-hero-shade" />
      {snow ? (
        <div className="animated-page-hero-snow" aria-hidden="true">
          {snowItems.map((item, index) => (
            <span
              key={index}
              style={{
                "--left": item.left,
                "--delay": item.delay,
                "--duration": item.duration,
                "--size": item.size,
                "--sway": item.sway,
              }}
            />
          ))}
        </div>
      ) : null}
      <div className="animated-page-hero-ambient" aria-hidden="true">
        <i className="ambient-ring ambient-ring-1" />
        <i className="ambient-ring ambient-ring-2" />
        <i className="ambient-line ambient-line-1" />
        <i className="ambient-line ambient-line-2" />
      </div>
      <div className="animated-page-hero-motion" aria-hidden="true">
        {motionItems.map((item, index) => (
          <span
            className={`hero-motion-item hero-motion-item-${item.type}`}
            key={index}
            style={{
              "--left": item.left,
              "--top": item.top,
              "--delay": item.delay,
              "--duration": item.duration,
              "--size": item.size,
              "--drift": item.drift,
              "--depth": item.depth,
            }}
          />
        ))}
      </div>
      {portrait ? (
        <div className="animated-page-hero-portrait" data-reveal>
          <img src={portrait} alt={`${eyebrow} portrait`} />
        </div>
      ) : null}
      <div className="animated-page-hero-inner" data-reveal>
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        {text ? <span>{text}</span> : null}
        <div className="breadcrumb animated-page-hero-breadcrumb"><AppLink to="/">Home</AppLink><ChevronRight size={16} />{eyebrow}</div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { Briefcase, Building2, Layers, Users } from "./Icons";
import { stats } from "../data/portfolio";

const statIcons = [Briefcase, Users, Building2, Layers];

// "50+" -> { target: 50, suffix: "+" }
const splitValue = (value) => {
  const match = String(value).match(/^(\d+)(.*)$/);
  return match ? { target: Number(match[1]), suffix: match[2] } : { target: null, suffix: value };
};

function CountUp({ value }) {
  const { target, suffix } = splitValue(value);
  const ref = useRef(null);
  const [current, setCurrent] = useState(target === null ? null : 0);

  useEffect(() => {
    if (target === null || !ref.current) return undefined;
    let frame;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const duration = 1200;
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(Math.round(eased * target));
        if (progress < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }, { threshold: 0.4 });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <strong ref={ref} aria-label={value}>
      {target === null ? suffix : current}
      {target !== null && suffix && <sup>{suffix}</sup>}
    </strong>
  );
}

export default function StatsBand() {
  return (
    <section className="stats-band">
      <div className="stats-grid">
        {stats.map((stat, index) => {
          const Icon = statIcons[index % statIcons.length];
          return (
            <div key={stat.label} className="stat-box" data-reveal>
              <span className="stat-icon"><Icon size={22} /></span>
              <CountUp value={stat.value} />
              <span className="stat-label">{stat.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

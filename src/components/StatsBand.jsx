import { stats } from "../data/portfolio";

export default function StatsBand() {
  return (
    <section className="stats-band">
      <div className="stats-grid">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-box" data-reveal>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
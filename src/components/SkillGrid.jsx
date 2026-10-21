import { BarChart, Code2, CreditCard, Database, Layers, Lightbulb, LineChart, Palette, Route, Server, Terminal, Zap } from "./Icons";
import { skills } from "../data/portfolio";

const iconMap = {
  "React JS": Code2,
  "Next.js": Terminal,
  JavaScript: Zap,
  "Tailwind CSS": Palette,
  "Bootstrap 5": Layers,
  "Material UI": Layers,
  PHP: Code2,
  Laravel: Server,
  "REST API": Route,
  MySQL: Database,
  PostgreSQL: Database,
  MongoDB: Database,
  "MT5 API": LineChart,
  Payments: CreditCard,
  "AI Tools": Lightbulb,
  "Power BI": BarChart,
};

export default function SkillGrid({ compact = false }) {
  const shownSkills = compact ? skills.slice(0, 8) : skills;

  return (
    <div className="skill-grid">
      {shownSkills.map((skill) => {
        const Icon = iconMap[skill.name] ?? Code2;
        return (
          <article className="skill-tile" key={skill.name} data-reveal>
            <div className="skill-top"><Icon size={28} /><span>{skill.level}</span></div>
            <h3>{skill.name}</h3>
            <p>{skill.group}</p>
            <div className="skill-meter"><i style={{ width: `${skill.score}%` }} /></div>
          </article>
        );
      })}
    </div>
  );
}
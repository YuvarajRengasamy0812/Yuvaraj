import { ArrowUpRight, BrainCircuit, Code2, CreditCard, Database, LineChart, ServerCog, ShieldCheck, Sparkles, TerminalSquare, Zap } from "lucide-react";
import { skills } from "../data/portfolio";

const iconMap = {
  "React JS": Code2,
  "Next.js": TerminalSquare,
  JavaScript: Zap,
  "Tailwind CSS": Sparkles,
  "Bootstrap 5": Sparkles,
  "Material UI": Sparkles,
  PHP: Code2,
  Laravel: ServerCog,
  "REST API": ArrowUpRight,
  MySQL: Database,
  PostgreSQL: Database,
  MongoDB: Database,
  "MT5 API": LineChart,
  Payments: CreditCard,
  "AI Tools": BrainCircuit,
  "Power BI": ShieldCheck,
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
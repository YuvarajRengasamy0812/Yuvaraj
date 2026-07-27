import { BriefcaseBusiness, ExternalLink } from "lucide-react";
import { experience } from "../data/portfolio";

export default function ExperienceTimeline() {
  return (
    <div className="experience-timeline">
      {experience.map((job, index) => (
        <article key={`${job.company}-${job.period}`} className={`experience-item ${index % 2 === 0 ? "left" : "right"}`} data-reveal>
          <div className="experience-dot"><BriefcaseBusiness size={17} /></div>
          <div className="experience-card">
            <p>{job.period}</p>
            <h3>{job.role}</h3>
            <a href={job.url} target="_blank" rel="noreferrer">{job.company} <ExternalLink size={14} /></a>
            <strong>{job.stack}</strong>
            <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </div>
        </article>
      ))}
    </div>
  );
}
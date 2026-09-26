import { ArrowUpRight, Code2 } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card group flex flex-col overflow-hidden" data-reveal>
      <div className="project-media relative">
        <div className="project-browser-bar absolute">
          <i />
          <i />
          <i />
        </div>
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-body">
        <p>{project.domain}</p>
        <h3>{project.title}</h3>
        <span>{project.description}</span>
        <div className="tag-row">{project.tech.map((tech) => <b key={tech}>{tech}</b>)}</div>
        <div className="project-actions">
          <a href={project.live} target="_blank" rel="noreferrer">View <ArrowUpRight size={15} /></a>
          <a href={project.code} target="_blank" rel="noreferrer">Code <Code2 size={15} /></a>
        </div>
      </div>
    </article>
  );
}
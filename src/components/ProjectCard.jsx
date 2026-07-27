import { Code2, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card" data-reveal>
      <div className="project-media"><img src={project.image} alt={project.title} /></div>
      <div className="project-body">
        <p>{project.domain}</p>
        <h3>{project.title}</h3>
        <span>{project.description}</span>
        <div className="tag-row">{project.tech.map((tech) => <b key={tech}>{tech}</b>)}</div>
        <div className="project-actions">
          <a href={project.live} target="_blank" rel="noreferrer">View <ExternalLink size={15} /></a>
          <a href={project.code} target="_blank" rel="noreferrer">Code <Code2 size={15} /></a>
        </div>
      </div>
    </article>
  );
}
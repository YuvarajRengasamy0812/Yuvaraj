import AnimatedPageHero from "../components/AnimatedPageHero";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import projectsHero from "../../assets/images/projects/hero/projects-hero-banner.png";
import { projects } from "../data/portfolio";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";

export default function Projects() {
  useDocumentTitle("Projects | Yuvaraj R");
  useReveal();

  return (
    <>
      <AnimatedPageHero
        eyebrow="Projects"
        title="Production Projects with Real Product Context"
        text="Fintech, event, CRM and marketplace products built with clean interfaces, secure workflows and responsive front-end delivery."
        image={projectsHero}
        variant="projects"
      />
      <section className="section white projects-showcase">
        <div className="section-inner">
          <SectionHeading eyebrow="Selected projects" title="Modern Web Platforms Built for Real Users" />
          <div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
        </div>
      </section>
    </>
  );
}

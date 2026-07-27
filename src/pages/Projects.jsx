import PageHero from "../components/PageHero";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/portfolio";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";

export default function Projects() {
  useDocumentTitle("Projects | Yuvaraj R");
  useReveal();

  return (
    <>
      <PageHero eyebrow="Projects" title="Real project work with product context." text="Business social network, ecommerce and CRUD workflows from the earlier portfolio, upgraded into a modern project page." />
      <section className="section white">
        <div className="section-inner">
          <SectionHeading eyebrow="Selected projects" title="Built, shipped and maintained web applications." />
          <div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
        </div>
      </section>
    </>
  );
}
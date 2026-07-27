import { ArrowUpRight, Download } from "lucide-react";
import AppLink from "../components/AppLink";
import Hero from "../components/Hero";
import StatsBand from "../components/StatsBand";
import SectionHeading from "../components/SectionHeading";
import SkillGrid from "../components/SkillGrid";
import ProjectCard from "../components/ProjectCard";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ContactPanel from "../components/ContactPanel";
import { images, profile, projects, services } from "../data/portfolio";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";

export default function Home() {
  useDocumentTitle("Yuvaraj R | Portfolio");
  useReveal();

  return (
    <>
      <Hero />
      <StatsBand />
      <section className="section white about-preview">
        <div className="split-layout">
          <div className="image-panel" data-reveal><img src={images.about} alt="Yuvaraj" /></div>
          <div data-reveal>
            <SectionHeading eyebrow="About me" title="Software engineer with full-stack product experience." text={profile.summary} />
            <div className="pill-list">{services.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="action-row"><AppLink className="old-btn" to="/about">Open About <ArrowUpRight size={17} /></AppLink><a className="ghost-btn" href={profile.resume} target="_blank" rel="noreferrer">Resume <Download size={16} /></a></div>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="section-inner">
          <SectionHeading eyebrow="Skills and abilities" title="A practical stack for shipping real products." light />
          <SkillGrid compact />
          <div className="center-action"><AppLink className="old-btn" to="/skills">View All Skills <ArrowUpRight size={17} /></AppLink></div>
        </div>
      </section>
      <section className="section white">
        <div className="section-inner">
          <SectionHeading eyebrow="Selected projects" title="Project work with stronger product storytelling." />
          <div className="project-grid">{projects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
          <div className="center-action"><AppLink className="old-btn" to="/projects">Projects Page <ArrowUpRight size={17} /></AppLink></div>
        </div>
      </section>
      <section className="section soft">
        <div className="section-inner">
          <SectionHeading eyebrow="Working experience" title="Company journey and delivery timeline." center />
          <ExperienceTimeline />
        </div>
      </section>
      <section className="section white">
        <div className="section-inner">
          <SectionHeading eyebrow="Contact" title="Let us build the next polished product experience." />
          <ContactPanel />
        </div>
      </section>
    </>
  );
}
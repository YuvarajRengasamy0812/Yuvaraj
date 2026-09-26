import AiMarquee from "../components/AiMarquee";
import AnimatedPageHero from "../components/AnimatedPageHero";
import SectionHeading from "../components/SectionHeading";
import SkillGrid from "../components/SkillGrid";
import skillsHero from "../../assets/images/skills/hero/skills-hero-banner.png";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";

export default function Skills() {
  useDocumentTitle("Skills | Yuvaraj R");
  useReveal();

  return (
    <>
      <AnimatedPageHero
        eyebrow="Skills"
        title="Frontend, backend, database and AI tooling."
        text="A focused skills page with current React and Tailwind based engineering stack."
        image={skillsHero}
        variant="skills"
      />
      <section className="section dark">
        <div className="section-inner">
          <SectionHeading eyebrow="Skills and abilities" title="A practical stack for shipping real products." light />
          <SkillGrid />
          <AiMarquee />
        </div>
      </section>
    </>
  );
}

import AnimatedPageHero from "../components/AnimatedPageHero";
import ExperienceTimeline from "../components/ExperienceTimeline";
import SectionHeading from "../components/SectionHeading";
import companyHero from "../../assets/images/company/hero/company-hero-banner.png";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";

export default function Company() {
  useDocumentTitle("Company | Yuvaraj R");
  useReveal();

  return (
    <>
      <AnimatedPageHero
        eyebrow="Company"
        title="Experience across companies and product teams."
        text="A dedicated company page for roles, stacks, timelines and delivery work."
        image={companyHero}
        variant="company"
      />
      <section className="section soft company-page-section">
        <div className="section-inner">
          <SectionHeading eyebrow="Working experience" title="A clear timeline from training to senior delivery." center />
          <ExperienceTimeline />
        </div>
      </section>
    </>
  );
}


import ExperienceTimeline from "../components/ExperienceTimeline";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";

export default function Company() {
  useDocumentTitle("Company | Yuvaraj R");
  useReveal();

  return (
    <>
      <PageHero eyebrow="Company" title="Experience across companies and product teams." text="A dedicated company page for roles, stacks, timelines and delivery work." />
      <section className="section soft">
        <div className="section-inner">
          <SectionHeading eyebrow="Working experience" title="A clear timeline from training to senior delivery." center />
          <ExperienceTimeline />
        </div>
      </section>
    </>
  );
}
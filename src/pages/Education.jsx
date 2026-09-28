import AnimatedPageHero from "../components/AnimatedPageHero";
import EducationCards from "../components/EducationCards";
import SectionHeading from "../components/SectionHeading";
import educationHero from "../../assets/images/education/hero/education-hero-banner.png";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";

export default function Education() {
  useDocumentTitle("Education | Yuvaraj Rengasamy");
  useReveal();

  return (
    <>
      <AnimatedPageHero
        eyebrow="Education"
        title="My Education Timeline in Four Simple Stages"
        text="Small modern cards, one by one. Open each story to read the full article for that education phase."
        image={educationHero}
        variant="education"
      />
      <section className="section soft education-page-section">
        <div className="section-inner education-list-inner">
          <SectionHeading
            eyebrow="Education timeline"
            title="Each Row Is One Stage of My Learning Journey"
            center
            text="I kept the cards compact here. The full personal article opens on a separate page when you click Read Story."
          />
          <EducationCards />
        </div>
      </section>
    </>
  );
}

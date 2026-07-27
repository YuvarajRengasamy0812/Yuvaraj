import EducationCards from "../components/EducationCards";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";

export default function Education() {
  useDocumentTitle("Education | Yuvaraj Rengasamy");
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Education"
        title="My education timeline in four simple stages."
        text="Small modern cards, one by one. Open each story to read the full article for that education phase."
      />
      <section className="section soft education-page-section">
        <div className="section-inner education-list-inner">
          <SectionHeading
            eyebrow="Education timeline"
            title="Each row is one stage of my learning journey."
            center
            text="I kept the cards compact here. The full personal article opens on a separate page when you click Read Story."
          />
          <EducationCards />
        </div>
      </section>
    </>
  );
}
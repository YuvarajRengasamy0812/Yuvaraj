import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { travel } from "../data/portfolio";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";

export default function Travel() {
  useDocumentTitle("Travel | Yuvaraj R");
  useReveal();

  return (
    <>
      <PageHero eyebrow="Travel" title="Places connected to work, roots and growth." text="A simple travel and life page that can grow with more photos later." />
      <section className="section white">
        <div className="section-inner">
          <SectionHeading eyebrow="Travel journal" title="Cities and memories around the journey." />
          <div className="travel-grid">
            {travel.map((item) => <article key={item.place} data-reveal><img src={item.image} alt={item.place} /><div><p>Travel</p><h3>{item.place}</h3><span>{item.note}</span></div></article>)}
          </div>
        </div>
      </section>
    </>
  );
}
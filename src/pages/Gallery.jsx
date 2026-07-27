import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import { gallery } from "../data/portfolio";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";

export default function Gallery() {
  useDocumentTitle("Gallery | Yuvaraj R");
  useReveal();
  const [filter, setFilter] = useState("All");
  const filters = ["All", ...Array.from(new Set(gallery.map((item) => item.type)))];
  const items = useMemo(() => filter === "All" ? gallery : gallery.filter((item) => item.type === filter), [filter]);

  return (
    <>
      <PageHero eyebrow="Gallery" title="Photos, project screens and education moments." text="A visual page for portfolio assets, project screenshots and personal branding images." />
      <section className="section white">
        <div className="section-inner">
          <div className="filter-row" data-reveal>{filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div>
          <div className="gallery-grid">{items.map((item) => <article key={item.title} data-reveal><img src={item.image} alt={item.title} /><div><b>{item.type}</b><h3>{item.title}</h3></div></article>)}</div>
        </div>
      </section>
    </>
  );
}
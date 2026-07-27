import { ChevronRight } from "lucide-react";
import AppLink from "./AppLink";

export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner" data-reveal>
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        {text ? <span>{text}</span> : null}
        <div className="breadcrumb"><AppLink to="/">Home</AppLink><ChevronRight size={16} />{eyebrow}</div>
      </div>
    </section>
  );
}
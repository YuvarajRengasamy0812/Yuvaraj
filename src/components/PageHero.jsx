import ActiveButton from "./ActiveButton";

export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner" data-reveal>
        <p>{eyebrow}</p>
        <h1>{title}</h1>
        {text ? <span>{text}</span> : null}
        <ActiveButton />
      </div>
    </section>
  );
}
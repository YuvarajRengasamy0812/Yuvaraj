export default function SectionHeading({ eyebrow, title, text, light = false, center = false }) {
  return (
    <div className={`section-heading ${light ? "light" : ""} ${center ? "center" : ""}`} data-reveal>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <span>{text}</span> : null}
    </div>
  );
}
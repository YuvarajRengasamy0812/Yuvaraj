import { ArrowLeft, ArrowRight, BookOpenText, CalendarDays, GraduationCap, MapPin, Sparkles } from "lucide-react";
import AppLink from "../components/AppLink";
import PageHero from "../components/PageHero";
import { education } from "../data/portfolio";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";

export default function EducationArticle({ slug }) {
  const index = education.findIndex((item) => item.slug === slug);
  const item = education[index] ?? education[0];
  const previous = education[index - 1];
  const next = education[index + 1];
  const supportImages = education.filter((entry) => entry.slug !== item.slug);
  const collage = [item, ...supportImages].slice(0, 4);

  useDocumentTitle(`${item.shortTitle ?? item.title} | Education`);
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Education Story"
        title={item.shortTitle ?? item.title}
        text={`${item.place} - ${item.period} | ${item.status}`}
      />

      <section className="section white education-editorial-section">
        <div className="section-inner education-editorial-inner">
          <AppLink to="/education" className="article-back-link"><ArrowLeft size={17} /> Back to Education</AppLink>

          <section className="edu-overview" data-reveal>
            <div className="edu-overview-copy">
              <p className="edu-kicker">Overview</p>
              <h2>{item.articleTitle}</h2>
              <div className="edu-copy-block">
                {item.fullArticle.slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="edu-info-cards">
                <article>
                  <MapPin size={24} />
                  <div><b>Where</b><span>{item.place}</span></div>
                </article>
                <article>
                  <CalendarDays size={24} />
                  <div><b>When</b><span>{item.period} | {item.status}</span></div>
                </article>
              </div>
            </div>

            <div className="edu-collage" aria-label="Education images">
              {collage.map((entry, imageIndex) => (
                <figure className={`edu-collage-item item-${imageIndex + 1}`} key={`${entry.slug}-${imageIndex}`}>
                  <img src={entry.image} alt={entry.shortTitle ?? entry.title} />
                </figure>
              ))}
            </div>
          </section>

          <div className="edu-dotted-divider" />

          <section className="edu-feature" data-reveal>
            <div className="edu-feature-copy">
              <p className="edu-kicker muted">About This Stage</p>
              <h2>{item.shortTitle ?? item.title} - <span>{item.badge}</span></h2>
              <div className="edu-copy-block strong">
                {item.fullArticle.slice(2, 4).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="education-highlight-row detail-highlights">
                {item.highlights.map((highlight) => <b key={highlight}>{highlight}</b>)}
              </div>
            </div>
            <figure className="edu-feature-image">
              <img src={item.image} alt={`${item.title} feature`} />
            </figure>
          </section>

          <section className="edu-vision" data-reveal>
            <div className="edu-vision-heading">
              <p>My Reflection</p>
              <h2>Why this education stage matters</h2>
              <span>{item.article}</span>
            </div>

            <div className="edu-vision-grid">
              <div className="edu-vision-main">
                <h3>How it shaped my learning style</h3>
                <p>{item.fullArticle[item.fullArticle.length - 1]}</p>
                <figure>
                  <img src={(supportImages[0] ?? item).image} alt="Related education memory" />
                </figure>
              </div>

              <div className="edu-side-timeline">
                {item.highlights.map((highlight, highlightIndex) => (
                  <article key={highlight}>
                    <div><BookOpenText size={18} /></div>
                    <span>0{highlightIndex + 1}</span>
                    <h4>{highlight}</h4>
                    <p>{getHighlightText(highlight, item.status)}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <div className="education-story-nav" data-reveal>
            {previous ? (
              <AppLink to={`/education/${previous.slug}`} className="story-nav-card previous">
                <ArrowLeft size={18} />
                <span><b>Previous</b>{previous.shortTitle ?? previous.title}</span>
              </AppLink>
            ) : <div />}
            {next ? (
              <AppLink to={`/education/${next.slug}`} className="story-nav-card next">
                <span><b>Next</b>{next.shortTitle ?? next.title}</span>
                <ArrowRight size={18} />
              </AppLink>
            ) : <div />}
          </div>
        </div>
      </section>
    </>
  );
}

function getHighlightText(highlight, status) {
  const text = {
    "Data Analytics": "Learning to read patterns, reports and product signals with business context.",
    "Artificial Intelligence": "Using AI as a practical assistant for better speed, clarity and automation.",
    "Business Strategy": "Connecting technical delivery with users, operations and long-term growth.",
    "Product Thinking": "Looking beyond screens and understanding why a feature should exist.",
    Engineering: "Building a strong technical mindset for structured problem solving.",
    "Systems Thinking": "Understanding how parts connect before solving the visible issue.",
    "Problem Solving": "Breaking difficult work into smaller, clear and testable steps.",
    "Technical Discipline": "Learning patience, accuracy and consistency in technical work.",
    "Science Foundation": "Creating the academic base that supported later engineering learning.",
    Focus: "Practicing steady attention during an important stage of career direction.",
    Consistency: "Learning that repeated effort creates confidence over time.",
    "Career Direction": "Preparing mentally for the next academic and professional stage.",
    Foundation: "The first layer of discipline and curiosity in the learning journey.",
    Discipline: "Building habits that continue to support software development today.",
    Curiosity: "Learning to ask questions and grow one step at a time.",
    "Learning Habit": "The core habit that makes every new technology easier to approach.",
  };

  return text[highlight] ?? `A ${status.toLowerCase()} milestone that supported my long-term learning journey.`;
}
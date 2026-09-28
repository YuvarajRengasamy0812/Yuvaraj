import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, CalendarDays, Camera, CheckCircle2, Clock, MapPin, Play, Quote, Route, Sparkles } from "lucide-react";
import AppLink from "./AppLink";
import "./TravelBlogArticle.css";

const palette = [
  ["#ff1d48", "#ff7a18"],
  ["#8b5cf6", "#ec4899"],
  ["#00b4d8", "#4f46e5"],
  ["#10b981", "#06b6d4"],
  ["#f59e0b", "#ef4444"],
  ["#ec4899", "#8b5cf6"],
];

const accentStyle = (index) => {
  const [a, b] = palette[index % palette.length];
  return { "--accent": a, "--accent-2": b };
};

function MediaPlaceholder({ kind }) {
  const Icon = kind === "video" ? Play : Camera;
  return (
    <div className={`blog-media-placeholder blog-media-placeholder--${kind}`}>
      <span><Icon size={kind === "video" ? 30 : 24} /></span>
      <b>{kind === "video" ? "Video coming soon" : "Photo coming soon"}</b>
    </div>
  );
}

function BlogImage({ src, caption }) {
  return (
    <figure className="blog-figure">
      {src ? <img src={src} alt={caption} loading="lazy" /> : <MediaPlaceholder kind="image" />}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function Block({ block }) {
  switch (block.type) {
    case "lead":
      return <p className="blog-lead">{block.text}</p>;
    case "p":
      return <p>{block.text}</p>;
    case "quote":
      return (
        <blockquote className="blog-quote">
          <Quote size={28} />
          <p>{block.text}</p>
        </blockquote>
      );
    case "image":
      return <BlogImage src={block.src} caption={block.caption} />;
    case "gallery":
      return (
        <div className={`blog-gallery blog-gallery--${block.items.length}`}>
          {block.items.map((item) => <BlogImage key={item.caption} src={item.src} caption={item.caption} />)}
        </div>
      );
    case "video":
      return (
        <figure className="blog-figure blog-video">
          {block.src ? (
            <video src={block.src} poster={block.poster || undefined} controls playsInline preload="metadata" />
          ) : (
            <MediaPlaceholder kind="video" />
          )}
          <figcaption>{block.caption}</figcaption>
        </figure>
      );
    case "tags":
      return (
        <div className="blog-tags">
          {block.items.map((tag, index) => <span key={tag} style={accentStyle(index)}><MapPin size={14} /> {tag}</span>)}
        </div>
      );
    case "list":
      return (
        <ul className="blog-list">
          {block.items.map((item, index) => <li key={item} style={accentStyle(index)}><CheckCircle2 size={20} /> {item}</li>)}
        </ul>
      );
    case "checklist":
      return (
        <div className="blog-checklist">
          {block.items.map((item, index) => <span key={item} style={accentStyle(index)}><CheckCircle2 size={16} /> {item}</span>)}
        </div>
      );
    case "closing":
      return (
        <div className="blog-closing">
          <Sparkles size={30} />
          {block.lines.map((line) => <p key={line}>{line}</p>)}
          <strong>{block.signoff}</strong>
        </div>
      );
    default:
      return null;
  }
}

export default function TravelBlogArticle({ story, related }) {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(story.sections[0].id);
  const [titleMain, titleAccent] = story.title.split(": ");

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-30% 0px -60% 0px" },
    );
    story.sections.forEach((section) => {
      const node = document.getElementById(section.id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [story]);

  return (
    <article className="blog-article">
      <div className="blog-progress" style={{ width: `${progress}%` }} />

      <header className="blog-hero">
        <div className="blog-hero-media" aria-hidden="true">
          <div className="blog-hero-bg" style={{ backgroundImage: `url(${story.hero.src})` }} />
          <div className="blog-hero-shade" />
          <span className="blog-blob blog-blob--one" />
          <span className="blog-blob blog-blob--two" />
          <span className="blog-blob blog-blob--three" />
        </div>

        <div className="blog-container blog-hero-inner" data-reveal>
          <AppLink className="blog-back" to="/travel"><ArrowLeft size={16} /> Back to travel</AppLink>
          <span className="blog-kicker"><Sparkles size={14} /> {story.kicker}</span>
          <h1>
            {titleMain}
            {titleAccent && <span>{titleAccent}</span>}
          </h1>
          <p className="blog-deck">{story.deck}</p>
          <div className="blog-byline">
            <span className="blog-avatar">{story.author.charAt(0)}</span>
            <div>
              <b>{story.author}</b>
              <small>
                <span><MapPin size={13} /> {story.location}</span>
                <span><CalendarDays size={13} /> {story.duration ?? "3-year story"}</span>
                <span><Clock size={13} /> {story.readTime}</span>
              </small>
            </div>
          </div>
        </div>

        <div className="blog-container blog-facts">
          {story.facts.map((fact, index) => (
            <div key={fact.label} style={accentStyle(index)}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </div>
      </header>

      <div className="blog-container blog-layout">
        <aside className="blog-sidebar">
          <div className="blog-sidebar-card">
            <b>In this story</b>
            <nav>
              {story.sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={active === section.id ? "is-active" : undefined}
                  style={accentStyle(index)}
                >
                  <i>{String(index + 1).padStart(2, "0")}</i>
                  {section.heading}
                </a>
              ))}
            </nav>
          </div>

          {story.moments?.length > 0 && (
            <div className="blog-moments">
              <b><Camera size={14} /> {story.momentsTitle ?? "Moments"}</b>
              <div className="blog-moments-stage">
                {[0, 1].map((column) => {
                  const items = story.moments.filter((_, index) => index % 2 === column);
                  return (
                    <div key={column} className={`blog-moments-col blog-moments-col--${column === 0 ? "up" : "down"}`}>
                      {[...items, ...items].map((item, index) => (
                        <figure key={`${item.caption}-${index}`} style={accentStyle(index + column)} aria-hidden={index >= items.length}>
                          <img src={item.src} alt={item.caption} loading="lazy" />
                          <figcaption>{item.caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </aside>

        <div className="blog-body">
          {story.sections.map((section, index) => (
            <section key={section.id} id={section.id} className="blog-section" style={accentStyle(index)} data-reveal>
              <div className="blog-section-head">
                <span className="blog-chapter">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <small>Chapter {index + 1}</small>
                  <h2>{section.heading}</h2>
                </div>
              </div>
              {section.blocks.map((block, blockIndex) => <Block key={blockIndex} block={block} />)}
            </section>
          ))}
        </div>
      </div>

      <section className="blog-related">
        <div className="blog-container">
          <span className="blog-kicker"><Route size={15} /> Continue the route</span>
          <h2>Open Another Travel Story</h2>
          <div className="blog-related-grid">
            {related.map((place, index) => (
              <AppLink className="blog-related-card" key={place.slug} to={`/travel/${place.slug}`} style={accentStyle(index + 2)}>
                <img src={place.image} alt={`${place.place}, ${place.region}`} />
                <div>
                  <span>{place.region}</span>
                  <strong>{place.place}</strong>
                  <p>{place.summary}</p>
                  <i>Read story <ArrowRight size={15} /></i>
                </div>
              </AppLink>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}

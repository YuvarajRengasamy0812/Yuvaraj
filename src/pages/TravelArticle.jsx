import { ArrowLeft, ArrowRight, Camera, Compass, MapPin, Route } from "lucide-react";
import AppLink from "../components/AppLink";
import TravelBlogArticle from "../components/TravelBlogArticle";
import { bengaluruStory } from "../data/bengaluruStory";
import { capeTownStory } from "../data/capeTownStory";

const blogStories = { bengaluru: bengaluruStory, "cape-town": capeTownStory };
import NotFound from "./NotFound";
import { getTravelDestination, travelDestinations } from "../data/travel";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";

export default function TravelArticle({ slug }) {
  const destination = getTravelDestination(slug);

  useDocumentTitle(destination ? `${destination.place} Travel | Yuvaraj R` : "Travel | Yuvaraj R");
  useReveal();

  if (!destination) return <NotFound />;

  const relatedPlaces = travelDestinations.filter((item) => item.slug !== destination.slug);

  const blogStory = blogStories[destination.slug];
  if (blogStory) return <TravelBlogArticle story={blogStory} related={relatedPlaces} />;

  return (
    <>
      <section className="travel-detail-hero">
        <img src={destination.image} alt={`${destination.place}, ${destination.region}`} />
        <div className="travel-detail-overlay" />
        <div className="travel-detail-hero-inner" data-reveal>
          <AppLink className="travel-back-link" to="/travel">
            <ArrowLeft size={17} />
            Back to travel cards
          </AppLink>
          <p>
            <MapPin size={17} />
            {destination.region}
          </p>
          <h1>{destination.place}</h1>
          <span>{destination.intro}</span>
          <div className="travel-detail-actions">
            <a href="#travel-story">
              Read story
              <ArrowRight size={17} />
            </a>
            <a href="#travel-gallery">
              <Camera size={17} />
              View sections
            </a>
          </div>
        </div>
      </section>

      <section className="travel-detail-overview" id="travel-story">
        <div className="travel-detail-container">
          <div className="travel-detail-title" data-reveal>
            <p>
              <Compass size={17} />
              Detailed travel article
            </p>
            <h2>{destination.articleTitle}</h2>
            <div className="travel-chip-row">
              {destination.meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <div className="travel-detail-stats" data-reveal>
            {destination.stats.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="travel-detail-story" id="travel-gallery">
        <div className="travel-detail-container">
          {destination.sections.map((section, index) => (
            <article className={index % 2 ? "travel-detail-block reverse" : "travel-detail-block"} key={section.title} data-reveal>
              <figure>
                <img src={section.image || destination.image} alt={`${destination.place} ${section.eyebrow}`} />
                <figcaption>{String(index + 1).padStart(2, "0")}</figcaption>
              </figure>
              <div className="travel-detail-copy">
                <p>{section.eyebrow}</p>
                <h3>{section.title}</h3>
                {section.body.map((paragraph) => (
                  <span key={paragraph}>{paragraph}</span>
                ))}
                <ol>
                  {section.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="travel-next-section">
        <div className="travel-detail-container">
          <div className="travel-next-heading" data-reveal>
            <p>
              <Route size={17} />
              Continue the route
            </p>
            <h2>Open Another Travel Story</h2>
          </div>
          <div className="travel-next-grid">
            {relatedPlaces.map((place) => (
              <AppLink className="travel-next-card" key={place.slug} to={`/travel/${place.slug}`} data-reveal>
                <img src={place.image} alt={`${place.place}, ${place.region}`} />
                <span>{place.region}</span>
                <strong>{place.place}</strong>
                <i>
                  View article
                  <ArrowRight size={16} />
                </i>
              </AppLink>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

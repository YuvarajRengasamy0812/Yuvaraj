import { ArrowRight, MapPin } from "lucide-react";
import AnimatedPageHero from "../components/AnimatedPageHero";
import AppLink from "../components/AppLink";
import SectionHeading from "../components/SectionHeading";
import travelHero from "../../assets/images/travel/hero/travel-hero-banner.png";
import { travelDestinations } from "../data/travel";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";

export default function Travel() {
  useDocumentTitle("Travel | Yuvaraj R");
  useReveal();

  return (
    <>
      <AnimatedPageHero
        eyebrow="Travel"
        title="Chennai First Then the Cities That Shaped the Journey"
        text="A personal travel journal across Tamil Nadu roots, Bengaluru work experience and Dubai career growth."
        image={travelHero}
        variant="travel"
        snow
      />

      <section className="section white travel-showcase">
        <div className="section-inner">
          <SectionHeading
            eyebrow="Travel cards"
            title="Places Connected to Roots Work and Growth"
            text="Click View to open a dedicated modern article page for each city."
          />

          <div className="travel-card-grid">
            {travelDestinations.map((destination) => (
              <article className="travel-card" key={destination.slug} data-reveal>
                <AppLink className="travel-card-button travel-card-link" to={`/travel/${destination.slug}`}>
                  <span className="travel-card-media">
                    <img src={destination.image} alt={`${destination.place}, ${destination.region}`} />
                  </span>
                  <span className="travel-card-body">
                    <small>
                      <MapPin size={14} />
                      {destination.region}
                    </small>
                    <strong>{destination.place}</strong>
                    <span>{destination.summary}</span>
                    <i>
                      View article
                      <ArrowRight size={16} />
                    </i>
                  </span>
                </AppLink>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

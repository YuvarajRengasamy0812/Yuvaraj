import AnimatedPageHero from "../components/AnimatedPageHero";
import ContactPanel from "../components/ContactPanel";
import SectionHeading from "../components/SectionHeading";
import contactHero from "../../assets/images/contact/hero/contact-hero-banner.png";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  useDocumentTitle("Contact | Yuvaraj R");
  useReveal();

  return (
    <>
      <AnimatedPageHero
        eyebrow="Contact"
        title="Contact for React Full-Stack and UI Modernization Work"
        text="Send a message, open email or connect directly through the portfolio details."
        image={contactHero}
        variant="contact"
      />
      <section className="section white contact-page-section">
        <div className="section-inner">
          <SectionHeading eyebrow="Contact" title="Let Us Build the Next Polished Product Experience" />
          <ContactPanel />
        </div>
      </section>
    </>
  );
}


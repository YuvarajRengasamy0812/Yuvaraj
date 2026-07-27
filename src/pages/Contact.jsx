import ContactPanel from "../components/ContactPanel";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  useDocumentTitle("Contact | Yuvaraj R");
  useReveal();

  return (
    <>
      <PageHero eyebrow="Contact" title="Contact for React, full-stack and UI modernization work." text="Send a message, open email or connect directly through the portfolio details." />
      <section className="section white">
        <div className="section-inner">
          <SectionHeading eyebrow="Contact" title="Let us build the next polished product experience." />
          <ContactPanel />
        </div>
      </section>
    </>
  );
}
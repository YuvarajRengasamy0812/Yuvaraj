import { CalendarDays, Mail, MapPin, Phone, Send } from "lucide-react";
import { images, profile } from "../data/portfolio";
import { useDateTime } from "../hooks/useDateTime";

export default function ContactPanel() {
  const dateTime = useDateTime();
  const phoneHref = `tel:${profile.phone.replace(/[^+\d]/g, "")}`;

  return (
    <div className="contact-grid">
      <div className="contact-info" data-reveal>
        <div className="contact-visual">
          <img src={images.contact} alt="Contact Yuvaraj" />
        </div>
        <ContactLine icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
        <ContactLine icon={Phone} label="Phone" value={profile.phone} href={phoneHref} />
        <ContactLine icon={MapPin} label="Location" value={profile.location} />
        <ContactLine icon={CalendarDays} label="Local Time" value={dateTime} />
      </div>
      <form action={`mailto:${profile.email}`} method="post" encType="text/plain" className="contact-form" data-reveal>
        <p>Fast Message</p>
        <h3>Send a quick brief</h3>
        <input name="name" placeholder="Your name" />
        <input name="email" type="email" placeholder="Your email" />
        <input name="subject" placeholder="Project domain" />
        <textarea name="message" placeholder="Tell me about your project" />
        <button type="submit">Send Message <Send size={17} /></button>
      </form>
    </div>
  );
}

function ContactLine({ icon: Icon, label, value, href }) {
  const content = <div className="contact-line"><Icon size={20} /><span><b>{label}</b>{value}</span></div>;
  return href ? <a href={href}>{content}</a> : content;
}
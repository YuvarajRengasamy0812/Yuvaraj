import { CalendarDays, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "../data/portfolio";
import { useDateTime } from "../hooks/useDateTime";

export default function ContactPanel() {
  const dateTime = useDateTime();
  const phoneHref = `tel:${profile.phone.replace(/[^+\d]/g, "")}`;
  const whatsappNumber = "971509780266";
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(profile.location)}&output=embed`;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Hi Yuvaraj, I want to discuss a project.",
      `Name: ${formData.get("name") || "-"}`,
      `Email: ${formData.get("email") || "-"}`,
      `Project Domain: ${formData.get("subject") || "-"}`,
      `Message: ${formData.get("message") || "-"}`,
    ].join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="contact-grid">
      <div className="contact-info" data-reveal>
        <div className="contact-visual contact-map-visual">
          <iframe
            title="Yuvaraj current location map"
            src={mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <ContactLine icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
        <ContactLine icon={Phone} label="Phone" value={profile.phone} href={phoneHref} />
        <ContactLine icon={MapPin} label="Location" value={profile.location} />
        <ContactLine icon={CalendarDays} label="Local Time" value={dateTime} />
      </div>
      <form className="contact-form" onSubmit={handleSubmit} data-reveal>
        <p>Fast Message</p>
        <h3>Send a quick brief</h3>
        <input name="name" placeholder="Your name" />
        <input name="email" type="email" placeholder="Your email" />
        <input name="subject" placeholder="Project domain" />
        <textarea name="message" placeholder="Tell me about your project" />
        <button type="submit">Send WhatsApp Message <Send size={17} /></button>
      </form>
    </div>
  );
}

function ContactLine({ icon: Icon, label, value, href }) {
  const content = <div className="contact-line"><Icon size={20} /><span><b>{label}</b>{value}</span></div>;
  return href ? <a href={href}>{content}</a> : content;
}

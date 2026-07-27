import { CalendarDays, Eye, GraduationCap, MapPin } from "lucide-react";
import AppLink from "./AppLink";
import { education } from "../data/portfolio";

export default function EducationCards() {
  return (
    <div className="education-row-list">
      {education.map((item) => (
        <article className="education-row-card" key={item.title} data-reveal>
          <div className="education-row-image">
            <img src={item.image} alt={item.title} />
            <span>{item.badge}</span>
          </div>
          <div className="education-row-content">
            <p><GraduationCap size={16} /> {item.status}</p>
            <h3>{item.shortTitle ?? item.title}</h3>
            <div className="education-row-meta">
              <span><MapPin size={15} /> {item.place}</span>
              <span><CalendarDays size={15} /> {item.period}</span>
            </div>
            <b>{item.articleTitle}</b>
            <div className="education-action-center">
              <AppLink to={`/education/${item.slug}`} className="education-read-link">
                <Eye size={18} /> View Story
              </AppLink>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
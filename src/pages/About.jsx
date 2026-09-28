import {
  BrainCircuit,
  Briefcase,
  Building2,
  Cloud,
  Code2,
  Compass,
  Download,
  GraduationCap,
  Home,
  Mail,
  MapPin,
  Phone,
  Quote,
  Rocket,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import AppLink from "../components/AppLink";
import AnimatedPageHero from "../components/AnimatedPageHero";
import aboutHero from "../../assets/images/about/hero/about-hero-banner.png";
import dubaiFintechAiVisual from "../../assets/images/about/dubai/dubai-fintech-ai-visual.png";
import { images, profile, services, stats } from "../data/portfolio";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";

const storyFacts = [
  { icon: Home, label: "Hometown", value: "Aranthangi, Pudukkottai District, Tamil Nadu" },
  { icon: Users, label: "Family", value: "Farming family, three brothers, all engineers" },
  { icon: GraduationCap, label: "Education", value: "Engineering at Anna University, Master's in the UAE" },
  { icon: Trophy, label: "Sports", value: "Hockey team player in school and college" },
  { icon: Briefcase, label: "Career", value: "Bangalore (3 yrs), Chennai (1 yr), now Dubai" },
  { icon: Compass, label: "Focus", value: "IT, Cloud Engineering, Cybersecurity and AI" },
];

const journeyTimeline = [
  {
    place: "Pudukkottai",
    title: "School Days and Hockey",
    text: "From my early school days through higher secondary education, I studied in Pudukkottai. Playing in the hockey team taught me discipline, teamwork and consistency.",
  },
  {
    place: "Anna University",
    title: "Engineering Degree",
    text: "Completing engineering was a big milestone for our family. My two brothers also became engineers, and seeing all three of us succeed is one of my parents' biggest achievements.",
  },
  {
    place: "Bangalore",
    title: "Full Stack Developer at a Startup",
    text: "Three years that taught me real-world problem solving, teamwork, new technologies and professional responsibility, while living in a modern city with people from many cultures and languages.",
  },
  {
    place: "Chennai",
    title: "Growing Professionally and Personally",
    text: "A year with a different kind of experience. The people I worked with and the friendships I built became an important part of my journey.",
  },
  {
    place: "Dubai, UAE",
    title: "Master's and a New Country",
    text: "My first time living outside India. Within two months of arriving, I used my experience to secure an IT job and continue my career alongside my studies.",
  },
];

const focusCards = [
  { icon: Code2, label: "IT and Full Stack", value: "Building web products with React, Next.js, PHP and Laravel" },
  { icon: Cloud, label: "Cloud Engineering", value: "Learning to deploy, scale and run systems in the cloud" },
  { icon: ShieldCheck, label: "Cybersecurity", value: "Secure workflows, authentication and access control" },
  { icon: BrainCircuit, label: "Artificial Intelligence", value: "Following AI closely and using it in everyday engineering" },
];

const floatingImages = [
  { src: images.hero, className: "bubble-one", alt: "Yuvaraj profile" },
  { src: images.professional, className: "bubble-two", alt: "Professional portrait" },
  { src: images.about, className: "bubble-three", alt: "Developer portrait" },
  { src: images.profile, className: "bubble-four", alt: "Yuvaraj smiling" },
  { src: images.graduation, className: "bubble-five", alt: "Yuvaraj at graduation" },
  { src: images.casual, className: "bubble-six", alt: "Yuvaraj casual portrait" },
  { src: images.finxcartStage, className: "bubble-seven", alt: "Yuvaraj at FinXCart event" },
];

export default function About() {
  useDocumentTitle("About | Yuvaraj Rengasamy");
  useReveal();

  return (
    <>
      <AnimatedPageHero
        eyebrow="About"
        title="About Yuvaraj Rengasamy"
        text="Full Stack Software Developer building fintech, CRM, SaaS and event-management products with React, Next.js, PHP and Laravel."
        image={aboutHero}
        portrait={images.idCard}
        variant="about"
        snow
      />

      <section className="section white about-overview-section">
        <div className="about-container about-overview-grid">
          <div className="about-overview-copy" data-reveal>
            <p className="about-kicker">About Me</p>
            <h2>From a Farming Family in Aranthangi to Building Software in Dubai</h2>
            <p className="about-lead">
              Hi, I'm Yuvaraj, originally from Aranthangi, Pudukkottai District, Tamil Nadu, India. I come from a humble farming family. My parents are farmers, and I grew up with my two brothers in a simple environment where education was always considered the most important investment in life.
            </p>
            <div className="about-fact-grid">
              {storyFacts.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div key={fact.label}>
                    <span><Icon size={18} /></span>
                    <p><b>{fact.label}</b>{fact.value}</p>
                  </div>
                );
              })}
            </div>
            <div className="about-action-row">
              <a href={profile.resume} target="_blank" rel="noreferrer" className="old-btn">Download Resume <Download size={17} /></a>
              <AppLink to="/projects" className="ghost-btn">View Projects <Rocket size={17} /></AppLink>
            </div>
          </div>

          <div className="about-collage" data-reveal>
            <figure className="about-collage-top"><img src={images.awardStage} alt="Yuvaraj receiving an award at BridgingFX" /></figure>
            <figure className="about-collage-bottom"><img src={images.redCarpet} alt="Yuvaraj at ProFX Awards" /></figure>
            <figure className="about-collage-main"><img src={images.professional} alt="Yuvaraj professional portrait" /></figure>
          </div>
        </div>
      </section>

      <section className="section about-mission-section">
        <div className="about-watermark">Journey</div>
        <div className="about-container about-mission-grid">
          <div className="about-vision-card" data-reveal>
            <p className="about-kicker">My Journey</p>
            <h2>Every Stage of My Journey Became a Lesson</h2>
            <h3>Where It Started</h3>
            <p>
              During my engineering years, I developed a strong interest in Information Technology. That interest took me from Pudukkottai to Bangalore, then Chennai, and eventually to Dubai.
            </p>
            <h3>What It Taught Me</h3>
            <p>
              Working at a startup taught me much more than software development. It exposed me to real-world problem solving, teamwork, different technologies and the fast-changing nature of the technology industry.
            </p>
            <div className="about-small-images">
              <img src={images.heroArt} alt="AI product visual" />
              <img src={images.contact} alt="Dashboard support visual" />
            </div>
          </div>

          <div className="about-timeline" data-reveal>
            {journeyTimeline.map((item, index) => (
              <article key={item.title}>
                <span />
                <div>
                  <small className="about-timeline-tag">{String(index + 1).padStart(2, "0")} · {item.place}</small>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section white about-dubai-section">
        <div className="about-watermark right">Dubai</div>
        <div className="about-container">
          <h2 className="about-center-title" data-reveal>Why I Chose Dubai for the Next Chapter</h2>
          <div className="about-dubai-grid">
            <figure data-reveal><img src={dubaiFintechAiVisual} alt="Dubai fintech and AI analytics visual" /></figure>
            <div className="about-dubai-card" data-reveal>
              <b>New Country, New Chapter</b>
              <h3>A Master's in the UAE while building my career.</h3>
              <p>
                I first considered studying in the UK, but high tuition fees and visa expenses made it challenging. Following the rapid growth of AI and emerging technologies, I chose to pursue my Master's in the UAE while continuing to work.
              </p>
              <p>
                Moving abroad without an established support system meant adapting to a new culture, workplace and way of life. Within two months, I secured an IT job and continued my career.
              </p>
              <div><MapPin size={18} /> {profile.location}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats-strip">
        <div className="about-container about-stats-grid">
          {stats.map((stat) => (
            <article key={stat.label} data-reveal>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section white about-focus-section">
        <div className="about-container">
          <p className="about-kicker center" data-reveal>Still Learning</p>
          <h2 className="about-center-title" data-reveal>Where I'm Building My Future</h2>
          <div className="about-focus-grid">
            {focusCards.map((card) => {
              const Icon = card.icon;
              return (
                <article key={card.label} data-reveal>
                  <Icon size={28} />
                  <h3>{card.label}</h3>
                  <p>{card.value}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section white about-quote-section">
        <div className="about-floating-stage" data-reveal>
          {floatingImages.map((item) => <img key={item.className} className={item.className} src={item.src} alt={item.alt} />)}
          <div className="about-quote-card">
            <p className="about-kicker center">Lesson From My Father</p>
            <Quote size={42} />
            <p>
              Education is something nobody can take away from you.
            </p>
            <small className="about-quote-note">
              People, circumstances and situations can change. But the knowledge and skills we build through education stay with us. My journey is not about where I started. It is about continuing to move forward and making my parents proud. The best chapters are still being written.
            </small>
            <h3>{profile.name}</h3>
            <span>{profile.title}</span>
          </div>
        </div>
      </section>

      <section className="section soft about-contact-mini">
        <div className="about-container about-contact-grid">
          <Info icon={Mail} label="Email" value={profile.email} />
          <Info icon={Phone} label="Phone" value={profile.phone} />
          <Info icon={MapPin} label="Place" value={profile.location} />
          <Info icon={Home} label="Hometown" value="Aranthangi, Tamil Nadu, India" />
          <Info icon={Building2} label="Visa" value={profile.visa} />
          <Info icon={Users} label="Focus" value="IT, Cloud, Cybersecurity and AI" />
        </div>
      </section>
    </>
  );
}

function Info({ icon: Icon, label, value }) {
  return <div className="info-box"><Icon size={18} /><span><b>{label}</b>{value}</span></div>;
}


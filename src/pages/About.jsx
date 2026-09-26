import {
  BarChart3,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Code2,
  Database,
  Download,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Quote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import AppLink from "../components/AppLink";
import AnimatedPageHero from "../components/AnimatedPageHero";
import aboutHero from "../../assets/images/about/hero/about-hero-banner.png";
import dubaiFintechAiVisual from "../../assets/images/about/dubai/dubai-fintech-ai-visual.png";
import { images, profile, services, stats } from "../data/portfolio";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { useReveal } from "../hooks/useReveal";

const overviewPoints = [
  "Full-stack developer focused on fintech CRM, SaaS dashboards and event-management platforms.",
  "Hands-on across React.js, Next.js, PHP, Laravel, REST APIs, MySQL and PostgreSQL.",
  "Experienced in MT5 integrations, payment workflows, wallets, reporting and role-based access.",
  "Comfortable converting business requirements into clean UI, secure workflows and production-ready modules.",
  "Uses AI tools like Codex, Claude and ChatGPT for faster debugging, documentation and automation.",
  "Currently based in Dubai, building product systems where engineering, finance and operations meet.",
];

const missionTimeline = [
  {
    title: "Product-first Engineering",
    text: "I try to understand why a feature matters before building it, so the final screen supports real business workflow instead of only looking complete.",
  },
  {
    title: "Reliable Delivery",
    text: "My focus is clean implementation, API clarity, role-based access, payments, reporting and support-ready modules that can run in production.",
  },
  {
    title: "AI-assisted Growth",
    text: "I use AI tools to speed up debugging, documentation and planning, but I keep engineering judgment at the center of the final decision.",
  },
  {
    title: "Business + Data Direction",
    text: "With the Executive MBA in AI and Data Analytics, I am building stronger thinking around data, operations and product impact.",
  },
];

const focusCards = [
  { icon: Code2, label: "Frontend", value: "React.js, Next.js, Tailwind, Bootstrap, Material UI" },
  { icon: Database, label: "Backend", value: "PHP, Laravel, REST APIs, MySQL, PostgreSQL" },
  { icon: ShieldCheck, label: "Fintech", value: "MT5 APIs, wallets, payments, CRM and reporting" },
  { icon: BrainCircuit, label: "AI + Analytics", value: "Codex, Claude, ChatGPT, Power BI and automation" },
];

const floatingImages = [
  { src: images.hero, className: "bubble-one", alt: "Yuvaraj profile" },
  { src: images.professional, className: "bubble-two", alt: "Professional portrait" },
  { src: images.about, className: "bubble-three", alt: "Developer portrait" },
  { src: images.mbaCollege, className: "bubble-four", alt: "MBA college" },
  { src: images.masterin, className: "bubble-five", alt: "Project screen" },
  { src: images.contact, className: "bubble-six", alt: "Contact visual" },
  { src: images.college, className: "bubble-seven", alt: "College" },
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
        portrait={images.profile}
        variant="about"
        snow
      />

      <section className="section white about-overview-section">
        <div className="about-container about-overview-grid">
          <div className="about-overview-copy" data-reveal>
            <p className="about-kicker">Overview</p>
            <h2>Building practical software where product, finance and operations meet.</h2>
            <p className="about-lead">
              If I describe myself simply, I am a developer who likes turning complex workflows into usable product screens. I work across frontend, backend, databases, payments, CRM modules and dashboards, with a current focus on fintech and SaaS systems in Dubai.
            </p>
            <div className="about-point-list">
              {overviewPoints.map((point) => (
                <span key={point}><CheckCircle2 size={18} /> {point}</span>
              ))}
            </div>
            <div className="about-action-row">
              <a href={profile.resume} target="_blank" rel="noreferrer" className="old-btn">Download Resume <Download size={17} /></a>
              <AppLink to="/projects" className="ghost-btn">View Projects <Rocket size={17} /></AppLink>
            </div>
          </div>

          <div className="about-collage" data-reveal>
            <figure className="about-collage-top"><img src={images.masterin} alt="Product dashboard overview" /></figure>
            <figure className="about-collage-bottom"><img src={images.contactAlt} alt="AI assisted product visual" /></figure>
            <figure className="about-collage-main"><img src={images.professional} alt="Yuvaraj professional portrait" /></figure>
          </div>
        </div>
      </section>

      <section className="section about-mission-section">
        <div className="about-watermark">Mission</div>
        <div className="about-container about-mission-grid">
          <div className="about-vision-card" data-reveal>
            <p className="about-kicker">Vision & Mission</p>
            <h2>My aim is to become a developer who understands both code and business impact.</h2>
            <h3>Vision</h3>
            <p>
              To build reliable product systems for fintech and SaaS teams, where clean interfaces, secure backend workflows, useful reporting and automation work together smoothly.
            </p>
            <h3>Mission</h3>
            <p>
              To keep improving as a full-stack engineer by combining React, Laravel, data analytics and AI-assisted development. I want my work to reduce confusion, improve speed and help teams make better operational decisions.
            </p>
            <div className="about-small-images">
              <img src={images.heroArt} alt="AI product visual" />
              <img src={images.contact} alt="Dashboard support visual" />
            </div>
          </div>

          <div className="about-timeline" data-reveal>
            {missionTimeline.map((item) => (
              <article key={item.title}>
                <span />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section white about-dubai-section">
        <div className="about-watermark right">Why Dubai</div>
        <div className="about-container">
          <h2 className="about-center-title" data-reveal>Why Dubai, fintech and AI matter in my current journey</h2>
          <div className="about-dubai-grid">
            <figure data-reveal><img src={dubaiFintechAiVisual} alt="Dubai fintech and AI analytics visual" /></figure>
            <div className="about-dubai-card" data-reveal>
              <b>Current Direction</b>
              <h3>Full-stack fintech work with stronger analytics thinking.</h3>
              <p>
                Dubai is where my current work connects CRM platforms, trading infrastructure, payments, wallet systems and business reporting. It pushes me to think beyond code and understand product reliability, financial workflows and operational clarity.
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
          <p className="about-kicker center" data-reveal>Working Style</p>
          <h2 className="about-center-title" data-reveal>What I bring into a product team</h2>
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
            <p className="about-kicker center">Overview In One Line</p>
            <Quote size={42} />
            <p>
              I want my work to feel simple on the screen, strong in the backend and useful for the business people who depend on it every day.
            </p>
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
          <Info icon={Globe2} label="Nationality" value={profile.nationality} />
          <Info icon={Building2} label="Visa" value={profile.visa} />
          <Info icon={Users} label="Focus" value="Fintech CRM and SaaS" />
        </div>
      </section>
    </>
  );
}

function Info({ icon: Icon, label, value }) {
  return <div className="info-box"><Icon size={18} /><span><b>{label}</b>{value}</span></div>;
}


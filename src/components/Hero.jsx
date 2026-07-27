import { ArrowDownCircle, BriefcaseBusiness, Code2, Download, Mail, Send } from "lucide-react";
import { images, profile, roles } from "../data/portfolio";
import { useTypewriter } from "../hooks/useTypewriter";
import AppLink from "./AppLink";
import HeroParticles from "./HeroParticles";
import TiltImage from "./TiltImage";

const socials = [
  { label: "LinkedIn", href: profile.linkedin, icon: BriefcaseBusiness },
  { label: "GitHub", href: profile.github, icon: Code2 },
  { label: "X", href: profile.twitter, icon: Send },
  { label: "Mail", href: `mailto:${profile.email}`, icon: Mail },
];

export default function Hero() {
  const typedRole = useTypewriter(roles);

  return (
    <section className="home-hero">
      <HeroParticles />
      <div className="home-hero-inner">
        <div className="hero-copy" data-reveal>
          <h1>Hi There,<br />I am Yuvaraj <span>R</span></h1>
          <p>i am into <strong>{typedRole}</strong><b className="type-caret">|</b></p>
          <div className="hero-actions">
            <AppLink to="/about" className="old-btn">About Me <ArrowDownCircle size={18} /></AppLink>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="ghost-btn">Resume <Download size={17} /></a>
          </div>
          <div className="social-row">
            {socials.map((social) => {
              const Icon = social.icon;
              return <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}><Icon size={20} /></a>;
            })}
          </div>
        </div>
        <div className="hero-photo-wrap" data-reveal>
          <TiltImage src={images.hero} alt="Yuvaraj R" className="hero-photo" />
        </div>
      </div>
    </section>
  );
}
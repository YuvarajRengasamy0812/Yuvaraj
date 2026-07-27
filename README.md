# Yuvaraj R Portfolio

Modern React + Tailwind CSS portfolio rebuilt from the older HTML/CSS/Bootstrap/JavaScript version.

## Current Structure

```text
src/
  App.jsx
  main.jsx
  data/portfolio.js
  hooks/
    useDateTime.js
    useDocumentTitle.js
    useReveal.js
    useTypewriter.js
  components/
    AppLink.jsx
    Header.jsx
    Footer.jsx
    Layout.jsx
    Hero.jsx
    HeroParticles.jsx
    TiltImage.jsx
    PageHero.jsx
    SectionHeading.jsx
    StatsBand.jsx
    SkillGrid.jsx
    AiMarquee.jsx
    ProjectCard.jsx
    ExperienceTimeline.jsx
    EducationCards.jsx
    ContactPanel.jsx
  pages/
    Home.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Gallery.jsx
    Company.jsx
    Travel.jsx
    Contact.jsx
    NotFound.jsx
```

## Pages

- `/` - Home with old-style hero, particles, typing text and tilt image
- `/about` - About and profile details
- `/education` - Current MBA and full old education details
- `/skills` - Skills, levels and AI tools
- `/projects` - Project cards
- `/gallery` - Filterable image gallery
- `/company` - Work experience timeline
- `/travel` - Travel and personal journey page
- `/contact` - Contact details and message form

## Tech Stack

- React with Vite
- Tailwind CSS
- Lucide React icons
- Custom lightweight browser routing
- Custom typewriter, reveal, particle and tilt animations

## Run Locally

```bash
npm.cmd install
npm.cmd run dev
```

Production build:

```bash
npm.cmd run build
```

Local dev URL: http://127.0.0.1:5173
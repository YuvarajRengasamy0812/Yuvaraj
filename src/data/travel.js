const travelImages = {
  chennai: new URL("../../assets/images/travel/cards/chennai-ceg-guindy.jpg", import.meta.url).href,
  dubai: new URL("../../assets/images/travel/cards/dubai-skyline-sunset.jpg", import.meta.url).href,
  bengaluru: new URL("../../assets/images/travel/cards/bengaluru-vidhana-soudha.webp", import.meta.url).href,
  capeTown: new URL("../../assets/images/travel/cards/cape-town-south-africa.jpg", import.meta.url).href,
};

export const travelDestinations = [
  {
    slug: "chennai",
    place: "Chennai",
    region: "Tamil Nadu, India",
    badge: "First story",
    image: travelImages.chennai,
    summary: "Engineering roots, beach mornings, temple streets, local food and the city rhythm that shaped steady growth.",
    meta: ["Tamil culture", "Beach city", "Career base"],
    articleTitle: "Chennai travel journal: roots, rhythm and step-by-step memories",
    intro: "Chennai is shown first because it is not only a travel location in this story. It is the city that connects education, discipline, career direction and the emotional base of moving from Tamil Nadu into a wider software journey.",
    stats: [
      { label: "Mode", value: "Roots" },
      { label: "Mood", value: "Coastal" },
      { label: "Focus", value: "Growth" },
    ],
    sections: [
      {
        title: "Step 1: Start With The Sea",
        eyebrow: "Marina morning",
        image: travelImages.chennai,
        body: [
          "A Chennai day feels right when it begins near the coast. The air is warm, the road is already awake, and the sound of the waves gives the city a natural opening scene. For a personal travel page, this is the best first frame because it shows Chennai as both busy and peaceful.",
          "Marina Beach is more than a tourist landmark. It is a long public space where students, families, walkers, food stalls and city life all meet without needing anything fancy. A morning walk here can feel like a reset before entering the heavier parts of the city.",
        ],
        steps: ["Reach early before the heat rises.", "Walk slowly along the promenade.", "Use the morning light for photos and reflection."],
      },
      {
        title: "Step 2: Connect The City To Education",
        eyebrow: "Career base",
        image: travelImages.chennai,
        body: [
          "Chennai carries an education memory in this portfolio because engineering life and software direction are tied to this phase. The city represents the move from classroom theory into a practical way of thinking: break the problem, test the path, keep improving and do not stop after the first failure.",
          "That mindset later becomes useful in full-stack development. Whether the work is React, Laravel, MySQL, APIs or dashboards, the same Chennai lesson stays alive: understand the system before trying to fix the screen.",
        ],
        steps: ["Remember the college phase as a foundation.", "Map learning moments to current skills.", "Treat the city as a chapter, not only a destination."],
      },
      {
        title: "Step 3: Feel The Heritage Streets",
        eyebrow: "Culture",
        image: travelImages.chennai,
        body: [
          "The heritage side of Chennai is best experienced slowly. Temple streets, old neighborhoods, music halls, bookshops and local markets bring a different texture from glass towers or fast roads. The city has a quiet confidence because it does not need to explain its identity every few minutes.",
          "For a travel article, this section shows the deeper layer: language, food, faith, music and family routines. These are the details that make Chennai feel personal rather than generic.",
        ],
        steps: ["Choose one neighborhood instead of rushing everywhere.", "Notice architecture, signboards and morning routines.", "Keep the article grounded in lived experience."],
      },
      {
        title: "Step 4: Build A Food Trail",
        eyebrow: "Local taste",
        image: travelImages.chennai,
        body: [
          "A Chennai story needs food because the city is remembered through breakfast, tea breaks and simple meals as much as through landmarks. Idli, dosa, pongal, filter coffee, meals on a banana leaf and evening snacks all create small anchors in memory.",
          "The important travel detail is not only what to eat, but when to eat. Morning food feels different from late evening tiffin, and both tell you how the city moves across the day.",
        ],
        steps: ["Start with breakfast and filter coffee.", "Keep lunch simple and local.", "End with an evening snack near a busy street."],
      },
      {
        title: "Step 5: Follow Work And Growth",
        eyebrow: "Software journey",
        image: travelImages.chennai,
        body: [
          "Chennai also belongs in the work story because it represents the first serious bridge between engineering discipline and software ambition. A travel page can hold this honestly: not every place is only about sightseeing. Some cities become important because they push a person into the next version of themselves.",
          "For Yuvaraj's portfolio, Chennai can be written as the place where problem-solving became stronger. It is the city chapter that says growth can begin from a normal routine, not only from dramatic change.",
        ],
        steps: ["Link the place to career growth.", "Show what changed in thinking.", "Keep the writing personal and direct."],
      },
      {
        title: "Step 6: Create A Photo Route",
        eyebrow: "Visual memory",
        image: travelImages.chennai,
        body: [
          "The best Chennai photo route mixes open space and close detail. Start with the beach, move into older streets, capture food and small moments, then finish with a wider city view. This gives the article a rhythm from wide to intimate.",
          "Generated images on this page are used as travel-style visuals, but the article still feels grounded because the writing connects them to real memory and personal growth.",
        ],
        steps: ["Use one wide hero image.", "Add detail images between sections.", "Keep every image connected to the paragraph beside it."],
      },
      {
        title: "Step 7: Write The Memory Honestly",
        eyebrow: "Personal note",
        image: travelImages.chennai,
        body: [
          "A strong travel article does not need to pretend every moment was cinematic. Chennai can be written with a real tone: heat, traffic, routine, learning pressure, family connection, career uncertainty and the confidence that slowly grows from handling each stage.",
          "That honesty makes the page useful inside a portfolio. Visitors see a developer, but they also see the path behind the developer: places, effort, learning and movement.",
        ],
        steps: ["Avoid only postcard descriptions.", "Include learning and emotion.", "Let the city support the personal story."],
      },
      {
        title: "Step 8: End With Direction",
        eyebrow: "Next path",
        image: travelImages.chennai,
        body: [
          "Chennai's article can end by pointing forward. From Tamil Nadu roots to Bengaluru work experience and Dubai career growth, the travel page becomes a map of movement. The order matters because Chennai is the base, Bengaluru is the building phase, and Dubai is the current expansion.",
          "That gives the page a clean story arc: roots, skill, ambition. It is simple, modern and easy for visitors to understand.",
        ],
        steps: ["Show Chennai first.", "Connect it to Bengaluru and Dubai.", "Keep the page ready for more future places."],
      },
    ],
  },
  {
    slug: "dubai",
    place: "Dubai",
    region: "UAE",
    badge: "Current",
    image: travelImages.dubai,
    summary: "Current work location for fintech CRM, SaaS platforms, AI analytics learning and ambitious product delivery.",
    meta: ["Work city", "Fintech", "AI learning"],
    articleTitle: "Dubai travel journal: current work, ambition and modern city energy",
    intro: "Dubai represents the current chapter: professional growth, fintech product work, AI learning and a city rhythm built around speed, structure and possibility.",
    stats: [
      { label: "Mode", value: "Current" },
      { label: "Mood", value: "Modern" },
      { label: "Focus", value: "Career" },
    ],
    sections: [
      {
        title: "Step 1: Read The Skyline As A Work Signal",
        eyebrow: "Modern base",
        image: travelImages.dubai,
        body: [
          "Dubai has a clear professional energy. The skyline, metro lines, business districts and fast service culture all create a feeling that work should move with structure and speed.",
          "For this portfolio, Dubai is the place connected to fintech CRM, SaaS modules, hosting, payment workflows and AI-assisted development.",
        ],
        steps: ["Start with the city skyline.", "Connect the image to professional growth.", "Keep the story polished and current."],
      },
      {
        title: "Step 2: Balance Work And Discovery",
        eyebrow: "Daily rhythm",
        image: travelImages.dubai,
        body: [
          "A good Dubai story includes both work and observation. Offices, client requirements, commutes, evening walks and weekend city views all become part of the travel memory.",
          "The article should show Dubai as a living chapter rather than only a tourist postcard.",
        ],
        steps: ["Write about the work rhythm.", "Add city movement and evening atmosphere.", "Make the destination feel active."],
      },
      {
        title: "Step 3: Keep The Future Open",
        eyebrow: "Next growth",
        image: travelImages.dubai,
        body: [
          "Dubai also points forward. It is where software delivery, business thinking, data analytics and AI learning are starting to connect more strongly.",
          "That makes it a strong final card in the travel map: from roots to skill-building to current ambition.",
        ],
        steps: ["Show current goals.", "Mention learning and product delivery.", "Leave room for more milestones."],
      },
    ],
  },
  {
    slug: "bengaluru",
    place: "Bengaluru",
    region: "India",
    badge: "Work phase",
    image: travelImages.bengaluru,
    summary: "Three years I will never forget: my first IT job, Pixalive, good friends, rides, RCB and a city that taught me to live on my own.",
    meta: ["3 years", "First IT job", "Pixalive"],
    articleTitle: "Bengaluru travel journal: tech-city learning and product confidence",
    intro: "Bengaluru is the work-building chapter. It connects software practice, frontend growth, product teams, API work and the confidence that comes from shipping real screens.",
    stats: [
      { label: "Mode", value: "Build" },
      { label: "Mood", value: "Tech" },
      { label: "Focus", value: "Skill" },
    ],
    sections: [
      {
        title: "Step 1: Enter The Tech Rhythm",
        eyebrow: "Software phase",
        image: travelImages.bengaluru,
        body: [
          "Bengaluru feels connected to product work because the city carries a strong technology rhythm. Meetings, code, cafes, team discussions and real application delivery all fit naturally into its atmosphere.",
          "In this story, Bengaluru stands for React.js, Next.js, API integration, UI conversion and learning how product screens become usable applications.",
        ],
        steps: ["Connect the city to software practice.", "Show learning through shipped work.", "Keep the tone energetic and focused."],
      },
      {
        title: "Step 2: Remember Team Learning",
        eyebrow: "Collaboration",
        image: travelImages.bengaluru,
        body: [
          "The Bengaluru chapter is also about collaboration. Working with teams, understanding backend contracts and converting designs into responsive interfaces made the professional foundation stronger.",
          "That phase gave the confidence to handle larger systems later.",
        ],
        steps: ["Mention team and API work.", "Show growth from repeated delivery.", "Tie the city to product confidence."],
      },
      {
        title: "Step 3: Move From Skill To Direction",
        eyebrow: "Career movement",
        image: travelImages.bengaluru,
        body: [
          "Bengaluru becomes the middle chapter between Chennai and Dubai. Chennai created the base, Bengaluru sharpened the skill, and Dubai expanded the ambition.",
          "Together, the three cards make the travel page feel like a professional journey map.",
        ],
        steps: ["Place Bengaluru between roots and current work.", "Use it as the skill-building chapter.", "Keep the route easy to scan."],
      },
    ],
  },
  {
    slug: "cape-town",
    place: "Cape Town",
    region: "South Africa",
    badge: "Travel",
    image: travelImages.capeTown,
    summary: "Amazing people, cool weather, stunning hills, endless sea views, lush green forests and the cold Atlantic Ocean. 🌍🌊",
    meta: ["Atlantic Ocean", "Hills", "Sea views"],
    articleTitle: "Cape Town: Hills Sea Views and the Cold Atlantic",
    intro: "A beautiful place with amazing people, cool weather, stunning hills, endless sea views, lush green forests and the cold Atlantic Ocean.",
    stats: [],
    sections: [],
  },
];

export function getTravelDestination(slug) {
  return travelDestinations.find((destination) => destination.slug === slug);
}

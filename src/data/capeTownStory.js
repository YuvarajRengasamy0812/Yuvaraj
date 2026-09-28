// Cape Town blog article. Media items with `src: null` render as placeholder previews.
// To add a real photo or video, drop the file in assets/images/travel/cape-town/ and set `src`.

const heroImage = new URL("../../assets/images/travel/cards/cape-town-south-africa.jpg", import.meta.url).href;

export const capeTownStory = {
  kicker: "Travel Journal",
  title: "Cape Town: Hills Sea Views and the Cold Atlantic",
  deck: "A beautiful place with amazing people, cool weather, stunning hills, endless sea views, lush green forests and the cold Atlantic Ocean. Such a clean, peaceful and unforgettable experience.",
  author: "Yuvaraj Rengasamy",
  location: "Cape Town, South Africa",
  readTime: "3 min read",
  duration: "Travel story",
  hero: { src: heroImage, caption: "The glowing CAPE TOWN sign at night. 🌍✨" },
  facts: [
    { value: "🌍", label: "South Africa" },
    { value: "🌊", label: "Atlantic Ocean" },
    { value: "⛰️", label: "Stunning hills" },
    { value: "🌿", label: "Green forests" },
  ],
  sections: [
    {
      id: "first-look",
      heading: "A Beautiful Place with Amazing People",
      blocks: [
        { type: "lead", text: "Cape Town is a beautiful place with amazing people. From the first evening, the city felt welcoming, calm and full of life." },
        { type: "image", src: heroImage, caption: "The CAPE TOWN letters lit up at night." },
        { type: "p", text: "The weather was cool, the streets were clean, and everything around me felt peaceful. It is the kind of place where you slow down and simply enjoy where you are." },
      ],
    },
    {
      id: "nature",
      heading: "Hills Forests and Endless Sea Views",
      blocks: [
        { type: "p", text: "What makes Cape Town special is how close nature is to the city. Stunning hills rise behind the buildings, lush green forests cover the slopes, and the sea stretches out as far as you can see." },
        { type: "tags", items: ["Stunning hills", "Endless sea views", "Lush green forests", "Cool weather", "Clean streets"] },
        { type: "gallery", items: [
          { src: null, caption: "Hills around the city" },
          { src: null, caption: "Sea views along the coast" },
        ] },
      ],
    },
    {
      id: "atlantic",
      heading: "The Cold Atlantic Ocean",
      blocks: [
        { type: "p", text: "Standing by the cold Atlantic Ocean was one of my favourite moments. The water, the wind and the wide open view made the whole trip feel unforgettable. 🌊💙" },
        { type: "video", src: null, poster: null, caption: "Waves of the Atlantic Ocean." },
        { type: "quote", text: "Such a clean, peaceful and unforgettable experience." },
        { type: "closing", lines: ["Amazing people.", "Cool weather.", "Stunning hills.", "Endless sea views.", "Cape Town."], signoff: "🌍✨ A place I will always remember." },
      ],
    },
  ],
};

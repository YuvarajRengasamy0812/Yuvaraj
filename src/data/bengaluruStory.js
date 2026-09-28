// Bengaluru blog article. Media items with `src: null` render as placeholder previews.
// To add a real photo or video, drop the file in assets/images/travel/bengaluru/ and set `src`, e.g.
// src: new URL("../../assets/images/travel/bengaluru/shanti-nagar.jpg", import.meta.url).href

const heroImage = new URL("../../assets/images/travel/cards/bengaluru-vidhana-soudha.webp", import.meta.url).href;
const moment = (file) => new URL(`../../assets/images/travel/bengaluru/${file}`, import.meta.url).href;

export const bengaluruStory = {
  kicker: "Travel Journal",
  title: "My Bengaluru Life: Three Years I Will Never Forget",
  deck: "From a college graduate with a Full Stack course and a dream of getting a job, to three years of work, friends, struggles, rides and memories in one city.",
  author: "Yuvaraj Rengasamy",
  location: "Bengaluru, Karnataka",
  readTime: "9 min read",
  hero: { src: heroImage, caption: "Bengaluru, the city where I learned to live life on my own." },
  momentsTitle: "Bengaluru moments",
  // Small photos that float in the sidebar animation
  moments: [
    { src: moment("team-photo.jpg"), caption: "Team day" },
    { src: moment("welcome-to-team.jpg"), caption: "Welcome to the team" },
    { src: moment("office-meeting.jpg"), caption: "Office discussions" },
    { src: heroImage, caption: "Bengaluru streets" },
    { src: moment("birthday.jpg"), caption: "Birthday at work" },
    { src: moment("desk.jpg"), caption: "My desk" },
    { src: moment("casual.jpg"), caption: "City walks" },
  ],
  facts: [
    { value: "3", label: "Years in Bengaluru" },
    { value: "14+", label: "Interviews attended" },
    { value: "2", label: "Companies worked" },
    { value: "2008", label: "RCB fan since" },
  ],
  sections: [
    {
      id: "arrival",
      heading: "A New State a New Language a New Life",
      blocks: [
        { type: "lead", text: "After completing my college, one of the biggest changes in my life happened. I moved outside Tamil Nadu for the first time and came to Bengaluru." },
        { type: "p", text: "For me, it was completely new. New state, new language, new people, new place and a new life. Before that, I had mostly lived around my hometown and college. Suddenly, I was in Bengaluru, where I could see people from different states and hear Kannada, Hindi, Tamil, Malayalam and many other languages everywhere." },
        { type: "p", text: "My first place in Bengaluru was Shanti Nagar. I joined an institute there for a Full Stack Development course. It was a three-month course and during that time I stayed in a PG." },
        { type: "image", src: null, caption: "Shanti Nagar, my first address in Bengaluru, and the PG where it all started." },
        { type: "p", text: "Those three months were not only about studying. It was also the first time I really started learning how to live independently." },
        { type: "p", text: "Bengaluru climate was one of the first things I liked. The weather was usually cool compared to the places I was used to. When it rained, I really liked the city. The roads, the weather, the greenery and the ups and downs in some areas made Bengaluru look very beautiful to me." },
      ],
    },
    {
      id: "job-hunt",
      heading: "The Job Hunt",
      blocks: [
        { type: "p", text: "After completing my three-month course, I started looking for a job. That was another big phase." },
        { type: "p", text: "Most of the IT companies were far from where I was staying, so I had to travel long distances for interviews. I attended more than 14 company interviews." },
        { type: "quote", text: "Some interviews I cleared one round but missed the second round. Sometimes I felt like things were moving very slowly." },
        { type: "p", text: "Some companies didn't work out because the salary was not suitable for me. After around three months, I moved to the Silk Board area. From there also, I continued my job search." },
      ],
    },
    {
      id: "first-job",
      heading: "My First IT Job Near Electronic City",
      blocks: [
        { type: "p", text: "Finally, I got an opportunity in a mid-level company inside a tech park near Electronic City. For me, getting that job was a big moment. After so many interviews and waiting, I finally got an opportunity and joined the company happily." },
        { type: "p", text: "That company became a very important part of my Bengaluru life. Around 50% of the people there were Tamil, and the others were from different places like Karnataka, Kerala, North India and other parts of India. I met many good people there." },
        { type: "image", src: null, caption: "The tech park near Electronic City where my first IT job began." },
        { type: "p", text: "My colleagues helped me a lot. I learned many things from them, both technically and personally. Slowly I learned how to manage work, people, responsibilities and life in a new city. I worked there for around one year." },
      ],
    },
    {
      id: "pixalive",
      heading: "Pixalive and the HSR Vibe",
      blocks: [
        { type: "p", text: "After one year, I joined Pixalive, around HSR Road. That experience was different." },
        { type: "p", text: "Bengaluru itself is interesting because every area feels different. HSR Layout has one type of vibe, Koramangala has another vibe, Electronic City feels completely different, and the same goes for KR Puram, Shivajinagar, Silk Board and other areas." },
        { type: "p", text: "At Pixalive, I got some really good friends. We had a nice work-life balance. We worked together, talked a lot, had fun and enjoyed our time. The friends I made there made my Bengaluru life much more enjoyable." },
        { type: "gallery", items: [
          { src: null, caption: "Team moments at Pixalive" },
          { src: null, caption: "Friends who made Bengaluru home" },
        ] },
        { type: "p", text: "After one year, Pixalive shifted to Electronic City. Electronic City was a completely different experience because of the IT parks, companies and the huge number of people working there." },
      ],
    },
    {
      id: "exploring",
      heading: "Exploring the City Traffic and All",
      blocks: [
        { type: "p", text: "During my Bengaluru life, I also started exploring many places and trying different food. Even simple things like going to D-Mart, trying new food or visiting a new mall felt like new experiences for me." },
        { type: "p", text: "I slowly started understanding Bengaluru. And one thing I understood very quickly was:" },
        { type: "quote", text: "You cannot talk about Bengaluru without talking about traffic. 😂" },
        { type: "p", text: "Sometimes even a small distance can take a lot of time. And during Diwali and Pongal, going back to my hometown from Bengaluru was always difficult because of the traffic and crowds. But somehow, even those difficult journeys became part of my memories." },
        { type: "p", text: "I also really enjoyed riding around Bengaluru, especially some roads around Electronic City and Mysore Road. Sometimes when the road was relatively empty, riding on a single road with the Bengaluru weather felt really good." },
        { type: "video", src: null, poster: null, caption: "Riding around Electronic City and Mysore Road." },
        { type: "p", text: "There was no big plan. Just riding, looking at the road, feeling the weather and enjoying the moment. Those simple moments are some of my favourite memories." },
      ],
    },
    {
      id: "rcb",
      heading: "Bengaluru and RCB",
      blocks: [
        { type: "p", text: "Another very important part of my Bengaluru connection is RCB. I have liked RCB since around 2008, when I was in 5th standard." },
        { type: "p", text: "When I came to Bengaluru and actually saw how people supported RCB, I understood the connection even more. The stadium atmosphere, the jerseys, the flags, the celebrations and the discussions around the team were all different." },
        { type: "p", text: "Sometimes people even fight with their friends because of different teams. 😄 But whenever RCB plays, the whole atmosphere becomes different. People celebrate together and the city gets a different energy." },
        { type: "video", src: null, poster: null, caption: "Match day energy in Bengaluru." },
        { type: "quote", text: "For me, RCB has always been more than just a cricket team. It is one of the things that makes my connection with Bengaluru even stronger." },
      ],
    },
    {
      id: "puneeth",
      heading: "One Person Bengaluru Introduced Me To",
      blocks: [
        { type: "p", text: "There is one more thing I experienced in Bengaluru that I had never experienced before in my life: Puneeth Rajkumar sir." },
        { type: "p", text: "Before coming to Karnataka, I didn't know much about him. I knew he was a movie hero, and I knew actors had fans and fan clubs. But I had never seen the kind of love and respect that people in Bengaluru had for Puneeth Rajkumar sir." },
        { type: "p", text: "When I started living in Bengaluru, I could see his photos everywhere. In shops. In hotels. Inside auto-rickshaws. In different places around the city. I could see fan clubs and people talking about him with so much respect." },
        { type: "p", text: "Only after coming to Bengaluru, I slowly understood. I learned more about his life, his simplicity, his humble nature and the way he connected with ordinary people. That made me respect him a lot, and he became one of the people who inspired me." },
        { type: "quote", text: "Being a good person and earning people's genuine respect is much bigger than just being famous." },
        { type: "p", text: "What touched me most was that his presence was not only inside cinemas. He was part of people's everyday life. Bengaluru introduced me to that feeling, and I will always remember it." },
      ],
    },
    {
      id: "places",
      heading: "Places and Vibes I Loved",
      blocks: [
        { type: "p", text: "One of the best things about Bengaluru is that every area has its own vibe." },
        { type: "tags", items: ["Koramangala", "Church Street", "HSR Layout", "KR Puram", "Shivajinagar", "Electronic City", "Mysore Road", "Silk Board"] },
        { type: "p", text: "I especially liked the vibe around Koramangala and Church Street. New Year celebrations in Bengaluru are something I cannot forget. The lights, people, music, food, streets and overall atmosphere make the city feel completely different. Church Street during that time has a different kind of energy." },
        { type: "gallery", items: [
          { src: null, caption: "Church Street on New Year's Eve" },
          { src: null, caption: "Evenings around Koramangala" },
          { src: null, caption: "Local markets and small streets" },
        ] },
        { type: "p", text: "I also liked the small streets and local markets. You can find grocery shops, small stores, MRP shops, food places and different kinds of people almost everywhere. The city always felt alive. Even the malls and IT parks had their own beauty." },
      ],
    },
    {
      id: "people",
      heading: "The People I Met",
      blocks: [
        { type: "p", text: "When I think about Bengaluru now, I don't remember only the places. I remember the people. My colleagues. My friends. People I met during my course. People from different states. People who helped me when I was struggling. People I travelled with, had food with and laughed with." },
        { type: "quote", text: "Some people stayed in my life. Some people became memories. But everyone gave me something to remember." },
        { type: "p", text: "That is probably one of the best things about moving to a new city. You come there knowing only a few people, and slowly the city introduces you to so many different people. Among them, some become close friends." },
      ],
    },
    {
      id: "lessons",
      heading: "What Bengaluru Taught Me",
      blocks: [
        { type: "list", items: [
          "How to live independently and manage myself",
          "How to deal with rejection and keep trying after interviews didn't work out",
          "How to work and communicate with people from different backgrounds",
          "How to adapt to a new place",
          "That sometimes you need to leave your comfort zone to grow",
        ] },
        { type: "p", text: "When I first came to Bengaluru, I was just a college graduate looking for a job. I didn't know where I would work, how many interviews I would attend, which friends I would make or how many places I would explore. I definitely didn't know that Bengaluru would become such an important part of my life. But slowly, everything happened." },
      ],
    },
    {
      id: "three-years",
      heading: "Three Years I Will Always Remember",
      blocks: [
        { type: "p", text: "Three years may not sound like a very long time, but for me, a lot happened during those three years." },
        { type: "checklist", items: [
          "Completed my Full Stack course", "Stayed in a PG", "Attended 14+ interviews", "Faced rejection",
          "Got my first IT opportunity", "Joined Pixalive", "Made good friends", "Tried different food",
          "Survived the traffic", "Celebrated New Year", "Went on rides", "Supported RCB",
        ] },
        { type: "p", text: "Looking back now, I feel Bengaluru was not just a city where I worked. It was a city where I grew, struggled, learned, made friends and created memories. It was a city where I experienced a completely different culture and lifestyle." },
        { type: "p", text: "If someday someone asks me which place in India I would like to settle in, Bengaluru will always be one of the first places that comes to my mind. Maybe one day I will live in another city. Maybe I will move to another country. But I know one thing: Bengaluru will always be a part of my story." },
        { type: "closing", lines: ["Three years.", "Many roads.", "Many people.", "Many struggles.", "Many laughs.", "Many memories.", "One city."], signoff: "Bengaluru. ❤️ You will always be one of the closest chapters of my life." },
      ],
    },
  ],
};

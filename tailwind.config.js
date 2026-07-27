/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inria Sans", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inria Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        theme: "#ff1d48",
        sec: "#080035",
        title: "#272e39",
        body: "#565656",
        smoke: "#f6f6f6",
        secondary: "#eef2fb",
        yellow: "#fec624",
        success: "#28a745",
        error: "#dc3545",
        ink: "#080035",
        saffron: "#ff1d48",
        emeraldPro: "#28a745",
        violetPro: "#080035",
        paper: "#f6f6f6",
      },
      boxShadow: {
        soft: "0 24px 60px rgba(15, 23, 42, 0.12)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        pulseGlow: "pulseGlow 3.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(255, 122, 26, 0)" },
          "50%": { boxShadow: "0 0 32px rgba(255, 122, 26, 0.35)" },
        },
      },
    },
  },
  plugins: [],
};

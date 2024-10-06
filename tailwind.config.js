/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_yellow: "#FFEB3B",
        primary_purple: "#6A0DAD",
      },
      fontFamily: {
        "primary-font": ["Jost", "snas-serif"],
      },
    },
  },
  plugins: [],
};

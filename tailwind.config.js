/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'yellow':"#FFEB3B",
      'purple':"#6A0DAD",
    },
    extend: {
      fontFamily:{
        'primary-font':['Jost','snas-serif']
      }
    },
  },
  plugins: [],
}
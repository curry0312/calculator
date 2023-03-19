/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "iphone-lightgray":"#D4D4D2",
        "iphone-black":"#1C1C1C",
        "iphone-darkgray":"#505050",
        "iphone-yellow":"#FF9500",
      },
      fontFamily:{
        "Roboto":"Roboto,sans-serif",
      }
    },
  },
  plugins: [],
}

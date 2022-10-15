/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")

const Myclass = plugin(function({addUtilities}){
  addUtilities({
    ".my-rotate-y-180":{
      transform: "rotateY(180deg)",

    },

    ".preserve-3d":{
      transformStyle: "preserve-3d"
    },

    ".prespective" :{
      prespective: "1000px"
    },

    ".backface-hidden":{
      backfaceVisibility: "hidden"
    }
  });
});

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {

    },
    extend: {
      colors: {
        primary: '#02A676',
        primaryDark: '#008c72',
        secondary: '#007369',
        secondaryDark: '#005a5b',
        textDark: '#003840',
        textLight: '#E3FEE8'
      }
    },
  },
  plugins: [Myclass],
}

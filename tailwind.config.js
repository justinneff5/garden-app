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
    },
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
      keyframes: {
        slideLeft: {
          '100%': { left: 0 }
        }
      },
      animation: {
        slideLeft: 'slideLeft 0.5s forwards'
      },
      boxShadow: {
        innerShadow: '0 0 100px rgba(0,0,0,0.3) inset',
        innerLess: '0 0 25px rgba(0,0,0,0.3) inset',
      },
      colors: {
        primary: '#02A676',
        primaryDark: '#008c72',
        secondary: '#007369',
        secondaryDark: '#005a5b',
        textDark: '#003840',
        textLight: '#E3FEE8',
        backdropLight: '#EDFFFD',
      }
    },
  },
  plugins: [Myclass],
}

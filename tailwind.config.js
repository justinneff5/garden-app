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
    extend: {
      // spacing: {
      //   100: '5rem',
      //   200: '10rem',
      //   300: '15rem',
      //   400: '20rem',
      //   500: '25rem',
      //   600: '30rem',
      //   700: '35rem',
      //   800: '40rem',
      //   900: '90rem',
      //   1000: '100rem',
      //   1100: '110rem',
      //   1200: '120rem',
      // },
      minWidth: {
        '1/2': '50%'
      },
      minHeight: {
        '1/2': '50%'
      },
      padding: {
        '1/2': '50%'
      },
      boxShadow: {
        innerShadow: '0 0 100px rgba(0,0,0,0.3) inset',
        innerLess: '0 0 25px rgba(0,0,0,0.3) inset',
      },
      scale: {
        102: "102%",
        200: "200%"
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

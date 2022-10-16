/** @type {import('tailwindcss').Config} */
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
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#EA1717',
        'grey': '#5a5656',
        'greyb': '#cececd',
        'dblack': '#231E1E',
        'grey70': '#707070',


      },
      fontFamily: {
        Merriweather: ['Merriweather'],
        openSans: ['openSans'],
      },

    },
  },
  plugins: [],
}


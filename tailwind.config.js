/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
    './*.html',
  ],

  theme: {
    extend: {
      colors:{
        primary: "#6486FF",
        hover: "#476FFF"
      },
      fontFamily:{
        body: "'Open Sans', sans-serif"
      },
    },
  },

  plugins: [],
}
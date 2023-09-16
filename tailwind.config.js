/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './portfolio/src/**/*.{html,js}',
    './portfolio/index.html'
  ],

  theme: {
    extend: {
      colors:{
        primary: "#6486FF",
        gradient: "bg-gradient-to-r from-green-400 to-blue-500"
      },
      fontFamily:{
        body: "'Open Sans', sans-serif"
      },
    },
  },

  plugins: [],
}
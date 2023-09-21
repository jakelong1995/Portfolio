/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './index.html'
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
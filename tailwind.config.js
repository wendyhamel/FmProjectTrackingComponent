/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      'sans': ['Barlow', 'sans-serif'],
      'special': ['Barlow Condensed', 'sans-serif'],
    },
    extend: {
      colors: {
        red:'hsl(0, 100%, 68%)',
        blue: {
          '400': 'hsl(230, 29%, 20%)',
          '300': 'hsl(230, 11%, 40%)',
          '200': 'hsl(231, 7%, 65%)',
          '100': 'hsl(207, 33%, 95%)',
        },
      }
    },
  },
  plugins: [],
}


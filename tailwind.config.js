/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'alumni': ['Alumni Sans', 'sans-serif']
    },
    extend: {
      colors:{
        'primary': {
          600: '#4b7e93',
          300: '#a2c8db',
          200: '#e3eaef',
          100: '#f2f7fd',
        },
        'secondary': {
          600: '#fc834a',
          300: '#bf7958',
        },
        'dark' : '#0b0b23',
      },
    },
  },
  plugins: [],
}


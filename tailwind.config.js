const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    colors: {
      white: colors.white,
      black: colors.black,
      gray: '#dbdcf2',
      light: '#2b2a65',
      lighter: '#37377f',
      midDark: '#23225a',
      dark: '#1a1c47',
      pink: '#fe95dd',
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'group-hover'],
    },
  },
  plugins: [],
}

const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'mono': ['Fira code']
    },
    colors: {
      terminal: colors.blueGray,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      indigo: colors.indigo
    },
    extend: {
      animation: {
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 0},
          '50%': { opacity: 1 },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
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
        drop: 'drop 0.7s linear infinite',
        stem: 'stem 0.7s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
        drop: {
          '0%': { transform: 'translateY(0vh)' },
          '75%, 100%': { transform: 'translateY(105vh)' }
        },
        stem: {
          '0%': { opacity: 1 },
          '65%': { opacity: 1 },
          '85%': { opacity: 0 },
          '100%': { opacity: 0 },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

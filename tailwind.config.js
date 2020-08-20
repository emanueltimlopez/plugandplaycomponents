module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
      },
      margin: {
        '-6': '-6rem'
      },
      borderRadius: {
        large: '.8rem'
      },
    },
  },
  variants: {},
  plugins: [],
}

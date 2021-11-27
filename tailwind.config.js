module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#262544',
          DEFAULT: '#254594',
          dark: '#070625'
        },
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}

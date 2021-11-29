module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#041b3b',
          DEFAULT: '#254594',
          dark: '#001736'
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

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: {
          light: "#041b3b",
          DEFAULT: "#15335B",
          dark: "#001736",
        },
      },
    },
  },
  plugins: [],
};

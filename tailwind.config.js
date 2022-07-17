module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
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
      keyframes: {
        'rotate-45deg': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(45deg)'
          },
        },
        'rotate-135deg': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(-45deg)'
          },
        },
      },
      animation: {
        'rotate-45deg': 'rotate-45deg 0.5s forwards',
        'rotate-135deg': 'rotate-135deg 0.5s forwards',
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        v: {
          50: "#faf8f6",
          100: "#f7f5f3",
          200: "#f1eee9",
          300: "#ebe7e5",
          400: "#e6e1e0",
          500: "#efebe9",
          600: "#bcaaa4",
          700: "#8c7b7a",
          800: "#6e5f5d",
          900: "#4e342e",
        },
      },
      fontFamily: {
        serif: ["PT Serif", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            "h1 a, h2 a, h3 a, h4 a, h5 a, h6 a": {
              textDecoration: "none",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

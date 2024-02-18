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
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "h1 a, h2 a, h3 a, h4 a, h5 a, h6 a": {
              textDecoration: "none",
            },
          },
        },
        v: {
          css: {
            "--tw-prose-body": theme("colors.v[900]"),
            "--tw-prose-headings": theme("colors.v[900]"),
            "--tw-prose-lead": theme("colors.v[700]"),
            "--tw-prose-links": theme("colors.v[900]"),
            "--tw-prose-bold": theme("colors.v[900]"),
            "--tw-prose-counters": theme("colors.v[600]"),
            "--tw-prose-bullets": theme("colors.v[400]"),
            "--tw-prose-hr": theme("colors.v[300]"),
            "--tw-prose-quotes": theme("colors.v[900]"),
            "--tw-prose-quote-borders": theme("colors.v[300]"),
            "--tw-prose-captions": theme("colors.v[700]"),
            "--tw-prose-code": theme("colors.v[900]"),
            "--tw-prose-pre-code": theme("colors.v[100]"),
            "--tw-prose-pre-bg": theme("colors.v[900]"),
            "--tw-prose-th-borders": theme("colors.v[300]"),
            "--tw-prose-td-borders": theme("colors.v[200]"),
            "--tw-prose-invert-body": theme("colors.v[200]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.v[300]"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.v[400]"),
            "--tw-prose-invert-bullets": theme("colors.v[600]"),
            "--tw-prose-invert-hr": theme("colors.v[700]"),
            "--tw-prose-invert-quotes": theme("colors.v[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.v[700]"),
            "--tw-prose-invert-captions": theme("colors.v[400]"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.v[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.v[600]"),
            "--tw-prose-invert-td-borders": theme("colors.v[700]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

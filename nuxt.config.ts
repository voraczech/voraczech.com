export default defineNuxtConfig({
  experimental: {
    viewTransition: true,
  },

  ssr: true,
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
  ],

  content: {
    build: {
      markdown: {
        remarkPlugins: {
          "remark-reading-time": {},
        },
        rehypePlugins: {
          "rehype-external-links": {
            target: "_blank",
            rel: ["nofollow", "noopener", "noreferrer"],
          },
        },
      },
    },
  },

  googleFonts: {
    families: {
      "Noto Serif": [400, 500, 600, 700],
    },
  },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },

  compatibilityDate: "2025-01-25",
})

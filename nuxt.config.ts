export default defineNuxtConfig({
  experimental: {
    viewTransition: true,
  },

  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
  ],

  content: {
    locales: ["en-GB", "cs"],
    markdown: {
      remarkPlugins: ["remark-reading-time"],
      rehypePlugins: [
        [
          "rehype-external-links",
          { target: "_blank", rel: ["nofollow", "noopener", "noreferrer"] },
        ],
      ],
    },
  },

  googleFonts: {
    families: {
      "PT Serif": [400, 700],
    },
  },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
})

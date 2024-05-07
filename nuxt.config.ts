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
    contentHead: false,
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
      // "PT Serif": [400, 700],
      "Noto Serif": [400, 500, 600, 700],
    },
  },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
})

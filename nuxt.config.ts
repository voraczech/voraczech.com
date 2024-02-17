export default defineNuxtConfig({
  experimental: {
    viewTransition: true,
  },

  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
  ],

  content: {
    locales: ["en", "cs"],
    markdown: { remarkPlugins: ["remark-reading-time"] },
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

import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  experimental: {
    viewTransition: true,
  },

  runtimeConfig: {
    public: {
      baseUrl: "https://voraczech.com",
    },
  },

  ssr: true,
  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  modules: [
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/i18n",
  ],

  content: {
    build: {
      markdown: {
        remarkPlugins: {
          "remark-reading-time": {},
        },
        rehypePlugins: {
          "rehype-external-links": {
            options: {
              target: "_blank",
              rel: ["nofollow", "noopener", "noreferrer"],
            },
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

  i18n: {
    locales: [
      { code: "en", name: "English", language: "en-GB" },
      { code: "cs", name: "Česky", language: "cs-CZ" },
    ],
    // strategy: "prefix_except_default",
    // defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
  },

  routeRules: {
    "/": { redirect: "/en" }, // https://github.com/nuxt-modules/i18n/issues/700#issuecomment-2204107700
    "/travel/baku": { redirect: "/en/travel/baku" },
    "/travel/budapest": { redirect: "/en/travel/budapest" },
    "/travel/tips": { redirect: "/en/travel/tips" },
    "/calm/vipassana-pred": { redirect: "/cs/klid/vipassana-pred" },
    "/sakartvelo/kulturni-rozdily": {
      redirect: "/cs/sakartvelo/kulturni-rozdily",
    },
  },

  vite: { plugins: [tailwindcss()] },

  compatibilityDate: "2025-01-25",
})

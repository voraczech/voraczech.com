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

  i18n: {
    locales: [
      { code: "en", name: "English", language: "en-GB" },
      { code: "cs", name: "Česky", language: "cs-CZ" },
    ],
    // strategy: "prefix_except_default",
    // defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
  },

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },

  routeRules: {
    "/": { prerender: false }, // https://github.com/nuxt-modules/i18n/issues/700#issuecomment-2204107700
    "/calm/vipassana-pred": {
      redirect: "/cs/klid/vipassana-pred",
    },
    "/sakartvelo/kulturni-rozdily": {
      redirect: "/cs/sakartvelo/kulturni-rozdily",
    },
  },

  compatibilityDate: "2025-01-25",
})

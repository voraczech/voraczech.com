import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  srcDir: "app/",

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

  // seo must be before content
  modules: [
    "@nuxt/image",
    "@nuxtjs/i18n",
    "@nuxtjs/seo",
    "@nuxt/content",
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

  i18n: {
    locales: [
      { code: "en", name: "English", language: "en-GB" },
      { code: "cs", name: "Česky", language: "cs-CZ" },
    ],
    strategy: "prefix_except_default",
    defaultLocale: "en",
    vueI18n: "../i18n.config.ts",
    detectBrowserLanguage: false,
  },

  routeRules: {
    // "/": { redirect: "/en" }, // https://github.com/nuxt-modules/i18n/issues/700#issuecomment-2204107700
    "/travel/baku": { redirect: "/baku" },
    "/travel/budapest": { redirect: "/budapest" },
    "/travel/tips": { redirect: "/travel-tips" },
    "/calm/vipassana-pred": { redirect: "/cs/vipassana-pred" },
    "/sakartvelo/kulturni-rozdily": {
      redirect: "/cs/sakartvelo-kulturni-rozdily",
    },
  },

  site: {
    url: "https://voraczech.com",
    name: "voraczech;",
  },
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;500;600;700&display=swap",
        },
      ],
    },
  },
  vite: { plugins: [tailwindcss()] },

  compatibilityDate: "2026-02-12",
})

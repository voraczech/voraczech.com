import type { LocaleObject } from "@nuxtjs/i18n"

type LanguageLink = {
  [key in LocaleObject["code"]]: string
}

const languageLinks: LanguageLink[] = [
  // menu
  {
    en: "/about",
    cs: "/cs/o-mne",
  },
  // posts
  {
    en: "/prepper",
    cs: "/cs/prepper",
  },
  {
    en: "/ai-links",
    cs: "/cs/ai-odkazy",
  },
  {
    en: "/links",
    cs: "/cs/odkazy",
  },
  {
    en: "/apps",
    cs: "/cs/aplikace",
  },
  // travel
  {
    en: "/budapest",
    cs: "/cs/budapest",
  },
  {
    en: "/travel-tips",
    cs: "/cs/cestovni-tipy",
  },
]

export default languageLinks

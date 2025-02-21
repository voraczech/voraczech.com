import type { LocaleObject } from "@nuxtjs/i18n"

type LanguageLink = {
  [key in LocaleObject["code"]]: string
}

const languageLinks: LanguageLink[] = [
  // menu
  {
    en: "/en/calm",
    cs: "/cs/klid",
  },
  {
    en: "/en/dev",
    cs: "/cs/vyvoj",
  },
  {
    en: "/en/travel",
    cs: "/cs/cestovani",
  },
  {
    en: "/en/about",
    cs: "/cs/o-mne",
  },
  // posts
  // calm
  {
    en: "/en/calm/prepper",
    cs: "/cs/klid/prepper",
  },
  // dev
  {
    en: "/en/dev/ai-links",
    cs: "/cs/vyvoj/ai-odkazy"
  }
  // travel
  {
    en: "/en/travel/budapest",
    cs: "/cs/cestovani/budapest",
  },
]

export default languageLinks

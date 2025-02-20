import type { LocaleObject } from "@nuxtjs/i18n"

type LanguageLink = {
  [key in LocaleObject["code"]]: string
}

const languageLinks: LanguageLink[] = [
  // menu
  {
    en: "/en/travel",
    cs: "/cs/cestovani",
  },
  {
    en: "/en/about",
    cs: "/cs/o-mne",
  },
  // posts
  {
    en: "/en/travel/budapest",
    cs: "/cs/cestovani/budapest",
  },
  {
    en: "/en/calm/prepper",
    cs: "/cs/klid/prepper",
  },
]

export default languageLinks

import type { LocaleObject } from "@nuxtjs/i18n"

type LanguageLink = {
  [key in LocaleObject["code"]]: string
}

const languageLinks: LanguageLink[] = [
  {
    en: "/en/travel",
    cs: "/cs/cestovani",
  },
  {
    en: "/en/about",
    cs: "/cs/o-mne",
  },
  {
    en: "/en/travel/budapest",
    cs: "/cs/cestovani/budapest",
  },
]

export default languageLinks

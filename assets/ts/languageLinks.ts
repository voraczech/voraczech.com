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
    en: "/en/sakartvelo",
    cs: "/cs/sakartvelo",
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
    cs: "/cs/vyvoj/ai-odkazy",
  },
  // sakartvelo
  {
    en: "/en/sakartvelo/links",
    cs: "/cs/sakartvelo/odkazy",
  },
  {
    en: "/en/sakartvelo/apps",
    cs: "/cs/sakartvelo/aplikace",
  },
  // travel
  {
    en: "/en/travel/budapest",
    cs: "/cs/cestovani/budapest",
  },
  {
    en: "/en/travel/tips",
    cs: "/cs/cestovani/tipy",
  },
]

export default languageLinks

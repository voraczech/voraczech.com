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
    en: "/ai-links",
    cs: "/cs/ai-odkazy",
  },
  // baku missing
  {
    en: "/budapest",
    cs: "/cs/budapest",
  },
  {
    en: "/dev-links",
    cs: "/cs/dev-links",
  },
  {
    en: "/prepper",
    cs: "/cs/prepper",
  },
  {
    en: "/privacy",
    cs: "/cs/soukromi",
  },
  {
    en: "/sakartvelo-apps",
    cs: "/cs/sakartvelo-aplikace",
  },
  {
    en: "/sakartvelo-links",
    cs: "/cs/sakartvelo-odkazy",
  },
  // {
  //   en: "/travel-tips",
  //   cs: "/cs/cestovni-tipy",
  // },
]

export default languageLinks

export default defineI18nConfig(() => ({
  legacy: false,
  flatJson: true,
  messages: {
    en: {
      "menu:about": "About",

      "content:none": "No articles found.",
      "article:timeRead": "min read",
      "article:updated": "Updated",
      "home:title": "Articles",
      "home:ogImageAlt": "A calm lake and forest landscape",
      "breadcrumb:home": "Home",
      "footer:contact": "Contact and about",
      "footer:source": "Source code",
    },
    cs: {
      "menu:about": "O mně",

      "content:none": "Žádné články nebyly nalezeny.",
      "article:timeRead": "minut čtení",
      "article:updated": "Aktualizováno",
      "home:title": "Články",
      "home:ogImageAlt": "Klidné jezero a lesní krajina",
      "breadcrumb:home": "Domů",
      "footer:contact": "Kontakt a o mně",
      "footer:source": "Zdrojový kód",
    },
  },
}))

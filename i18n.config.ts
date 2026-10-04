export default defineI18nConfig(() => ({
  legacy: false,
  flatJson: true,
  messages: {
    en: {
      "menu:about": "About",

      "content:none": "No articles found.",
      "article:timeRead": "min read",
      "article:updated": "Updated",
      "home:title": "Travel, technology and practical notes",
      "home:intro":
        "Personal notes and curated resources on places, software, privacy and everyday decisions.",
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
      "home:title": "Cestování, technologie a praktické poznámky",
      "home:intro":
        "Osobní poznámky a vybrané zdroje o místech, softwaru, soukromí a každodenním rozhodování.",
      "home:ogImageAlt": "Klidné jezero a lesní krajina",
      "breadcrumb:home": "Domů",
      "footer:contact": "Kontakt a o mně",
      "footer:source": "Zdrojový kód",
    },
  },
}))

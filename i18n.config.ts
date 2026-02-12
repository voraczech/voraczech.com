export default defineI18nConfig(() => ({
  legacy: false,
  flatJson: true,
  messages: {
    en: {
      "menu:about": "About",

      "content:none": "No articles found.",
      "article:timeRead": "min read",
      "article:updated": "Updated",
    },
    cs: {
      "menu:about": "O mně",

      "content:none": "Žádné články nebyly nalezeny.",
      "article:timeRead": "minut čtení",
      "article:updated": "Aktualizováno",
    },
  },
}))

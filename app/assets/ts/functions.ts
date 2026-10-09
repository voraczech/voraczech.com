export const getReadableDate = (dateString: string) => {
  const date = new Date(dateString)
  const { locale, locales } = useI18n()
  const lang =
    locales.value.find((l) => l.code === locale.value)?.language ?? "en"
  return date.toLocaleDateString(lang, {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export const getReadableTimeRead = (minutes: number) => {
  const { t } = useI18n()
  return `${Math.ceil(minutes)} ${t("article:timeRead")}`
}

export function getArticleId(articlePath: string | undefined): string {
  // Encode the full path so names are valid CSS identifiers and unique across locales.
  return `article-${Array.from(articlePath || "", (char) =>
    char.codePointAt(0)!.toString(16),
  ).join("-")}`
}

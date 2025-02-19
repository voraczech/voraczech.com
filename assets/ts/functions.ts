export function getArticleId(articlePath: string | undefined): string {
  return articlePath?.split("/").pop() || ""
}

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

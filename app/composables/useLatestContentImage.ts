export async function useLatestContentImage() {
  const { locale } = useI18n()
  const collection = `content_${locale.value}` as "content_en" | "content_cs"

  const { data } = await useAsyncData(`latest-content-image-${locale.value}`, () =>
    queryCollection(collection).order("created_at", "DESC").all(),
  )

  const latestArticleWithImage = computed(() =>
    data.value?.find((article) => article.image?.src),
  )

  return {
    image: computed(() => latestArticleWithImage.value?.image?.src),
    imageAlt: computed(() => latestArticleWithImage.value?.image?.alt),
  }
}

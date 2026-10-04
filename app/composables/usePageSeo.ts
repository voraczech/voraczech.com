interface PageSeoOptions {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
}

export function usePageSeo({
  title,
  description,
  path,
  image,
  imageAlt = "voraczech",
}: PageSeoOptions) {
  const { public: publicConfig } = useRuntimeConfig()
  const canonicalUrl = new URL(path, publicConfig.baseUrl).toString()
  const imageUrl = image
    ? new URL(image, publicConfig.baseUrl).toString()
    : undefined

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: "website",
    ogUrl: canonicalUrl,
    ogImage: imageUrl,
    ogImageAlt: imageAlt,
    twitterTitle: title,
    twitterDescription: description,
    twitterCard: "summary_large_image",
    twitterImage: imageUrl,
    twitterImageAlt: imageAlt,
  })

  useHead({
    link: [{ rel: "canonical", href: canonicalUrl }],
  })

  return { canonicalUrl, imageUrl }
}

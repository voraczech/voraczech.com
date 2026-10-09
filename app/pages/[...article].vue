<template>
  <article v-if="doc" class="prose prose-v">
    <h1
      class="text-2xl font-bold font-serif mb-0 text-v-900 tracking-tight"
      :style="{
        'view-transition-name': `${getArticleId(doc.path)}-header`,
      }"
    >
      {{ doc.title }}
    </h1>
    <div class="text-v-700 text-sm mt-1">
      <time v-if="doc.created_at" :datetime="doc.created_at">
        {{ getReadableDate(doc.created_at) }}
      </time>
      &#x2022;
      <span>{{
        getReadableTimeRead(doc.meta?.readingTime?.minutes || 1)
      }}</span>

      <span v-if="doc.updated_at" :datatype="doc.updated_at">
        &#x2022;
        <time class="text-v-700 text-sm m-0" :datetime="doc.updated_at">
          {{ $t("article:updated") }}: {{ getReadableDate(doc.updated_at) }}
        </time>
      </span>
    </div>
    <ArticleImage
      v-if="doc.image?.src || doc.image?.emoji"
      :image="doc.image"
      :title="doc.title"
      class="w-full rounded-md mx-auto my-8"
      :style="{
        'view-transition-name': `${getArticleId(doc.path)}-img`,
      }"
    />
    <ContentRenderer :value="doc" />
  </article>
</template>

<script setup lang="ts">
import {
  getArticleId,
  getReadableDate,
  getReadableTimeRead,
} from "~/assets/ts/functions"

const { locale } = useI18n()
const route = useRoute()

const { data: doc } = await useAsyncData(route.path, async () => {
  return await queryCollection(`content_${locale.value}`)
    .path(route.path)
    .first()
})

const config = useRuntimeConfig()
const url = config.public.baseUrl
const postLink = url + doc.value?.path
const { image: latestImage, imageAlt: latestImageAlt } =
  await useLatestContentImage()
const articleImage = doc.value?.image?.src
  ? new URL(doc.value.image.src, url).toString()
  : latestImage.value
    ? new URL(latestImage.value, url).toString()
    : undefined
const articleImageAlt =
  (doc.value?.image?.src ? doc.value.image.alt : latestImageAlt.value) || doc.value?.title

useSeoMeta({
  title: doc.value?.title,
  description: doc.value?.description,
  author: "Jakub Voráček",
  ogTitle: doc.value?.title,
  ogDescription: doc.value?.description,
  ogType: "article",
  ogUrl: postLink,
  ogImage: articleImage,
  ogImageAlt: articleImageAlt,
  twitterTitle: doc.value?.title,
  twitterDescription: doc.value?.description,
  twitterCard: "summary_large_image",
  twitterImage: articleImage,
  twitterImageAlt: articleImageAlt,
  articlePublishedTime: doc.value?.created_at,
  articleModifiedTime: doc.value?.updated_at,
  articleTag: doc.value?.meta?.tags,
})

useHead({ link: [{ rel: "canonical", href: postLink }] })

useSchemaOrg([
  defineArticle({
    headline: doc.value?.title,
    description: doc.value?.description,
    image: articleImage,
    datePublished: doc.value?.created_at,
    dateModified: doc.value?.updated_at || doc.value?.created_at,
    author: { "@id": `${url}/#identity` },
  }),
  defineBreadcrumb({
    itemListElement: [
      { name: locale.value === "cs" ? "Domů" : "Home", item: `${url}${locale.value === "cs" ? "/cs" : "/"}` },
      { name: doc.value?.title || "Article", item: postLink },
    ],
  }),
])
</script>

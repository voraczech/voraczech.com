<template>
  <main>
    <h1 class="sr-only">{{ $t("home:title") }}</h1>
    <div v-if="data" class="flex flex-col gap-8">
      <NuxtLink
        v-for="article in data"
        :key="article.path"
        :to="article.path"
        class="text-decoration-none flex flex-row-reverse sm:flex-row gap-4 sm:gap-6 items-start"
      >
        <ArticleImage
          v-if="article.image?.src || article.image?.emoji"
          :image="article.image"
          :title="article.title"
          compact
          class="w-20 shrink-0 sm:w-52"
          :style="{
            'view-transition-name': `${getArticleId(article.path)}-img`,
          }"
        />
        <div>
          <div class="text-v-700 text-sm">
            <h2
              class="font-semibold text-v-900"
              :style="{
                'view-transition-name': `${getArticleId(article.path)}-header`,
              }"
            >
              {{ article.title }}
            </h2>
            <p class="text-v-800 text-xs sm:text-sm">
              {{ article.description }}
            </p>
            <div class="text-xs mt-2">
              <time :datetime="article.created_at">
                {{ getReadableDate(article.created_at) }}
              </time>
              &#x2022;
              <span>{{
                getReadableTimeRead(article?.meta?.readingTime?.minutes)
              }}</span>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
    <div v-else>
      <p>
        {{ $t("content:none") }}
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
import {
  getArticleId,
  getReadableDate,
  getReadableTimeRead,
} from "~/assets/ts/functions"

const { locale, t } = useI18n()
const route = useRoute()
const { data } = await useAsyncData(route.path, () => {
  return queryCollection(`content_${locale.value}`)
    .where("path", "LIKE", `${route.path}%`)
    .order("created_at", "DESC") // needs snake_case https://github.com/nuxt/content/issues/3088#issuecomment-2634542883
    .all()
})

const seo = computed(() =>
  locale.value === "cs"
    ? {
        title: "Cestování, technologie a praktické poznámky",
        description:
          "Osobní poznámky o cestování, technologiích, soukromí a praktických nápadech v češtině i angličtině.",
      }
    : {
        title: "Travel, technology and practical notes",
        description:
          "Personal notes about travel, technology, privacy and practical ideas, written in English and Czech.",
      },
)

const pagePath = locale.value === "cs" ? "/cs" : "/"
const latestArticleWithImage = data.value?.find((article) => article.image?.src)
const { canonicalUrl } = usePageSeo({
  title: seo.value.title,
  description: seo.value.description,
  path: pagePath,
  image: latestArticleWithImage?.image?.src,
  imageAlt: latestArticleWithImage?.image?.alt || t("home:ogImageAlt"),
})

useSchemaOrg([
  defineWebPage({
    name: seo.value.title,
    description: seo.value.description,
  }),
  defineBreadcrumb({
    itemListElement: [{ name: t("breadcrumb:home"), item: canonicalUrl }],
  }),
])
</script>

<template>
  <article class="prose prose-v" v-if="doc">
    <h1
      class="text-2xl font-bold font-serif mb-0 text-v-900 tracking-tight"
      :style="{
        'view-transition-name': `${getArticleId(doc.path)}-header`,
      }"
    >
      {{ doc.title }}
    </h1>
    <div class="text-v-700 text-sm m-0">
      <time :datetime="doc.createdAt" v-if="doc.createdAt">
        {{ getReadableDate(doc.createdAt) }}
      </time>
      &#x2022;
      <span>{{ getReadableTimeRead(doc.meta.readingTime.minutes) }}</span>

      <span :datatype="doc.updatedAt" v-if="doc.updatedAt">
        &#x2022;
        <time class="text-v-700 text-sm m-0" :datetime="doc.updatedAt">
          {{ $t("article:updated") }}: {{ getReadableDate(doc.updatedAt) }}
        </time>
      </span>
    </div>
    <NuxtImg
      v-if="doc.image"
      :src="doc.image.src"
      :alt="doc.image.alt"
      width="100%"
      sizes="320px sm:450px md:512px lg:740px"
      class="rounded-md my-6 mx-auto"
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

const url = "https://voraczech.com"
const postLink = url + doc.value?.path

useHead({
  title: doc.value?.title,
  meta: [
    { key: "og:title", name: "og:title", content: doc.value?.title },
    {
      key: "og:description",
      name: "og:description",
      content: doc.value?.description,
    },
    {
      key: "description",
      name: "description",
      content: doc.value?.description,
    },
    { key: "og:type", name: "og:type", content: "article" },
    {
      key: "og:url",
      name: "og:url",
      content: postLink,
    },
    { name: "twitter:text:title", content: doc.value?.title },
    { name: "twitter:card", content: "summary" },
    {
      name: "article:article:tag",
      content: doc.value?.meta.tags ? doc.value.meta.tags?.toString() : "",
    },
    {
      property: "og:image",
      name: "image",
      content: url + "/_ipx/w_512" + doc.value?.image?.src,
    },
    { name: "og:image:alt", content: doc.value?.title },
    {
      name: "twitter:image",
      content: url + doc.value?.image?.src,
    },
    {
      name: "twitter:image:alt",
      content: url + doc.value?.image?.alt,
    },
    {
      name: "author",
      content: "voraczech",
    },
    { name: "article:published_time", content: doc.value?.createdAt },
  ],
  link: [
    {
      rel: "canonical",
      href: postLink,
    },
  ],
})
</script>

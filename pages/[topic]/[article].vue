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
      <time :datetime="doc.meta?.createdAt" v-if="doc.meta.createdAt">
        {{ getReadableDate(doc.meta.createdAt) }}
      </time>
      &#x2022;
      <span>{{ doc.meta.readingTime.text }}</span>
    </div>
    <NuxtImg
      v-if="doc.meta.image"
      :src="doc.meta.image.src"
      :alt="doc.meta.image.alt"
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
import { getArticleId, getReadableDate } from "~/assets/ts/functions"

const route = useRoute()

const { data: doc } = await useAsyncData(route.path, async () => {
  return await queryCollection("content").path(route.path).first()
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
      content: url + "/_ipx/w_512" + doc.value?.meta.image?.src,
    },
    { name: "og:image:alt", content: doc.value?.title },
    {
      name: "twitter:image",
      content: url + doc.value?.meta.image?.src,
    },
    {
      name: "twitter:image:alt",
      content: url + doc.value?.meta.image?.alt,
    },
    {
      name: "author",
      content: "voraczech",
    },
    { name: "article:published_time", content: doc.value?.meta.createdAt },
  ],
  link: [
    {
      rel: "canonical",
      href: postLink,
    },
  ],
})
</script>

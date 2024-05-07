<template>
  <article class="prose prose-v">
    <ContentDoc v-slot="{ doc }">
      <h1
        class="text-2xl font-bold font-serif mb-0 text-v-900 tracking-tight"
        :style="{
          'view-transition-name': `${getArticleId(doc._path)}-header`,
        }"
      >
        {{ doc.title }}
      </h1>
      <div class="text-v-700 text-sm m-0">
        <time :datetime="doc.createdAt">
          {{ getReadableDate(doc.createdAt) }}
        </time>
        &#x2022;
        <span>{{ doc.readingTime.text }}</span>
      </div>
      <NuxtImg
        v-if="doc.image"
        :src="doc.image.src"
        :alt="doc.image.alt"
        width="100%"
        class="rounded-md my-6 mx-auto"
        :style="{ 'view-transition-name': `${getArticleId(doc._path)}-img` }"
      />
      <!-- <div v-if="doc.body?.toc?.links">
        <ul>
          <li v-for="link in doc.body?.toc?.links" :key="link.id">
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </div> -->
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </article>
</template>

<script setup lang="ts">
import { getArticleId } from "~/assets/ts/functions"
const getReadableDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

const route = useRoute()
const { data: doc } = await useAsyncData(route.path, async () => {
  return await queryContent("").where({ _path: route.path }).findOne()
})

const url = "https://voraczech.com"
const postLink = url + doc.value?._path

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
      content: doc.value?.tags ? doc.value.tags?.toString() : "",
    },
    {
      property: "og:image",
      name: "image",
      content: url + doc.value?.image?.src,
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

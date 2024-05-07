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
</script>

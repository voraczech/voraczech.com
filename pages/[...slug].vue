<template>
  <main>
    <div class="flex flex-col gap-8" v-if="data">
      <NuxtLink
        v-for="article in orderList(data)"
        :key="article.path"
        :to="article.path"
        class="text-decoration-none flex flex-col sm:flex-row-reverse gap-4 sm:gap-6"
      >
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
            <p class="text-v-800">
              {{ article.description }}
            </p>
            <div class="text-xs mt-2">
              <time :datetime="article.meta.createdAt">
                {{ getReadableDate(article.meta.createdAt) }}
              </time>
              &#x2022;
              <span>{{ article?.meta?.readingTime?.text }}</span>
            </div>
          </div>
        </div>
        <NuxtImg
          v-if="article.meta?.image"
          :src="article.meta?.image.src"
          :alt="article.meta?.image.alt"
          sizes="100vw sm:260px"
          class="object-cover aspect-video"
          densities="x1 x2"
          :style="{
            'view-transition-name': `${getArticleId(article.path)}-img`,
          }"
        />
      </NuxtLink>
    </div>
    <div v-else>
      <p>No articles found.</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { getArticleId, getReadableDate } from "~/assets/ts/functions"

const route = useRoute()
const { data } = await useAsyncData(route.path, () => {
  return queryCollection("content")
    .where("path", "LIKE", `${route.path}%`)
    .all()
})

const orderList = (list: any[] | null) => {
  return list?.sort((a, b) => {
    return (
      new Date(b.meta.createdAt).getTime() -
      new Date(a.meta.createdAt).getTime()
    )
  })
}
</script>

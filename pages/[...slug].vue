<template>
  <main>
    <div class="flex flex-col gap-8" v-if="data">
      <NuxtLink
        v-for="article in data"
        :key="article.path"
        :to="article.path"
        class="text-decoration-none flex flex-row-reverse sm:flex-row gap-4 sm:gap-6 items-start justify-between"
      >
        <NuxtImg
          v-if="article.image"
          :src="article.image.src"
          :alt="article.image.alt"
          sizes="80px sm:260px"
          class="sm:object-cover sm:aspect-video max-w-20 sm:max-w-52"
          densities="x1 x2"
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
const { locale } = useI18n()
import {
  getArticleId,
  getReadableDate,
  getReadableTimeRead,
} from "~/assets/ts/functions"

const route = useRoute()
const { data } = await useAsyncData(route.path, () => {
  return queryCollection(`content_${locale.value}`)
    .where("path", "LIKE", `${route.path}%`)
    .order("created_at", "DESC") // needs snake_case https://github.com/nuxt/content/issues/3088#issuecomment-2634542883
    .all()
})
</script>

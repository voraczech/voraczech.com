<template>
  <main>
    <ContentList :path="$route.params.slug[0]">
      <template #default="{ list }">
        <div class="flex flex-col gap-8">
          <NuxtLink
            v-for="article in list"
            :key="article._path"
            :to="article._path"
            class="text-decoration-none flex gap-8"
          >
            <NuxtImg
              v-if="article.image"
              :src="article.image.src"
              :alt="article.image.alt"
              width="200"
              class="rounded"
              :style="{ 'view-transition-name': `img` }"
            />
            <div>
              <div class="text-v-700 text-sm">
                <h2
                  class="font-semibold text-v-900"
                  style="view-transition-name: header"
                >
                  {{ article.title }}
                </h2>
                <p class="text-v-800">{{ article.description }}</p>
                <div class="text-xs mt-2">
                  <time :datetime="article.createdAt">
                    {{ getReadableDate(article.createdAt) }}
                  </time>
                  &#x2022;
                  <span>{{ article.readingTime.text }}</span>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </template>
      <template #not-found>
        <p>No articles found.</p>
      </template>
    </ContentList>
  </main>
</template>

<script setup>
const getReadableDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString({
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}
</script>

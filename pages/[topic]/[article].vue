<template>
  <article class="prose">
    <ContentDoc v-slot="{ doc }">
      <h1
        class="text-2xl font-bold font-[serif] mb-0 text-v-900"
        style="view-transition-name: header"
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
        class="rounded-md my-6"
        :style="{ 'view-transition-name': `img` }"
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

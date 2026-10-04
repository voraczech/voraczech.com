<script setup lang="ts">
withDefaults(defineProps<{
  src: string
  alt?: string
  loading?: "eager" | "lazy"
}>(), {
  alt: "",
  loading: "lazy",
})
</script>

<template>
  <figure class="flex flex-col items-center">
    <NuxtImg
      :src="src"
      :alt="alt"
      :loading="loading"
      class="aspect-video w-full rounded-md object-cover mt-6"
      width="740"
      height="416"
      sizes="320px sm:450px md:512px lg:740px"
    />
    <figcaption v-if="alt">{{ alt }}</figcaption>
  </figure>
</template>

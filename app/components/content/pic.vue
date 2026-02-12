<script setup>
defineProps({
  src: String,
  alt: String,
  loading: {
    type: String,
    default: "lazy",
  },
})
</script>

<template>
  <figure class="flex flex-col items-center">
    <NuxtImg
      :src="src"
      :alt="alt"
      :loading="loading"
      class="rounded-md mt-6"
      width="100%"
      sizes="320px sm:450px md:512px lg:740px"
    />
    <figcaption v-if="alt">{{ alt }}</figcaption>
  </figure>
</template>

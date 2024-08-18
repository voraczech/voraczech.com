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
  <NuxtImg
    :src="src"
    :alt="alt"
    :loading="loading"
    :modifiers="{ rotate: null }"
    class="rounded-md my-6 mx-auto"
    width="100%"
    sizes="320px sm:450px md:512px lg:740px"
  />
</template>

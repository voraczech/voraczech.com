<script setup>
defineProps({
  src: String,
  alt: String,
})
</script>

<template>
  <NuxtImg
    :src="imgSrc"
    :alt="imgAlt"
    width="100%"
    sizes="320px sm:450px md:512px lg:740px"
    class="rounded-md my-6 mx-auto"
  />
</template>

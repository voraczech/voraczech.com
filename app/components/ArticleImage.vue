<script setup lang="ts">
withDefaults(defineProps<{
  image?: { src?: string, emoji?: string, alt?: string }
  title?: string
  compact?: boolean
}>(), {
  image: undefined,
  title: "",
  compact: false,
})
</script>

<template>
  <NuxtImg
    v-if="image?.src"
    :src="image.src"
    :alt="image.alt || title"
    :width="compact ? 208 : 740"
    :height="compact ? 117 : 416"
    :sizes="compact ? '80px sm:260px' : '320px sm:450px md:512px lg:740px'"
    densities="x1 x2"
    class="aspect-video object-cover"
  />
  <div
    v-else-if="image?.emoji"
    role="img"
    :aria-label="image.alt || title || image.emoji"
    class="emoji-image aspect-video rounded-sm overflow-hidden"
  >
    <span aria-hidden="true">{{ image.emoji }}</span>
  </div>
</template>

<style scoped>
.emoji-image {
  container-type: inline-size;
  background: radial-gradient(ellipse at center, var(--color-v-100), var(--color-v-300));
}

.emoji-image span {
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 9;
  font-family: "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif;
  font-size: min(26cqw, 8rem);
  line-height: 1;
}
</style>

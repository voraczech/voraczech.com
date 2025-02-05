<template>
  <div class="px-6">
    <div class="max-w-prose mx-auto">
      <header class="flex items-baseline justify-between py-8">
        <NuxtLink
          to="/"
          class="text-v-600 v-shadow text-2xl font-bold font-serif"
        >
          <span class="sm:hidden">v;</span>
          <span class="hidden sm:inline-block">voraczech;</span>
        </NuxtLink>
        <nav>
          <ul class="flex gap-6 text-sm lowercase items-baseline">
            <li v-for="link in data" :key="link._path">
              <NuxtLink :to="link.path">{{ link.title }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
              <button
                v-for="_locale of filteredLocales"
                :key="_locale.code"
                @click="setLocale(_locale.code)"
                class="bg-v-600 text-v-50 rounded px-2 py-1 w-9 transition-all"
              >
                {{ _locale.code }}
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { setLocale, locales, locale } = useI18n()

const filteredLocales = computed(() => {
  return locales.value.filter((_locale) => _locale.code !== locale.value)
})

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
  title: "voraczech;",
})

useSeoMeta({
  ogSiteName: "voraczech.com",
  ogType: "website",
  twitterCard: "summary_large_image",
})

const { data } = await useAsyncData("navigation", () => {
  return queryCollectionNavigation(`content_${locale.value}`)
})
</script>

<style>
.v-shadow {
  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
    0px -1px 0px rgba(0, 0, 0, 0.7);
}
</style>

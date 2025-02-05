<template>
  <div class="px-6">
    <div class="max-w-prose mx-auto">
      <header class="flex items-baseline justify-between py-8">
        <NuxtLink
          :to="`/${locale}`"
          class="text-v-600 v-shadow text-2xl font-bold font-serif"
        >
          <span class="sm:hidden">v;</span>
          <span class="hidden sm:inline-block">voraczech;</span>
        </NuxtLink>
        <nav>
          <ul class="flex gap-6 text-sm lowercase items-baseline">
            <li v-for="link in data?.[0].children" :key="link._path">
              <NuxtLink :to="link.path">{{ link.title }}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/en/about" v-if="locale === 'en'">{{
                $t("menu:about")
              }}</NuxtLink>
              <NuxtLink to="/cs/o-mne" v-else-if="locale === 'cs'">{{
                $t("menu:about")
              }}</NuxtLink>
            </li>
            <li>
              <button
                @click="setLocale(secondLang.code)"
                class="bg-v-600 text-v-50 rounded px-2 py-1 w-9 transition-all"
              >
                <transition name="fade" mode="out-in">
                  <span :key="secondLang.code">
                    {{ secondLang.code }}
                  </span>
                </transition>
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

const secondLang = computed(() => {
  return (
    locales.value.find((_locale) => _locale.code !== locale.value) ||
    locales.value[0]
  )
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

const { data, refresh } = await useAsyncData("navigation", () => {
  return queryCollectionNavigation(`content_${locale.value}`)
})

watch(locale, async () => {
  await refresh()
})
</script>

<style>
.v-shadow {
  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
    0px -1px 0px rgba(0, 0, 0, 0.7);
}

.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-75;
}

.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}
</style>

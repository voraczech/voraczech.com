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
                @click="changeLocale(secondLang)"
                class="bg-v-600 text-v-50 rounded-sm px-2 py-1 w-9 transition-all"
              >
                <transition name="slide" mode="out-in">
                  <div :key="secondLang.code">
                    {{ secondLang.code }}
                  </div>
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
import type { LocaleObject } from "@nuxtjs/i18n"
import langugageLinks from "~/assets/ts/languageLinks"
const { setLocale, locales, locale } = useI18n()

const secondLang = computed(() => {
  return (
    locales.value.find((_locale) => _locale.code !== locale.value) ||
    locales.value[0]
  )
})

const route = useRoute()
function polishRoute({ lang, path }: { lang: string; path: string }) {
  return `/${lang}/${path}`
}

function changeLocale({ code }: LocaleObject) {
  const currentPath = route.path

  const toGo = langugageLinks.find(
    (link) =>
      polishRoute({ lang: locale.value, path: link[locale.value] }) ===
      currentPath
  )?.[code]

  setLocale(code)
  if (toGo) {
    navigateTo(polishRoute({ lang: code, path: toGo }))
  } else {
    navigateTo(`/${code}`)
  }
}

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
@reference "tailwindcss";
.v-shadow {
  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
    0px -1px 0px rgba(0, 0, 0, 0.7);
}

.slide-enter-active,
.slide-leave-active {
  @apply transition-all ease-out duration-300;
}

.slide-enter-from {
  @apply opacity-0 translate-x-6;
}

.slide-leave-to {
  @apply opacity-0 -translate-x-6;
}
</style>

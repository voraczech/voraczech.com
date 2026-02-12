<template>
  <div class="px-6 pb-10">
    <div class="max-w-prose mx-auto">
      <header class="flex items-baseline justify-between py-8 gap-4">
        <NuxtLink
          :to="localePath('/')"
          class="text-v-600 v-shadow text-xl font-bold font-serif"
          >voraczech;</NuxtLink
        >
        <nav>
          <ul
            class="flex flex-wrap gap-4 text-sm lowercase items-baseline justify-end"
          >
            <li>
              <NuxtLink to="/about" v-if="locale === 'en'">{{
                $t("menu:about")
              }}</NuxtLink>
              <NuxtLink to="/cs/o-mne" v-else-if="locale === 'cs'">{{
                $t("menu:about")
              }}</NuxtLink>
            </li>
            <li>
              <button
                @click="changeLocale(secondLang)"
                class="bg-v-600 text-v-50 rounded-sm px-2 py-1 w-9 transition-all cursor-pointer"
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
import languageLinks from "~/assets/ts/languageLinks"
const { setLocale, locales, locale } = useI18n()

const localePath = useLocalePath()

const secondLang = computed(() => {
  return (
    locales.value.find((_locale) => _locale.code !== locale.value) ||
    locales.value[0]
  )
})

const route = useRoute()
const currentLanguageLink = computed(() => {
  return languageLinks.find((link) => link[locale.value] === route.path)
})

function changeLocale({ code }: LocaleObject) {
  const toGo = currentLanguageLink.value?.[code]

  setLocale(code)
  if (toGo) {
    navigateTo(toGo)
  } else {
    navigateTo(localePath("/", code))
  }
}

const config = useRuntimeConfig()
const getAlternateLinks = computed(() => {
  if (!currentLanguageLink.value) return []

  return Object.entries(currentLanguageLink.value).map(([code, path]) => {
    return {
      rel: "alternate",
      hreflang: code,
      href: `${config.public.baseUrl}${path}`,
    }
  })
})

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [...getAlternateLinks.value],
  htmlAttrs: {
    lang: locale.value,
    dir: "ltr",
  },
  title: "",
})

useSeoMeta({
  ogSiteName: "voraczech",
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

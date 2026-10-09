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
              <button
                class="bg-v-600 text-v-50 rounded-sm px-2 py-1 w-9 transition-all cursor-pointer"
                @click="changeLocale(secondLang)"
              >
                <transition name="slide" mode="out-in">
                  <div :key="secondLang">
                    {{ secondLang }}
                  </div>
                </transition>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <NuxtPage />
      <footer
        class="mt-12 border-t border-v-300 pt-6 text-sm text-v-700 flex flex-wrap justify-between gap-3"
      >
        <span>&copy; {{ new Date().getFullYear() }} voraczech;</span>
        <span class="flex gap-4">
          <NuxtLink :to="locale === 'cs' ? '/cs/o-mne' : '/about'">
            {{ $t("footer:contact") }}
          </NuxtLink>
          <NuxtLink
            to="https://github.com/voraczech/voraczech.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t("footer:source") }}
          </NuxtLink>
        </span>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import languageLinks from "~/assets/ts/languageLinks"
const { setLocale, locale } = useI18n()

const localePath = useLocalePath()

const secondLang = computed(() => (locale.value === "cs" ? "en" : "cs"))

const route = useRoute()
const currentLanguageLink = computed(() => {
  return languageLinks.find((link) => link[locale.value] === route.path)
})

function changeLocale(code: "cs" | "en") {
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
  link: [...getAlternateLinks.value],
  htmlAttrs: {
    lang: locale.value,
    dir: "ltr",
  },
})

useSeoMeta({
  ogSiteName: "voraczech",
  twitterCard: "summary_large_image",
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

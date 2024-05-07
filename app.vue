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
          <ContentNavigation v-slot="{ navigation }">
            <ul class="flex gap-6">
              <li v-for="link of navigation" :key="link._path">
                <NuxtLink :to="link._path" class="lowercase text-sm">{{
                  link.title
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" class="lowercase text-sm">About</NuxtLink>
              </li>
            </ul>
          </ContentNavigation>
        </nav>
      </header>
      <NuxtPage />
    </div>
  </div>
</template>

<style>
.v-shadow {
  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
    0px -1px 0px rgba(0, 0, 0, 0.7);
}
</style>

<script setup>
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
</script>

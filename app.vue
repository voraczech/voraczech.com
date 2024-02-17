<template>
  <div class="px-6">
    <header class="flex items-center justify-between max-w-prose mx-auto py-8">
      <NuxtLink
        to="/"
        class="text-v-600 v-shadow text-3xl font-bold font-[serif]"
        >voraczech;</NuxtLink
      >
      <nav>
        <ContentNavigation v-slot="{ navigation }">
          <ul>
            <li v-for="link of navigation" :key="link._path">
              <NuxtLink :to="link._path" class="lowercase text-sm">{{
                link.title
              }}</NuxtLink>
            </li>
          </ul>
        </ContentNavigation>
      </nav>
    </header>
    <NuxtPage class="max-w-prose mx-auto page" />
  </div>
</template>

<style>
.v-shadow {
  text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.3),
    0px -1px 0px rgba(0, 0, 0, 0.7);
}
</style>

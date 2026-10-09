<template>
  <main class="prose prose-v">
    <p>
      Zdravím, můžete mě kontaktovat na
      <span>jakub&#64;voraczech.com</span>. Sledujte mě na
      <NuxtLink href="https://www.goodreads.com/voraczech" target="_blank">Goodreads</NuxtLink>. Použiju i
      <NuxtLink to="https://www.linkedin.com/in/jakubvoracek/" target="_blank">LinkedIn</NuxtLink>. Web je
      <NuxtLink href="https://github.com/voraczech/voraczech.com" target="_blank">open source</NuxtLink>.
    </p>
    <p>
      Publikuji nedokončené příspěvky, vše je v podstatě návrh. Přepracovávám,
      zejména v prvních několika dnech po datu vytvoření.
    </p>
    <p>Díky, nashle.</p>
    <hr >
    <ul>
      <li>
        <NuxtLink to="https://youtu.be/bJQj1uKtnus" target="_blank">Všechno je draft.</NuxtLink>
      </li>
      <li>
        Proč nejsou
        <NuxtLink to="https://www.wired.com/2010/05/ff-nicholas-carr/" target="_blank">odkazy v textech</NuxtLink>
        úplně nejlepší
        <NuxtLink to="https://www.roughtype.com/?p=1378" target="_blank">na soustředění</NuxtLink>.
      </li>
    </ul>
  </main>
</template>

<script setup lang="ts">
const title = "O mně, kontakt a poznámky z webu voraczech"
const description =
  "Pár slov o mně, kontakt a informace o webu voraczech s poznámkami o cestování, technologiích a soukromí."
const { image, imageAlt } = await useLatestContentImage()
const { canonicalUrl } = usePageSeo({
  title,
  description,
  path: "/cs/o-mne",
  image: image.value,
  imageAlt: imageAlt.value,
})

useSchemaOrg([
  defineWebPage({ name: title, description }),
  defineBreadcrumb({
    itemListElement: [
      { name: "Domů", item: "https://voraczech.com/cs" },
      { name: "O mně", item: canonicalUrl },
    ],
  }),
])
</script>

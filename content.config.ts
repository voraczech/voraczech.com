import { defineContentConfig, defineCollection, z } from "@nuxt/content"

const commonSchema = z.object({
  createdAt: z.string(),
  image: z.object({
    src: z.string(),
    alt: z.string(),
  }),
  meta: z.object({
    readingTime: z.object({
      text: z.string(),
      minutes: z.number(),
      time: z.number(),
      words: z.number(),
    }),
    tags: z.array(z.string()),
  }),
})

export default defineContentConfig({
  collections: {
    content_cs: defineCollection({
      type: "page",
      source: {
        include: "cs/**",
        prefix: "/cs",
      },
      schema: commonSchema,
    }),
    content_en: defineCollection({
      type: "page",
      source: {
        include: "**",
        exclude: ["cs/**"],
        prefix: "",
      },
      schema: commonSchema,
    }),
  },
})

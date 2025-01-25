import { defineContentConfig, defineCollection, z } from "@nuxt/content"

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        meta: z.object({
          createdAt: z.string(),
          image: z.object({
            src: z.string(),
            alt: z.string(),
          }),
          readingTime: z.object({
            text: z.string(),
            minutes: z.number(),
            time: z.number(),
            words: z.number(),
          }),
          tags: z.array(z.string()),
        }),
      }),
    }),
  },
})

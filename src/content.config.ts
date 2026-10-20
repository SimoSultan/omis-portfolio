import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const privacy = defineCollection({
  loader: glob({ base: "./src/content/privacy", pattern: "**/*.md" }),
});

export const collections = { privacy };

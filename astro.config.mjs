import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import remarkToc from "remark-toc";
import { SITE } from "./src/config.ts";
// https://astro.build/config
export default defineConfig({
  site: SITE.siteUrl,
  markdown: {
    syntaxHighlight: "prism",
    remarkPlugins: [remarkToc, remarkReadingTime],
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  integrations: [mdx(), sitemap(), tailwind()],
});

import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import remarkToc from "remark-toc";
import { SITE } from "./src/config.ts";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: SITE.siteUrl,
  markdown: {
    syntaxHighlight: "prism",
    remarkPlugins: [remarkToc, remarkReadingTime],
  },
  integrations: [mdx(), sitemap(), tailwind(), robotsTxt(), icon()],
});

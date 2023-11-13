import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://kylewigs.com",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx({
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    }),
  ],
});

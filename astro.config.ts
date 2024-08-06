import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import pagefind from "astro-pagefind";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/data/config";

// https://astro.build/config
export default defineConfig({
	output: "static",
	build: {
		format: "file",
	},
	integrations: [
		tailwind({ applyBaseStyles: false }),
		sitemap(),
		robotsTxt(),
		pagefind(),
	],
	site: SITE_URL,
	markdown: {
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: "nord",
			wrap: false,
		},
	},
});

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@/config";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection("blog");
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: site!,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`,
    })),
  });
};

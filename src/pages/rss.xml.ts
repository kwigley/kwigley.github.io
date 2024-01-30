import type { APIContext } from 'astro';
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import presentation from "@/data/presentation";

export async function GET(context: APIContext) {
  const posts = await getCollection("posts");
  return rss({
    title: presentation.title,
    description: presentation.desc,
    site: context.site!,
    items: posts.map((post) => ({
      ...post.data,
      pubDate: post.data.publishedAt,
      link: `/posts/${post.slug}/`,
    })),
  });
}

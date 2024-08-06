import { getCollection } from "astro:content";
import presentation from "@/data/presentation";
import rss from "@astrojs/rss";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
	const posts = await getCollection("posts", (post) => !post.data.isDraft);
	return rss({
		title: presentation.title,
		description: presentation.desc,
		// biome-ignore lint/style/noNonNullAssertion: <explanation>
		site: context.site!,
		items: posts.map((post) => ({
			...post.data,
			pubDate: post.data.publishedAt,
			link: `/posts/${post.slug}/`,
		})),
	});
}

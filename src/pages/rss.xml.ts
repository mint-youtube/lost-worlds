import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { CHANNEL } from "../data/channel";

export async function GET(context: { site?: URL }) {
  const posts = (await getCollection("posts", ({ data }: any) => !data.draft))
    .sort((a: any, b: any) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: CHANNEL.name,
    description: CHANNEL.tagline,
    site: context.site!,
    items: posts.map((p: any) => ({
      title: p.data.title,
      pubDate: p.data.pubDate,
      description: p.data.description,
      link: `/${p.slug}/`,
      categories: p.data.tags as string[],
    })),
  });
}

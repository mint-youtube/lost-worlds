import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { CHANNELS } from "../data/channels";

export async function GET(context: { site?: URL }) {
  const posts = (await getCollection("posts", ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: "Mint Soft Stories",
    description: "13채널 다큐멘터리 + 지식 블로그",
    site: context.site!,
    items: posts.map((p) => ({
      title: `[${CHANNELS[p.data.channel]?.name}] ${p.data.title}`,
      pubDate: p.data.pubDate,
      description: p.data.description,
      link: `/${p.data.channel}/${p.slug}/`,
      categories: [CHANNELS[p.data.channel]?.category, ...p.data.tags].filter(Boolean) as string[],
    })),
  });
}

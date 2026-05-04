import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://blog.mint-soft.com',
  integrations: [mdx(), sitemap()],
  build: { assets: 'assets' },
  markdown: {
    shikiConfig: { theme: 'github-dark-default' },
  },
});

import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel';  // ← Change this
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables",
    },
  },
  shikiConfig: {
    wrap: true,
    skipInline: false,
    drafts: true,
  },
  output: 'server',
  adapter: vercel(),  // ← Change this
  site: "https://yourwebsite.com",
  integrations: [sitemap(), mdx()],  // ← Remove tailwindcss() from here, it's already in vite.plugins
});
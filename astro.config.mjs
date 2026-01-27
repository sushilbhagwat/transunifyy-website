import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from '@astrojs/node'; 
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
output: 'static',  // or 'server'
  adapter: node({
    mode: 'standalone'
  }),
  site: "https://yourwebsite.com",
  integrations: [tailwindcss(), sitemap(), mdx()],
});

import { defineConfig } from 'astro/config';
import alpine from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import nesting from 'tailwindcss/nesting';
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [alpine(), tailwind({
    plugins: [nesting],
    config: {
      applyBaseStyles: false
    }
  }), mdx()]
});
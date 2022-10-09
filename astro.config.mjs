import { defineConfig } from 'astro/config';
import alpine from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import nesting from 'tailwindcss/nesting';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [alpine(), tailwind({
    plugins: [nesting],
    config: {
      applyBaseStyles: false
    }
  }), mdx()] 

});
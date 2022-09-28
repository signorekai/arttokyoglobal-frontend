import { defineConfig } from 'astro/config';
import alpine from "@astrojs/alpinejs";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import nesting from 'tailwindcss/nesting';

// https://astro.build/config
export default defineConfig({
  // output: 'server',
  integrations: [alpine(), tailwind({
    plugins: [nesting],
    config: {
      applyBaseStyles: false
    }
  })],
  // adapter: vercel()
});
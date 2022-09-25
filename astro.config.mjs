import { defineConfig } from 'astro/config';
import alpine from "@astrojs/alpinejs";
import nesting from 'tailwindcss/nesting'

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [alpine(), tailwind({
    plugins: [nesting],
    config: {
      applyBaseStyles: false
    }
  })]
});
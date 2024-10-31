// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    css: {
      modules: {},
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "./src/assets/styles/colors.module.scss";
            @import "./src/assets/styles/fonts.module.scss";
            @import "./src/assets/styles/typography.module.scss";
          `
        }
      }
    }
  }
});
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://joao-manuel-s-m.github.io/portfolio/",
  base: "portfolio",
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        "@assets": "../../../public/assets",
      },
    },
  },
  build: {
    minify: false,
  },
});
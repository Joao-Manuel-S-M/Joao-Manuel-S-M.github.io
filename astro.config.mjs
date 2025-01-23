import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://joao-manuel-s-m.github.io",
  base: "/Joao-Manuel-S-M.github.io", 
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

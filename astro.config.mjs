import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import astroI18next from "astro-i18next";
import alpinejs from "@astrojs/alpinejs";



// https://astro.build/config
export default defineConfig({
  site: "https://savetik-beryl.vercel.app/",
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});

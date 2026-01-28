import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  output: 'static',

  // Site y Base son para colocar un Build en producción - En este caso también configurar HOME_URL en .env
  // Aqui va el dominio
  site: 'https://nico-software-update.netlify.app',
  // site: 'http://localhost:4321',

  // Aqui va el folder, en caso de root -> /
  // base: '/astro',
  base: '/',

  prefetch: true
});
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  base: '/designfrontend/',
  site: 'https://pinneyb.github.io',
});

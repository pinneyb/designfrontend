import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isGitHubPages = process.env.DEPLOY_TARGET === 'github';

export default defineConfig({
  integrations: [tailwind()],
  build: {
    assets: 'assets',
  },
  ...(isGitHubPages && {
    base: '/designfrontend/',
    site: 'https://pinneyb.github.io',
  }),
});

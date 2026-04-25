import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const isGitHubPages = process.env.DEPLOY_TARGET === 'github';

export default defineConfig({
  integrations: [tailwind()],
  ...(isGitHubPages && {
    base: '/designfrontend/',
    site: 'https://pinneyb.github.io',
  }),
});

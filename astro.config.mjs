import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Demo-URL: https://mikkel2101.github.io/LegalSpain
// Når custom domene er klart: fjern base og oppdater site
export default defineConfig({
  site: 'https://mikkel2101.github.io',
  base: '/LegalSpain',
  integrations: [tailwind()],
  output: 'static',
});

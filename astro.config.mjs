// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.symbioec.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [react()],
});


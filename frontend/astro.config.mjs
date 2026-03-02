import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gamevault.es',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});

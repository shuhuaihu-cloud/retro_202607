import { defineConfig } from 'vite';

export default defineConfig({
  // On GitHub Pages the site is served from /<repo>/, so the CI build sets
  // VITE_BASE to that path. Locally it defaults to '/'.
  base: process.env.VITE_BASE || '/',
  build: {
    outDir: 'dist'
  },
  publicDir: 'public'
});

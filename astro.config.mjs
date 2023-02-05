import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';

export default defineConfig({
  root: '.',
  srcDir: './src',
  publicDir: './public',
  outDir: './dist',
  // site: '',
  // base: '',
  output: 'static',
  build: {
    format: 'directory',
    client: './client',
    assets: '_custom'
  },
  server: command => ({
    port: command === 'dev' ? 3000 : 4000
  }),
  // markdown: {
  //   drafts: true,
  //   syntaxHighlight: 'prism',
  //   remarkPlugins: [remarkToc],
  //   rehypePlugins: [rehypeMinifyHtml],
  // }
  integrations: [react(), mdx(), tailwind(), image()]
});
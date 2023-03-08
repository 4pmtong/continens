import { defineConfig } from 'dumi';
const path = require('path');

export default defineConfig({
  outputPath: 'docs-dist',
  alias: {
    '.examples': path.resolve(__dirname, './src/.examples'),
  },
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: {},

  themeConfig: {
    name: 'Continens',
    logo: false,
    rtl: true,
    socialLinks: {
      github: 'https://github.com/4pmtong/continens',
    },
    footer:
      '<div style="display:flex;justify-content:center;">Coded with <svg xmlns="http://www.w3.org/2000/svg" style="margin: 0 5px;" width=20 fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" class="astro-SZ7XMLTE"></path></svg> by 4pmtong</div>',
  },
  analytics: {
    // google analytics 的 key (GA 4)
    ga_v2: 'G-E293RFXGSY',
  },
  sitemap: { hostname: 'https://continens.4pmtong.com' },
});

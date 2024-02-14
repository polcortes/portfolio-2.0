import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca', 'en'],
    routing: {
      prefixDefaultLocale: false, // ('es' === '/')  &&  ('en' === '/en/')  &&  ('ca' === '/ca/')
    }
  }
});

import fs from 'node:fs';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import expressiveCode from 'astro-expressive-code';
import icon from 'astro-icon';
import {defineConfig} from 'astro/config';
import {expressiveCodeOptions} from './src/site.config';

// Rehype plugins
import rehypeExternalLinks from 'rehype-external-links';
import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercelStatic(),
  image: {
    domains: ['webmention.io'],
  },
  integrations: [
    expressiveCode(expressiveCodeOptions),
    icon(),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    sitemap()
  ],
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: ['nofollow, noreferrer'],
          target: '_blank',
        },
      ],
    ],
    remarkRehype: {
      footnoteLabelProperties: {
        className: [''],
      },
    },
  },
  // https://docs.astro.build/en/guides/prefetch/
  prefetch: true,
  site: 'https://georgian.dev/',
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
    plugins: [rawFonts(['.ttf', '.woff'])],
  },
});

function rawFonts(ext: string[]) {
  return {
    name: 'vite-plugin-raw-fonts',
    // @ts-expect-error:next-line
    transform(_, id) {
      if (ext.some((e) => id.endsWith(e))) {
        const buffer = fs.readFileSync(id);
        return {
          code: `export default ${JSON.stringify(buffer)}`,
          map: null,
        };
      }
    },
  };
}

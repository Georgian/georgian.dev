import fs from 'node:fs';
import {unified} from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';
import icon from 'astro-icon';
import {defineConfig} from 'astro/config';
import {expressiveCodeOptions} from './src/site.config';

// Rehype plugins
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  // Astro 7 defaults to JSX-style whitespace stripping, which would glue together inline text across line breaks
  compressHTML: true,
  image: {
    domains: ['webmention.io'],
  },
  integrations: [
    expressiveCode(expressiveCodeOptions),
    icon(),
    sitemap()
  ],
  markdown: {
    processor: unified({
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
    }),
  },
  // https://docs.astro.build/en/guides/prefetch/
  prefetch: true,
  site: 'https://georgian.dev/',
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
    plugins: [tailwindcss(), rawFonts(['.ttf', '.woff'])],
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

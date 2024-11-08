import fs from 'node:fs';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import expressiveCode from 'astro-expressive-code';
import icon from 'astro-icon';
import {defineConfig} from 'astro/config';
import {expressiveCodeOptions} from './src/site.config';
import umami from '@yeskunall/astro-umami';

// Remark plugins
import remarkDirective from 'remark-directive'; /* Handle ::: directives as nodes */
import remarkUnwrapImages from 'remark-unwrap-images';
import {remarkAdmonitions} from './src/plugins/remark-admonitions'; /* Add admonitions */
import {remarkReadingTime} from './src/plugins/remark-reading-time';

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
    sitemap(),
    mdx(),
    umami({id: 'd1c90bc4-b740-414f-b51b-fb118ba498f6'})
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
    remarkPlugins: [remarkUnwrapImages, remarkReadingTime, remarkDirective, remarkAdmonitions],
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

import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import { Analytics } from '@/components/Analytics'
import LayoutWrapper from '@/components/LayoutWrapper'

import siteMetadata from '@/data/siteMetadata'
// import '@/css/docsearch.css' // Uncomment if using algolia docsearch
// import '@docsearch/css' // Uncomment if using algolia docsearch
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SearchProvider } from 'pliny/search'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics
        umamiWebsiteId={siteMetadata.analytics.umamiWebsiteId}
        umamiScriptSrc="https://analytics.georgian.dev/script.js"
      />
      <LayoutWrapper>
        <SearchProvider searchConfig={siteMetadata.search}>
          <Component {...pageProps} />
        </SearchProvider>
      </LayoutWrapper>
    </ThemeProvider>
  )
}

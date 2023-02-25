// @ts-check

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Georgian Grec - Software engineer & cyclist',
  author: 'Georgian Grec',
  headerTitle: 'Georgian Grec',
  description: 'Software Engineer & cyclist',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://georgian.dev',
  siteRepo: 'https://github.com/Georgian/georgian.dev',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'grec.georgian@gmail.com',
  stackoverflow: 'https://stackoverflow.com/users/1774643/georgian',
  github: 'https://github.com/Georgian',
  linkedin: 'https://www.linkedin.com/in/ggrec/',
  strava: 'https://www.strava.com/athletes/3426471',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: 'd1c90bc4-b740-414f-b51b-fb118ba498f6',
    posthogProjectApiKey: '', // e.g. AhnJK8392ndPOav87as450xd
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  // search: {
  //   provider: 'kbar', // kbar or algolia
  //   kbarConfig: {
  //     searchDocumentsPath: 'search.json', // path to load documents to search
  //   },
  //   provider: 'algolia',
  //   algoliaConfig: {
  //     // The application ID provided by Algolia
  //     appId: 'R2IYF7ETH7',
  //     // Public API key: it is safe to commit it
  //     apiKey: '599cec31baffa4868cae4e79f180729b',
  //     indexName: 'docsearch',
  //   },
  // },
}

module.exports = siteMetadata

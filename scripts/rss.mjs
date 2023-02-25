import { generateRSS } from 'pliny/utils/generate-rss.js'
import siteMetadata from '../data/siteMetadata.js'
import { allNotes } from '../.contentlayer/generated/index.mjs'

const rss = () => {
  generateRSS(siteMetadata, allNotes)
  console.log('RSS feed generated...')
}
export default rss

import { writeFileSync } from 'fs'
import { allCoreContent } from 'pliny/utils/contentlayer.js'
import { allNotes } from '../.contentlayer/generated/index.mjs'
import siteMetadata from '../data/siteMetadata.js'

const search = () => {
  if (siteMetadata?.search?.kbarConfig?.searchDocumentsPath) {
    writeFileSync(
      `public/${siteMetadata.search.kbarConfig.searchDocumentsPath}`,
      JSON.stringify(allCoreContent(allNotes))
    )
    console.log('Local search index generated...')
  }
}
export default search

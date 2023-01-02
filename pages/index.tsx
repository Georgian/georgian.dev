import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import About from './about'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <About />
    </>
  )
}

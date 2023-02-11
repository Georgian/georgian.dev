import { PageSEO } from '@/components/SEO'
import SocialBar from '@/components/SocialBar'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className={`divide-gray-200 dark:divide-gray-700`}>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h3 className="text-4xl font-bold tracking-tight text-black dark:text-white">
            Georgian Grec
          </h3>
          <h3>Software developer. Competitive cyclist.</h3>
        </div>
        <SocialBar />
      </div>
    </>
  )
}

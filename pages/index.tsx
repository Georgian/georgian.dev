import { PageSEO } from '@/components/SEO'
import SocialBar from '@/components/SocialBar'
import siteMetadata from '@/data/siteMetadata'

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className={`divide-y divide-gray-200 dark:divide-gray-700`}>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Georgian Grec
          </h1>
        </div>
        <div className={`pt-5`}>
          <h2 className="text-1xl md:text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
            Software engineer & competitive cyclist.
          </h2>
          <SocialBar />
        </div>
      </div>
    </>
  )
}

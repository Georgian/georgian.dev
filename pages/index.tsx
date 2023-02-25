import BlogPostCard from '@/components/BlogPostCard'
import { PageSEO } from '@/components/SEO'
import SocialBar from '@/components/SocialBar'
import siteMetadata from '@/data/siteMetadata'
import { allBlogs, Blog } from 'contentlayer/generated'
import { InferGetStaticPropsType } from 'next'
import { allCoreContent, sortedBlogPost } from 'pliny/utils/contentlayer'

const MAX_DISPLAY = 5

export const getStaticProps = async () => {
  const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div>
        <div className="space-y-2 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Georgian Grec
          </h1>
        </div>
        <div>
          <h2 className="text-1xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:text-2xl md:leading-14">
            Software engineer & competitive cyclist.
          </h2>
          <SocialBar />
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="space-y-2 pt-16 md:space-y-5">
            <h2 className="text-1xl my-4 font-bold tracking-tight text-black dark:text-white md:text-3xl">
              Recent Posts
            </h2>
          </div>
          <div className="mb-6">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, title, date } = frontMatter
              return <BlogPostCard key={slug} date={date} title={title} slug={slug} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}
import { MDXComponents } from '@/components/MDXComponents'
import { allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'

const DEFAULT_LAYOUT = 'AuthorLayout'

export default function About() {
  const author = allAuthors.find((p) => p.slug === 'default')
  return (
    <MDXLayoutRenderer layout={DEFAULT_LAYOUT} content={author} MDXComponents={MDXComponents} />
  )
}

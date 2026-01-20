import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import NavigationHeader from '../components/NavigationHeader'
import FooterSection from '../components/FooterSection'
import BlogHero from '../components/BlogHero'
import { blogPosts, getBlogPostBySlug } from '../data/blog'

const renderMarkdownLike = (content: string) => {
  const lines = content.split('\n')

  return lines.map((line, index) => {
    if (line.startsWith('# ')) {
      return (
        <h1 key={index} className="text-4xl md:text-5xl font-bold text-gray-900">
          {line.replace(/^#\s+/, '')}
        </h1>
      )
    }

    if (line.startsWith('## ')) {
      return (
        <h2 key={index} className="text-2xl md:text-3xl font-bold text-gray-900 pt-6">
          {line.replace(/^##\s+/, '')}
        </h2>
      )
    }

    if (line.startsWith('- ')) {
      return (
        <li key={index} className="text-gray-700">
          {line.replace(/^-\s+/, '')}
        </li>
      )
    }

    if (line.trim() === '') {
      return <div key={index} className="h-4" />
    }

    return (
      <p key={index} className="text-gray-700 leading-relaxed">
        {line}
      </p>
    )
  })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = slug ? getBlogPostBySlug(slug) : undefined
  const shareUrl = typeof window === 'undefined' ? '' : window.location.href

  const recentPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 5)

  if (!post) {
    return (
      <div>
        <NavigationHeader />
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Post not found</h1>
            <Link to="/blog" className="text-primary-600 font-semibold">
              Back to Blog
            </Link>
          </div>
        </section>
        <FooterSection />
      </div>
    )
  }

  return (
    <div>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <NavigationHeader />

      <BlogHero
        eyebrow="Blog"
        author={post.author}
        publishedAt={post.publishedAt}
        readTimeMinutes={post.readTimeMinutes}
        title={post.title}
        subtitle={post.excerpt}
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                <Link to="/blog" className="text-primary-600 font-semibold">
                  Back to Blog
                </Link>
                <div className="text-sm text-gray-500">{post.publishedAt}</div>
              </div>

              <div className="mt-8 space-y-4">
                {renderMarkdownLike(post.content)}
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="lg:sticky lg:top-28">
                <div className="flex items-center gap-4">
                  <h3 className="text-sm font-bold tracking-wide text-gray-900 uppercase whitespace-nowrap">
                    Most Recent Articles
                  </h3>
                  <div className="h-px w-full bg-gray-200" />
                </div>

                <div className="mt-6 divide-y divide-gray-200 border-b border-gray-200">
                  {recentPosts.map((recent) => (
                    <Link
                      key={recent.slug}
                      to={`/blog/${recent.slug}`}
                      className="block py-6 group"
                    >
                      <div className="grid grid-cols-[96px_1fr] gap-4">
                        <div className="aspect-square rounded-md bg-gray-200 overflow-hidden">
                          {recent.coverImageUrl ? (
                            <img
                              src={recent.coverImageUrl}
                              alt={recent.title}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-300" />
                          )}
                        </div>

                        <div className="space-y-2">
                          <div className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                            {recent.title}
                          </div>
                          <div className="text-sm text-gray-600 line-clamp-3">
                            {recent.excerpt}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-10">
                  <div className="flex items-center gap-4">
                    <h3 className="text-sm font-bold tracking-wide text-gray-900 uppercase whitespace-nowrap">
                      Share on social
                    </h3>
                    <div className="h-px w-full bg-gray-200" />
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    <a
                      href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(shareUrl)}`}
                      className="h-12 w-12 rounded-full border-2 border-gray-200 hover:border-primary-500 hover:text-primary-600 transition-colors grid place-items-center text-gray-700"
                      aria-label="Share via email"
                    >
                      <span className="text-xl">✉</span>
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="h-12 w-12 rounded-full border-2 border-gray-200 hover:border-primary-500 hover:text-primary-600 transition-colors grid place-items-center text-gray-700"
                      aria-label="Share on LinkedIn"
                    >
                      <span className="text-xl font-bold">in</span>
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="h-12 w-12 rounded-full border-2 border-gray-200 hover:border-primary-500 hover:text-primary-600 transition-colors grid place-items-center text-gray-700"
                      aria-label="Share on X"
                    >
                      <span className="text-xl">𝕏</span>
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}

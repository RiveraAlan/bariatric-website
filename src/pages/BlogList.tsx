import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import NavigationHeader from '../components/NavigationHeader'
import FooterSection from '../components/FooterSection'
import BlogHero from '../components/BlogHero'
import { blogPosts } from '../data/blog'

export default function BlogList() {
  return (
    <div>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Articles and guides about bariatric surgery, obesity, and medical tourism." />
      </Helmet>

      <NavigationHeader />

      <BlogHero
        eyebrow="Blog"
        title="Blog"
        subtitle="Articles and guides about bariatric surgery, obesity, and medical tourism."
      />

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group block rounded-2xl border-2 border-gray-200 hover:border-primary-500 hover:shadow-lg transition-all duration-200"
              >
                <div className="p-8 space-y-3">
                  <div className="text-sm text-gray-500">{post.publishedAt}</div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600">{post.excerpt}</p>
                  <div className="pt-2 text-primary-600 font-semibold">Read more</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  )
}

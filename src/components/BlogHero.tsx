type BlogHeroProps = {
  author?: string,
  eyebrow?: string,
  publishedAt?: string,
  readTimeMinutes?: number,
  subtitle?: string,
  title: string,
}

export default function BlogHero({ author, eyebrow, publishedAt, readTimeMinutes, subtitle, title }: BlogHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDE0YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0yNCA0NGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {eyebrow && (
          <div className="flex items-center gap-2 text-primary-200 mb-6">
            <span className="font-semibold">{eyebrow}</span>
          </div>
        )}

        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>

          {(author || publishedAt || readTimeMinutes) && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-primary-100 mb-6">
              {author && (
                <div className="text-sm font-semibold">
                  {author}
                </div>
              )}
              {publishedAt && (
                <>
                  {author && <span className="text-primary-300">•</span>}
                  <div className="text-sm">{publishedAt}</div>
                </>
              )}
              {readTimeMinutes ? (
                <>
                  {(author || publishedAt) && <span className="text-primary-300">•</span>}
                  <div className="text-sm">{readTimeMinutes} min read</div>
                </>
              ) : null}
            </div>
          )}

          {subtitle && (
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

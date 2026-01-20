export type BlogPost = {
  title: string,
  slug: string,
  excerpt: string,
  content: string,
  author?: string,
  coverImageUrl?: string,
  publishedAt: string,
  readTimeMinutes: number,
}

type BlogFrontmatter = {
  title?: string,
  date?: string,
  excerpt?: string,
  author?: string,
  cover?: string,
}

const parseFrontmatter = (raw: string): { frontmatter: BlogFrontmatter, body: string } => {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) {
    return { frontmatter: {}, body: raw }
  }

  const [, frontmatterRaw, body] = match
  const frontmatter: BlogFrontmatter = {}

  for (const line of frontmatterRaw.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed) continue

    const separatorIndex = trimmed.indexOf(':')
    if (separatorIndex === -1) continue

    const key = trimmed.slice(0, separatorIndex).trim()
    const value = trimmed.slice(separatorIndex + 1).trim()

    if (key === 'title') frontmatter.title = value
    if (key === 'date') frontmatter.date = value
    if (key === 'excerpt') frontmatter.excerpt = value
    if (key === 'author') frontmatter.author = value
    if (key === 'cover') frontmatter.cover = value
  }

  return { frontmatter, body }
}

const slugFromPath = (path: string) => {
  const parts = path.split('/')
  const fileName = parts[parts.length - 1] || ''
  return fileName.replace(/\.md$/i, '')
}

export const blogPosts: BlogPost[] = Object.entries(
  import.meta.glob('../blog/*.md', {
    eager: true,
    as: 'raw',
  }),
).map(([path, raw]) => {
  const slug = slugFromPath(path)
  const { frontmatter, body } = parseFrontmatter(String(raw))
  const trimmedBody = body.trim()
  const wordCount = trimmedBody.split(/\s+/).filter(Boolean).length
  const readTimeMinutes = Math.max(1, Math.round(wordCount / 200))

  return {
    title: frontmatter.title || slug,
    slug,
    excerpt: frontmatter.excerpt || '',
    content: trimmedBody,
    author: frontmatter.author,
    coverImageUrl: frontmatter.cover,
    publishedAt: frontmatter.date || '',
    readTimeMinutes,
  }
}).sort((a, b) => {
  return b.publishedAt.localeCompare(a.publishedAt)
})

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug)
}

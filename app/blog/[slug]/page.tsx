import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/lib/blog"
import { BlogCard } from "@/components/blog-card"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Bài viết không tồn tại",
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [post.category, "gậy bi a", "bi a", "hướng dẫn bi a"],
    openGraph: {
      title: `${post.title} | CueVN`,
      description: post.excerpt,
      images: [{ url: post.image, alt: post.title }],
      url: `https://cuevn.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-6">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href="/" className="hover:text-primary">
              Trang chủ
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground line-clamp-1">{post.title}</li>
        </ol>
      </nav>

      <article className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Quay lại Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{post.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime} phút đọc</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none 
            prose-headings:font-serif prose-headings:text-foreground
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-a:cursor-pointer prose-a:font-medium prose-a:relative prose-a:z-10
            prose-strong:text-foreground
            prose-ul:text-muted-foreground prose-ol:text-muted-foreground
            prose-blockquote:border-l-primary prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:italic
            prose-blockquote:text-muted-foreground prose-blockquote:my-4
            prose-li:marker:text-accent"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share */}
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-foreground font-semibold mb-4">Chia sẻ bài viết:</p>
          <div className="flex gap-3">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://cuevn.com/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#1877F2] text-white rounded-lg text-sm hover:opacity-90 transition-opacity"
            >
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=https://cuevn.com/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-foreground text-background rounded-lg text-sm hover:opacity-90 transition-opacity"
            >
              Twitter
            </a>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-16 max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Bài viết liên quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

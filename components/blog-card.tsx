import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { BlogPost } from "@/lib/blog"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  return (
    <article className="group h-full flex flex-col">
      <Link href={`/blog/${post.slug}`} className="block relative aspect-[4/3] overflow-hidden bg-secondary mb-5">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-3 text-xs text-muted-foreground uppercase tracking-wider mb-3">
          <span>{post.category}</span>
          <span>•</span>
          <span>{formatDate(post.date)}</span>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-serif text-xl font-medium text-foreground hover:text-accent transition-colors line-clamp-2 mb-3">
            {post.title}
          </h3>
        </Link>

        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{post.excerpt}</p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto inline-flex items-center text-sm font-medium text-foreground hover:text-accent transition-colors group/link"
        >
          Đọc thêm
          <ArrowRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  )
}

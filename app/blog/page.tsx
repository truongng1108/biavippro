import type { Metadata } from "next"
import { BlogCard } from "@/components/blog-card"
import { blogPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog Bi A - Kiến Thức & Mẹo Chơi Bi A",
  description:
    "Tìm hiểu cách chọn gậy bi a và bảo quản đúng cách để sử dụng lâu dài. Các mẹo chơi bi a, hướng dẫn bảo quản gậy bi a.",
  keywords: ["cách chọn gậy bi a", "hướng dẫn bảo quản gậy bi a", "mẹo chơi bi a", "kiến thức bi a"],
  openGraph: {
    title: "Blog Bi A - Kiến Thức & Mẹo Chơi Bi A | CueVN",
    description: "Tìm hiểu cách chọn gậy bi a và bảo quản đúng cách để sử dụng lâu dài.",
    url: "https://cuevn.com/blog",
  },
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-6">
        <ol className="flex items-center gap-2">
          <li>
            <a href="/" className="hover:text-primary">
              Trang chủ
            </a>
          </li>
          <li>/</li>
          <li className="text-foreground">Blog</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="mb-8 text-center max-w-2xl mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Kiến Thức Bi A</h1>
        <p className="text-muted-foreground">Chia sẻ kinh nghiệm, mẹo chơi và hướng dẫn chọn mua, bảo quản gậy bi a</p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

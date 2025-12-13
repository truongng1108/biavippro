import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Truck, Shield, Headphones, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { BlogCard } from "@/components/blog-card"
import { products } from "@/lib/products"
import { blogPosts } from "@/lib/blog"

const features = [
  {
    icon: Truck,
    title: "Giao hàng toàn quốc",
    description: "Miễn phí từ 2 triệu",
  },
  {
    icon: Shield,
    title: "Bảo hành chính hãng",
    description: "Theo nhà sản xuất",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ 24/7",
    description: "Tư vấn chuyên nghiệp",
  },
  {
    icon: Award,
    title: "100% chính hãng",
    description: "Cam kết nguồn gốc",
  },
]

export default function HomePage() {
  const featuredProducts = products.slice(0, 4)
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center bg-secondary overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Gậy bi a chính hãng</p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] text-foreground text-balance">
                Nghệ thuật
                <br />
                <span className="text-accent">chơi bi a</span>
              </h1>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                Khám phá bộ sưu tập gậy bi a từ các thương hiệu danh tiếng thế giới. Cam kết hàng chính hãng, giá tốt
                nhất thị trường.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="h-14 px-8 text-base">
                  <Link href="/san-pham">
                    Khám phá ngay
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-base bg-transparent" asChild>
                  <Link href="/lien-he">Liên hệ tư vấn</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-[4/5]">
              <Image
                src="/professional-billiard-cue-elegant-product-photogra.jpg"
                alt="Gậy bi a cao cấp"
                fill
                className="object-cover rounded"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shrink-0">
                  <feature.icon className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-sm text-foreground">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Bộ sưu tập</p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">Sản phẩm nổi bật</h2>
            </div>
            <Link
              href="/san-pham"
              className="inline-flex items-center text-sm uppercase tracking-widest font-medium text-foreground hover:text-accent transition-colors"
            >
              Xem tất cả
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[600px]">
              <Image
                src="/billiard-player-elegant-black-and-white.jpg"
                alt="Người chơi bi a chuyên nghiệp"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Về chúng tôi</p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-8">Đức Cường Billiards</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Đức Cường Billiards tự hào là đơn vị tiên phong trong lĩnh vực cung cấp gậy bi a chính hãng tại Việt
                Nam. Với hơn 10 năm kinh nghiệm, chúng tôi cam kết mang đến cho khách hàng những sản phẩm chất lượng
                nhất từ các thương hiệu hàng đầu thế giới.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Đội ngũ tư vấn viên giàu kinh nghiệm của chúng tôi luôn sẵn sàng hỗ trợ bạn lựa chọn chiếc gậy phù hợp
                nhất với phong cách chơi và ngân sách của bạn.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="font-serif text-4xl font-medium text-foreground">10+</div>
                  <div className="text-sm text-muted-foreground mt-1">Năm kinh nghiệm</div>
                </div>
                <div>
                  <div className="font-serif text-4xl font-medium text-foreground">5K+</div>
                  <div className="text-sm text-muted-foreground mt-1">Khách hàng</div>
                </div>
                <div>
                  <div className="font-serif text-4xl font-medium text-foreground">20+</div>
                  <div className="text-sm text-muted-foreground mt-1">Thương hiệu</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Blog</p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">Kiến thức bi a</h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center text-sm uppercase tracking-widest font-medium text-foreground hover:text-accent transition-colors"
            >
              Xem tất cả
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60 mb-4">Tư vấn miễn phí</p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">Bạn cần hỗ trợ chọn gậy?</h2>
          <p className="text-primary-foreground/60 mb-10 text-lg">
            Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn tìm chiếc gậy phù hợp nhất.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="h-14 px-8 text-base">
              <Link href="/lien-he">Liên hệ ngay</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <a href="tel:0909123456">0839 682 234</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

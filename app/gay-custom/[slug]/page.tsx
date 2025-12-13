import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { MessageCircle, Truck, Shield, Award, Check, ChevronLeft, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { customCues } from "@/lib/custom-cues"

interface CustomCuePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: CustomCuePageProps): Promise<Metadata> {
  const { slug } = await params
  const cue = customCues.find((c) => c.slug === slug)

  if (!cue) {
    return {
      title: "Sản phẩm không tồn tại",
    }
  }

  return {
    title: `${cue.name} - Gậy Bi A Custom Đức Cường`,
    description: cue.fullDescription,
    keywords: [`gậy bi a`, cue.name, cue.woodType, "Đức Cường", "gậy bi a thủ công"],
    openGraph: {
      title: `${cue.name} | Đức Cường Custom`,
      description: cue.description,
      images: [{ url: cue.image, alt: cue.name }],
    },
  }
}

export async function generateStaticParams() {
  return customCues.map((cue) => ({
    slug: cue.slug,
  }))
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price)
}

export default async function CustomCueDetailPage({ params }: CustomCuePageProps) {
  const { slug } = await params
  const cue = customCues.find((c) => c.slug === slug)

  if (!cue) {
    notFound()
  }

  const relatedCues = customCues.filter((c) => c.id !== cue.id).slice(0, 3)

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Trang chủ
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link href="/gay-custom" className="text-muted-foreground hover:text-foreground transition-colors">
              Gậy Custom
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{cue.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative aspect-[4/5] rounded overflow-hidden bg-secondary">
                <Image
                  src={cue.images[0] || "/placeholder.svg"}
                  alt={cue.name}
                  fill
                  className="object-cover"
                  priority
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">{cue.category}</Badge>
              </div>
              {cue.images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {cue.images.slice(1, 4).map((img, index) => (
                    <div key={index} className="relative aspect-square rounded overflow-hidden bg-secondary">
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${cue.name} - ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Tác phẩm độc bản</span>
              </div>

              <h1 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-4">{cue.name}</h1>

              <p className="text-lg text-muted-foreground mb-6">{cue.description}</p>

              <div className="mb-8">
                <span className="text-sm text-muted-foreground">Giá từ</span>
                <div className="font-serif text-4xl font-medium text-foreground">{formatPrice(cue.price)}</div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">{cue.fullDescription}</p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-medium text-foreground mb-4">Đặc điểm nổi bật</h3>
                <div className="space-y-2">
                  {cue.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-muted-foreground">
                      <Check className="h-5 w-5 text-accent shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="flex-1 h-14" asChild>
                  <Link href="/lien-he">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Đặt hàng ngay
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="flex-1 h-14 bg-transparent" asChild>
                  <a href="tel:0909123456">Gọi tư vấn: 0839 682 234</a>
                </Button>
              </div>

              {/* Policies */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-secondary rounded">
                <div className="flex flex-col items-center text-center">
                  <Award className="h-6 w-6 text-accent mb-2" />
                  <span className="text-xs text-muted-foreground">Chế tác thủ công</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Shield className="h-6 w-6 text-accent mb-2" />
                  <span className="text-xs text-muted-foreground">Bảo hành trọn đời</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Truck className="h-6 w-6 text-accent mb-2" />
                  <span className="text-xs text-muted-foreground">Giao hàng toàn quốc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8 text-center">
            Thông số kỹ thuật
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-background rounded p-6 md:p-8">
              {cue.specifications.map((spec, index) => (
                <div
                  key={index}
                  className={`flex justify-between py-4 ${index !== cue.specifications.length - 1 ? "border-b border-border" : ""}`}
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-medium text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Nghệ thuật</p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
                Chế tác thủ công bởi nghệ nhân
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Mỗi gậy custom tại Đức Cường đều được chế tác hoàn toàn thủ công bởi các nghệ nhân có hơn 20 năm kinh
                nghiệm. Từ việc chọn lựa gỗ, thiết kế inlay, đến hoàn thiện bề mặt - mọi công đoạn đều được thực hiện tỉ
                mỉ và chính xác.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Thời gian hoàn thành: <strong className="text-foreground">4-8 tuần</strong> tùy độ phức tạp của thiết
                kế.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded overflow-hidden bg-secondary">
              <Image
                src="/billiard-player-elegant-black-and-white.jpg"
                alt="Nghệ nhân chế tác gậy bi a"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedCues.length > 0 && (
        <section className="py-12 md:py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8">Các mẫu custom khác</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedCues.map((item) => (
                <Link href={`/gay-custom/${item.slug}`} key={item.id} className="group">
                  <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded bg-background">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-accent/90 text-accent-foreground">{item.category}</Badge>
                  </div>
                  <h3 className="font-medium text-foreground group-hover:text-accent transition-colors mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <span className="font-medium text-foreground">Từ {formatPrice(item.price)}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-medium mb-6">Muốn tạo gậy theo ý tưởng riêng?</h2>
          <p className="text-primary-foreground/60 mb-10">
            Liên hệ ngay để được tư vấn miễn phí và bắt đầu hành trình tạo chiếc gậy bi a độc nhất.
          </p>
          <Button size="lg" variant="secondary" asChild className="h-14 px-8">
            <Link href="/lien-he">Tư vấn miễn phí</Link>
          </Button>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Button variant="outline" asChild className="bg-transparent">
            <Link href="/gay-custom">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Xem tất cả gậy custom
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Truck, Shield, RotateCcw, Check, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { accessories } from "@/lib/accessories"
import { AddToCartButton } from "@/components/add-to-cart-button"

interface AccessoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: AccessoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const accessory = accessories.find((a) => a.slug === slug)

  if (!accessory) {
    return {
      title: "Phụ kiện không tồn tại",
    }
  }

  return {
    title: `${accessory.name} - Phụ Kiện Bi A Đức Cường`,
    description: accessory.fullDescription || accessory.description,
    keywords: [`phụ kiện bi a`, accessory.name, accessory.category, "Đức Cường"],
    openGraph: {
      title: `${accessory.name} | Đức Cường`,
      description: accessory.description,
      images: [{ url: accessory.image, alt: accessory.name }],
    },
  }
}

export async function generateStaticParams() {
  return accessories.map((accessory) => ({
    slug: accessory.slug,
  }))
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price)
}

export default async function AccessoryDetailPage({ params }: AccessoryPageProps) {
  const { slug } = await params
  const accessory = accessories.find((a) => a.slug === slug)

  if (!accessory) {
    notFound()
  }

  const relatedAccessories = accessories
    .filter((a) => a.category === accessory.category && a.id !== accessory.id)
    .slice(0, 3)

  const images = accessory.images || [accessory.image]

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
            <Link href="/phu-kien" className="text-muted-foreground hover:text-foreground transition-colors">
              Phụ kiện
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{accessory.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded overflow-hidden bg-secondary">
                <Image
                  src={images[0] || "/placeholder.svg"}
                  alt={accessory.name}
                  fill
                  className="object-cover"
                  priority
                />
                {accessory.originalPrice && (
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">Giảm giá</Badge>
                )}
              </div>
              {images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {images.slice(1, 4).map((img, index) => (
                    <div key={index} className="relative aspect-square rounded overflow-hidden bg-secondary">
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${accessory.name} - ${index + 2}`}
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
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">{accessory.category}</p>
              <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">{accessory.name}</h1>

              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-serif text-3xl font-medium text-foreground">{formatPrice(accessory.price)}</span>
                {accessory.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(accessory.originalPrice)}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {accessory.fullDescription || accessory.description}
              </p>

              {/* Features */}
              {accessory.features && accessory.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-medium text-foreground mb-4">Đặc điểm nổi bật</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {accessory.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-accent shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <AddToCartButton
                  item={{
                    id: accessory.id,
                    name: accessory.name,
                    price: accessory.price,
                    image: accessory.image,
                    type: "accessory",
                    slug: accessory.slug,
                  }}
                  inStock={accessory.inStock}
                  className="flex-1 h-14"
                />
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1 h-14 bg-transparent"
                  disabled={!accessory.inStock}
                  asChild
                >
                  <Link href="/gio-hang">Mua ngay</Link>
                </Button>
              </div>

              {/* Policies */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-secondary rounded">
                <div className="flex flex-col items-center text-center">
                  <Truck className="h-6 w-6 text-accent mb-2" />
                  <span className="text-xs text-muted-foreground">Miễn phí vận chuyển</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Shield className="h-6 w-6 text-accent mb-2" />
                  <span className="text-xs text-muted-foreground">Bảo hành chính hãng</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <RotateCcw className="h-6 w-6 text-accent mb-2" />
                  <span className="text-xs text-muted-foreground">Đổi trả 30 ngày</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      {accessory.specifications && accessory.specifications.length > 0 && (
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8">Thông số kỹ thuật</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {accessory.specifications.map((spec, index) => (
                <div key={index} className="flex justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-medium text-foreground">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedAccessories.length > 0 && (
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-8">Sản phẩm liên quan</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedAccessories.map((item) => (
                <Link href={`/phu-kien/${item.slug}`} key={item.id} className="group">
                  <div className="relative aspect-square mb-4 overflow-hidden rounded bg-secondary">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{item.category}</span>
                  <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">{item.name}</h3>
                  <span className="font-medium text-foreground">{formatPrice(item.price)}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back Button */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <Button variant="outline" asChild className="bg-transparent">
            <Link href="/phu-kien">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Xem tất cả phụ kiện
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}

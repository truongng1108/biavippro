import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Star, Truck, Shield, RotateCcw, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"
import { AddToCartButton } from "@/components/add-to-cart-button"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return {
      title: "Sản phẩm không tồn tại",
    }
  }

  return {
    title: `${product.name} - Gậy Bi A Chất Lượng`,
    description: `Mua gậy bi a ${product.name} tại CueVN. ${product.description}`,
    keywords: [`gậy bi a ${product.brand}`, product.name, "gậy bi a chính hãng", product.category],
    openGraph: {
      title: `${product.name} | CueVN`,
      description: product.description,
      images: [{ url: product.image, alt: product.name }],
      url: `https://cuevn.com/san-pham/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)
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
            <Link href="/san-pham" className="hover:text-primary">
              Sản phẩm
            </Link>
          </li>
          <li>/</li>
          <li className="text-foreground">{product.name}</li>
        </ol>
      </nav>

      {/* Product Detail */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" priority />
          {!product.inStock && (
            <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Hết hàng
              </Badge>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <Badge className="mb-3">{product.category}</Badge>
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">{product.name}</h1>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-accent text-accent" : "text-muted"}`}
                />
              ))}
            </div>
            <span className="text-muted-foreground">({product.reviews} đánh giá)</span>
          </div>

          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-bold text-primary">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xl text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

          {/* Features */}
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3">Đặc điểm nổi bật:</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <AddToCartButton
              item={{
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                type: "product",
                slug: product.slug,
              }}
              inStock={product.inStock}
              className="flex-1"
            />
            <Button size="lg" variant="outline" className="flex-1 bg-transparent" asChild>
              <Link href="/gio-hang">Mua ngay</Link>
            </Button>
          </div>

          {/* Policies */}
          <div className="grid grid-cols-3 gap-4 p-4 bg-muted rounded-lg">
            <div className="flex flex-col items-center text-center">
              <Truck className="h-6 w-6 text-primary mb-2" />
              <span className="text-sm text-muted-foreground">Miễn phí vận chuyển</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="h-6 w-6 text-primary mb-2" />
              <span className="text-sm text-muted-foreground">Bảo hành chính hãng</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <RotateCcw className="h-6 w-6 text-primary mb-2" />
              <span className="text-sm text-muted-foreground">Đổi trả 30 ngày</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Sản phẩm liên quan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

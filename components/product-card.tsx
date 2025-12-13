import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)
  }

  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0

  return (
    <div className="group h-full flex flex-col">
      <Link
        href={`/san-pham/${product.slug}`}
        className="block relative aspect-[3/4] overflow-hidden bg-secondary mb-4"
      >
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
            <span className="text-background text-sm uppercase tracking-widest font-medium">Hết hàng</span>
          </div>
        )}
        {discount > 0 && product.inStock && (
          <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs px-3 py-1 font-medium">
            -{discount}%
          </span>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button className="w-full" size="sm" disabled={!product.inStock}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Thêm vào giỏ
          </Button>
        </div>
      </Link>

      <div className="flex-1 flex flex-col">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{product.brand}</p>
        <Link href={`/san-pham/${product.slug}`}>
          <h3 className="font-medium text-foreground hover:text-accent transition-colors line-clamp-2 mb-2">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto flex items-center gap-2">
          <span className="font-medium text-foreground">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </div>
    </div>
  )
}

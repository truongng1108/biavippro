"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { accessories, accessoryCategories } from "@/lib/accessories"

function formatPrice(price: number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price)
}

export default function ClientAccessoriesPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredAccessories = accessories.filter((item) => {
    if (activeCategory === "all") return true
    // Tìm category name từ slug
    const categoryName = accessoryCategories.find((cat) => cat.slug === activeCategory)?.name
    return item.category === categoryName
  })

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Phụ kiện</p>
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-foreground mb-6">Phụ Kiện Bi A</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Đầy đủ phụ kiện bi a chính hãng: găng tay, bao cơ, khăn lau, phấn, đầu cơ và nhiều hơn nữa. Chất lượng
              cao, giá cả hợp lý.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4">
            {accessoryCategories.map((category) => (
              <Button
                key={category.slug}
                variant={activeCategory === category.slug ? "default" : "outline"}
                size="sm"
                className="text-sm"
                onClick={() => setActiveCategory(category.slug)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">Hiển thị {filteredAccessories.length} sản phẩm</p>
          </div>

          {filteredAccessories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Không tìm thấy phụ kiện trong danh mục này</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAccessories.map((item) => (
                <Link href={`/phu-kien/${item.slug}`} key={item.id} className="group">
                  <div className="relative aspect-square mb-4 overflow-hidden rounded bg-secondary">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {item.originalPrice && (
                      <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded">
                        Giảm giá
                      </span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{item.category}</span>
                    <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">{formatPrice(item.price)}</span>
                      {item.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(item.originalPrice)}
                        </span>
                      )}
                    </div>
                    <Button size="sm" className="w-full mt-2">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Xem chi tiết
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">Cần tư vấn phụ kiện?</h2>
          <p className="text-muted-foreground mb-8">
            Đội ngũ chuyên gia sẽ giúp bạn chọn phụ kiện phù hợp nhất với nhu cầu.
          </p>
          <Button size="lg" asChild className="h-12 px-8">
            <Link href="/lien-he">Liên hệ ngay</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

"use client"

import { ProductCard } from "@/components/product-card"
import { ProductFilters } from "@/components/product-filters"
import { useState } from "react"
import { products, categories, brands } from "@/lib/products"

export function ProductsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const maxPrice = Math.max(...products.map((p) => p.price), 0)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice || 150000000])

  // Map slug to category name
  const getCategoryNameFromSlug = (slug: string): string => {
    const categoryMap: Record<string, string> = {
      "gay-cao-cap": "Gậy cao cấp",
      "gay-trung-cap": "Gậy trung cấp",
      "gay-pho-thong": "Gậy phổ thông",
    }
    return categoryMap[slug] || slug
  }

  // Filter products based on selected criteria
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" || product.category === getCategoryNameFromSlug(selectedCategory)
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1]
    return categoryMatch && brandMatch && priceMatch
  })

  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <nav className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
            <ol className="flex items-center gap-2">
              <li>
                <a href="/" className="hover:text-foreground transition-colors">
                  Trang chủ
                </a>
              </li>
              <li>/</li>
              <li className="text-foreground">Các dòng gậy</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Sản phẩm</p>
            <h1 className="font-serif text-5xl md:text-6xl font-medium text-foreground mb-6">Các Dòng Gậy Bi A</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Đa dạng các dòng gậy bi a chính hãng từ Mit, Predator, Fury, Dragon và nhiều thương hiệu uy tín khác. Chất
              lượng đảm bảo, bảo hành dài hạn.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <ProductFilters
              categories={categories}
              brands={brands}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-muted-foreground">{filteredProducts.length} sản phẩm</p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Không tìm thấy sản phẩm phù hợp</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

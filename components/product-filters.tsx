"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface Category {
  name: string
  slug: string
}

interface ProductFiltersProps {
  categories: Category[]
  brands: string[]
  selectedCategory: string
  setSelectedCategory: (category: string) => void
  selectedBrands: string[]
  setSelectedBrands: (brands: string[]) => void
  priceRange: [number, number]
  setPriceRange: (range: [number, number]) => void
}

export function ProductFilters({
  categories,
  brands,
  selectedCategory,
  setSelectedCategory,
  selectedBrands,
  setSelectedBrands,
  priceRange,
  setPriceRange,
}: ProductFiltersProps) {
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    brand: true,
    price: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const toggleBrand = (brand: string) => {
    setSelectedBrands(
      selectedBrands.includes(brand) ? selectedBrands.filter((b) => b !== brand) : [...selectedBrands, brand],
    )
  }

  return (
    <div className="bg-card border border-border rounded-lg p-4 sticky top-24">
      <h2 className="font-semibold text-lg text-card-foreground mb-4">Bộ lọc</h2>

      {/* Category Filter */}
      <div className="border-b border-border pb-4 mb-4">
        <button
          onClick={() => toggleSection("category")}
          className="flex items-center justify-between w-full text-left font-medium text-card-foreground"
        >
          Danh mục
          <ChevronDown className={`h-4 w-4 transition-transform ${expandedSections.category ? "rotate-180" : ""}`} />
        </button>
        {expandedSections.category && (
          <div className="mt-3 space-y-2">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setSelectedCategory(category.slug)}
                className={`block w-full text-left py-1 px-2 rounded text-sm transition-colors ${
                  selectedCategory === category.slug
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Brand Filter */}
      <div className="border-b border-border pb-4 mb-4">
        <button
          onClick={() => toggleSection("brand")}
          className="flex items-center justify-between w-full text-left font-medium text-card-foreground"
        >
          Thương hiệu
          <ChevronDown className={`h-4 w-4 transition-transform ${expandedSections.brand ? "rotate-180" : ""}`} />
        </button>
        {expandedSections.brand && (
          <div className="mt-3 space-y-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer">
                <Checkbox checked={selectedBrands.includes(brand)} onCheckedChange={() => toggleBrand(brand)} />
                <span className="text-sm text-muted-foreground">{brand}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div className="pb-4">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full text-left font-medium text-card-foreground"
        >
          Khoảng giá
          <ChevronDown className={`h-4 w-4 transition-transform ${expandedSections.price ? "rotate-180" : ""}`} />
        </button>
        {expandedSections.price && (
          <div className="mt-3 space-y-2">
            {[
              { label: "Dưới 5 triệu", range: [0, 5000000] },
              { label: "5 - 10 triệu", range: [5000000, 10000000] },
              { label: "10 - 20 triệu", range: [10000000, 20000000] },
              { label: "Trên 20 triệu", range: [20000000, 100000000] },
            ].map((option) => (
              <button
                key={option.label}
                onClick={() => setPriceRange(option.range as [number, number])}
                className={`block w-full text-left py-1 px-2 rounded text-sm transition-colors ${
                  priceRange[0] === option.range[0] && priceRange[1] === option.range[1]
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <Button
        variant="outline"
        className="w-full mt-4 bg-transparent"
        onClick={() => {
          setSelectedCategory("all")
          setSelectedBrands([])
          setPriceRange([0, 50000000])
        }}
      >
        Xóa bộ lọc
      </Button>
    </div>
  )
}

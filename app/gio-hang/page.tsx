"use client"
import Image from "next/image"
import Link from "next/link"
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto text-center">
          <ShoppingBag className="h-24 w-24 text-muted mx-auto mb-6" />
          <h1 className="font-serif text-3xl font-medium text-foreground mb-4">Giỏ hàng trống</h1>
          <p className="text-muted-foreground mb-8">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
          <Button asChild size="lg">
            <Link href="/san-pham">Khám phá sản phẩm</Link>
          </Button>
        </div>
      </div>
    )
  }

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
            <span className="text-foreground">Giỏ hàng</span>
          </nav>
        </div>
      </div>

      {/* Cart Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8">Giỏ hàng của bạn</h1>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-secondary rounded-lg">
                  <div className="relative w-24 h-24 shrink-0 rounded overflow-hidden bg-background">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/${item.type === "product" ? "san-pham" : item.type === "accessory" ? "phu-kien" : "gay-custom"}/${item.slug}`}
                      className="font-medium text-foreground hover:text-accent transition-colors line-clamp-2"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">{formatPrice(item.price)}</p>

                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center border border-border rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-background transition-colors"
                          aria-label="Giảm số lượng"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="px-4 py-2 text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-background transition-colors"
                          aria-label="Tăng số lượng"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                        aria-label="Xóa sản phẩm"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="font-medium text-foreground">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-secondary rounded-lg p-6 sticky top-24">
                <h2 className="font-medium text-foreground mb-4">Tóm tắt đơn hàng</h2>

                <div className="space-y-3 mb-6 pb-6 border-b border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tạm tính</span>
                    <span className="text-foreground">{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Phí vận chuyển</span>
                    <span className="text-foreground">Miễn phí</span>
                  </div>
                </div>

                <div className="flex justify-between mb-6">
                  <span className="font-medium text-foreground">Tổng cộng</span>
                  <span className="font-serif text-2xl font-medium text-foreground">{formatPrice(totalPrice)}</span>
                </div>

                <Button asChild size="lg" className="w-full mb-3">
                  <Link href="/thanh-toan">Tiến hành thanh toán</Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
                  <Link href="/san-pham">Tiếp tục mua hàng</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

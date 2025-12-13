"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Truck, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useCart } from "@/lib/cart-context"

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalPrice, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    district: "",
    ward: "",
    note: "",
    paymentMethod: "cod",
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Store order info in localStorage for confirmation page
    const orderData = {
      orderNumber: `GT${Date.now()}`,
      date: new Date().toISOString(),
      items,
      total: totalPrice,
      customer: formData,
    }
    localStorage.setItem("lastOrder", JSON.stringify(orderData))

    // Clear cart
    clearCart()

    // Redirect to confirmation page
    router.push("/xac-nhan-don-hang")
  }

  if (items.length === 0) {
    router.push("/gio-hang")
    return null
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
            <Link href="/gio-hang" className="text-muted-foreground hover:text-foreground transition-colors">
              Giỏ hàng
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">Thanh toán</span>
          </nav>
        </div>
      </div>

      {/* Checkout Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Button variant="ghost" asChild className="text-muted-foreground hover:text-foreground">
              <Link href="/gio-hang">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Quay lại giỏ hàng
              </Link>
            </Button>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-8">Thanh toán</h1>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Customer Information */}
                <div className="bg-secondary rounded-lg p-6">
                  <h2 className="font-medium text-foreground mb-6">Thông tin khách hàng</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <Label htmlFor="name">
                        Họ và tên <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nguyễn Văn A"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">
                        Số điện thoại <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0909123456"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@example.com"
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-secondary rounded-lg p-6">
                  <h2 className="font-medium text-foreground mb-6">Địa chỉ giao hàng</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="address">
                        Địa chỉ <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="address"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Số nhà, tên đường"
                        className="mt-2"
                      />
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">
                          Tỉnh/Thành phố <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="city"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="Hồ Chí Minh"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="district">
                          Quận/Huyện <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="district"
                          required
                          value={formData.district}
                          onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                          placeholder="Quận 1"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="ward">
                          Phường/Xã <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="ward"
                          required
                          value={formData.ward}
                          onChange={(e) => setFormData({ ...formData, ward: e.target.value })}
                          placeholder="Phường Bến Nghé"
                          className="mt-2"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="note">Ghi chú (tùy chọn)</Label>
                      <Textarea
                        id="note"
                        value={formData.note}
                        onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                        placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn"
                        rows={3}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-secondary rounded-lg p-6">
                  <h2 className="font-medium text-foreground mb-6">Phương thức thanh toán</h2>
                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={(value) => setFormData({ ...formData, paymentMethod: value })}
                  >
                    <div className="flex items-start space-x-3 p-4 border border-border rounded-lg">
                      <RadioGroupItem value="cod" id="cod" />
                      <div className="flex-1">
                        <Label htmlFor="cod" className="flex items-center gap-2 cursor-pointer">
                          <Truck className="h-5 w-5 text-accent" />
                          <span className="font-medium">Thanh toán khi nhận hàng (COD)</span>
                        </Label>
                        <p className="text-sm text-muted-foreground mt-2">
                          Thanh toán bằng tiền mặt khi nhận được hàng
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 border border-border rounded-lg opacity-50">
                      <RadioGroupItem value="bank" id="bank" disabled />
                      <div className="flex-1">
                        <Label htmlFor="bank" className="flex items-center gap-2">
                          <CreditCard className="h-5 w-5 text-muted" />
                          <span className="font-medium">Chuyển khoản ngân hàng</span>
                        </Label>
                        <p className="text-sm text-muted-foreground mt-2">Đang cập nhật</p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <div className="bg-secondary rounded-lg p-6 sticky top-24">
                  <h2 className="font-medium text-foreground mb-4">Đơn hàng của bạn</h2>

                  <div className="space-y-4 mb-6 pb-6 border-b border-border max-h-[300px] overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="relative w-16 h-16 shrink-0 rounded overflow-hidden bg-background">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground line-clamp-2">{item.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {formatPrice(item.price)} x {item.quantity}
                          </p>
                        </div>
                        <div className="text-sm font-medium text-foreground">
                          {formatPrice(item.price * item.quantity)}
                        </div>
                      </div>
                    ))}
                  </div>

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

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Đang xử lý..." : "Đặt hàng"}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

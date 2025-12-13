"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { CheckCircle2, Package, Truck, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface OrderData {
  orderNumber: string
  date: string
  items: Array<{
    id: string
    name: string
    price: number
    image: string
    quantity: number
  }>
  total: number
  customer: {
    name: string
    phone: string
    email: string
    address: string
    city: string
    district: string
    ward: string
    note: string
  }
}

export default function OrderConfirmationPage() {
  const router = useRouter()
  const [orderData, setOrderData] = useState<OrderData | null>(null)

  useEffect(() => {
    const savedOrder = localStorage.getItem("lastOrder")
    if (!savedOrder) {
      router.push("/")
      return
    }

    const order = JSON.parse(savedOrder)
    setOrderData(order)
  }, [router])

  if (!orderData) {
    return null
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-6">
              <CheckCircle2 className="h-10 w-10 text-accent" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">Đặt hàng thành công!</h1>
            <p className="text-muted-foreground text-lg">
              Cảm ơn bạn đã đặt hàng tại Đức Cường. Chúng tôi sẽ liên hệ với bạn sớm nhất.
            </p>
          </div>

          {/* Order Info */}
          <div className="bg-secondary rounded-lg p-6 mb-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Mã đơn hàng</p>
                <p className="font-medium text-foreground">{orderData.orderNumber}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Thời gian đặt hàng</p>
                <p className="font-medium text-foreground">{formatDate(orderData.date)}</p>
              </div>
            </div>
          </div>

          {/* Customer Info */}
          <div className="bg-secondary rounded-lg p-6 mb-6">
            <h2 className="font-medium text-foreground mb-4">Thông tin khách hàng</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Họ tên:</span>
                <span className="text-foreground font-medium">{orderData.customer.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Số điện thoại:</span>
                <span className="text-foreground font-medium">{orderData.customer.phone}</span>
              </div>
              {orderData.customer.email && (
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="text-foreground font-medium">{orderData.customer.email}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-muted-foreground">Địa chỉ:</span>
                <span className="text-foreground font-medium text-right">
                  {orderData.customer.address}, {orderData.customer.ward}, {orderData.customer.district},{" "}
                  {orderData.customer.city}
                </span>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="bg-secondary rounded-lg p-6 mb-6">
            <h2 className="font-medium text-foreground mb-4">Sản phẩm đã đặt</h2>
            <div className="space-y-4">
              {orderData.items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                  <div className="relative w-20 h-20 shrink-0 rounded overflow-hidden bg-background">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {formatPrice(item.price)} x {item.quantity}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between pt-4 border-t border-border mt-4">
              <span className="font-medium text-foreground">Tổng cộng</span>
              <span className="font-serif text-2xl font-medium text-foreground">{formatPrice(orderData.total)}</span>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-secondary rounded-lg p-6 mb-8">
            <h2 className="font-medium text-foreground mb-4">Các bước tiếp theo</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-accent/10 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Xác nhận đơn hàng</p>
                  <p className="text-sm text-muted-foreground">
                    Nhân viên Đức Cường sẽ liên hệ với bạn trong vòng 24h để xác nhận đơn hàng
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-accent/10 rounded-full flex items-center justify-center">
                  <Package className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Đóng gói và chuẩn bị</p>
                  <p className="text-sm text-muted-foreground">
                    Đơn hàng sẽ được chuẩn bị và đóng gói cẩn thận trong 1-2 ngày làm việc
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 bg-accent/10 rounded-full flex items-center justify-center">
                  <Truck className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Giao hàng</p>
                  <p className="text-sm text-muted-foreground">
                    Đơn hàng sẽ được giao trong vòng 2-5 ngày tùy theo địa chỉ của bạn
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="flex-1">
              <Link href="/">Về trang chủ</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1 bg-transparent">
              <Link href="/san-pham">Tiếp tục mua sắm</Link>
            </Button>
          </div>

          {/* Contact */}
          <div className="text-center mt-8 p-6 bg-secondary rounded-lg">
            <p className="text-muted-foreground mb-2">Cần hỗ trợ? Liên hệ với chúng tôi</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="tel:0909123456" className="text-accent hover:underline">
                Hotline: 0839 682 234
              </a>
              <span className="text-muted">|</span>
              <a href="mailto:contact@giatruong.com" className="text-accent hover:underline">
                Email: contact@giatruong.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

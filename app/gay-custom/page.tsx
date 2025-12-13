"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { customCues, customCategories } from "@/lib/custom-cues"

const customProcess = [
  {
    step: "01",
    title: "Tư vấn",
    description: "Trao đổi về nhu cầu, phong cách chơi và mong muốn thiết kế của bạn.",
  },
  {
    step: "02",
    title: "Thiết kế",
    description: "Chúng tôi tạo bản thiết kế chi tiết và gửi bạn xác nhận.",
  },
  {
    step: "03",
    title: "Chế tác",
    description: "Nghệ nhân thực hiện chế tác thủ công với chất liệu cao cấp.",
  },
  {
    step: "04",
    title: "Hoàn thiện",
    description: "Kiểm tra chất lượng và bàn giao sản phẩm hoàn hảo đến tay bạn.",
  },
]

const customFeatures = [
  "Chọn loại gỗ: Maple, Ebony, Cocobolo, Bocote...",
  "Thiết kế inlay theo ý tưởng riêng",
  "Chọn joint phù hợp phong cách chơi",
  "Tùy chọn wrap: da, Irish linen, không wrap",
  "Cân bằng trọng lượng theo yêu cầu",
  "Khắc tên hoặc logo cá nhân",
]

function formatPrice(price: number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price)
}

export default function CustomCuePage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredCues = customCues.filter((cue) => activeCategory === "all" || cue.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/60 mb-6">Dịch vụ đặc biệt</p>
              <h1 className="font-serif text-5xl md:text-6xl font-medium leading-[1.1] text-balance">
                Gậy Bi A
                <br />
                <span className="text-accent">Custom</span>
              </h1>
              <p className="mt-8 text-lg text-primary-foreground/70 leading-relaxed">
                Tạo ra chiếc gậy bi a độc nhất vô nhị, được chế tác thủ công theo đúng yêu cầu và phong cách của bạn.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild className="h-14 px-8 text-base">
                  <Link href="/lien-he">
                    Đặt hàng ngay
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                  asChild
                >
                  <a href="tel:0909123456">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Tư vấn miễn phí
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[500px]">
              <Image
                src="/custom-billiard-cue-ebony-wood-inlay-elegant.jpg"
                alt="Gậy bi a cao cấp"
                fill
                className="object-cover rounded"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Danh sách các mẫu custom */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Bộ sưu tập</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">Các mẫu đã thực hiện</h2>
            <p className="mt-4 text-muted-foreground">
              Khám phá các tác phẩm custom của Đức Cường. Mỗi gậy là một tác phẩm nghệ thuật độc bản.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {customCategories.map((category) => (
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

          {filteredCues.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Không tìm thấy mẫu custom trong danh mục này</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCues.map((cue) => (
                <Link href={`/gay-custom/${cue.slug}`} key={cue.id} className="group">
                  <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded bg-secondary">
                    <Image
                      src={cue.image || "/placeholder.svg"}
                      alt={cue.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-accent/90 text-accent-foreground">{cue.category}</Badge>
                  </div>
                  <h3 className="font-medium text-lg text-foreground group-hover:text-accent transition-colors">
                    {cue.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">{cue.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">Từ {formatPrice(cue.price)}</span>
                    <span className="text-sm text-accent group-hover:underline">Xem chi tiết</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Quy trình</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">Cách chúng tôi làm việc</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customProcess.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-serif text-background font-medium mb-4">{item.step}</div>
                <h3 className="text-xl font-medium text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Tùy chọn</p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-8">Tùy biến theo ý bạn</h2>
              <div className="space-y-4">
                {customFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <p className="text-muted-foreground mb-4">Giá từ:</p>
                <div className="font-serif text-4xl font-medium text-foreground">15.000.000đ</div>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image
                src="/premium-billiard-cue-brands-collection-display.jpg"
                alt="Tùy chọn gậy custom"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">Sẵn sàng tạo gậy của riêng bạn?</h2>
          <p className="text-primary-foreground/60 mb-10 text-lg">
            Liên hệ ngay để được tư vấn miễn phí và bắt đầu hành trình tạo chiếc gậy bi a độc nhất.
          </p>
          <Button size="lg" variant="secondary" asChild className="h-14 px-8 text-base">
            <Link href="/lien-he">Liên hệ tư vấn</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

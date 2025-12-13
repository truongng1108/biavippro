import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services"

export const metadata: Metadata = {
  title: "Dịch Vụ Sửa Chữa Bi A – Thay Tây, Nâng Thăng, Bọc Da",
  description:
    "Cung cấp dịch vụ sửa chữa bi a, thay tay, nâng thăng, bọc da gậy bi a nhanh chóng và chất lượng tại Đức Cường Billiards.",
  keywords: ["sửa chữa bi a", "thay tay gậy bi a", "nâng thăng gậy bi a", "bọc da gậy bi a"],
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Dịch vụ</p>
              <h1 className="font-serif text-5xl md:text-6xl font-medium text-foreground mb-6">Sửa Chữa & Nâng Cấp</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Dịch vụ sửa chữa, bảo dưỡng và nâng cấp gậy bi a chuyên nghiệp. Thợ lành nghề, thiết bị hiện đại, cam
                kết chất lượng.
              </p>
              <Button size="lg" asChild className="h-14 px-8 text-base">
                <Link href="/lien-he">
                  Đặt lịch ngay
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/billiard-cue-maintenance-care-cleaning.jpg"
                alt="Dịch vụ sửa chữa gậy bi a"
                fill
                className="object-cover rounded"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Bảng giá</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">Các dịch vụ của chúng tôi</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-lg text-foreground mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>

                  <div className="space-y-2 mb-4">
                    {service.details.slice(0, 3).map((detail, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <div className="text-lg font-medium text-foreground">{service.price}</div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {service.duration}
                      </div>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/lien-he">Đặt lịch</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square lg:aspect-auto lg:h-[500px]">
              <Image
                src="/billiard-cue-cleaning-maintenance.jpg"
                alt="Thợ sửa gậy bi a"
                fill
                className="object-cover rounded"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Tại sao chọn chúng tôi</p>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-8">
                Chất lượng là ưu tiên hàng đầu
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-accent font-medium">01</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Thợ lành nghề</h3>
                    <p className="text-sm text-muted-foreground">Đội ngũ thợ với hơn 10 năm kinh nghiệm trong nghề.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-accent font-medium">02</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Linh kiện chính hãng</h3>
                    <p className="text-sm text-muted-foreground">Sử dụng 100% linh kiện, phụ tùng chính hãng.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-accent font-medium">03</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Bảo hành dài hạn</h3>
                    <p className="text-sm text-muted-foreground">Cam kết bảo hành từ 3-12 tháng tùy dịch vụ.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">Gậy của bạn cần sửa chữa?</h2>
          <p className="text-primary-foreground/60 mb-10 text-lg">
            Mang gậy đến cửa hàng hoặc liên hệ để được tư vấn và báo giá miễn phí.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="h-14 px-8 text-base">
              <Link href="/lien-he">Liên hệ ngay</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <a href="tel:0909123456">0839 682 234</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

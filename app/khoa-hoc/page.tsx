import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { courses } from "@/lib/courses"

export const metadata: Metadata = {
  title: "Khóa Học Bi A Cơ Bản và Nâng Cao",
  description:
    "Khóa học bi a cơ bản và nâng cao, giúp bạn cải thiện kỹ năng chơi bi a. Học bi a từ cơ bản đến chuyên nghiệp tại Đức Cường Billiards.",
  keywords: ["khóa cơ bản bi a", "khóa nâng cao bi a", "học bi a"],
}

function formatPrice(price: number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price)
}

export default function CoursesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Đào tạo</p>
              <h1 className="font-serif text-5xl md:text-6xl font-medium text-foreground mb-6">Khóa Học Bi A</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Nâng cao kỹ năng chơi bi a với các khóa học từ cơ bản đến chuyên nghiệp. Giảng viên giàu kinh nghiệm,
                phương pháp giảng dạy hiệu quả.
              </p>
              <div className="flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-accent" />
                  <span>500+ học viên</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span>HLV chuyên nghiệp</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/billiard-basic-training-beginner.jpg"
                alt="Khóa học bi a"
                fill
                className="object-cover rounded"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Các khóa học</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">Chọn khóa học phù hợp</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={course.image || "/placeholder.svg"} alt={course.name} fill className="object-cover" />
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded">
                    {course.level}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-medium text-xl text-foreground mb-2">{course.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{course.description}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {course.curriculum.slice(0, 4).map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                    {course.curriculum.length > 4 && (
                      <span className="text-sm text-accent">+{course.curriculum.length - 4} nội dung khác</span>
                    )}
                  </div>

                  <div className="mt-auto pt-4 border-t border-border">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-serif font-medium text-foreground">
                          {formatPrice(course.price)}
                        </div>
                        <div className="text-xs text-muted-foreground">/ khóa học</div>
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <Link href="/lien-he">
                        Đăng ký ngay
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Giảng viên</p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium text-foreground">Đội ngũ huấn luyện viên</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
            </div>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                <Image
                  src="/huanluyenvien.jpg"
                  alt="HLV Ngô Quyết Thắng"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-medium text-foreground">HLV TNgô Quyết Thắng</h3>
              <p className="text-sm text-muted-foreground">Giảng viên Khóa Nâng Cao</p>
              <p className="text-xs text-accent mt-1">15+ năm kinh nghiệm</p>
            </div>
            <div className="text-center">
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">Bắt đầu hành trình của bạn</h2>
          <p className="text-primary-foreground/60 mb-10 text-lg">
            Đăng ký ngay để nhận tư vấn miễn phí và ưu đãi đặc biệt cho học viên mới.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="h-14 px-8 text-base">
              <Link href="/lien-he">Đăng ký tư vấn</Link>
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

import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Liên Hệ Với Chúng Tôi",
  description: "Liên hệ để mua gậy bi a chính hãng và nhận tư vấn từ đội ngũ chuyên nghiệp. Hotline: 0839 682 234",
  keywords: ["liên hệ gậy bi a", "mua gậy bi a", "tư vấn gậy bi a", "Đức Cường Billiards"],
  openGraph: {
    title: "Liên Hệ Với Chúng Tôi | Đức Cường Billiards",
    description: "Liên hệ để mua gậy bi a chính hãng và nhận tư vấn từ đội ngũ chuyên nghiệp.",
    url: "https://duccuongbilliards.com/lien-he",
  },
}

const contactInfo = [
  {
    icon: Phone,
    title: "Hotline",
    content: "0839 682 234",
    description: "Hỗ trợ 24/7",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@duccuongbilliards.com",
    description: "Phản hồi trong 24h",
  },
  {
    icon: MapPin,
    title: "Địa chỉ",
    content: "76 Láng Thượng Ba Đình Đống Đa Hà Nội",
    description: "Showroom chính",
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    content: "8:00 - 21:00",
    description: "Thứ 2 - Chủ nhật",
  },
]

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs uppercase tracking-widest text-muted-foreground mb-8">
        <ol className="flex items-center gap-2">
          <li>
            <a href="/" className="hover:text-foreground transition-colors">
              Trang chủ
            </a>
          </li>
          <li>/</li>
          <li className="text-foreground">Liên hệ</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="max-w-2xl mb-16">
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">Liên Hệ</h1>
        <p className="text-muted-foreground text-lg">
          Đội ngũ chuyên gia của Đức Cường Billiards luôn sẵn sàng hỗ trợ bạn. Hãy liên hệ với chúng tôi để được tư vấn
          miễn phí!
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {contactInfo.map((info) => (
          <div key={info.title} className="bg-secondary p-6 hover:bg-secondary/80 transition-colors">
            <info.icon className="h-5 w-5 text-accent mb-4" />
            <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{info.title}</h3>
            <p className="text-foreground font-medium">{info.content}</p>
            <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
          </div>
        ))}
      </div>

      {/* Contact Form & Map */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Form */}
        <div className="bg-secondary p-8 md:p-10">
          <h2 className="font-serif text-2xl font-medium text-foreground mb-8">Gửi tin nhắn</h2>
          <ContactForm />
        </div>

        {/* Map */}
        <div className="bg-secondary overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3895383736867!2d105.80343667602673!3d21.01709408817765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab60ae69b613%3A0xb4c9c77d425d3755!2zTmfDtSA3NiBOZ3V54buFbiBDaMOtIFRoYW5oLCBMw6FuZyBUaMaw4bujbmcsIMSQ4buRbmcgxJBhLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1765881862676!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "500px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bản đồ Đức Cường Billiards"
          />
        </div>
      </div>
    </div>
  )
}

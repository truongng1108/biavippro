import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div className="lg:col-span-1">
            <span className="font-serif text-3xl font-semibold tracking-tight">Đức Cường Billiards</span>
            <p className="text-primary-foreground/60 leading-relaxed mt-4 text-sm">
              Địa chỉ tin cậy cung cấp gậy bi a chính hãng, phụ kiện bi a và dịch vụ sửa chữa, nâng cấp chuyên nghiệp.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium mb-6 text-primary-foreground/40">Sản phẩm</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/san-pham"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                >
                  Các dòng gậy
                </Link>
              </li>
              <li>
                <Link
                  href="/gay-custom"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                >
                  Gậy Custom
                </Link>
              </li>
              <li>
                <Link
                  href="/phu-kien"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                >
                  Phụ kiện
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium mb-6 text-primary-foreground/40">Dịch vụ</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/dich-vu"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                >
                  Sửa chữa & Nâng cấp
                </Link>
              </li>
              <li>
                <Link
                  href="/khoa-hoc"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                >
                  Khóa học bi a
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/lien-he"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-widest font-medium mb-6 text-primary-foreground/40">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <span className="text-primary-foreground/60 text-sm">0839 682 234</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <span className="text-primary-foreground/60 text-sm">vuduccuongcuccu@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span className="text-primary-foreground/60 text-sm">76 Láng Thượng Ba Đình Đống Đa Hà Nội</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/40 text-sm">
          <p>© 2025 Đức Cường Billiards. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}

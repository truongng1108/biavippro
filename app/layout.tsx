import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/lib/cart-context"

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: {
    default: "Billiards Shop – Gậy Bi A Chính Hãng và Phụ Kiện Bi A | Đức Cường Billiards",
    template: "%s | Đức Cường Billiards",
  },
  description:
    "Khám phá các dòng gậy bi a chính hãng, phụ kiện bi a, và các dịch vụ sửa chữa, thay thế, nâng thăng tại Đức Cường Billiards. Giao hàng nhanh chóng, bảo hành dài hạn.",
  keywords: ["gậy bi a", "phụ kiện bi a", "mua gậy bi a", "dịch vụ bi a", "gậy bi a chính hãng", "Đức Cường Billiards"],
  authors: [{ name: "Đức Cường Billiards" }],
  creator: "Đức Cường Billiards",
  publisher: "Đức Cường Billiards",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://duccuongbilliards.com",
    siteName: "Đức Cường Billiards - Gậy Bi A Chính Hãng",
    title: "Billiards Shop – Gậy Bi A Chính Hãng và Phụ Kiện Bi A",
    description:
      "Khám phá các dòng gậy bi a chính hãng, phụ kiện bi a, và các dịch vụ sửa chữa, thay thế, nâng thăng tại Đức Cường Billiards.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Đức Cường Billiards - Gậy Bi A Chính Hãng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Billiards Shop – Gậy Bi A Chính Hãng và Phụ Kiện Bi A",
    description: "Khám phá các dòng gậy bi a chính hãng, phụ kiện bi a, và các dịch vụ tại Đức Cường Billiards.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://duccuongbilliards.com",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}

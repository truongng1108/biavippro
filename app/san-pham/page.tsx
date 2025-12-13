import type { Metadata } from "next"
import { ProductsPageClient } from "./products-page-client"

export const metadata: Metadata = {
  title: "Mua Bán Các Dòng Gậy Bi A – Mit, Predator, Fury, Dragon",
  description:
    "Mua các dòng gậy bi a chính hãng, như Mit, Predator, Fury, Dragon tại Đức Cường Billiards. Chất lượng đảm bảo, bảo hành dài hạn.",
  keywords: [
    "gậy bi a Mit",
    "gậy bi a Predator",
    "gậy bi a Fury",
    "gậy bi a Dragon",
    "mua gậy bi a",
    "Đức Cường Billiards",
  ],
  openGraph: {
    title: "Mua Bán Các Dòng Gậy Bi A – Mit, Predator, Fury, Dragon | Đức Cường Billiards",
    description: "Mua các dòng gậy bi a chính hãng, như Mit, Predator, Fury, Dragon tại Đức Cường Billiards.",
    url: "https://duccuongbilliards.com/san-pham",
  },
}

export default function ProductsPage() {
  return <ProductsPageClient />
}

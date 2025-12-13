import type { Metadata } from "next"
import ClientAccessoriesPage from "./_components/ClientAccessoriesPage"

export const metadata: Metadata = {
  title: "Phụ Kiện Bi A – Găng Tay, Bao Cơ, Khăn Lau",
  description:
    "Cung cấp phụ kiện bi a chính hãng, bao gồm găng tay, bao cơ, khăn lau và các phụ kiện khác với chất lượng cao, giá cả hợp lý.",
  keywords: ["phụ kiện bi a", "găng tay bi a", "bao cơ bi a", "khăn lau bi a"],
}

export default function AccessoriesPage() {
  return <ClientAccessoriesPage />
}

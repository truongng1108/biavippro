export interface Service {
  id: string
  name: string
  slug: string
  price: string
  image: string
  description: string
  details: string[]
  duration: string
}

export const services: Service[] = [
  {
    id: "s1",
    name: "Thay Đầu Cơ (Thay Tây)",
    slug: "thay-dau-co",
    price: "150.000đ - 800.000đ",
    image: "/billiard-cue-tip-replacement-service.jpg",
    description: "Dịch vụ thay đầu cơ (tây) chuyên nghiệp với các loại tip cao cấp như Kamui, Tiger, Moori.",
    details: ["Tháo tip cũ an toàn", "Làm phẳng ferrule", "Dán tip mới chính xác", "Định hình và hoàn thiện"],
    duration: "30 phút - 1 giờ",
  },
  {
    id: "s2",
    name: "Nâng Thăng Gậy",
    slug: "nang-thang-gay",
    price: "500.000đ - 2.000.000đ",
    image: "/billiard-cue-refinishing-polishing.jpg",
    description: "Dịch vụ nâng thăng gậy bi a, làm mới và phục hồi bề mặt gỗ.",
    details: ["Đánh bóng shaft", "Xử lý vết trầy xước", "Phục hồi độ mượt", "Bảo vệ bề mặt gỗ"],
    duration: "1 - 2 giờ",
  },
  {
    id: "s3",
    name: "Bọc Da Cán Gậy",
    slug: "boc-da-can-gay",
    price: "300.000đ - 1.500.000đ",
    image: "/billiard-cue-leather-wrap-grip.jpg",
    description: "Dịch vụ bọc da cán gậy với các loại da cao cấp, tăng độ bám và thẩm mỹ.",
    details: ["Tháo wrap cũ", "Làm sạch cán gậy", "Bọc da mới theo yêu cầu", "Hoàn thiện chuyên nghiệp"],
    duration: "1 - 2 giờ",
  },
  {
    id: "s4",
    name: "Quấn Chỉ Cán Gậy",
    slug: "quan-chi-can-gay",
    price: "200.000đ - 500.000đ",
    image: "/billiard-cue-thread-wrap-irish-linen.jpg",
    description: "Dịch vụ quấn chỉ Irish linen hoặc nylon cho cán gậy.",
    details: ["Tháo chỉ cũ", "Chuẩn bị bề mặt", "Quấn chỉ mới đều đẹp", "Phủ bảo vệ"],
    duration: "1 giờ",
  },
  {
    id: "s5",
    name: "Sửa Chữa Joint",
    slug: "sua-chua-joint",
    price: "500.000đ - 3.000.000đ",
    image: "/billiard-cue-joint-repair-metal.jpg",
    description: "Dịch vụ sửa chữa, thay thế joint gậy bi a bị hỏng hoặc mòn.",
    details: ["Kiểm tra tình trạng joint", "Tháo joint cũ", "Lắp joint mới chính xác", "Kiểm tra độ khít"],
    duration: "2 - 3 giờ",
  },
  {
    id: "s6",
    name: "Vệ Sinh & Bảo Dưỡng Toàn Bộ",
    slug: "ve-sinh-bao-duong",
    price: "300.000đ - 500.000đ",
    image: "/billiard-cue-cleaning-maintenance.jpg",
    description: "Dịch vụ vệ sinh và bảo dưỡng toàn bộ gậy bi a định kỳ.",
    details: ["Làm sạch shaft và butt", "Đánh bóng ferrule", "Kiểm tra tip", "Bôi dầu bảo vệ"],
    duration: "30 phút",
  },
]

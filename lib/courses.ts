export interface Course {
  id: string
  name: string
  slug: string
  price: number
  duration: string
  level: string
  image: string
  description: string
  curriculum: string[]
  instructor: string
}

export const courses: Course[] = [
  {
    id: "c1",
    name: "Khóa Bi A Cơ Bản",
    slug: "khoa-bi-a-co-ban",
    price: 2000000,
    duration: "8 buổi (2 tuần)",
    level: "Người mới bắt đầu",
    image: "/billiard-basic-training-beginner.jpg",
    description: "Khóa học dành cho người mới bắt đầu, giúp bạn nắm vững các kỹ thuật cơ bản của bi a.",
    curriculum: [
      "Cách cầm gậy và tư thế đứng đúng",
      "Kỹ thuật đánh thẳng (straight shot)",
      "Hiểu về góc phản xạ",
      "Điều khiển lực đánh",
      "Các shot cơ bản: stop, follow, draw",
      "Luyện tập và sửa lỗi",
    ],
    instructor: "HLV Nguyễn Văn A",
  },
  {
    id: "c2",
    name: "Khóa Bi A Nâng Cao",
    slug: "khoa-bi-a-nang-cao",
    price: 4000000,
    duration: "12 buổi (4 tuần)",
    level: "Trung cấp",
    image: "/billiard-advanced-training-professional.jpg",
    description: "Khóa học nâng cao cho người đã có nền tảng, tập trung vào kỹ thuật position và safety.",
    curriculum: [
      "Kỹ thuật position play",
      "Safety và defense shots",
      "Kick và bank shots",
      "Combo và carom shots",
      "Chiến thuật thi đấu",
      "Phân tích game thực tế",
      "Mental game và tâm lý thi đấu",
    ],
    instructor: "HLV Trần Văn B",
  },
  {
    id: "c3",
    name: "Khóa Bi A Chuyên Nghiệp",
    slug: "khoa-bi-a-chuyen-nghiep",
    price: 8000000,
    duration: "20 buổi (2 tháng)",
    level: "Nâng cao",
    image: "/billiard-professional-tournament-training.jpg",
    description: "Khóa học chuyên sâu dành cho người muốn thi đấu chuyên nghiệp.",
    curriculum: [
      "Kỹ thuật break chuyên nghiệp",
      "Pattern play và rack strategies",
      "Advanced position control",
      "Jump và masse shots",
      "Tournament preparation",
      "Video analysis",
      "1-on-1 coaching sessions",
      "Mock tournaments",
    ],
    instructor: "HLV Lê Văn C (VĐV Quốc gia)",
  },
]

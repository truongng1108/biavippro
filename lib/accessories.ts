export interface Accessory {
  id: string
  name: string
  slug: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  category: string
  description: string
  fullDescription?: string
  specifications?: { label: string; value: string }[]
  features?: string[]
  inStock: boolean
}

export const accessories: Accessory[] = [
  {
    id: "a1",
    name: "Găng tay Bi A Predator",
    slug: "gang-tay-bi-a-predator",
    price: 850000,
    image: "/gang1.jpg",
    images: ["/gang1.jpg", "https://billiardsomega.com/upload/filemanager/files/z5614843870335_4eca1034465dcb39a50b97e974a08566.jpg", "https://luxurycues.com.vn/upload/product/z694340999608591f0679452e4c8cb1f56848871fc8011-1756176856.jpg"],
    category: "Găng tay",
    description: "Găng tay bi a Predator chính hãng.",
    fullDescription:
      "Găng tay bi a Predator được thiết kế dành riêng cho người chơi bi a chuyên nghiệp. Chất liệu spandex cao cấp co giãn 4 chiều, thoáng khí, giúp tay luôn khô ráo. Thiết kế 3 ngón hở giúp bạn cảm nhận gậy tốt hơn trong khi vẫn giữ được độ trơn mượt khi đánh.",
    specifications: [
      { label: "Thương hiệu", value: "Predator" },
      { label: "Chất liệu", value: "Spandex cao cấp" },
      { label: "Kích thước", value: "S, M, L, XL" },
      { label: "Màu sắc", value: "Đen" },
      { label: "Xuất xứ", value: "USA" },
    ],
    features: ["Co giãn 4 chiều", "Thoáng khí", "Thiết kế 3 ngón hở", "Chống trượt", "Bền bỉ"],
    inStock: true,
  },
  {
    id: "a1b",
    name: "Găng tay Mezz ",
    slug: "gang-tay-mezz",
    price: 280000,
    image: "https://vn-live-01.slatic.net/p/e51964f95cb15724f7a76b35da46defd.jpg",
    category: "Găng tay",
    description: "Găng tay Mezz cao cấp, thiết kế thoáng mát.",
    fullDescription:
      "Găng tay Mezz với chất liệu lycra cao cấp, mang lại cảm giác thoải mái khi chơi lâu. Thiết kế tối giản nhưng hiệu quả, giúp gậy trượt mượt mà.",
    specifications: [
      { label: "Thương hiệu", value: "Mezz" },
      { label: "Chất liệu", value: "Spandex" },
      { label: "Kích thước", value: "Free size" },
      { label: "Màu sắc", value: "Đen, Xám" },
    ],
    features: ["Spandex cao cấp", "Free size", "Thoáng mát", "Giặt máy được"],
    inStock: true,
  },
  {
    id: "a1c",
    name: "Găng tay Fury Basic",
    slug: "gang-tay-fury-basic",
    price: 150000,
    image: "https://bizweb.dktcdn.net/100/431/073/products/dsc00438-1.jpg?v=1732009034773",
    category: "Găng tay",
    description: "Găng tay Fury giá tốt cho người mới chơi.",
    fullDescription:
      "Găng tay Fury Basic là lựa chọn kinh tế cho người mới bắt đầu chơi bi a. Chất liệu polyester bền, thoải mái và giá cả phải chăng.",
    specifications: [
      { label: "Thương hiệu", value: "Fury" },
      { label: "Chất liệu", value: "Polyester" },
      { label: "Kích thước", value: "M, L" },
      { label: "Màu sắc", value: "Đen" },
    ],
    features: ["Giá tốt", "Chất lượng ổn định", "Phù hợp người mới"],
    inStock: true,
  },
  {
    id: "a2",
    name: "Bao Cơ 2 Ngăn Mezz",
    slug: "bao-co-2-ngan-mezz",
    price: 1200000,
    originalPrice: 1500000,
    image: "/billiard-cue-case-black-leather.jpg",
    images: ["/billiard-cue-case-black-leather.jpg", "/billiard-cue-case-open.jpg", "/billiard-cue-case-interior.jpg"],
    category: "Bao cơ",
    description: "Bao cơ 2 ngăn Mezz cao cấp, da PU chống nước.",
    fullDescription:
      "Bao cơ Mezz 2 ngăn là lựa chọn hoàn hảo cho người chơi thường xuyên di chuyển. Chất liệu da PU cao cấp chống nước, chống trầy xước. Bên trong lót nhung mềm bảo vệ gậy khỏi va đập. Có ngăn phụ đựng lơ, găng tay và phụ kiện khác.",
    specifications: [
      { label: "Thương hiệu", value: "Mezz" },
      { label: "Chất liệu", value: "Da PU cao cấp" },
      { label: "Số ngăn", value: "2 ngăn chính + 1 ngăn phụ" },
      { label: "Kích thước", value: "85 x 12 x 8 cm" },
      { label: "Trọng lượng", value: "800g" },
    ],
    features: ["Chống nước", "Lót nhung mềm", "Dây đeo vai điều chỉnh", "Khóa kéo chắc chắn", "Ngăn phụ tiện lợi"],
    inStock: true,
  },
  {
    id: "a2b",
    name: "Bao Cơ 1 Ngăn Dragon",
    slug: "bao-co-1-ngan-dragon",
    price: 450000,
    image: "/dragon-billiard-cue-case-simple.jpg",
    category: "Bao cơ",
    description: "Bao cơ 1 ngăn Dragon đơn giản, gọn nhẹ.",
    fullDescription:
      "Bao cơ Dragon 1 ngăn phù hợp cho người chơi cần một giải pháp đơn giản để bảo vệ gậy. Chất liệu nylon bền, nhẹ và dễ mang theo.",
    specifications: [
      { label: "Thương hiệu", value: "Dragon" },
      { label: "Chất liệu", value: "Nylon" },
      { label: "Số ngăn", value: "1 ngăn chính" },
      { label: "Kích thước", value: "85 x 10 cm" },
    ],
    features: ["Nhẹ", "Giá tốt", "Dễ mang theo"],
    inStock: true,
  },
  {
    id: "a6",
    name: "Bao Cơ 4 Ngăn Predator",
    slug: "bao-co-4-ngan-predator",
    price: 3500000,
    image: "https://pos.nvncdn.com/0103bd-178787/ps/20240722_D4rzu9xKcm.webp?v=1721652080",
    images: [
      "https://pos.nvncdn.com/0103bd-178787/ps/20240722_fZyDz6JY3z.webp?v=1721644544",
      "https://bida123.vn/wp-content/uploads/2023/06/Bao-Predator-Urbain-2%C3%974-Houndstooth-CUNG-2.png",
      "https://pos.nvncdn.com/0103bd-178787/ps/20240822_waugOMbJH7.webp?v=1724316512",
    ],
    category: "Bao cơ",
    description: "Bao cơ 4 ngăn Predator Urbain, chất liệu cao cấp.",
    fullDescription:
      "Bao cơ Predator Urbain 4 ngăn là dòng sản phẩm cao cấp nhất của Predator. Thiết kế hiện đại với chất liệu vải ballistic siêu bền, chống nước, chống va đập. Bên trong có 4 ngăn đựng gậy độc lập, lót nhung cao cấp. Có thêm nhiều ngăn phụ đựng phụ kiện.",
    specifications: [
      { label: "Thương hiệu", value: "Predator" },
      { label: "Dòng sản phẩm", value: "Urbain" },
      { label: "Chất liệu", value: "Ballistic Nylon" },
      { label: "Số ngăn", value: "4 ngăn gậy + 3 ngăn phụ" },
      { label: "Kích thước", value: "90 x 15 x 10 cm" },
    ],
    features: ["Chống va đập", "Chống nước", "Lót nhung cao cấp", "Dây đeo vai êm ái", "Thiết kế hiện đại"],
    inStock: true,
  },
  {
    id: "a3",
    name: "Khăn Lau Gậy Microfiber",
    slug: "khan-lau-gay-microfiber",
    price: 80000,
    image: "https://bida123.vn/wp-content/uploads/2023/10/Khan-Cuetec-Microfiber-Billiard-Towel.png",
    images: ["https://bida123.vn/wp-content/uploads/2023/10/Khan-Cuetec-Microfiber-Billiard-Towel.png", "https://bida123.vn/wp-content/uploads/2023/10/Khan-Cuetec-Microfiber-Billiard-Towel.png", "https://bida123.vn/wp-content/uploads/2023/10/Khan-Cuetec-Microfiber-Billiard-Towel.png"],
    category: "Khăn lau",
    description: "Khăn lau gậy microfiber cao cấp, không để lại xơ vải.",
    fullDescription:
      "Khăn lau microfiber chuyên dụng cho gậy bi a, giúp làm sạch gậy mà không để lại xơ vải hay trầy xước. Chất liệu microfiber siêu mềm, hút ẩm tốt, có thể giặt và tái sử dụng nhiều lần.",
    specifications: [
      { label: "Chất liệu", value: "Microfiber 100%" },
      { label: "Kích thước", value: "30 x 30 cm" },
      { label: "Màu sắc", value: "Xanh dương" },
    ],
    features: ["Không để lại xơ vải", "Hút ẩm tốt", "Có thể giặt", "Siêu mềm"],
    inStock: true,
  },
  {
    id: "a3b",
    name: "Khăn Lau Predator Premium",
    slug: "khan-lau-predator-premium",
    price: 150000,
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lswjhsop8al593",
    category: "Khăn lau",
    description: "Khăn lau Predator cao cấp, chất liệu đặc biệt.",
    fullDescription:
      "Khăn lau Predator Premium với công nghệ sợi đặc biệt, làm sạch sâu và bảo vệ bề mặt gậy. Thích hợp cho gậy carbon fiber và gậy cao cấp.",
    specifications: [
      { label: "Thương hiệu", value: "Predator" },
      { label: "Chất liệu", value: "Microfiber đặc biệt" },
      { label: "Kích thước", value: "35 x 35 cm" },
      { label: "Màu sắc", value: "Đen" },
    ],
    features: ["Làm sạch sâu", "Bảo vệ carbon fiber", "Không xước gậy", "Chất lượng cao"],
    inStock: true,
  },
  {
    id: "a3c",
    name: "Set 3 Khăn Lau Mix Color",
    slug: "set-3-khan-lau-mix-color",
    price: 200000,
    originalPrice: 240000,
    image: "https://product.hstatic.net/1000325521/product/vn-11134207-7r98o-m08xr0zy3gcv02_tn_-_copy_c27a99dc09b54467bb0a5e5d047d9005.jpg",
    category: "Khăn lau",
    description: "Set 3 khăn lau nhiều màu, tiết kiệm.",
    fullDescription:
      "Set 3 khăn lau microfiber với 3 màu khác nhau (xanh, đỏ, vàng). Tiện lợi và tiết kiệm, phù hợp cho cả nhà hoặc câu lạc bộ.",
    specifications: [
      { label: "Chất liệu", value: "Microfiber" },
      { label: "Kích thước", value: "30 x 30 cm x 3" },
      { label: "Màu sắc", value: "Xanh, Đỏ, Vàng" },
    ],
    features: ["Combo 3 chiếc", "Nhiều màu", "Giá tiết kiệm"],
    inStock: true,
  },
  {
    id: "a4",
    name: "lơ Tiger",
    slug: "phan-tiger",
    price: 120000,
    image: "https://70ba3ff6.delivery.rocketcdn.me/wp-content/uploads/2025/09/lo-tiger-my-1.jpg",
    images: ["https://70ba3ff6.delivery.rocketcdn.me/wp-content/uploads/2025/09/lo-tiger-my-1.jpg"],
    category: "lơ",
    description: "lơ Tiger chính hãng, độ bám cao, giảm miscue.",
    fullDescription:
      "lơ Tiger là dòng lơ cao cấp được nhiều tay cơ chuyên nghiệp tin dùng. Công thức đặc biệt giúp tăng độ bám giữa đầu cơ và bóng, giảm thiểu miscue. lơ mịn, không bụi, dễ tán đều trên đầu cơ.",
    specifications: [
      { label: "Thương hiệu", value: "Tiger" },
      { label: "Màu sắc", value: "Xanh dương" },
      { label: "Số viên/hộp", value: "1 viên" },
      { label: "Xuất xứ", value: "Nhật Bản" },
    ],
    features: ["Độ bám cao", "Giảm miscue", "Không bụi", "Dễ tán đều"],
    inStock: true,
  },
  {
    id: "a4b",
    name: "lơ Kamui Roku 0.98",
    slug: "phan-kamui-roku-098",
    price: 250000,
    image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/357/267/products/z4857022473823-e2d724ede80b071caa8649da5db6f62b.jpg?v=1736066787070",
    category: "lơ",
    description: "lơ Kamui Roku cao cấp nhất, độ bám tuyệt vời.",
    fullDescription:
      "lơ Kamui Roku 0.98 là dòng lơ cao cấp nhất của Kamui. Công thức độc quyền với độ bám tối ưu, giảm miscue xuống mức thấp nhất. Lựa chọn của các tay cơ chuyên nghiệp trên toàn thế giới.",
    specifications: [
      { label: "Thương hiệu", value: "Kamui" },
      { label: "Dòng sản phẩm", value: "Roku 0.98" },
      { label: "Màu sắc", value: "Xanh lá" },
      { label: "Xuất xứ", value: "Nhật Bản" },
    ],
    features: ["Độ bám tối ưu", "Giảm miscue tối đa", "Dùng lâu", "Chuyên nghiệp"],
    inStock: true,
  },
  {
    id: "a4c",
    name: "Set 12 Viên lơ Master",
    slug: "set-12-vien-phan-master",
    price: 350000,
    image: "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/558986425_1282682330539721_6615610493376948477_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Th28pLzlaAAQ7kNvwHpAMCM&_nc_oc=AdnZ_9nL-dbpNQp2axJfExLAs2AnnS28cHFHq0rQhZa5gT_hN3yRhn0mGBu-G32YS7A&_nc_zt=23&_nc_ht=scontent-hkg1-2.xx&_nc_gid=kRBKRPW5VrAZhJ2Y8KxiAA&oh=00_AfmdI6TbEi7fs1_BIom3Pc6x6gbcepjJIQVu6Xrg7Y3LtA&oe=6942A574",
    category: "lơ",
    description: "Hộp 12 viên lơ Master giá tốt.",
    fullDescription:
      "Set 12 viên lơ Master là lựa chọn kinh tế cho câu lạc bộ hoặc người chơi thường xuyên. Chất lượng tốt với giá cả hợp lý.",
    specifications: [
      { label: "Thương hiệu", value: "Master" },
      { label: "Số viên/hộp", value: "12 viên" },
      { label: "Màu sắc", value: "Xanh dương" },
    ],
    features: ["Hộp 12 viên", "Giá tốt", "Chất lượng ổn định"],
    inStock: true,
  },
  {
    id: "a5",
    name: "Đầu Cơ Kamui Black",
    slug: "dau-co-kamui-black",
    price: 650000,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jIdi5JxwQh1jSzP65NUrnuQn4uQIJIhWSg&s",
    images: ["https://frommshop.com/public/upload/product/kamui-black-1-YX4PjcJ1HJ.jpg"],
    category: "Đầu cơ",
    description: "Đầu cơ Kamui Black soft, da nhiều lớp, spin tuyệt vời.",
    fullDescription:
      "Đầu cơ Kamui Black Soft là lựa chọn hàng đầu cho người chơi ưa thích spin. Được làm từ da lợn nhiều lớp ép chặt, đảm bảo độ bền và độ đàn hồi tối ưu. Công nghệ độc quyền của Kamui giúp giữ lơ lâu hơn và tạo spin mạnh mẽ.",
    specifications: [
      { label: "Thương hiệu", value: "Kamui" },
      { label: "Dòng sản phẩm", value: "Black Soft" },
      { label: "Chất liệu", value: "Da lợn nhiều lớp" },
      { label: "Kích thước", value: "13mm, 14mm" },
      { label: "Xuất xứ", value: "Nhật Bản" },
    ],
    features: ["Spin tuyệt vời", "Giữ lơ lâu", "Da nhiều lớp", "Độ bền cao", "Cảm giác mềm mại"],
    inStock: true,
  },
  {
    id: "a5b",
    name: "Đầu Cơ Tiger Sniper",
    slug: "dau-co-tiger-sniper",
    price: 350000,
    image: "https://billiardsomega.com/upload/filemanager/files/z5567596857497_7d3390bb366e93988a3ad1032251829c(1).jpg",
    category: "Đầu cơ",
    description: "Đầu cơ Tiger Sniper medium, cân bằng tốt.",
    fullDescription:
      "Đầu cơ Tiger Sniper Medium mang lại sự cân bằng giữa độ cứng và mềm, phù hợp cho đa số người chơi. Chất lượng ổn định với giá cả hợp lý.",
    specifications: [
      { label: "Thương hiệu", value: "Tiger" },
      { label: "Dòng sản phẩm", value: "Sniper Medium" },
      { label: "Chất liệu", value: "Da lợn" },
      { label: "Kích thước", value: "13mm, 14mm" },
    ],
    features: ["Độ cứng medium", "Cân bằng tốt", "Giá hợp lý"],
    inStock: true,
  },
  {
    id: "a5c",
    name: "Đầu Cơ Moori Medium",
    slug: "dau-co-moori-medium",
    price: 450000,
    image: "https://frommshop.com/public/upload/product/moriah-tip-Axj3s5FCsv.jpg",
    category: "Đầu cơ",
    description: "Đầu cơ Moori medium, cảm giác cổ điển.",
    fullDescription:
      "Đầu cơ Moori Medium với cảm giác đánh cổ điển, được nhiều tay cơ lão làng ưa chuộng. Độ bền cao và giá cả hợp lý.",
    specifications: [
      { label: "Thương hiệu", value: "Moori" },
      { label: "Dòng sản phẩm", value: "Medium" },
      { label: "Chất liệu", value: "Da lợn nhiều lớp" },
      { label: "Kích thước", value: "13mm, 14mm" },
    ],
    features: ["Cảm giác cổ điển", "Độ bền cao", "Đa dạng size"],
    inStock: true,
  },
]

export const accessoryCategories = [
  { name: "Tất cả", slug: "all" },
  { name: "Găng tay", slug: "gang-tay" },
  { name: "Bao cơ", slug: "bao-co" },
  { name: "Khăn lau", slug: "khan-lau" },
  { name: "lơ", slug: "phan" },
  { name: "Đầu cơ", slug: "dau-co" },
]

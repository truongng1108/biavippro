export interface CustomCue {
  id: string
  name: string
  slug: string
  price: number
  image: string
  images: string[]
  category: string
  description: string
  fullDescription: string
  specifications: { label: string; value: string }[]
  features: string[]
  woodType: string
  inlayStyle: string
  available: boolean
}

export const customCues: CustomCue[] = [
  {
    id: "c1",
    name: "Custom Ebony Inlay",
    slug: "custom-ebony-inlay",
    price: 25000000,
    image: "/custom-billiard-cue-ebony-wood-inlay-elegant.jpg",
    images: [
      "/custom-billiard-cue-ebony-wood-inlay-elegant.jpg",
      "/custom-cue-ebony-joint-detail.jpg",
      "/custom-cue-ebony-wrap-detail.jpg",
      "/custom-cue-ebony-butt-detail.jpg",
    ],
    category: "Premium",
    description: "Gậy custom với gỗ Ebony và inlay hoa văn độc đáo",
    fullDescription:
      "Tác phẩm nghệ thuật thực sự từ nghệ nhân Đức Cường Billiards. Gậy custom Ebony Inlay được chế tác thủ công từ gỗ Ebony châu Phi cao cấp, kết hợp với inlay hoa văn tinh xảo bằng xà cừ và gỗ Maple. Mỗi chi tiết đều được hoàn thiện tỉ mỉ, mang đến vẻ đẹp độc nhất vô nhị.",
    specifications: [
      { label: "Gỗ chính", value: "Ebony châu Phi" },
      { label: "Shaft", value: "Hard Rock Maple" },
      { label: "Inlay", value: "Xà cừ, Maple" },
      { label: "Joint", value: "Radial 5/16x18" },
      { label: "Wrap", value: "Irish Linen đen" },
      { label: "Tip", value: "Kamui Black 13mm" },
      { label: "Trọng lượng", value: "19.5 oz (có thể điều chỉnh)" },
      { label: "Chiều dài", value: "58 inch" },
    ],
    features: [
      "Gỗ Ebony nguyên khối",
      "Inlay thủ công xà cừ",
      "Balance hoàn hảo",
      "Low deflection shaft",
      "Bảo hành trọn đời",
    ],
    woodType: "Ebony",
    inlayStyle: "Mother of Pearl",
    available: true,
  },
  {
    id: "c2",
    name: "Maple Premium Classic",
    slug: "maple-premium-classic",
    price: 18000000,
    image: "/custom-billiard-cue-maple-wood-classic-minimalist.jpg",
    images: [
      "/custom-billiard-cue-maple-wood-classic-minimalist.jpg",
      "/maple-cue-joint-silver-detail.jpg",
      "/maple-cue-leather-wrap.jpg",
      "/maple-cue-grain-detail.jpg",
    ],
    category: "Classic",
    description: "Gậy Maple với thiết kế tối giản, sang trọng",
    fullDescription:
      "Vẻ đẹp trong sự đơn giản. Gậy custom Maple Premium Classic được làm từ gỗ Maple 5A grade với vân gỗ tự nhiên tuyệt đẹp. Thiết kế tối giản, không inlay, tập trung vào vẻ đẹp thuần túy của gỗ. Lý tưởng cho người chơi ưa chuộng phong cách cổ điển.",
    specifications: [
      { label: "Gỗ chính", value: "Hard Rock Maple 5A" },
      { label: "Shaft", value: "Hard Rock Maple" },
      { label: "Inlay", value: "Không" },
      { label: "Joint", value: "Piloted 3/8x10" },
      { label: "Wrap", value: "Da tự nhiên" },
      { label: "Tip", value: "Tiger Sniper 13mm" },
      { label: "Trọng lượng", value: "19 oz" },
      { label: "Chiều dài", value: "58 inch" },
    ],
    features: ["Gỗ Maple 5A", "Vân gỗ tự nhiên", "Thiết kế tối giản", "Cân bằng chuẩn", "Bảo hành 5 năm"],
    woodType: "Maple",
    inlayStyle: "None",
    available: true,
  },
  {
    id: "c3",
    name: "Dragon Series - Rồng Phương Đông",
    slug: "dragon-series-rong-phuong-dong",
    price: 35000000,
    image: "/custom-billiard-cue-dragon-design-oriental-art.jpg",
    images: [
      "/custom-billiard-cue-dragon-design-oriental-art.jpg",
      "/mcdermott-billiard-cue-premium-wood-inlay.jpg",
      "/mezz-billiard-cue-wood-grain-professional.jpg",
      "/premium-billiard-cue-brands-collection-display.jpg",
    ],
    category: "Signature",
    description: "Gậy custom với họa tiết rồng phương Đông",
    fullDescription:
      "Dòng Signature đặc biệt của Đức Cường Billiards. Gậy Dragon Series lấy cảm hứng từ hình tượng rồng trong văn hóa phương Đông - biểu tượng của sức mạnh và may mắn. Inlay rồng được chạm khắc thủ công từ vàng 18K và xà cừ, kết hợp trên nền gỗ Cocobolo đỏ rực.",
    specifications: [
      { label: "Gỗ chính", value: "Cocobolo" },
      { label: "Shaft", value: "Carbon Fiber Hybrid" },
      { label: "Inlay", value: "Vàng 18K, Xà cừ" },
      { label: "Joint", value: "Uni-Loc Quick Release" },
      { label: "Wrap", value: "Da cá sấu đen" },
      { label: "Tip", value: "Kamui Clear Black 12.5mm" },
      { label: "Trọng lượng", value: "19.2 oz" },
      { label: "Chiều dài", value: "58.5 inch" },
    ],
    features: [
      "Inlay vàng 18K",
      "Carbon fiber shaft",
      "Họa tiết rồng độc quyền",
      "Chạm khắc thủ công",
      "Chứng nhận và đánh số",
    ],
    woodType: "Cocobolo",
    inlayStyle: "Gold Dragon",
    available: true,
  },
  {
    id: "c4",
    name: "Bocote Natural Beauty",
    slug: "bocote-natural-beauty",
    price: 22000000,
    image: "/mcdermott-billiard-cue-premium-wood-inlay.jpg",
    images: [
      "/mcdermott-billiard-cue-premium-wood-inlay.jpg",
      "/lucasi-billiard-cue-elegant-design-wood.jpg",
      "/mezz-billiard-cue-wood-grain-professional.jpg",
      "/players-billiard-cue-affordable-classic-design.jpg",
    ],
    category: "Premium",
    description: "Gỗ Bocote với vân tự nhiên ấn tượng",
    fullDescription:
      "Bocote - loại gỗ quý từ Mexico với vân gỗ độc đáo không ai giống ai. Mỗi gậy Bocote Natural Beauty là một tác phẩm độc bản, tôn vinh vẻ đẹp tự nhiên của gỗ. Kết hợp với ring inlay đơn giản bằng đồng thau, tạo điểm nhấn tinh tế.",
    specifications: [
      { label: "Gỗ chính", value: "Bocote Mexico" },
      { label: "Shaft", value: "Hard Rock Maple" },
      { label: "Inlay", value: "Ring đồng thau" },
      { label: "Joint", value: "Radial 5/16x14" },
      { label: "Wrap", value: "Irish Linen tự nhiên" },
      { label: "Tip", value: "Moori Medium 13mm" },
      { label: "Trọng lượng", value: "19.3 oz" },
      { label: "Chiều dài", value: "58 inch" },
    ],
    features: ["Vân gỗ độc bản", "Gỗ Bocote quý hiếm", "Ring inlay đồng", "Cảm giác đánh tự nhiên", "Bảo hành 5 năm"],
    woodType: "Bocote",
    inlayStyle: "Brass Rings",
    available: true,
  },
  {
    id: "c5",
    name: "Rosewood Elegance",
    slug: "rosewood-elegance",
    price: 28000000,
    image: "/lucasi-billiard-cue-elegant-design-wood.jpg",
    images: [
      "/lucasi-billiard-cue-elegant-design-wood.jpg",
      "/mezz-billiard-cue-wood-grain-professional.jpg",
      "/mcdermott-billiard-cue-premium-wood-inlay.jpg",
      "/premium-billiard-cue-brands-collection-display.jpg",
    ],
    category: "Premium",
    description: "Gỗ Rosewood với inlay ngọc lam tinh tế",
    fullDescription:
      "Sự kết hợp hoàn hảo giữa gỗ Rosewood Ấn Độ và đá ngọc lam thiên nhiên. Gậy Rosewood Elegance mang đến vẻ đẹp sang trọng với tông màu nâu đỏ ấm áp của Rosewood, điểm xuyết bởi những viên ngọc lam xanh biếc. Một lựa chọn tinh tế cho người chơi có gu.",
    specifications: [
      { label: "Gỗ chính", value: "Indian Rosewood" },
      { label: "Shaft", value: "Hard Rock Maple Pro Taper" },
      { label: "Inlay", value: "Đá ngọc lam, bạc" },
      { label: "Joint", value: "Piloted 5/16x18" },
      { label: "Wrap", value: "Da bò Ý" },
      { label: "Tip", value: "Kamui Black Super Soft 13mm" },
      { label: "Trọng lượng", value: "19.4 oz" },
      { label: "Chiều dài", value: "58 inch" },
    ],
    features: ["Đá ngọc lam thiên nhiên", "Gỗ Rosewood Ấn Độ", "Inlay bạc 925", "Pro taper shaft", "Bảo hành trọn đời"],
    woodType: "Rosewood",
    inlayStyle: "Turquoise & Silver",
    available: true,
  },
]

export const customCategories = [
  { name: "Tất cả", slug: "all" },
  { name: "Classic", slug: "classic" },
  { name: "Premium", slug: "premium" },
  { name: "Signature", slug: "signature" },
]

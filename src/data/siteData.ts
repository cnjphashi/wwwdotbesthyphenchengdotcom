export const heroSlider = {
  // 轮播图片 URL 数组
  images: [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop",
  ],
  // 自动轮播间隔毫秒数（4000 = 4秒）
  delay: 4000,
  // 是否开启无限循环
  loop: true,
  // 切换动画效果: 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip'
  effect: 'slide',
  // 切换动画过渡速度（毫秒）
  speed: 800,
};

export const siteData = {
  name: "Best Cheng",

  tagline: "日本品質のランドセル・バッグを、世界へ。",

  description: "ランドセルをはじめとする各種バッグの企画・開発・製造を手掛け、OEM・ODMにも対応。日本市場向けの品質基準に基づいた確かなものづくりで、ブランドの価値を形にします。",

  address: "浙江省平湖市広陳鎮広中南路883号2棟3～5階",

  phone: "",

  email: "",

  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
};

export const socialLinks = [
  { name: "facebook", icon: "ri-facebook-fill", label: "Facebook" },
  { name: "instagram", icon: "ri-instagram-fill", label: "Instagram" },
  { name: "twitter", icon: "ri-twitter-x-fill", label: "Twitter" },
  { name: "youtube", icon: "ri-youtube-fill", label: "YouTube" },
];

export const contactInfo = [
  {
    icon: "ri-map-pin-line",
    title: "Address",
    content: siteData.address,
    link: null,
  },
  {
    icon: "ri-phone-line",
    title: "Phone",
    content: siteData.phone,
    link: `tel:${siteData.phone}`,
  },
  {
    icon: "ri-mail-line",
    title: "Email",
    content: siteData.email,
    link: `mailto:${siteData.email}`,
  },
  {
    icon: "ri-time-line",
    title: "Hours",
    content: ["Open 24/7 for Premium and Elite members", "Basic members: 5 AM - 11 PM daily"],
    link: null,
  },
];

export const navigation = [
  { name: "生産と品質管理", href: "/#qc"},
  { name: "取扱商品", href: "/#products" },
  { name: "選ばれる理由", href: "/#why-choose-us" },
  { name: "会社概要", href: "/#company-profile" },
  { name: "ニュース", href: "/#news" },
  { name: "よくある質問", href: "/#faq" },
  { name: "お問い合わせ", href: "/#contact" },
];

export const relatedLinks = [
  { name: "Sinosun Bridge", href: "https://cnjphashi.com/ja/hoomu/" },
  { name: "Hatcatoy", href: "https://www.hatcatoy.com/" },
  { name: "ZAKAKING", href: "https://www.zakaking.com/" },
  { name: "Naniwacc", href: "https://www.naniwacc.com/" },
  { name: "Coulombag", href: "https://coulombag.com/" },
];

export const features = [
  {
    title: "日本向け輸出に特化",
    description: "弊社は設立以来、ランドセルを中心に日本市場向け製品の製造・輸出に取り組んでまいりました。日本の品質基準や市場ニーズを熟知し、細部までこだわった製品づくりで、多くのお取引先様から信頼をいただいております。",
    icon: "ri-global-line",
  },
  {
    title: "豊富な歴史と経験",
    description: "10年近くの製造経験を通じて、ランドセルをはじめとする各種バッグを数多く手がけてきました。長年の実績に基づいたノウハウを活かし、安定した品質と対応力を誇ります。",
    icon: "ri-briefcase-4-line",
  },
  {
    title: "小ロット対応可能",
    description: "大量生産から小ロット・サンプル対応まで柔軟に承っております。お客様のご要望に合わせたカスタマイズや短納期にも対応可能です。",
    icon: "ri-tools-line",
  },
  {
    title: "科学的かつ効率的な管理体制",
    description: "生産・品質・人材管理を明確に分けた運営体制を整え、MESシステムにより生産計画から出荷までの工程を可視化・最適化しています。効率的な管理と部門連携により、高い生産性と安定した品質を実現しています。",
    icon: "ri-settings-3-line",
  },
];

export const classes = [
  {
    name: "HIIT Training",
    description: "High-intensity interval training for maximum calorie burn",
    detailedDescription: "Push your limits with our high-intensity interval training. This class alternates between intense bursts of activity and fixed periods of rest, maximizing calorie burn and improving cardiovascular fitness. Perfect for those looking to torch calories and build endurance.",
    duration: "45 min",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
    benefits: ["Burn up to 600 calories", "Improve cardiovascular health", "Build endurance", "Time-efficient workout"],
    trainer: "Mike Chen",
    whatToExpect: "Dynamic movements, short rest periods, high energy atmosphere",
  },
  {
    name: "Yoga & Flexibility",
    description: "Improve flexibility, balance, and mental wellness",
    detailedDescription: "Find your inner peace while improving flexibility and strength. Our yoga classes combine traditional poses with modern techniques to enhance balance, reduce stress, and increase mobility. Suitable for all levels, from beginners to advanced practitioners.",
    duration: "60 min",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop&q=80",
    benefits: ["Increase flexibility", "Reduce stress", "Improve balance", "Enhance mental clarity"],
    trainer: "Sarah Johnson",
    whatToExpect: "Gentle stretches, breathing exercises, meditation, peaceful environment",
  },
  {
    name: "Strength Training",
    description: "Build muscle and increase strength with guided workouts",
    detailedDescription: "Build lean muscle and increase your strength with our comprehensive strength training program. Our expert trainers guide you through proper form and technique using free weights, machines, and bodyweight exercises. Perfect for building a strong, toned physique.",
    duration: "60 min",
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    benefits: ["Build muscle mass", "Increase strength", "Improve bone density", "Boost metabolism"],
    trainer: "John Smith",
    whatToExpect: "Progressive weight training, form correction, personalized guidance",
  },
  {
    name: "Cardio Blast",
    description: "Heart-pumping cardio session to boost your endurance",
    detailedDescription: "Get your heart pumping with our high-energy cardio class. Combining various cardio exercises including running, jumping, and dance movements, this class will boost your endurance, improve heart health, and help you shed those extra pounds.",
    duration: "45 min",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
    benefits: ["Improve heart health", "Burn calories", "Boost endurance", "Increase energy levels"],
    trainer: "Mike Chen",
    whatToExpect: "Energetic music, varied movements, supportive group atmosphere",
  },
  {
    name: "Pilates",
    description: "Core strengthening and body alignment exercises",
    detailedDescription: "Strengthen your core and improve your posture with our Pilates classes. Focus on controlled movements that target deep core muscles, improve alignment, and enhance overall body awareness. Great for rehabilitation and building long, lean muscles.",
    duration: "50 min",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
    benefits: ["Strengthen core", "Improve posture", "Enhance flexibility", "Reduce back pain"],
    trainer: "Sarah Johnson",
    whatToExpect: "Controlled movements, focus on form, mind-body connection",
  },
  {
    name: "CrossFit",
    description: "Functional movements performed at high intensity",
    detailedDescription: "Experience the ultimate functional fitness challenge with our CrossFit classes. Combining weightlifting, gymnastics, and cardio, each workout is different and designed to push you to new limits. Build strength, endurance, and mental toughness.",
    duration: "60 min",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
    benefits: ["Build functional strength", "Improve all-around fitness", "Challenge yourself", "Join a community"],
    trainer: "John Smith",
    whatToExpect: "Varied workouts, high intensity, supportive community, measurable progress",
  },
];

export const pricingPlans = [
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    features: [
      "Access to gym facilities",
      "Basic equipment usage",
      "Locker room access",
      "Free parking",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$59",
    period: "/month",
    features: [
      "Everything in Basic",
      "Group classes included",
      "Personal trainer consultation",
      "Nutrition guidance",
      "24/7 access",
    ],
    popular: true,
  },
  {
    name: "Elite",
    price: "$99",
    period: "/month",
    features: [
      "Everything in Premium",
      "Unlimited personal training",
      "Custom meal plans",
      "Priority class booking",
      "Spa & recovery access",
    ],
    popular: false,
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Member for 2 years",
    content: "FitZone has completely transformed my fitness journey. The trainers are amazing and the community is so supportive!",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Member for 1 year",
    content: "Best gym in town! The equipment is top-notch and the 24/7 access fits perfectly with my schedule.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Member for 6 months",
    content: "I love the variety of classes offered. The HIIT sessions are intense but so rewarding. Highly recommend!",
    rating: 5,
  },
];

export const facilities = [
  {
    title: "トートバッグ",
    description: "",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E6%89%98%E7%89%B9%E5%8C%85.webp",
    link: "https://cnjphashi.com/ja/product-category/baggu-sutsukeesu/to-to-baggu/",
  },
  {
    title: "トラベルバッグ・スーツケース",
    description: "",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E6%97%85%E8%A1%8C%E5%8C%85.webp",
    link: "https://cnjphashi.com/ja/product-category/baggu-sutsukeesu/toraberu-baggu-bosuton-baggu/",
  },
  {
    title: "ペットキャリー",
    description: "",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E5%AE%A0%E7%89%A9%E5%8C%85.webp",
    link: "https://cnjphashi.com/ja/product-category/baggu-sutsukeesu/petto-you-baggu/",
  },
  {
    title: "ランドセル",
    description: "",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E4%B9%A6%E5%8C%85.webp",
    link: "https://cnjphashi.com/ja/product-category/baggu-sutsukeesu/randoseru/",
  },
  {
    title: "ランドセル周辺",
    description: "",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E4%B9%A6%E5%8C%85%E9%85%8D%E4%BB%B6.webp",
    link: "https://cnjphashi.com/ja/product-category/baggu-sutsukeesu/randoseru-shuuhen/",
  },
  {
    title: "リュック",
    description: "",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E5%8F%8C%E8%82%A9%E5%8C%85.webp",
    link: "https://cnjphashi.com/ja/product-category/baggu-sutsukeesu/ryukku-bakku-pakku/",
  },
  {
    title: "化粧バッグ・ポチ",
    description: "",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E5%8C%96%E5%A6%86%E5%8C%85.webp",
    link: "https://cnjphashi.com/ja/product-category/baggu-sutsukeesu/keshou-baggu/",
  },
  {
    title: "財布・小銭入れ",
    description: "",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E9%92%B1%E5%8C%85.webp",
    link: "https://cnjphashi.com/ja/product-category/baggu-sutsukeesu/saifu-kozeniire/",
  },
  {
    title: "スポーツ・フィットネスバッグ",
    description: "",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E8%BF%90%E5%8A%A8%E5%8C%85.webp",
    link: "https://cnjphashi.com/ja/product-category/baggu-sutsukeesu/supootsu-fittonesu-baggu/",
  },
];

export const faqs = [
  {
    question: "オリジナルデザインの製作は可能ですか？",
    answer: "はい、OEM・ODMどちらも対応しております。図面、デザインデータ、サンプルなどをご提供いただければ、弊社にて評価・試作いたします。",
  },
  {
    question: "最小注文数量（MOQ）はどのくらいですか？",
    answer: "基本的には生地のミニマムによりますが、ランドセルの場合は、一般的な最小発注数量は２００個/カラーからになりますが、合計発注数量が多かったり、リピートがあったりする場合は、詳細はご相談くださ い。",
  },
  {
    question: "サンプルの製作にはどのくらい時間がかかりますか？",
    answer: "サンプル材料の調達や型を作るかどうかによって、サンプル出来上がる時間は大きく変わります。簡単の場合は、サンプル作成には約１～２週間はかかります。 ",
  },
  {
    question: "第三者検品を受け入れていますか。",
    answer: "はい、第三者検品は対応可能ですが、ただし、第三者検品の関連費用 は、お客様がご負担いただきます。",
  },
  {
    question: "ランドセルに6年間の保証サービスはありますか。",
    answer: " 基本的には初期不良やロット不良などの対応のみとなります。詳細はお客様との契約内容によります。６年間保証はあくまでランドセルメーカーが消費者に提供するサービスであって、弊社は生産工場としては、６年間の使用に耐えられるクォリティーの高いランドセルを提供致します。",
  },
  {
    question: "注文から納品までの流れを教えてください。",
    answer: "ご注文 → 量産前サンプル確認 → 生産開始 → 品質検査 → 出荷 → 納品 の順で進行します。",
  },
  {
    question: "工場見学は可能ですか？",
    answer: "はい、可能です。ただし、事前にご予約が必要です。場合により、対応できないケースもあります。",
  },
  {
    question: "中国国内の他工場や倉庫までへの納品は可能ですか。",
    answer: "はい、対応可能です。",
  },
  {
    question: "持ち込み材料による加工注文は可能ですか。",
    answer: "はい、来料加工のご注文も承っております。",
  },
  {
    question: "配送方法には何がありますか？ ",
    answer: "海上輸送、航空便、国際宅配便（DHL、FedEx、など）に対応しております。納期やコストに応じて最適な配送方法をご提案いたします。",
  },
  {
    question: "仕入れコストや物流コストを削減したいので、ランドセルやカバン以外の商材も取扱いしており、調達依頼は可能ですか。",
    answer: "はい、可能です。貿易チームもございますので、詳細はご相談ください。",
  },
];

export const classSchedule = [
  { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
  { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
  { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
  { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
  { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
  { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
  { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
];

export const successStories = [
  {
    name: "Jessica Martinez",
    age: 32,
    duration: "8 months",
    result: "Lost 45 lbs",
    story: "I was skeptical at first, but FitZone changed my life. The supportive trainers and community kept me motivated. I've never felt better!",
    beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=600&fit=crop&q=80",
  },
  {
    name: "David Thompson",
    age: 28,
    duration: "6 months",
    result: "Gained 20 lbs muscle",
    story: "The strength training program and nutrition guidance helped me build the physique I always wanted. The trainers are true professionals.",
    beforeImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=600&fit=crop&q=80",
  },
  {
    name: "Lisa Anderson",
    age: 35,
    duration: "1 year",
    result: "Completed first marathon",
    story: "From never running to completing a marathon - FitZone's cardio programs and group classes gave me the endurance and confidence I needed.",
    beforeImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=600&fit=crop&q=80",
    afterImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop&q=80",
  },
];

export const statistics = [
  { number: "500+", label: "Active Members", icon: "ri-user-line" },
  { number: "50+", label: "Expert Trainers", icon: "ri-user-star-line" },
  { number: "10k+", label: "Classes Completed", icon: "ri-calendar-check-line" },
  { number: "5k+", label: "Pounds Lost", icon: "ri-line-chart-line" },
  { number: "98%", label: "Satisfaction Rate", icon: "ri-heart-line" },
  { number: "15+", label: "Years Experience", icon: "ri-award-line" },
];

export const fullSchedule = {
  monday: [
    { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  ],
  tuesday: [
    { time: "6:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "8:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "9:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "6:00 PM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 PM", class: "Strength Training", trainer: "John Smith" },
  ],
  wednesday: [
    { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  ],
  thursday: [
    { time: "6:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "8:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "9:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "6:00 PM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 PM", class: "Strength Training", trainer: "John Smith" },
  ],
  friday: [
    { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  ],
  saturday: [
    { time: "8:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "10:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "11:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
  ],
  sunday: [
    { time: "9:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "10:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "11:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
  ],
};

export const trainers = [
  {
    name: "John Smith",
    role: "Head Trainer",
    specialization: "Strength Training & Nutrition",
    experience: "10+ years",
    bio: "John is a certified strength and conditioning specialist with over a decade of experience helping athletes and fitness enthusiasts achieve their goals. He specializes in strength training, powerlifting, and nutrition coaching.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&q=80",
    certifications: ["CSCS", "NASM-CPT", "Nutrition Specialist"],
  },
  {
    name: "Sarah Johnson",
    role: "Yoga & Pilates Instructor",
    specialization: "Yoga, Pilates & Holistic Wellness",
    experience: "8+ years",
    bio: "Sarah is a certified yoga and Pilates instructor with extensive training in multiple yoga styles. She combines traditional practices with modern techniques to help members find balance, flexibility, and inner peace.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop&q=80",
    certifications: ["RYT-500", "Pilates Certified", "Meditation Instructor"],
  },
  {
    name: "Mike Chen",
    role: "HIIT Specialist",
    specialization: "High-Intensity Training & Athletic Performance",
    experience: "7+ years",
    bio: "Mike is an expert in high-intensity interval training and athletic performance. His dynamic classes push members to new limits while maintaining safety and proper form. He's passionate about helping people discover their inner athlete.",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop&q=80",
    certifications: ["ACE-CPT", "HIIT Specialist", "Athletic Performance Coach"],
  },
  {
    name: "Emma Davis",
    role: "Cardio & Dance Instructor",
    specialization: "Cardio, Dance Fitness & Zumba",
    experience: "5+ years",
    bio: "Emma brings energy and fun to every class. With a background in dance and fitness, she creates engaging cardio workouts that make exercise enjoyable. Her classes are perfect for those who want to have fun while getting fit.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80",
    certifications: ["Zumba Certified", "Dance Fitness Instructor", "ACE-CPT"],
  },
  {
    name: "James Wilson",
    role: "CrossFit Coach",
    specialization: "CrossFit & Functional Movement",
    experience: "6+ years",
    bio: "James is a Level 2 CrossFit coach with a passion for functional fitness. He helps members build strength, improve mobility, and achieve their fitness goals through varied, high-intensity workouts.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80",
    certifications: ["CrossFit Level 2", "Functional Movement Specialist", "Olympic Lifting Coach"],
  },
];

export const history = [
  {
    year: "2009",
    title: "Founded",
    description: "FitZone Gym was founded with a vision to create an inclusive fitness community where everyone feels welcome.",
  },
  {
    year: "2012",
    title: "First Expansion",
    description: "Expanded facilities to include a dedicated group class studio and added 20+ new pieces of equipment.",
  },
  {
    year: "2015",
    title: "24/7 Access",
    description: "Introduced 24/7 access for Premium and Elite members, making fitness accessible around the clock.",
  },
  {
    year: "2018",
    title: "500 Members Milestone",
    description: "Reached 500 active members and expanded our trainer team to 20 certified professionals.",
  },
  {
    year: "2020",
    title: "Digital Integration",
    description: "Launched online class booking and virtual training options to adapt to changing needs.",
  },
  {
    year: "2024",
    title: "Award Winner",
    description: "Recognized as 'Best Gym 2024' by the local fitness community, celebrating 15 years of excellence.",
  },
];

export const paymentOptions = {
  methods: ["Credit/Debit Cards", "Bank Transfer", "PayPal", "Apple Pay", "Google Pay"],
  plans: [
    { type: "Monthly", description: "Pay month-to-month with no long-term commitment" },
    { type: "Annual", description: "Save 15% with annual payment - best value!" },
    { type: "Family Plan", description: "Special rates for families - contact us for details" },
  ],
  guarantee: "7-day money-back guarantee on all memberships",
  trial: "Free 7-day trial available for new members",
};

export const companyProfile = [
  {
    title: "会社名",
    description: "平湖市聚成箱包有限公司"
  },
  {
    title: "英語表記",
    description: "Pinghu Jucheng Luggage Co., Ltd."
  },
  {
    title: "創業",
    description: "2011年"
  },
  {
    title: "設立",
    description: "2016年3月"
  },
  {
    title: "資本金",
    description: "800万元(約1億6000万円)"
  },
  {
    title: "代表",
    description: "许宏"
  },
  {
    title: "従業員数",
    description: "約50名(パ-トを含む)"
  },
  {
    title: "延床面積",
    description: "約5000平米"
  },
  {
    title: "事業内容",
    description: [
      "ランドセルをはじめとする各種バッグの企画・開発・製造",
      "OEM・ODMによるバッグ製品の生産受託"
    ]
  }
];


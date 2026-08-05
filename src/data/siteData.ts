export const siteData = {
  name: "Hatcatoy",
  tagline: "人を惹きつける景品を、世界から。",
  description: "ゲームセンター・販促を支える、魅力ある景品ソリューション。",
  address: "浙江省義烏市北苑街景三路29号1棟3階",
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
  { name: "ホーム", href: "/" },
  { name: "取扱商品", href: "/#products" },
  { name: "選ばれる理由", href: "/#why-choose-us" },
  { name: "会社概要", href: "/#company-profile" },
  { name: "よくある質問", href: "/#faq" },
  { name: "お問い合わせ", href: "/#contact" },
];

export const relatedLinks = [
  { name: "Sinosun Bridge", href: "https://cnjphashi.com/ja/hoomu/" },
  { name: "ZAKAKING", href: "https://www.zakaking.com/" },
  { name: "Naniwacc", href: "https://www.naniwacc.com/" },
  { name: "Coulombag", href: "https://coulombag.com/" },
  { name: "Best-cheng", href: "https://www.best-cheng.com/" },
];

export const features = [
  {
    title: "日本市場を熟知",
    description: "日本の商習慣・品質基準を理解した提案力。",
    icon: "ri-time-line",
  },
  {
    title: "圧倒的な調達力",
    description: "1,000社以上の提携工場と義烏拠点。",
    icon: "ri-user-star-line",
  },
  {
    title: "玩具専門ネットワーク",
    description: "汕頭の専任スタッフが迅速に対応。",
    icon: "ri-settings-3-line",
  },
  {
    title: "徹底した品質管理",
    description: "QCチームによる安心の品質チェック。",
    icon: "ri-group-line",
  },
  {
    title: "物流・倉庫一体対応",
    description: "保管・梱包・配送までワンストップ。",
    icon: "ri-restaurant-line",
  },
  {
    title: "安心のお取引",
    description: "日本国内振込対応・企画から納品までサポート。",
    icon: "ri-community-line",
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
    title: "DIY",
    description: "DIY Toys",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/DIY%E7%8E%A9%E5%85%B7.webp",
    link: "https://cnjphashi.com/ja/product-category/omocha/diy/",
  },
  {
    title: "スポーツ玩具",
    description: "Sports Toys",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E8%BF%90%E5%8A%A8%E7%8E%A9%E5%85%B7.webp",
    link: "https://cnjphashi.com/ja/product-category/omocha/supootsu/",
  },
  {
    title: "ぬいぐるみ",
    description: "Plush Toys",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E6%AF%9B%E7%BB%92%E7%8E%A9%E5%85%B7.webp",
    link: "https://cnjphashi.com/ja/product-category/omocha/nuigurumi/",
  },
  {
    title: "パズル",
    description: " Puzzles",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E6%8B%BC%E5%9B%BE.webp",
    link: "https://cnjphashi.com/ja/product-category/omocha/pazuru/",
  },
  {
    title: "プラスチック玩具",
    description: "Plastic Toys",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E5%A1%91%E6%96%99%E7%8E%A9%E5%85%B7.webp",
    link: "https://cnjphashi.com/ja/product-category/omocha/purasuchikku-omocha/",
  },
  {
    title: "低単価玩具",
    description: "Low-cost Toys",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E4%BD%8E%E4%BB%B7%E7%8E%A9%E5%85%B7.webp",
    link: "https://cnjphashi.com/ja/product-category/omocha/teitanka-omocha/",
  },
  {
    title: "光るおもちゃ",
    description: "Light-Up Toys",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E5%8F%91%E5%85%89%E7%8E%A9%E5%85%B7.webp",
    link: "https://cnjphashi.com/ja/product-category/omocha/hikaru-omocha/",
  },
  {
    title: "木製おもちゃ",
    description: "Wooden Toys",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E6%9C%A8%E5%88%B6%E7%8E%A9%E5%85%B7.webp",
    link: "https://cnjphashi.com/ja/product-category/omocha/mokusei-omocha/",
  },
  {
    title: "食玩",
    description: "Candy Toys",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E9%A3%9F%E7%8E%A9.webp",
    link: "https://cnjphashi.com/ja/product-category/omocha/shokugan/",
  },
  {
    title: "シール",
    description: " Stickers",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E8%B4%B4%E7%BA%B8.webp",
    link: "https://cnjphashi.com/ja/product-category/bunbougu/shiiru/",
  },
  {
    title: "バインダー",
    description: "Binders",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E6%B4%BB%E9%A1%B5%E5%A4%B9.webp",
    link: "https://cnjphashi.com/ja/product-category/bunbougu/baindaa/",
  },
  {
    title: "ペン",
    description: "Pens",
    image: "https://cnjphashi.com/wp-content/uploads/2026/07/%E7%AC%94.webp",
    link: "https://cnjphashi.com/ja/product-category/bunbougu/pen/",
  },
];

export const faqs = [
  {
    question: "Hatcatoyが得意の分野は。",
    answer: "弊社は、アミューズメント景品関連の幅広い玩具製品を扱っております。当社の製品カテゴリーには、プラスチック玩具、ぬいぐるみ、電子玩具、パズル玩具などがあります。",
  },
  {
    question: "Hatcatoyは取扱商品以外でも対応できますか。",
    answer: "はい、弊社は世界最大の雑貨卸市場義烏を拠点に、たくさんの工場と提携しており、取扱商品以外の商品をご提案・生産も可能です。",
  },
  {
    question: "Hatcatoy製品の最低注文数量はいくらですか。",
    answer: "最小発注量は、製品の仕様、カスタマイズの条件によって異なります。具体的な製品の最低注文数量については、弊社までお問い合わせください。 ",
  },
  {
    question: "カスタマイズされた製品の方法、流れは。",
    answer: "カスタマイズ製品は通常、OEM/ODMの2つの方法です。OEM生産とはOriginal Equipment Manufacturerの略で「企画・受託製造」です。ODM生産とはOriginal Design Manufacturingの略で、「委託設計・生産」のことです。通常、次のような流れです。打ち合わせ → 商品企画のご提案→お見積り→サンプルのご確認→ご発注　生産・検品→納品。具体的な状況はお客様のニーズによって異なります。",
  },
  {
    question: "日本国内銀行での支払いは可能ですか。",
    answer: "はい、日本国内銀行振込みに対応して、支払いが簡単です。",
  },
  {
    question: "製品に不良があった場合、アフターサービスはどのように対応しますか。",
    answer: "弊社は高品質のアフターサービスが信頼を築く鍵であると信じています。もし製品に不良がある場合、すぐに対応し、問題の原因を調査し、解決策を提供します。お客様に迅速なアフターサポートを提供することをお約束します。",
  },
  {
    question: "Hactcatoyは製品安全性の検査をサポートできますか。",
    answer: "はい、弊社は国際的な検査機関であるSGSと長年の協力関係を持っております。製品の検査サービスに対応可能です。",
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
    description: "義烏希杰趣商貿有限公司"
  },
  {
    title: "英語表記",
    description: "Yiwu CJH Trading Co., Ltd."
  },
  {
    title: "創業",
    description: "2005年12月"
  },
  {
    title: "設立",
    description: "2012年2月"
  },
  {
    title: "資本金",
    description: "500,000人民元"
  },
  {
    title: "代表",
    description: "高剑锐"
  },
  {
    title: "従業員数",
    description: "127名（関連企業・パートを含む）"
  },
  {
    title: "事業内容",
    description: [
      "サプライヤーチェーン（ZAKAKING SCM）システムの運営業務",
      "アマゾンFBA・楽天RSLへの直送サポート業務",
      "中国国内買付けアテンド、通訳などのサポート業務",
      "日用雑貨・服飾雑貨・玩具・バッグ・アクセサリーなどの商品提案、貿易取引",
      "商品の仕入れ代行（OEM/ODM/在庫品）、納品管理、検品、包装、荷物保管、輸出などサプライヤーチェーントータルサービス業務"
    ]
  }
];


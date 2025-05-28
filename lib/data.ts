import type { Product, Category, BusinessInfo, Blog, Coupon, Review } from "./types"

export const businessInfo: BusinessInfo = {
  name: "StreamNation",
  phone: "9079179449",
  whatsapp: "9079179449",
  email: "streamnation12@gmail.com",
  description: "Premium OTT Subscriptions & Paid Applications at Best Prices",
  address: "India",
}

export const products: Product[] = [
  // LinkedIn
  {
    id: "linkedin-sales-navigator",
    title: "LinkedIn Sales Navigator",
    description: "Premium tools for sales research and lead generation on LinkedIn.",
    category: "linkedin",
    availability: true,
    images: ["/images/linkedin1.png", "/images/linkedin2.png", "/images/linkedin3.png", "/images/linkedin4.png"],
    variations: [
      { name: "1 Month", price: 199, originalPrice: 2500, subPrice: "For new & old accounts" },
      { name: "6 Months", price: 999, originalPrice: 15000, subPrice: "For new & old accounts" },
      { name: "12 Months", price: 1799, originalPrice: 30000, subPrice: "For new accounts only" },
    ],
    features: ["Advanced search filters", "InMail credits", "Lead recommendations", "CRM integration"],
    slug: "linkedin-sales-navigator",
  },
  {
    id: "linkedin-recruiter-lite",
    title: "LinkedIn Recruiter Lite",
    description: "Essential recruiting tools for HR professionals.",
    category: "linkedin",
    availability: true,
    images: ["/images/linkedin1.png", "/images/linkedin2.png", "/images/linkedin3.png", "/images/linkedin4.png"],
    variations: [
      { name: "4 Months", price: 1499, originalPrice: 20000, subPrice: "Limited slots available" }
    ],
    features: ["Candidate search", "InMail messaging", "Talent insights"],
    slug: "linkedin-recruiter-lite",
  },
  {
    id: "linkedin-ads-credit",
    title: "LinkedIn Ads Credit",
    description: "Boost your LinkedIn marketing campaigns with ad credit.",
    category: "linkedin",
    availability: true,
    images: ["/images/linkedin1.png", "/images/linkedin2.png", "/images/linkedin3.png", "/images/linkedin4.png"],
    variations: [
      { name: "₹7,000 Credit", price: 999, originalPrice: 7000, subPrice: "Valid for 30 days" }
    ],
    features: ["Sponsored content", "Message ads", "Dynamic ads"],
    slug: "linkedin-ads-credit",
  },

  // Creative Tools
  {
    id: "adobe-creative-cloud",
    title: "Adobe Creative Cloud",
    description: "Full suite access: Photoshop, Illustrator, and more.",
    category: "creative",
    availability: true,
    images: ["/images/adobe.jpg", "/images/adove.jpg", "/images/adobe3.png"],
    variations: [
      { name: "12 Months", price: 1999, originalPrice: 29000, subPrice: "All apps included" }
    ],
    features: ["20+ Creative apps", "100GB cloud storage", "Adobe Fonts", "Portfolio website"],
    slug: "adobe-creative-cloud",
  },
  {
    id: "canva-pro",
    title: "Canva Pro",
    description: "Premium design tools: templates, stock photos, collaboration.",
    category: "creative",
    availability: true,
    images: ["/images/canva1.jpg", "/images/canva.png", "/images/canva3.png", "/images/linkedin4.png"],
    variations: [
      { name: "1 Month", price: 299, originalPrice: 3000, subPrice: "Single user license" },
      { name: "12 Months", price: 699, originalPrice: 15000, subPrice: "Team access (5 users)" },
    ],
    features: ["Premium templates", "Background remover", "Brand kit", "Team collaboration"],
    slug: "canva-pro",
  },
  {
    id: "filmora-pro",
    title: "Filmora Pro",
    description: "Professional video editing software with lifetime license.",
    category: "creative",
    availability: true,
    images: ["/placeholder.svg?height=400&width=600"],
    variations: [
      { name: "Lifetime", price: 799, originalPrice: 7999, subPrice: "One-time payment" }
    ],
    features: ["4K editing", "Motion graphics", "Audio ducking", "Color correction"],
    slug: "filmora-pro",
  },

  // Developer Tools
  {
    id: "github-student-pack",
    title: "GitHub Student Pack",
    description: "Free developer tools and services for students.",
    category: "developer",
    availability: true,
    images: ["/placeholder.svg?height=400&width=600"],
    variations: [
      { name: "12 Months", price: 499, originalPrice: 5000, subPrice: "Educational benefits" }
    ],
    features: ["GitHub Pro", "Free domains", "Cloud credits", "Developer tools"],
    slug: "github-student-pack",
  },
  {
    id: "chatgpt-plus",
    title: "ChatGPT Plus",
    description: "Priority access to GPT-4 and new features.",
    category: "developer",
    availability: true,
    images: ["/placeholder.svg?height=400&width=600"],
    variations: [
      { name: "3 Months", price: 599, originalPrice: 6000, subPrice: "Faster response times" },
      { name: "12 Months", price: 1999, originalPrice: 24000, subPrice: "Best value annually" },
    ],
    features: ["GPT-4 access", "Faster responses", "Priority access", "Plugin support"],
    slug: "chatgpt-plus",
  },

  // Entertainment
  {
    id: "netflix-premium",
    title: "Netflix Premium",
    description: "4K Ultra HD streaming on up to 4 screens, ad-free.",
    category: "entertainment",
    availability: true,
    images: ["/placeholder.svg?height=400&width=600"],
    variations: [
      { name: "1 Month", price: 299, originalPrice: 799, subPrice: "Standard plan" },
      { name: "3 Months", price: 799, originalPrice: 2397, subPrice: "Standard plan" },
      { name: "12 Months", price: 2599, originalPrice: 9588, subPrice: "Best Value" },
    ],
    features: ["4K Ultra HD", "HDR content", "Dolby Atmos", "Download on 6 devices"],
    slug: "netflix-premium",
  },
  {
    id: "amazon-prime-video",
    title: "Amazon Prime Video",
    description: "Unlimited movies & TV plus Prime delivery benefits.",
    category: "entertainment",
    availability: true,
    images: ["/placeholder.svg?height=400&width=600"],
    variations: [
      { name: "1 Month", price: 249, originalPrice: 299 },
      { name: "6 Months", price: 1299, originalPrice: 1794 },
    ],
    features: ["Prime Video", "Prime delivery", "Prime Music", "Prime Reading"],
    slug: "amazon-prime-video",
  },
  {
    id: "spotify-family",
    title: "Spotify Family",
    description: "Ad-free music for up to 6 users, offline downloads.",
    category: "music",
    availability: true,
    images: ["/placeholder.svg?height=400&width=600"],
    variations: [
      { name: "1 Month", price: 199, originalPrice: 179, subPrice: "Up to 6 users" },
      { name: "6 Months", price: 499, originalPrice: 1074, subPrice: "Up to 6 users" },
    ],
    features: ["6 premium accounts", "Ad-free music", "Offline downloads", "High quality audio"],
    slug: "spotify-family",
  },
];


export const categories: Category[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    slug: "linkedin",
    image: "/images/linkedin1.png",
    description: "Professional networking and career development tools",
    count: products.filter((p) => p.category === "linkedin").length,
  },
  {
    id: "creative",
    name: "Creative Tools",
    slug: "creative",
    image: "/images/creative.png",
    description: "Design, video editing, and creative software",
    count: products.filter((p) => p.category === "creative").length,
  },
  {
    id: "developer",
    name: "Developer Tools",
    slug: "developer",
    image: "/images/dev.png",
    description: "Programming tools and development resources",
    count: products.filter((p) => p.category === "developer").length,
  },
  {
    id: "entertainment",
    name: "Entertainment",
    slug: "entertainment",
    image: "/images/enter.png",
    description: "Streaming services and entertainment platforms",
    count: products.filter((p) => p.category === "entertainment").length,
  },
  {
    id: "music",
    name: "Music",
    slug: "music",
    image: "/images/music.png",
    description: "Music streaming and audio platforms",
    count: products.filter((p) => p.category === "music").length,
  },
  {
    id: "marketing",
    name: "Marketing",
    slug: "marketing",
    image: "/images/market.png",
    description: "Marketing tools and lead generation software",
    count: products.filter((p) => p.category === "marketing").length,
  },
]

export const banners = [
  {
    id: 1,
    title: "Netflix Premium",
    subtitle: "From ₹299",
    description: "4K Ultra HD, 4 Screens, Ad-free streaming",
    image: "/images/Netflix.png",
    bgColor: "bg-gradient-to-r from-red-500 to-red-600",
    decorativeElements: ["🎬", "🍿", "📺"],
    ctaText: "Order Now",
    ctaLink: "/product/netflix-premium",
  },
  {
    id: 2,
    title: "Adobe Creative Suite",
    subtitle: "From ₹1,999",
    description: "Photoshop, Illustrator, Premiere Pro & more",
    image: "/images/Adobeicon.png",
    bgColor: "bg-gradient-to-r from-purple-500 to-purple-600",
    decorativeElements: ["🎨", "✨", "🖌️"],
    ctaText: "Get Started",
    ctaLink: "/product/adobe-creative-cloud",
  },
  {
    id: 3,
    title: "Spotify Family",
    subtitle: "From ₹199",
    description: "6 Premium accounts, Ad-free music",
    image: "/images/Spotifyicon.png",
    bgColor: "bg-gradient-to-r from-green-500 to-green-600",
    decorativeElements: ["🎵", "🎧", "🎤"],
    ctaText: "Listen Now",
    ctaLink: "/product/spotify-family",
  },
]

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Top 10 OTT Platforms in 2024",
    slug: "top-10-ott-platforms-2024",
    excerpt: "Discover the best streaming platforms and their premium features for entertainment lovers.",
    content: "Content here...",
    image: "/placeholder.svg?height=300&width=500",
    published: true,
    createdAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "Why Choose Premium Subscriptions?",
    slug: "why-choose-premium-subscriptions",
    excerpt: "Learn about the benefits of premium subscriptions and how they enhance your digital experience.",
    content: "Content here...",
    image: "/placeholder.svg?height=300&width=500",
    published: true,
    createdAt: new Date("2024-01-10"),
  },
]

export const coupons: Coupon[] = [
  {
    id: "1",
    code: "WELCOME20",
    description: "20% off on your first order",
    discount: 20,
    validUntil: new Date("2024-12-31"),
    active: true,
  },
  {
    id: "2",
    code: "NETFLIX50",
    description: "₹50 off on Netflix subscriptions",
    discount: 50,
    validUntil: new Date("2024-06-30"),
    active: true,
  },
]

export const reviews: Review[] = [
  {
    id: "1",
    productId: "netflix-premium",
    name: "Rahul Sharma",
    email: "rahul@example.com",
    rating: 5,
    comment: "Excellent service! Got my Netflix subscription instantly via WhatsApp. Highly recommended!",
    approved: true,
    createdAt: new Date("2024-01-20"),
  },
  {
    id: "2",
    productId: "netflix-premium",
    name: "Priya Singh",
    email: "priya@example.com",
    rating: 4,
    comment: "Good pricing and quick delivery. Customer support is very responsive.",
    approved: true,
    createdAt: new Date("2024-01-18"),
  },
]

// Helper functions
export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category)
}

export const getProductBySlug = (slug: string) => {
  return products.find((product) => product.slug === slug)
}


export const getAllCategories = () => {
  return categories
}

export const getCategoryBySlug = (slug: string) => {
  return categories.find((category) => category.slug === slug)
}

export const getReviewsByProduct = (productId: string) => {
  return reviews.filter((review) => review.productId === productId && review.approved)
}

export const getFeaturedProducts = () => {
  return products.slice(0, 6)
}

export const searchProducts = (query: string) => {
  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()),
  )
}

export const getAllProducts = () => {
  return products
}

export const getBanners = () => {
  return banners
}

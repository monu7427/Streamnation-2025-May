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
    id: "linkedin-business-premium",
    title: "LinkedIn Business Premium",
    description: "Premium tools for sales research and lead generation on LinkedIn.",
    category: "linkedin",
    availability: true,
    images: ["/images/linkedinn1.png", "/images/linkedin2.png", "/images/linkedin3.png", "/images/linkedin4.png"],
    variations: [
      { name: "12 Month", price: 3999, originalPrice: 25000, subPrice: "For new & old accounts , will provide activation link " },
      { name: "3 Month", price: 999, originalPrice: 4999, subPrice: "For new & old accounts , will provide activation link  " },
     
    ],
    features: ["Advanced search filters", "15 InMail credits per month", "Lead recommendations", "CRM integration"],
    slug: "linkedin-business-premium",
  },
  {
    id: "linkedin-sales-navigator",
    title: "LinkedIn Sales Navigator",
    description: "Premium tools for sales research and lead generation on LinkedIn.",
    category: "linkedin",
    availability: true,
    images: ["/images/linkedinsales.png", "/images/linkedin2.png", "/images/linkedin3.png", "/images/linkedin4.png"],
    variations: [
      { name: "1 Month", price: 1999, originalPrice: 7900, subPrice: "For new & old accounts only your mail required for activation" },
     
    ],
    features: ["Advanced search filters", "InMail credits", "Lead recommendations", "CRM integration"],
    slug: "linkedin-sales-navigator",
  },
 
  {
    id: "linkedin-ads-credit",
    title: "LinkedIn Ads Credit",
    description: "Boost your LinkedIn marketing campaigns with ad credit.",
    category: "linkedin",
    availability: true,
    images: ["/images/linkedinads.png", "/images/linkedin2.png", "/images/linkedin3.png", "/images/linkedin4.png"],
    variations: [
      { name: "₹7,000 Credit", price: 1199, originalPrice: 7000, subPrice: "Activation by coupon code" },
      { name: "₹15,000 Credit", price: 1899, originalPrice: 1500, subPrice: "Activation by coupon code" },
      { name: "₹25,000 Credit", price: 2300, originalPrice: 25000, subPrice: "Activation by coupon code" }
    ],
    features: ["Sponsored content", "Message ads", "Dynamic ads"],
    slug: "linkedin-ads-credit",
  },
    {
    id: "linkedin-career-premium",
    title: "LinkedIn career premium",
    description: "Boost your chainces to get good jobs  marketing and grow on your career",
    category: "linkedin",
    availability: true,
    images: ["/images/linkedin1.png", "/images/linkedin2.png", "/images/linkedin3.png", "/images/linkedin4.png"],
    variations: [
      { name: "3 Months", price: 999, originalPrice: 7900, subPrice: "For new & old accounts only your mail required for activation" },
    ],
    features: ["Jobs search", "Connections", "who view your profile?", "Job alerts"],
    slug: "linkedin-career-premium",
  },
  

  // Creative Tools
  {
    id: "adobe-creative-cloud",
    title: "Adobe Creative Cloud",
    description: "Full suite access: Photoshop, Illustrator, and more.",
    category: "creative",
    availability: true,
    images: ["/images/adobe.png", "/images/adobe2.jpg", "/images/adobe3.jpg"],
    variations: [
      { name: "12 Months", price: 3999, originalPrice: 29000, subPrice: "All apps included" }
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
      { name: "12 Month", price: 199, originalPrice: 3000, subPrice: "on your mail edu orgaization pro , you can access all premium features" },
      { name: "Lifetime", price: 399, originalPrice: 15000, subPrice: "on your mail edu orgaization pro , you can access all premium features" },
    ],
    features: ["On your mail","Premium templates", "Background remover", "Stock photos", "Team collaboration"],
    slug: "canva-pro",
  },
  {
    id: "filmora-pro",
    title: "Filmora Pro",
    description: "Professional video editing software with lifetime license.",
    category: "creative",
    availability: true,
    images: ["/images/filmora0.jpg","/images/filmora1.png","images/filmora2.jpeg"],
    variations: [
      { name: "12months", price: 1799, originalPrice: 7999, subPrice: "One-time payment" }
    ],
    features: ["4K editing", "Motion graphics", "Audio ducking", "Color correction"],
    slug: "filmora-pro",
  },

  // Developer Tools
  {
    id: "perplexity-ai",
    title: "Perplexity AI Pro",
    description: "Advanced search, real-time web access, citations, file uploads, personalized models, API access, image generation, AI agents, faster responses, detailed answers, and enterprise-level data privacy",
    category: "developer",
    availability: true,
    images: ["/images/perplexity1.png", "/images/perplexity2.png", ],
    variations: [
      { name: "12 Months", price: 1499, originalPrice: 15000, subPrice: "Educational benefits" }
    ],
    features: ["Advanced search", "real-time web access", "file uploads", "image generation", "AI agents", "faster responses", "detailed answers", "enterprise-level data privacy"],
    slug: "perplexity-ai",
  },
  {
    id: "chatgpt-plus",
    title: "ChatGPT Plus",
    description: "Priority access to GPT-4 and new features. your email required for activation",
    category: "developer",
    availability: false,
    images: ["/images/chatgpt.png", "/images/chatgpt2.png", ],
    variations: [
      { name: "1 Months", price: 599, originalPrice: 6000, subPrice: "Faster response times" },
     
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
    images: ["/images/netflix1.png", "/images/netflix2.png", "/images/netflix3.png",],
    variations: [
      { name: "1 Month", price: 125, originalPrice: 799, subPrice: "4k plan single screen " },
      { name: "3 Months", price: 350, originalPrice: 2397, subPrice: "4k plan single screen" },
      { name: "6 Months", price: 699, originalPrice: 4999, subPrice: "4k plan single screen" },
    ],
    features: ["4K Ultra HD", "HDR content", "Dolby Atmos", "Download on 5 devices", "Ad-free","house hold solution","No password change"],
    slug: "netflix-premium",
  },
  {
    id: "amazon-prime-video",
    title: "Amazon Prime Video",
    description: "Unlimited movies & TV plus Prime delivery benefits.",
    category: "entertainment",
    availability: true,
    images: ["/images/prime1.png", "/images/prime2.png", "/images/prime3.jpg","/images/prime4.jpg"],
    variations: [
      { name: "6 Month", price: 149, originalPrice: 499 ,subPrice: "4k plan single screen "},
      { name: "12 Months", price: 249, originalPrice: 999 ,subPrice: "4k plan single screen "},
    ],
    features: ["Prime Video", "Unlimited movies & TV", "No Ad-free", "No password change"],
    slug: "amazon-prime-video",
  },
  {
    id: "spotify-family",
    title: "Spotify Family",
    description: "Ad-free music for up to 6 users, offline downloads.",
    category: "music",
    availability: true,
    images: ["/images/spotify.png", "/images/spotify2.png", ],
    variations: [
      { name: "3 Month", price: 179, originalPrice: 399, subPrice: "only email required" },
      { name: "6 Months", price: 450, originalPrice: 1074, subPrice: "only email required" },
      { name: "12 Months", price: 799, originalPrice: 2000, subPrice: "only email required" },
    ],
    features: ["premium accounts", "Ad-free music", "Offline downloads", "High quality audio"],
    slug: "spotify-family",
  },
    {
    id: "sony-liv",
    title: "Sony Liv 4k",
    description: "Sony liv 4k 12 months on customer number , activation by coupon code fully genuine method",
    category: "entertainment",
    availability: true,
    images: ["/images/sony1.png", "/images/sony2.jpg",],
    variations: [
     
      { name: "12 Months 4k", price: 599, originalPrice: 1499, subPrice: "only login required for actvation" },
    ],

     features: ["4k", "Ad-free ","5 device login ", "Offline downloads", "High quality audio and video","on your number"],
    slug: "sony-liv",
  },
  
    {
    id: "zee-5",
    title: "Zee 5 HD",
    description: "Zee 5 HD plan 12 months on customer number , activation by coupon code fully genuine method",
    category: "entertainment",
    availability: true,
    images: ["/images/zee1.png", "/images/zee2.jpg",],
    variations: [
     
      { name: "12 Months HD", price: 499, originalPrice: 999, subPrice: "only login required for actvation" },
    ],
   
     features: ["HD", "no Ad-free ","2 device login", "Offline downloads", "High quality audio and video","on your number"],
    slug: "zee-5",
  },
   {
    id: "jio-hotstar",
    title: "Jio Hotstar Supper",
    description: "Jio Hotstar Supper plan 1 month on customer number , activation by coupon code fully genuine method",
    category: "entertainment",
    availability: true,
    images: ["/images/jiohot.png", "/images/jiohot2.jpg","/images/jiohot3.png"],
    variations: [
     
      { name: "1 Month HD", price: 79, originalPrice: 999, subPrice: "only login required for actvation" },
    ],
   
     features: ["HD", "no Ad-free ","5 device login", "Offline downloads", "High quality audio and video","on your number"],
    slug: "jio-hotstar",
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
    subtitle: "From ₹125 month",
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
    subtitle: "From ₹3,999 year",
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
    subtitle: "From ₹169 3month",
    description: "Ad-free music",
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
    code: "WELCOME05",
    description: "5% off on your first order",
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

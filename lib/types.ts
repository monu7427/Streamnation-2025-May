export interface Product {
  id: string
  title: string
  description: string
  category: string
  availability: boolean
  images: string[]
  variations: ProductVariation[]
  features?: string[]
  slug?: string
}

export interface ProductVariation {
  name: string
  price: number
  originalPrice?: number
  subPrice?: string
  features?: string[]
}

export interface Review {
  id: string
  productId: string
  name: string
  email: string
  rating: number
  comment: string
  approved: boolean
  createdAt: Date
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image?: string
  count: number
}

export interface BusinessInfo {
  name: string
  phone: string
  whatsapp: string
  email: string
  description: string
  address?: string
}

export interface Blog {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  image?: string
  published: boolean
  createdAt: Date
}

export interface Coupon {
  id: string
  code: string
  description: string
  discount: number
  validUntil: Date
  active: boolean
}

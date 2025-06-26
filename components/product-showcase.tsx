import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, Zap, Play, Palette, Code, TrendingUp, Music, Briefcase } from "lucide-react"
import { getProductsByCategory } from "@/lib/data"

interface ProductShowcaseProps {
  title: string
  category: string
  bgColor?: string
}

const categoryIcons = {
  entertainment: Play,
  creative: Palette,
  developer: Code,
  marketing: TrendingUp,
  music: Music,
  linkedin: Briefcase,
}

export function ProductShowcase({ title, category, bgColor = "bg-white" }: ProductShowcaseProps) {
  const products = getProductsByCategory(category).slice(0, 5)
  const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Play

  if (products.length === 0) return null

  return (
    <section className={`py-8 md:py-12 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center space-x-3">
            <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-cyan-600" />
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">{title}</h2>
          </div>
          <Button variant="outline" className="group text-xs md:text-sm px-3 md:px-4 py-2" asChild>
            <Link href={`/subscriptions/${category}`}>
              View All
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
          {products.map((product, index) => {
            const lowestPrice = Math.min(...product.variations.map((v) => v.price))
            const highestOriginalPrice = Math.max(...product.variations.map((v) => v.originalPrice || v.price))
            const discount = Math.round(((highestOriginalPrice - lowestPrice) / highestOriginalPrice) * 100)

            return (
              <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-cyan-300 hover:scale-105"
              >
                <div className="relative">
                  <div className="aspect-square p-3 md:p-4">
                    <img
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-contain rounded-lg md:rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {discount > 0 && (
                    <Badge className="absolute top-2 left-2 bg-green-500 text-white text-xs px-1.5 py-0.5">
                      {discount}% OFF
                    </Badge>
                  )}
                </div>

                <div className="p-3 md:p-4">
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors duration-300 text-xs md:text-sm lg:text-base">
                    {product.title}
                  </h3>

                  <div className="flex items-center space-x-1 mb-2">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs text-gray-500">4.8</span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-sm md:text-base lg:text-lg font-bold text-gray-900">₹{lowestPrice}</div>
                    {highestOriginalPrice > lowestPrice && (
                      <div className="text-xs md:text-sm text-gray-500 line-through">₹{highestOriginalPrice}</div>
                    )}
                  </div>

                  <div className="mt-2 md:mt-3">
                    <div className="flex items-center text-xs text-green-600">
                      <Zap className="w-3 h-3 mr-1" />
                      <span>Instant Delivery</span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

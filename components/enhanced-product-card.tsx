"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Clock, ArrowRight, Zap, Eye, Heart, Share2 } from "lucide-react"
import type { Product } from "@/lib/types"

interface EnhancedProductCardProps {
  product: Product
  variant?: "default" | "featured" | "compact"
}

export function EnhancedProductCard({ product, variant = "default" }: EnhancedProductCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const lowestPrice = Math.min(...product.variations.map((v) => v.price))
  const highestOriginalPrice = Math.max(...product.variations.map((v) => v.originalPrice || v.price))
  const discount = Math.round(((highestOriginalPrice - lowestPrice) / highestOriginalPrice) * 100)

  const getCategoryColor = (category: string) => {
    const colors = {
      linkedin: "from-blue-500 to-blue-600",
      creative: "from-purple-500 to-purple-600",
      developer: "from-green-500 to-green-600",
      entertainment: "from-red-500 to-red-600",
      music: "from-pink-500 to-pink-600",
      marketing: "from-orange-500 to-orange-600",
    }
    return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600"
  }

  if (variant === "compact") {
    return (
      <Link href={`/product/${product.slug}`} className="block">
        <div className="group relative bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-cyan-300 hover:scale-[1.02]">
          <div className="relative overflow-hidden">
            <div className="aspect-[4/3] relative">
              <img
                src={product.images[0] || "/placeholder.svg"}
                alt={product.title}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
              )}
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {discount > 0 && (
              <Badge className="absolute top-2 md:top-3 left-2 md:left-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs px-2 py-1 animate-pulse">
                {discount}% OFF
              </Badge>
            )}

            <div className="absolute top-2 md:top-3 right-2 md:right-3 flex space-x-2">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setIsLiked(!isLiked)
                }}
                className={`w-6 h-6 md:w-8 md:h-8 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${
                  isLiked ? "bg-red-500 text-white" : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <Heart className={`w-3 h-3 md:w-4 md:h-4 ${isLiked ? "fill-current" : ""}`} />
              </button>
            </div>
          </div>

          <div className="p-3 md:p-4">
            <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors duration-300 text-sm md:text-base">
              {product.title}
            </h3>

            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-lg md:text-xl font-bold text-gray-900">₹{lowestPrice}</span>
                {highestOriginalPrice > lowestPrice && (
                  <span className="text-xs md:text-sm text-gray-500 line-through ml-2">₹{highestOriginalPrice}</span>
                )}
              </div>
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                <span>4.8</span>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              className="w-full group border-2 border-gray-200 hover:border-cyan-500 hover:bg-cyan-50 transition-all duration-300 text-xs md:text-sm py-2"
              asChild
            >
              <span>
                View Details
                <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/product/${product.slug}`} className="block">
      <div className="group relative bg-white rounded-xl md:rounded-2xl lg:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-cyan-300 hover:scale-[1.02]">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <div className="aspect-[4/3] relative">
            <img
              src={product.images[0] || "/placeholder.svg"}
              alt={product.title}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
            )}
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badges */}
          {discount > 0 && (
            <Badge className="absolute top-3 md:top-4 left-3 md:left-4 bg-gradient-to-r from-green-500 to-green-600 text-white animate-pulse text-xs md:text-sm">
              {discount}% OFF
            </Badge>
          )}

          <Badge
            className={`absolute top-3 md:top-4 right-3 md:right-4 bg-gradient-to-r ${getCategoryColor(product.category)} text-white text-xs md:text-sm`}
          >
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Badge>

          {/* Action Buttons */}
          <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <button
              onClick={(e) => {
                e.preventDefault()
                setIsLiked(!isLiked)
              }}
              className={`w-8 h-8 md:w-10 md:h-10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${
                isLiked ? "bg-red-500 text-white" : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              <Heart className={`w-4 h-4 md:w-5 md:h-5 ${isLiked ? "fill-current" : ""}`} />
            </button>
            <button
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30 transition-all duration-300 flex items-center justify-center"
            >
              <Share2 className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          {/* Quick View */}
          <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Button
              size="sm"
              className="bg-white/20 backdrop-blur-sm border border-white/20 text-white hover:bg-white/30 text-xs md:text-sm px-2 md:px-3 py-1 md:py-2"
              asChild
            >
              <span>
                <Eye className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                Quick View
              </span>
            </Button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 md:p-5 lg:p-6">
          <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2 md:mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors duration-300">
            {product.title}
          </h3>

          <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{product.description}</p>

          {/* Features */}
          {product.features && (
            <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
              {product.features.slice(0, 3).map((feature, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs bg-gray-100 text-gray-700 px-2 py-1">
                  {feature}
                </Badge>
              ))}
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center justify-between mb-4 md:mb-6 text-xs md:text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-current" />
              <span className="font-medium">4.8</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-3 h-3 md:w-4 md:h-4" />
              <span>1.2k+ users</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3 md:w-4 md:h-4" />
              <span>Instant</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <div>
              <span className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">₹{lowestPrice}</span>
              {highestOriginalPrice > lowestPrice && (
                <span className="text-sm md:text-base lg:text-lg text-gray-500 line-through ml-2">
                  ₹{highestOriginalPrice}
                </span>
              )}
              <p className="text-xs text-gray-500 mt-1">Starting price</p>
            </div>
            <div className="text-right">
              <Badge className="bg-green-100 text-green-700 mb-1 text-xs">
                Save ₹{highestOriginalPrice - lowestPrice}
              </Badge>
              <p className="text-xs text-gray-500">{product.variations.length} plans available</p>
            </div>
          </div>

          {/* Action Button */}
          <Button
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 group relative overflow-hidden text-sm md:text-base py-2 md:py-3"
            asChild
          >
            <span>
              <span className="relative z-10 flex items-center justify-center">
                <Zap className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                View Details
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </span>
          </Button>
        </div>
      </div>
    </Link>
  )
}

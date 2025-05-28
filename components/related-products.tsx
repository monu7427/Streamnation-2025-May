"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { getProductsByCategory } from "@/lib/data"
import type { Product } from "@/lib/types"

interface RelatedProductsProps {
  currentProduct: Product
  limit?: number
}

export function RelatedProducts({ currentProduct, limit = 6 }: RelatedProductsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const relatedProducts = getProductsByCategory(currentProduct.category)
    .filter((product) => product.id !== currentProduct.id)
    .slice(0, limit)

  if (relatedProducts.length === 0) {
    return null
  }

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  }

  const maxIndex = Math.max(0, relatedProducts.length - itemsPerView.desktop)

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">You might be interested in</h2>

          {/* Navigation Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Products Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView.desktop)}%)`,
            }}
          >
            {relatedProducts.map((product) => {
              const lowestPrice = Math.min(...product.variations.map((v) => v.price))
              const highestOriginalPrice = Math.max(...product.variations.map((v) => v.originalPrice || v.price))
              const discount = Math.round(((highestOriginalPrice - lowestPrice) / highestOriginalPrice) * 100)

              return (
                <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 md:px-3 py-2">
                  <Link href={`/product/${product.slug}`} className="block">
                    <div className="bg-white rounded-xl md:rounded-2xl s  transition-all duration-300 overflow-hidden border border-gray-100 group">
                      {/* Product Image */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={product.images[0] || "/placeholder.svg"}
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {discount > 0 && (
                          <Badge className="absolute top-2 md:top-3 left-2 md:left-3 bg-green-500 text-white text-xs px-2 py-1">
                            Min. {discount}% Off
                          </Badge>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="p-3 md:p-4">
                        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors duration-300 text-sm md:text-base">
                          {product.title}
                        </h3>

                        <div className="flex items-center space-x-1 mb-3">
                          <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-current" />
                          <span className="text-xs md:text-sm text-gray-600">4.8 (1.2k+)</span>
                        </div>

                        <div className="flex items-center justify-between mb-3 md:mb-4">
                          <div>
                            <span className="text-lg md:text-xl font-bold text-gray-900">₹{lowestPrice}</span>
                            {highestOriginalPrice > lowestPrice && (
                              <span className="text-xs md:text-sm text-gray-500 line-through ml-2">
                                ₹{highestOriginalPrice}
                              </span>
                            )}
                          </div>
                        </div>

                        <Button
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 text-xs md:text-sm font-medium"
                          asChild
                        >
                          <span>Shop Now</span>
                        </Button>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile Navigation Dots */}
        <div className="flex justify-center mt-4 md:hidden">
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(relatedProducts.length / itemsPerView.mobile) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-cyan-500 scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

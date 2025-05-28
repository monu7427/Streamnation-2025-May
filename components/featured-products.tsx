"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { getFeaturedProducts } from "@/lib/data"
import { EnhancedProductCard } from "@/components/enhanced-product-card"

export function FeaturedProducts() {
  const allProducts = getFeaturedProducts()
  const [showAll, setShowAll] = useState(false)

  const displayProducts = showAll ? allProducts : allProducts.slice(0, 6)

  return (
    <section className="py-8 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Our most popular premium subscriptions at unbeatable prices with instant delivery
          </p>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <p className="text-sm md:text-base text-gray-600">
            Showing {displayProducts.length} of {allProducts.length} products
          </p>
          {allProducts.length > 6 && (
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 text-xs md:text-sm px-3 md:px-4 py-2"
            >
              {showAll ? "Show Less" : `View All ${allProducts.length} Products`}
            </Button>
          )}
        </div>

        {/* Products Grid */}
        {displayProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {displayProducts.map((product, index) => (
              <EnhancedProductCard key={product.id} product={product} variant={index === 0 ? "featured" : "default"} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 md:py-12">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl md:text-4xl">🔍</span>
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-sm md:text-base text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* View All Button */}
        {!showAll && allProducts.length <= 6 && (
          <div className="text-center mt-8 md:mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg group"
              asChild
            >
              <Link href="/subscriptions">
                View All Products
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

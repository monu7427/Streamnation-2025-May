"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star, Zap, Gift } from "lucide-react"
import { getBanners } from "@/lib/data"

export function PromotionalBanner() {
  const [currentBanner, setCurrentBanner] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const banners = getBanners()

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, banners.length])

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length)
  }

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const banner = banners[currentBanner]

  return (
    <section className="py-6 md:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div
          className={`relative ${banner.bgColor} rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl min-h-[300px] md:min-h-[400px]`}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Geometric Shapes */}
            <div className="absolute top-6 md:top-10 right-6 md:right-10 w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full animate-pulse" />
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl rotate-45 animate-pulse delay-1000" />
            <div className="absolute top-1/2 right-1/4 w-8 h-8 md:w-12 md:h-12 bg-white/10 rounded-full animate-bounce" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-6 md:gap-8 items-center p-6 md:p-8 lg:p-12">
            {/* Content */}
            <div className="text-white space-y-4 md:space-y-6">
              <div className="space-y-3 md:space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm">
                  <Star className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  Most Popular
                </Badge>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight">{banner.title}</h2>
                <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-yellow-300">
                  {banner.subtitle}
                </div>
                <p className="text-base md:text-lg lg:text-xl opacity-90 leading-relaxed">{banner.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Button
                  size="lg"
                  className="bg-white z-50 cursor-pointer text-gray-900 hover:bg-gray-100 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg group"
                  asChild
                >
                  <Link href={banner.ctaLink}>
                    <Zap className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    {banner.ctaText}
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-black hover:bg-white hover:text-gray-700 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
                  asChild
                >
                  <Link href={banner.ctaLink}>
                    <Gift className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                    View Details
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-first lg:order-last">
              <div className="aspect-square bg-white/10 rounded-2xl md:rounded-3xl p-6 md:p-8 backdrop-blur-sm border border-white/20">
                <img
                  src={banner.image || "/placeholder.svg"}
                  alt={banner.title}
                  className="w-full h-full object-cover rounded-xl md:rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevBanner}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 z-50"
          >
            <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextBanner}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 z-50"
          >
            <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-50">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  currentBanner === index ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import {
  Play,
  Palette,
  Code,
  TrendingUp,
  Music,
  Briefcase,
  Gamepad2,
  BookOpen,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { getAllCategories } from "@/lib/data"

// Ensure these keys match the `icon` property returned from `getAllCategories()`
const iconMap = {
  Play: Play,
  Palette: Palette,
  Code: Code,
  TrendingUp: TrendingUp,
  Music: Music,
  Briefcase: Briefcase,
  Gamepad2: Gamepad2,
  BookOpen: BookOpen,
}

export function CategoryNavigation() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const categories = getAllCategories()

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollButtons)
      return () => container.removeEventListener("scroll", checkScrollButtons)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="bg-white border-b border-gray-200 py-4 md:py-6 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between overflow-x-auto scrollbar-hide">
          <div className="flex items-center space-x-6 lg:space-x-8 min-w-max">
            {categories.map((category) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Play
              return (
                <Link
                  key={category.id}
                  href={
                    category.slug === "entertainment"
                      ? "/subscriptions/entertainment"
                      : `/subscriptions/${category.slug}`
                  }
                  className="flex flex-col items-center space-y-3 group min-w-[90px] py-2"
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <div
                    className={`w-14 h-14 lg:w-16 lg:h-16 ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl relative overflow-hidden`}
                  >
                    <img
  src={category.image}
  alt={category.name}
  className="w-full h-full p-2 object-contain relative z-10"
/>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-cyan-600 transition-colors duration-300 text-center leading-tight">
                    {category.name}
                  </span>
                  <div className="text-xs text-gray-500">{category.count} items</div>
                  <div
                    className={`h-0.5 bg-cyan-500 transition-all duration-300 ${
                      hoveredCategory === category.id ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              )
            })}
          </div>
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border border-gray-200"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center border border-gray-200"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            className="flex items-center justify-center space-x-4 overflow-x-auto scrollbar-hide px-8 py-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category) => {
              const IconComponent = iconMap[category.icon as keyof typeof iconMap] || Play
              return (
                <Link
                  key={category.id}
                  href={
                    category.slug === "entertainment"
                      ? "/subscriptions/entertainment"
                      : `/subscriptions/${category.slug}`
                  }
                  className="flex flex-col items-center space-y-2 group min-w-[70px] py-2 flex-shrink-0"
                >
                  <div
                    className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md group-hover:shadow-lg relative overflow-hidden`}
                  >
                    <img
  src={category.image}
  alt={category.name}
  className="w-full h-full p-2 object-contain relative z-10"
/>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <span className="text-xs font-medium text-gray-700 group-hover:text-cyan-600 transition-colors duration-300 text-center leading-tight">
                    {category.name}
                  </span>
                  <div className="text-xs text-gray-500">{category.count}</div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

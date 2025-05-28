import Link from "next/link"
import { Play, Palette, Code, TrendingUp, Music, Briefcase } from "lucide-react"
import { getAllCategories } from "@/lib/data"

const categoryIcons = {
  linkedin: Briefcase,
  creative: Palette,
  developer: Code,
  marketing: TrendingUp,
  entertainment: Play,
  music: Music,
}

const categoryColors = {
  linkedin: "bg-blue-500",
  creative: "bg-purple-500",
  developer: "bg-green-500",
  marketing: "bg-orange-500",
  entertainment: "bg-red-500",
  music: "bg-pink-500",
}

export function Categories() {
  const categories = getAllCategories()

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover premium subscriptions across different categories, all at competitive prices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = categoryIcons[category.slug as keyof typeof categoryIcons] || Play
            const colorClass = categoryColors[category.slug as keyof typeof categoryColors] || "bg-gray-500"

            return (
              <Link key={category.id} href={`/subscriptions/${category.slug}`} className="group">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:border-cyan-300 group-hover:scale-105">
                  <div className="flex items-center space-x-4 mb-6">
                    <div
                      className={`w-16 h-16 ${colorClass} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500">{category.count} Products</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <div className="flex items-center text-cyan-600 font-semibold">
                    <span>Explore {category.name}</span>
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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

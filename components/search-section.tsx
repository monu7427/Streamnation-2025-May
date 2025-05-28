"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, TrendingUp, X } from "lucide-react"
import { searchProducts, getAllCategories } from "@/lib/data"

const trendingSearches = [
  "Netflix Premium",
  "Spotify Family",
  "Adobe Creative",
  "LinkedIn Premium",
  "Amazon Prime",
  "Disney Hotstar",
  "YouTube Music",
  "Canva Pro",
]

export function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [showResults, setShowResults] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const router = useRouter()
  const categories = getAllCategories()

  useEffect(() => {
    if (searchQuery.length > 2) {
      setIsSearching(true)
      const results = searchProducts(searchQuery)
      setSearchResults(results)
      setShowResults(true)
      setIsSearching(false)
    } else {
      setShowResults(false)
      setSearchResults([])
    }
  }, [searchQuery])

  const handleSearch = (query: string) => {
    if (query.trim()) {
      router.push(`/subscriptions?search=${encodeURIComponent(query)}`)
      setShowResults(false)
    }
  }

  const handleTrendingClick = (term: string) => {
    setSearchQuery(term)
    handleSearch(term)
  }

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Subscription
            </span>
          </h2>
          <p className="text-xl text-gray-600">Search from 50+ premium subscriptions at best prices</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <Input
              type="search"
              placeholder="Search for Netflix, Spotify, Adobe, LinkedIn..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch(searchQuery)}
              className="pl-12 pr-12 py-4 text-lg border-2 border-gray-200 focus:border-cyan-500 rounded-2xl shadow-lg"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("")
                  setShowResults(false)
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Search Results Dropdown */}
          {showResults && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-2xl shadow-2xl z-50 mt-2 max-h-96 overflow-y-auto">
              {isSearching ? (
                <div className="p-4 text-center text-gray-500">Searching...</div>
              ) : searchResults.length > 0 ? (
                <div className="p-4">
                  <div className="text-sm text-gray-500 mb-3">Found {searchResults.length} results</div>
                  {searchResults.slice(0, 8).map((product) => (
                    <button
                      key={product.id}
                      onClick={() => router.push(`/product/${product.slug}`)}
                      className="w-full flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      <img
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.title}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1 text-left">
                        <h4 className="font-semibold text-gray-900">{product.title}</h4>
                        <p className="text-sm text-gray-500 line-clamp-1">{product.description}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-lg font-bold text-cyan-600">
                            ₹{Math.min(...product.variations.map((v: any) => v.price))}
                          </span>
                          <Badge variant="secondary" className="text-xs">
                            {product.category}
                          </Badge>
                        </div>
                      </div>
                    </button>
                  ))}
                  {searchResults.length > 8 && (
                    <button
                      onClick={() => handleSearch(searchQuery)}
                      className="w-full p-3 text-cyan-600 hover:bg-cyan-50 rounded-xl transition-colors font-medium"
                    >
                      View all {searchResults.length} results
                    </button>
                  )}
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500">No results found for "{searchQuery}"</div>
              )}
            </div>
          )}
        </div>

        {/* Trending Searches */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-gray-500" />
            <span className="text-gray-600 font-medium">Trending Searches</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {trendingSearches.map((term, index) => (
              <button
                key={index}
                onClick={() => handleTrendingClick(term)}
                className="px-4 py-2 bg-gray-100 hover:bg-cyan-100 text-gray-700 hover:text-cyan-700 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
              >
                {term}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Category Access */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Or browse by category</p>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.slice(0, 6).map((category) => (
              <Button
                key={category.id}
                variant="outline"
                size="sm"
                className="rounded-full border-2 hover:border-cyan-500 hover:bg-cyan-50"
                onClick={() => router.push(`/subscriptions/${category.slug}`)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

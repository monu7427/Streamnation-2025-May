"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, X } from "lucide-react"
import { getAllCategories } from "@/lib/data"
import type { Product } from "@/lib/types"

interface HomeSearchFiltersProps {
  products: Product[]
  onFilteredProducts: (products: Product[]) => void
}

export function HomeSearchFilters({ products, onFilteredProducts }: HomeSearchFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [isExpanded, setIsExpanded] = useState(false)

  const categories = getAllCategories()

  useEffect(() => {
    let filtered = products

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Price range filter
    if (priceRange !== "all") {
      filtered = filtered.filter((product) => {
        const minPrice = Math.min(...product.variations.map((v) => v.price))
        switch (priceRange) {
          case "under-500":
            return minPrice < 500
          case "500-1000":
            return minPrice >= 500 && minPrice <= 1000
          case "1000-2000":
            return minPrice >= 1000 && minPrice <= 2000
          case "above-2000":
            return minPrice > 2000
          default:
            return true
        }
      })
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered = filtered.sort((a, b) => {
          const aMin = Math.min(...a.variations.map((v) => v.price))
          const bMin = Math.min(...b.variations.map((v) => v.price))
          return aMin - bMin
        })
        break
      case "price-high":
        filtered = filtered.sort((a, b) => {
          const aMin = Math.min(...a.variations.map((v) => v.price))
          const bMin = Math.min(...b.variations.map((v) => v.price))
          return bMin - aMin
        })
        break
      case "name":
        filtered = filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
      default:
        // Keep original order for popular
        break
    }

    onFilteredProducts(filtered)
  }, [searchQuery, selectedCategory, priceRange, sortBy, products, onFilteredProducts])

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setPriceRange("all")
    setSortBy("popular")
  }

  const hasActiveFilters = searchQuery || selectedCategory !== "all" || priceRange !== "all" || sortBy !== "popular"

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="search"
          placeholder="Search subscriptions, apps, or categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 py-3 text-lg border-2 border-gray-200 focus:border-cyan-500 rounded-xl"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between mb-4">
        <Button variant="outline" onClick={() => setIsExpanded(!isExpanded)} className="flex items-center space-x-2">
          <Filter className="w-4 h-4" />
          <span>Filters</span>
          {hasActiveFilters && (
            <Badge className="bg-cyan-500 text-white text-xs">
              {
                [searchQuery, selectedCategory !== "all", priceRange !== "all", sortBy !== "popular"].filter(Boolean)
                  .length
              }
            </Badge>
          )}
        </Button>

        {hasActiveFilters && (
          <Button variant="ghost" onClick={clearFilters} className="text-gray-500 hover:text-gray-700">
            <X className="w-4 h-4 mr-2" />
            Clear All
          </Button>
        )}
      </div>

      {/* Expanded Filters */}
      <div
        className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.slug}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price Range Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-500">Under ₹500</SelectItem>
                <SelectItem value="500-1000">₹500 - ₹1000</SelectItem>
                <SelectItem value="1000-2000">₹1000 - ₹2000</SelectItem>
                <SelectItem value="above-2000">Above ₹2000</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Most Popular" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name: A to Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200">
          {searchQuery && (
            <Badge variant="secondary" className="flex items-center space-x-1">
              <span>Search: {searchQuery}</span>
              <button onClick={() => setSearchQuery("")} className="ml-1 hover:text-red-500">
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
          {selectedCategory !== "all" && (
            <Badge variant="secondary" className="flex items-center space-x-1">
              <span>Category: {categories.find((c) => c.slug === selectedCategory)?.name}</span>
              <button onClick={() => setSelectedCategory("all")} className="ml-1 hover:text-red-500">
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
          {priceRange !== "all" && (
            <Badge variant="secondary" className="flex items-center space-x-1">
              <span>Price: {priceRange}</span>
              <button onClick={() => setPriceRange("all")} className="ml-1 hover:text-red-500">
                <X className="w-3 h-3" />
              </button>
            </Badge>
          )}
        </div>
      )}
    </div>
  )
}

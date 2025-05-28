"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Filter, Star, Users, ArrowRight } from "lucide-react"
import { getAllProducts, getAllCategories, businessInfo } from "@/lib/data"

export default function SubscriptionsPage() {
  const searchParams = useSearchParams()
  const initialSearch = searchParams.get("search") || ""

  const [searchQuery, setSearchQuery] = useState(initialSearch)
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [priceRange, setPriceRange] = useState("all")

  const products = getAllProducts()
  const categories = getAllCategories()

  useEffect(() => {
    if (initialSearch) {
      setSearchQuery(initialSearch)
    }
  }, [initialSearch])

  const filteredProducts = useMemo(() => {
    let filtered = products

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()),
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
        return filtered.sort((a, b) => {
          const aMin = Math.min(...a.variations.map((v) => v.price))
          const bMin = Math.min(...b.variations.map((v) => v.price))
          return aMin - bMin
        })
      case "price-high":
        return filtered.sort((a, b) => {
          const aMin = Math.min(...a.variations.map((v) => v.price))
          const bMin = Math.min(...b.variations.map((v) => v.price))
          return bMin - aMin
        })
      case "name":
        return filtered.sort((a, b) => a.title.localeCompare(b.title))
      default:
        return filtered
    }
  }, [searchQuery, selectedCategory, sortBy, priceRange, products])

  const generateWhatsAppLink = (product: any) => {
    const message = `Hi ${businessInfo.name}, I am interested in ${product.title} starting at ₹${Math.min(...product.variations.map((v) => v.price))}. Please provide more details.`
    return `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">All Subscriptions</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our complete collection of premium OTT subscriptions and paid applications at unbeatable prices
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
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

            {/* Price Range Filter */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="under-500">Under ₹500</SelectItem>
                <SelectItem value="500-1000">₹500 - ₹1000</SelectItem>
                <SelectItem value="1000-2000">₹1000 - ₹2000</SelectItem>
                <SelectItem value="above-2000">Above ₹2000</SelectItem>
              </SelectContent>
            </Select>

            {/* Sort By */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name: A to Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
                setSortBy("popular")
                setPriceRange("all")
              }}
            >
              <Filter className="w-4 h-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const lowestPrice = Math.min(...product.variations.map((v) => v.price))
            const highestOriginalPrice = Math.max(...product.variations.map((v) => v.originalPrice || v.price))
            const discount = Math.round(((highestOriginalPrice - lowestPrice) / highestOriginalPrice) * 100)

            return (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-0 shadow-lg"
              >
                <div className="relative">
                  <img
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {discount > 0 && (
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-green-600 text-white">
                      {discount}% OFF
                    </Badge>
                  )}
                  <Badge className="absolute top-4 right-4 bg-black/80 text-white">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                  {product.features && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>4.8</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>1.2k+ users</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {product.variations.length} plans
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">₹{lowestPrice}</span>
                      {highestOriginalPrice > lowestPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">₹{highestOriginalPrice}</span>
                      )}
                      <p className="text-xs text-gray-500">Starting price</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                      asChild
                    >
                      <a href={generateWhatsAppLink(product)} target="_blank" rel="noopener noreferrer">
                        Order on WhatsApp
                      </a>
                    </Button>

                    <Button variant="outline" className="w-full group" asChild>
                      <Link href={`/product/${product.slug}`}>
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
                setSortBy("popular")
                setPriceRange("all")
              }}
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, Search, ArrowRight, Eye } from "lucide-react"
import { blogs } from "@/lib/data"

const allBlogs = [
  ...blogs,
  {
    id: "3",
    title: "How to Save Money on Digital Subscriptions",
    slug: "save-money-digital-subscriptions",
    excerpt: "Smart tips and tricks to get the best deals on your favorite streaming services and apps.",
    content: "Content here...",
    image: "/placeholder.svg?height=300&width=500",
    published: true,
    createdAt: new Date("2024-01-12"),
  },
  {
    id: "4",
    title: "Netflix vs Amazon Prime: Which is Better?",
    slug: "netflix-vs-amazon-prime-comparison",
    excerpt: "A detailed comparison of features, content, and pricing between Netflix and Amazon Prime Video.",
    content: "Content here...",
    image: "/placeholder.svg?height=300&width=500",
    published: true,
    createdAt: new Date("2024-01-08"),
  },
  {
    id: "5",
    title: "Adobe Creative Cloud: Complete Guide",
    slug: "adobe-creative-cloud-complete-guide",
    excerpt: "Everything you need to know about Adobe Creative Cloud and how to maximize its potential.",
    content: "Content here...",
    image: "/placeholder.svg?height=300&width=500",
    published: true,
    createdAt: new Date("2024-01-05"),
  },
  {
    id: "6",
    title: "LinkedIn Premium: Is It Worth It?",
    slug: "linkedin-premium-worth-it",
    excerpt: "Analyzing the benefits and features of LinkedIn Premium to help you make an informed decision.",
    content: "Content here...",
    image: "/placeholder.svg?height=300&width=500",
    published: true,
    createdAt: new Date("2024-01-03"),
  },
]

export default function BlogsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredBlogs, setFilteredBlogs] = useState(allBlogs)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const filtered = allBlogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    setFilteredBlogs(filtered)
  }, [searchQuery])

  const featuredBlog = allBlogs[0]
  const regularBlogs = filteredBlogs.slice(1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-600 border border-cyan-500/30 px-6 py-2 text-sm mb-6">
              StreamNation Blog
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
              Latest{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Insights</span>{" "}
              & Tips
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Stay updated with the latest trends in OTT platforms, subscription services, and digital entertainment.
              Get expert tips and insights to make the most of your subscriptions.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-4 text-lg border-2 border-gray-200 focus:border-cyan-500 rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Featured Blog */}
        {!searchQuery && (
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Article</h2>
            </div>

            <Card className="overflow-hidden shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 group">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredBlog.image || "/placeholder.svg"}
                    alt={featuredBlog.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Featured</Badge>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                    {featuredBlog.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{featuredBlog.excerpt}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredBlog.createdAt.toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>5 min read</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span>2.5k views</span>
                    </div>
                  </div>
                  <Button
                    className="w-fit bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 group"
                    asChild
                  >
                    <Link href={`/blogs/${featuredBlog.slug}`}>
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </section>
        )}

        {/* Blog Grid */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {searchQuery ? `Search Results (${filteredBlogs.length})` : "Latest Articles"}
            </h2>
          </div>

          {filteredBlogs.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularBlogs.map((blog, index) => (
                <Card
                  key={blog.id}
                  className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-500 group hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{blog.createdAt.toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>3 min read</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full group border-2 border-gray-200 hover:border-cyan-500 hover:bg-cyan-50"
                      asChild
                    >
                      <Link href={`/blogs/${blog.slug}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">Try searching with different keywords</p>
              <Button onClick={() => setSearchQuery("")}>Clear Search</Button>
            </div>
          )}
        </section>

        {/* Newsletter Signup */}
        <section className="mt-20">
          <Card className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 overflow-hidden relative">
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
            </div>
            <CardContent className="p-12 text-center relative z-10">
              <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest articles, tips, and exclusive offers delivered to your
                inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:bg-white/30"
                />
                <Button className="bg-white text-cyan-600 hover:bg-gray-100 px-8">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

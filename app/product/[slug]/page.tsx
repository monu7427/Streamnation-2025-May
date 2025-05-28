"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Star,
  Users,
  Clock,
  Shield,
  ArrowLeft,
  Heart,
  Share2,
  Check,
  Copy,
  Facebook,
  Twitter,
  MessageCircle,
  Mail,
} from "lucide-react"
import { getProductBySlug, businessInfo } from "@/lib/data"
import { RelatedProducts } from "@/components/related-products"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)
  const [selectedVariation, setSelectedVariation] = useState(0)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isLiked, setIsLiked] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)

  if (!product) {
    notFound()
  }

  const generateWhatsAppLink = (variation: any) => {
    const message = `Hi ${businessInfo.name},

I want to order: ${product.title}
Plan: ${variation.name}
Price: ₹${variation.price}
${variation.subPrice ? `Details: ${variation.subPrice}` : ""}

Please provide payment details and delivery information.

Thank you!`
    return `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`
  }

  const shareProduct = async (platform: string) => {
    const url = window.location.href
    const title = `Check out ${product.title} at amazing prices!`
    const text = `${product.title} - Starting at ₹${Math.min(...product.variations.map((v) => v.price))} | ${product.description}`

    switch (platform) {
      case "copy":
        try {
          await navigator.clipboard.writeText(url)
          setCopiedLink(true)
          setTimeout(() => setCopiedLink(false), 2000)
        } catch (err) {
          console.error("Failed to copy link")
        }
        break
      case "whatsapp":
        window.open(`https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`, "_blank")
        break
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
        break
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
          "_blank",
        )
        break
      case "email":
        window.open(
          `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${text}\n\n${url}`)}`,
          "_blank",
        )
        break
    }
    setShowShareMenu(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/subscriptions" className="text-gray-500 hover:text-gray-700 transition-colors">
              Subscriptions
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              href={`/subscriptions/${product.category}`}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium truncate">{product.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Back Button */}
        <Button variant="outline" className="mb-6 lg:mb-8 group" asChild>
          <Link href="/subscriptions">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4 lg:space-y-6">
            <div className="relative aspect-square rounded-2xl lg:rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-xl group">
              <Image
                src={product.images[selectedImageIndex] || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Share Button */}
              <div className="absolute top-3 lg:top-4 right-3 lg:right-4">
                <div className="relative">
                  <Button
                    size="icon"
                    variant="outline"
                    className="bg-white/90 backdrop-blur-sm border-white/20 hover:bg-white w-8 h-8 lg:w-10 lg:h-10"
                    onClick={() => setShowShareMenu(!showShareMenu)}
                  >
                    <Share2 className="w-3 h-3 lg:w-4 lg:h-4" />
                  </Button>

                  {/* Share Menu */}
                  {showShareMenu && (
                    <div className="absolute top-10 lg:top-12 right-0 bg-white rounded-xl shadow-xl border border-gray-200 p-3 lg:p-4 min-w-[180px] lg:min-w-[200px] z-10">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm lg:text-base">Share this product</h4>
                      <div className="space-y-2">
                        <button
                          onClick={() => shareProduct("copy")}
                          className="w-full flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <Copy className="w-4 h-4 text-gray-600" />
                          <span className="text-sm">{copiedLink ? "Copied!" : "Copy Link"}</span>
                        </button>
                        <button
                          onClick={() => shareProduct("whatsapp")}
                          className="w-full flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <MessageCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">WhatsApp</span>
                        </button>
                        <button
                          onClick={() => shareProduct("facebook")}
                          className="w-full flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <Facebook className="w-4 h-4 text-blue-600" />
                          <span className="text-sm">Facebook</span>
                        </button>
                        <button
                          onClick={() => shareProduct("twitter")}
                          className="w-full flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <Twitter className="w-4 h-4 text-blue-400" />
                          <span className="text-sm">Twitter</span>
                        </button>
                        <button
                          onClick={() => shareProduct("email")}
                          className="w-full flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <Mail className="w-4 h-4 text-gray-600" />
                          <span className="text-sm">Email</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Like Button */}
              <div className="absolute top-3 lg:top-4 left-3 lg:left-4">
                <Button
                  size="icon"
                  variant="outline"
                  className={`bg-white/90 backdrop-blur-sm border-white/20 hover:bg-white transition-all duration-300 w-8 h-8 lg:w-10 lg:h-10 ${
                    isLiked ? "text-red-500 bg-red-50" : ""
                  }`}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart className={`w-3 h-3 lg:w-4 lg:h-4 ${isLiked ? "fill-current" : ""}`} />
                </Button>
              </div>
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2 lg:gap-4">
                {product.images.slice(0, 7).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative aspect-square rounded-lg lg:rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedImageIndex === index
                        ? "border-cyan-500 ring-2 ring-cyan-200"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${product.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6 lg:space-y-8">
            <div>
              <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Badge>
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 lg:mb-6">{product.title}</h1>
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Rating and Stats */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-6">
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 lg:w-5 lg:h-5 ${i < 4 ? "text-yellow-500 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-base lg:text-lg">4.8</span>
                <span className="text-gray-500 text-sm lg:text-base">(1.2k+ reviews)</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-500 text-sm lg:text-base">
                <Users className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>2.5k+ users</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-500 text-sm lg:text-base">
                <Clock className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>Instant delivery</span>
              </div>
            </div>

            {/* Features */}
            {product.features && (
              <div>
                <h3 className="font-bold text-gray-900 mb-4 text-lg lg:text-xl">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pricing Plans */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 lg:mb-6 text-lg lg:text-xl">Choose Your Plan</h3>
              <div className="space-y-3 lg:space-y-4">
                {product.variations.map((variation, index) => (
                  <Card
                    key={index}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      selectedVariation === index
                        ? "ring-2 ring-cyan-500 border-cyan-500 bg-cyan-50"
                        : "hover:border-gray-300"
                    }`}
                    onClick={() => setSelectedVariation(index)}
                  >
                    <CardContent className="p-4 lg:p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-base lg:text-lg">{variation.name}</h4>
                          {variation.subPrice && (
                            <p className="text-gray-600 mt-1 text-sm lg:text-base">{variation.subPrice}</p>
                          )}
                          {variation.features && (
                            <div className="flex flex-wrap gap-2 mt-3">
                              {variation.features.map((feature, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="text-right ml-4 lg:ml-6">
                          <div className="text-2xl lg:text-3xl font-bold text-gray-900">₹{variation.price}</div>
                          {variation.originalPrice && variation.originalPrice > variation.price && (
                            <div className="text-base lg:text-lg text-gray-500 line-through">
                              ₹{variation.originalPrice}
                            </div>
                          )}
                          {variation.originalPrice && (
                            <Badge className="bg-green-100 text-green-700 mt-1 text-xs">
                              Save ₹{variation.originalPrice - variation.price}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 lg:space-y-4">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-base lg:text-lg py-4 lg:py-6 group relative overflow-hidden"
                asChild
              >
                <a
                  href={generateWhatsAppLink(product.variations[selectedVariation])}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5 mr-2" />
                    Order Now via WhatsApp - ₹{product.variations[selectedVariation].price}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>

              <div className="flex space-x-3 lg:space-x-4">
                <Button
                  variant="outline"
                  className="flex-1 border-2 border-gray-200 hover:border-red-500 hover:bg-red-50 group py-3 lg:py-4"
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <Heart
                    className={`w-4 h-4 mr-2 ${isLiked ? "fill-current text-red-500" : "group-hover:text-red-500"}`}
                  />
                  <span className="text-sm lg:text-base">{isLiked ? "Added to Wishlist" : "Add to Wishlist"}</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 group py-3 lg:py-4"
                  onClick={() => setShowShareMenu(!showShareMenu)}
                >
                  <Share2 className="w-4 h-4 mr-2 group-hover:text-blue-500" />
                  <span className="text-sm lg:text-base">Share Product</span>
                </Button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-gray-200">
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 lg:w-8 lg:h-8 text-green-500" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm lg:text-base">100% Genuine</p>
                    <p className="text-xs lg:text-sm text-gray-600">Verified subscriptions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 lg:w-8 lg:h-8 text-blue-500" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm lg:text-base">Instant Delivery</p>
                    <p className="text-xs lg:text-sm text-gray-600">Within 5-10 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12 lg:mt-20">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 lg:mb-8">
              <TabsTrigger value="description" className="text-base lg:text-lg py-2 lg:py-3">
                Description
              </TabsTrigger>
              <TabsTrigger value="features" className="text-base lg:text-lg py-2 lg:py-3">
                Features
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-6 lg:mt-8">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-6">About {product.title}</h3>
                  <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed text-base lg:text-lg mb-4 lg:mb-6">
                      {product.description}
                    </p>
                    <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                      Get instant access to {product.title} with our premium subscription service. We provide genuine,
                      verified accounts with full features and support. All subscriptions are delivered instantly via
                      WhatsApp with complete setup instructions and 24/7 customer support.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="features" className="mt-6 lg:mt-8">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">Features & Benefits</h3>
                  {product.features && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                          <Check className="w-5 h-5 lg:w-6 lg:h-6 text-green-500 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-gray-900 text-base lg:text-lg">{feature}</h4>
                            <p className="text-gray-600 text-sm lg:text-base">
                              Full access to this premium feature with complete functionality
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts currentProduct={product} />
    </div>
  )
}

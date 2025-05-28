"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Gift, Percent, Clock, Check, Star, Zap } from "lucide-react"
import { coupons, businessInfo } from "@/lib/data"

const allCoupons = [
  ...coupons,
  {
    id: "3",
    code: "ADOBE50",
    description: "₹50 off on Adobe Creative Cloud subscriptions",
    discount: 50,
    validUntil: new Date("2024-06-30"),
    active: true,
  },
  {
    id: "4",
    code: "SPOTIFY25",
    description: "25% off on Spotify Family plans",
    discount: 25,
    validUntil: new Date("2024-05-31"),
    active: true,
  },
  {
    id: "5",
    code: "LINKEDIN100",
    description: "₹100 off on LinkedIn Premium subscriptions",
    discount: 100,
    validUntil: new Date("2024-07-31"),
    active: true,
  },
  {
    id: "6",
    code: "MEGA20",
    description: "20% off on orders above ₹1000",
    discount: 20,
    validUntil: new Date("2024-12-31"),
    active: true,
  },
]

export default function CouponsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const getDaysLeft = (date: Date) => {
    const today = new Date()
    const diffTime = date.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-green-200/30 to-yellow-200/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge className="bg-gradient-to-r from-green-500/20 to-yellow-500/20 text-green-600 border border-green-500/30 px-6 py-2 text-sm mb-6">
              🎁 Exclusive Offers
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
              Amazing{" "}
              <span className="bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">
                Coupons
              </span>{" "}
              & Deals
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Save even more on your favorite subscriptions with our exclusive coupon codes and special offers. Limited
              time deals you don't want to miss!
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Featured Offer */}
        <section className="mb-20">
          <Card className="bg-gradient-to-r from-green-500 to-yellow-500 text-white border-0 overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
            </div>
            <CardContent className="p-12 text-center relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
                  <Gift className="w-10 h-10 text-white" />
                </div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Special Launch Offer!</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Get 20% off on your first order. Use code WELCOME20 and start saving on premium subscriptions today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/30">
                  <span className="text-2xl font-bold tracking-wider">WELCOME20</span>
                </div>
                <Button
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
                  onClick={() => copyToClipboard("WELCOME20")}
                >
                  {copiedCode === "WELCOME20" ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Code
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Coupons Grid */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Available{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Coupons</span>
            </h2>
            <p className="text-xl text-gray-600">Choose from our collection of money-saving coupon codes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCoupons.map((coupon, index) => {
              const daysLeft = getDaysLeft(coupon.validUntil)
              const isExpiringSoon = daysLeft <= 7
              const isExpired = daysLeft < 0

              return (
                <Card
                  key={coupon.id}
                  className={`overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-500 group hover:scale-105 ${
                    isExpired ? "opacity-50" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 text-white relative overflow-hidden">
                      <div className="absolute top-2 right-2">
                        {isExpiringSoon && !isExpired && (
                          <Badge className="bg-red-500 text-white animate-pulse">
                            <Clock className="w-3 h-3 mr-1" />
                            Expiring Soon
                          </Badge>
                        )}
                        {isExpired && <Badge className="bg-gray-500 text-white">Expired</Badge>}
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <Percent className="w-8 h-8 text-white" />
                        <div className="text-right">
                          <div className="text-3xl font-bold">
                            {typeof coupon.discount === "number" && coupon.discount < 100
                              ? `${coupon.discount}%`
                              : `₹${coupon.discount}`}
                          </div>
                          <div className="text-sm opacity-80">OFF</div>
                        </div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                        <div className="text-center">
                          <div className="text-sm opacity-80 mb-1">Coupon Code</div>
                          <div className="text-xl font-bold tracking-wider">{coupon.code}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                      {coupon.description}
                    </h3>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>Valid until {coupon.validUntil.toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span>Popular</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 group"
                        onClick={() => copyToClipboard(coupon.code)}
                        disabled={isExpired}
                      >
                        {copiedCode === coupon.code ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            Copy Code
                          </>
                        )}
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 group"
                        asChild
                        disabled={isExpired}
                      >
                        <a
                          href={`https://wa.me/${businessInfo.whatsapp}?text=Hi%20${businessInfo.name}%2C%20I%20want%20to%20use%20coupon%20code%20${coupon.code}%20for%20my%20order`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Zap className="w-4 h-4 mr-2" />
                          Use This Coupon
                        </a>
                      </Button>
                    </div>

                    {daysLeft > 0 && (
                      <div className="mt-4 text-center">
                        <span className="text-sm text-gray-500">
                          {daysLeft} day{daysLeft !== 1 ? "s" : ""} left
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* How to Use Section */}
        <section className="mt-20">
          <Card className="bg-white shadow-xl border-0">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  How to{" "}
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                    Use Coupons
                  </span>
                </h2>
                <p className="text-xl text-gray-600">Follow these simple steps to save money on your orders</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Copy Coupon Code</h3>
                  <p className="text-gray-600">Click on any coupon above to copy the code to your clipboard</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Contact Us</h3>
                  <p className="text-gray-600">Message us on WhatsApp with your order and mention the coupon code</p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Get Discount</h3>
                  <p className="text-gray-600">Enjoy instant savings on your subscription purchase</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="mt-20">
          <Card className="bg-gradient-to-r from-gray-900 to-black text-white border-0 overflow-hidden relative">
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
            </div>
            <CardContent className="p-12 text-center relative z-10">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Saving?</h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Browse our premium subscriptions and use these exclusive coupons to get the best deals in the market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-8 py-4 text-lg"
                  asChild
                >
                  <a href="/subscriptions">Browse Products</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
                  asChild
                >
                  <a
                    href={`https://wa.me/${businessInfo.whatsapp}?text=Hi%20${businessInfo.name}%2C%20I%20want%20to%20use%20a%20coupon%20for%20my%20order`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact Us
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Star, Users, Shield, Zap, ArrowRight } from "lucide-react"
import { businessInfo } from "@/lib/data"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const floatingCards = [
    {
      name: "Netflix 4k",
      price: "₹125",
      originalPrice: "₹799",
      color: "bg-red-800",
      icon: "N",
      delay: "0ms",
    },
    {
      name: "Spotify",
      price: "₹199",
      originalPrice: "₹399",
      color: "bg-green-600",
      icon: "S",
      delay: "200ms",
    },
    {
      name: "Adobe Creative",
      price: "₹1999",
      originalPrice: "₹29000",
      color: "bg-purple-700",
      icon: "Ai",
      delay: "400ms",
    },
    {
      name: "LinkedIn Premium",
      price: "₹799",
      originalPrice: "₹2399",
      color: "bg-blue-600",
      icon: "in",
      delay: "600ms",
    },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div
              className={`space-y-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 border border-cyan-500/30 px-6 py-2 text-sm animate-pulse">
                🎉 Premium Subscriptions at Best Prices
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                Get Premium{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  OTT Subscriptions
                </span>{" "}
                Instantly
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Access Netflix, Spotify, Adobe Creative Suite, LinkedIn Premium and 50+ premium applications at
                unbeatable prices. Instant delivery via WhatsApp with 24/7 support.
              </p>
            </div>

            <div
              className={`grid grid-cols-1 sm:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">4.9/5</p>
                  <p className="text-sm text-gray-400">1000+ Reviews</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">10,000+</p>
                  <p className="text-sm text-gray-400">Happy Customers</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 group">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">100%</p>
                  <p className="text-sm text-gray-400">Secure</p>
                </div>
              </div>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg group relative overflow-hidden"
                asChild
              >
                <a
                  href={`https://wa.me/${businessInfo.whatsapp}?text=Hi%20${businessInfo.name}%2C%20I%20want%20to%20explore%20your%20premium%20subscriptions`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10 flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Start Shopping
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-600 text-black hover:border-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400 px-8 py-6 text-lg group"
                asChild
              >
                <a href="/subscriptions">
                  <Play className="w-5 h-5 mr-2" />
                  View All Products
                </a>
              </Button>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {floatingCards.map((card, index) => (
                <div
                  key={card.name}
                  className={`bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-cyan-400/50 transition-all duration-500 group ${
                    index % 2 === 0 ? "animate-float" : "animate-float-delayed"
                  }`}
                  style={{ animationDelay: card.delay }}
                >
                  <div
                    className={`w-12 h-12 ${card.color} rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <span className="text-white font-bold text-lg">{card.icon}</span>
                  </div>
                  <h3 className="font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {card.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{card.price}</span>
                    <span className="text-sm text-gray-400 line-through">{card.originalPrice}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

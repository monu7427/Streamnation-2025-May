"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Star, Shield, Clock, Award, Target, Heart, Zap, CheckCircle, ArrowRight, Play } from "lucide-react"
import { businessInfo } from "@/lib/data"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const stats = [
    { icon: Users, value: "10,000+", label: "Happy Customers", color: "text-blue-500" },
    { icon: Star, value: "4.9/5", label: "Customer Rating", color: "text-yellow-500" },
    { icon: Shield, value: "100%", label: "Genuine Products", color: "text-green-500" },
    { icon: Clock, value: "5 Min", label: "Delivery Time", color: "text-purple-500" },
  ]

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To make premium digital subscriptions accessible to everyone at affordable prices with instant delivery and exceptional customer service.",
      color: "bg-blue-500",
    },
    {
      icon: Heart,
      title: "Our Vision",
      description:
        "To become India's most trusted platform for premium OTT subscriptions and digital services, empowering millions of users.",
      color: "bg-red-500",
    },
    {
      icon: Award,
      title: "Our Values",
      description:
        "Transparency, reliability, customer satisfaction, and innovation drive everything we do. We believe in building long-term relationships.",
      color: "bg-green-500",
    },
  ]

  const features = [
    "Instant delivery within 5-10 minutes",
    "100% genuine subscriptions",
    "24/7 customer support",
    "Best prices in the market",
    "Secure payment methods",
    "Replacement guarantee",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-200/30 to-yellow-200/30 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-600 border border-cyan-500/30 px-6 py-2 text-sm mb-6">
              About StreamNation
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
              Your Trusted Partner for{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Premium Subscriptions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're passionate about making premium digital services accessible to everyone. Since our inception, we've
              helped thousands of customers access their favorite platforms at unbeatable prices.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center group" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-10 h-10 ${stat.color}`} />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                  Our{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Story
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  StreamNation was founded with a simple vision: to make premium digital subscriptions affordable and
                  accessible to everyone. What started as a small initiative has grown into India's trusted platform for
                  OTT subscriptions.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Led by Manoj Sharma, our team is dedicated to providing genuine subscriptions at the best prices with
                  instant delivery. We believe that everyone deserves access to premium entertainment and productivity
                  tools without breaking the bank.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 group"
                asChild
              >
                <a
                  href={`https://wa.me/${businessInfo.whatsapp}?text=Hi%20${businessInfo.name}%2C%20I%20want%20to%20know%20more%20about%20your%20services`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6 text-center">
                      <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">Instant Delivery</h3>
                      <p className="text-gray-300 text-sm">Get your subscriptions within minutes</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6 text-center">
                      <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">100% Genuine</h3>
                      <p className="text-gray-300 text-sm">Verified and authentic subscriptions</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-6 mt-12">
                  <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6 text-center">
                      <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">24/7 Support</h3>
                      <p className="text-gray-300 text-sm">Always here to help you</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6 text-center">
                      <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                      <h3 className="font-bold text-white mb-2">Best Prices</h3>
                      <p className="text-gray-300 text-sm">Unbeatable market rates</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our commitment to our customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-cyan-600 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers and start enjoying premium subscriptions at the best prices in the
            market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg group" asChild>
              <a href="/subscriptions">
                <Play className="w-5 h-5 mr-2" />
                Browse Products
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 text-lg"
              asChild
            >
              <a
                href={`https://wa.me/${businessInfo.whatsapp}?text=Hi%20${businessInfo.name}%2C%20I%20want%20to%20know%20more%20about%20your%20services`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Gift, Star, Zap } from "lucide-react"
import { businessInfo } from "@/lib/data"

export function SpecialOfferPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem("specialOfferShown")

    if (!popupShown && !hasShown) {
      const timer = setTimeout(() => {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem("specialOfferShown", "true")
      }, 2000) // 2 second delay

      return () => clearTimeout(timer)
    }
  }, [hasShown])

  const closePopup = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="relative bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-20 hover:scale-110"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-2 -right-2 w-16 h-16 bg-yellow-400/20 rounded-full animate-pulse" />
          <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-pink-400/20 rounded-full animate-bounce" />

          {/* Floating Icons */}
          <div className="absolute top-4 left-4 text-lg animate-float">🎉</div>
          <div className="absolute bottom-8 right-8 text-lg animate-float delay-500">✨</div>
          <div className="absolute top-8 right-8 text-sm animate-float delay-1000">🎁</div>
        </div>

        <div className="relative z-10 p-6 text-white text-center">
          {/* Header */}
          <div className="mb-4">
            <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3 animate-bounce">
              <Gift className="w-6 h-6 text-purple-900" />
            </div>
            <h2 className="text-2xl font-bold mb-2">🎉 Welcome Offer!</h2>
            <div className="flex items-center justify-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-sm opacity-90">Limited Time Special Deal</p>
          </div>

          {/* Offer Details */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4 border border-white/20">
            <h3 className="text-xl font-bold mb-2">Get 20% OFF</h3>
            <p className="text-sm mb-3">On your first order + Free setup assistance</p>

            <div className="space-y-1 text-xs opacity-90">
              <div className="flex items-center justify-center space-x-2">
                <Zap className="w-3 h-3" />
                <span>Instant delivery within 5 minutes</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Gift className="w-3 h-3" />
                <span>100% genuine subscriptions</span>
              </div>
            </div>
          </div>

          {/* Coupon Code */}
          <div className="bg-white/20 rounded-lg p-3 mb-4 border-2 border-dashed border-white/40">
            <p className="text-xs opacity-80 mb-1">Use Coupon Code</p>
            <div className="text-lg font-bold tracking-wider">WELCOME20</div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-2">
            <Button className="w-full bg-yellow-400 text-purple-900 hover:bg-yellow-300 font-bold py-2 text-sm" asChild>
              <a
                href={`https://wa.me/${businessInfo.whatsapp}?text=Hi%20${businessInfo.name}%2C%20I%20want%20to%20use%20the%20WELCOME20%20offer%20for%20my%20first%20order`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Claim Offer Now
              </a>
            </Button>

            <Button
              variant="outline"
              className="w-full border border-white text-white hover:bg-white hover:text-purple-900 py-2 text-sm"
              onClick={closePopup}
            >
              Browse Products First
            </Button>
          </div>

          {/* Timer */}
          <p className="text-xs opacity-70 mt-3">⏰ Offer valid for new customers only</p>
        </div>
      </div>
    </div>
  )
}

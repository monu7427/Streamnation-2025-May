"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Percent } from "lucide-react"

export function SideBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-64 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl overflow-hidden">
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="p-6 text-white">
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
            <Percent className="w-5 h-5 text-blue-900" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Special Offer</h3>
            <p className="text-xs opacity-80">Limited Time</p>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-2xl font-bold mb-2">Premium Bundles</h4>
          <p className="text-sm opacity-90">Get 3 subscriptions for the price of 2</p>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span>Netflix + Spotify</span>
            <span className="font-bold">₹499</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Adobe + LinkedIn</span>
            <span className="font-bold">₹1,999</span>
          </div>
        </div>

        <Button className="w-full bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-bold">Grab Deal Now</Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400/20 rounded-full" />
      <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/10 rounded-full" />
    </div>
  )
}

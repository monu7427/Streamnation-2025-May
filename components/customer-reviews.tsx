"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight, ThumbsUp, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const customerReviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Mumbai, Maharashtra",
    service: "Netflix Premium",
    rating: 5,
    review:
      "Excellent service! Got my Netflix Premium subscription in just 5 minutes via WhatsApp. The price was unbeatable - saved ₹500 compared to official pricing. Highly recommend StreamNation!",
    date: "2 days ago",
    verified: true,
    helpful: 24,
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Delhi, India",
    service: "Adobe Creative Cloud",
    rating: 5,
    review:
      "Amazing experience! Ordered Adobe Creative Cloud and received it instantly. All features working perfectly. Customer support is very responsive and helpful. Will definitely order again!",
    date: "1 week ago",
    verified: true,
    helpful: 18,
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Bangalore, Karnataka",
    service: "Spotify Family",
    rating: 5,
    review:
      "Best prices in the market! Got Spotify Family plan for 6 members at just ₹199. Setup was smooth and all accounts are working perfectly. Great service by StreamNation team!",
    date: "3 days ago",
    verified: true,
    helpful: 31,
  },
  {
    id: 4,
    name: "Sneha Gupta",
    location: "Pune, Maharashtra",
    service: "LinkedIn Premium",
    rating: 5,
    review:
      "Professional and reliable service. Got LinkedIn Premium at 90% discount. All premium features are accessible. Quick delivery and excellent customer support. Highly satisfied!",
    date: "5 days ago",
    verified: true,
    helpful: 15,
  },
  {
    id: 5,
    name: "Vikash Singh",
    location: "Hyderabad, Telangana",
    service: "Canva Pro",
    rating: 5,
    review:
      "Fantastic value for money! Ordered Canva Pro and received it within minutes. All premium templates and features are working. StreamNation is definitely trustworthy!",
    date: "1 week ago",
    verified: true,
    helpful: 22,
  },
  {
    id: 6,
    name: "Anita Desai",
    location: "Chennai, Tamil Nadu",
    service: "Amazon Prime",
    rating: 5,
    review:
      "Quick and efficient service! Got Amazon Prime subscription at great price. Delivery was instant via WhatsApp. Customer service is excellent. Will recommend to friends!",
    date: "4 days ago",
    verified: true,
    helpful: 19,
  },
]

export function CustomerReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [likedReviews, setLikedReviews] = useState<number[]>([])

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  }

  const maxIndex = Math.max(0, customerReviews.length - itemsPerView.desktop)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 2))
  }

  const toggleLike = (reviewId: number) => {
    setLikedReviews((prev) => (prev.includes(reviewId) ? prev.filter((id) => id !== reviewId) : [...prev, reviewId]))
  }

  return (
    <section className="py-8 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-r from-blue-200/30 to-cyan-200/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 md:mb-4 lg:mb-6">
            Customer{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Real experiences from our satisfied customers across India
          </p>
        </div>

        <div className="relative">
          {/* Reviews Container */}
          <div className="overflow-x-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView.desktop)}%)`,
              }}
            >
              {customerReviews.map((review) => (
                <div key={review.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-2 md:px-4">
                  <Card className="bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full">
                    <CardContent className="p-4 md:p-6 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm md:text-base">{review.name.charAt(0)}</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-sm md:text-base">{review.name}</h4>
                            <p className="text-xs md:text-sm text-gray-500">{review.location}</p>
                          </div>
                        </div>
                        <Quote className="w-6 h-6 md:w-8 md:h-8 text-blue-500 opacity-50" />
                      </div>

                      {/* Service & Rating */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs md:text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                          {review.service}
                        </span>
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-current" />
                          ))}
                        </div>
                      </div>

                      {/* Review Text */}
                      <div className="flex-1 mb-4">
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">"{review.review}"</p>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                        <div className="flex items-center space-x-2">
                          {review.verified && (
                            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full font-medium flex items-center space-x-1">
                              <Shield className="w-3 h-3" />
                              <span>Verified</span>
                            </span>
                          )}
                          <span className="text-xs text-gray-500">{review.date}</span>
                        </div>
                        <button
                          onClick={() => toggleLike(review.id)}
                          className={`flex items-center space-x-1 text-xs transition-colors ${
                            likedReviews.includes(review.id) ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
                          }`}
                        >
                          <ThumbsUp className={`w-3 h-3 ${likedReviews.includes(review.id) ? "fill-current" : ""}`} />
                          <span>{review.helpful + (likedReviews.includes(review.id) ? 1 : 0)}</span>
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Desktop */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg z-10 hidden md:flex"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg z-10 hidden md:flex"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </Button>

          {/* Dots Indicator - Mobile */}
          <div className="flex justify-center mt-6 md:hidden">
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(customerReviews.length / itemsPerView.mobile) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index ? "bg-blue-500 scale-125" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Dots Indicator - Desktop */}
          <div className="hidden md:flex justify-center mt-8 space-x-2">
            {[...Array(Math.ceil(customerReviews.length / itemsPerView.desktop))].map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-blue-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

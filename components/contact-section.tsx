import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, Clock, Shield, Headphones, MapPin } from "lucide-react"
import { businessInfo } from "@/lib/data"

export function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? Need support? We're here to help you 24/7 with all your subscription needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 hover:border-cyan-300 transition-colors group">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-cyan-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                  <p className="text-gray-600 text-sm mb-3">Call us directly</p>
                  <a href={`tel:+91${businessInfo.phone}`} className="text-cyan-600 font-medium hover:underline">
                    +91 {businessInfo.phone}
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-cyan-300 transition-colors group">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-cyan-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600 text-sm mb-3">Send us an email</p>
                  <a href={`mailto:${businessInfo.email}`} className="text-cyan-600 font-medium hover:underline">
                    {businessInfo.email}
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-cyan-300 transition-colors md:col-span-2 group">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-8 h-8 text-green-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-900 mb-2">WhatsApp Support</h3>
                  <p className="text-gray-600 text-sm mb-4">Get instant support and place orders via WhatsApp</p>
                  <Button className="bg-green-500 hover:bg-green-600" asChild>
                    <a
                      href={`https://wa.me/${businessInfo.whatsapp}?text=Hi%20${businessInfo.name}%2C%20I%20need%20support`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8">
              <h3 className="font-bold text-gray-900 mb-6 text-xl">Why Choose {businessInfo.name}?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-cyan-500" />
                  <span className="text-gray-700">Instant delivery via WhatsApp within minutes</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Shield className="w-6 h-6 text-cyan-500" />
                  <span className="text-gray-700">100% genuine subscriptions with warranty</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Headphones className="w-6 h-6 text-cyan-500" />
                  <span className="text-gray-700">24/7 customer support and assistance</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-cyan-500" />
                  <span className="text-gray-700">Trusted by 10,000+ customers across India</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of satisfied customers who trust {businessInfo.name} for their premium subscriptions at
                the best prices.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Business Owner</h4>
                <p className="text-gray-300 text-sm">Manoj Sharma</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Service Hours</h4>
                <p className="text-gray-300 text-sm">24/7 Available for Orders & Support</p>
              </div>

              <div className="bg-white/10 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Delivery Time</h4>
                <p className="text-gray-300 text-sm">Instant delivery within 5-10 minutes</p>
              </div>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                asChild
              >
                <a
                  href={`https://wa.me/${businessInfo.whatsapp}?text=Hi%20${businessInfo.name}%2C%20I%20want%20to%20start%20shopping%20for%20premium%20subscriptions`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Shopping Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

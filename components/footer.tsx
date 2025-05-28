import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MessageCircle, Instagram, MapPin } from "lucide-react"
import { businessInfo, getAllCategories } from "@/lib/data"

export function Footer() {
  const categories = getAllCategories()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "All Subscriptions", href: "/subscriptions" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
    { name: "Coupons", href: "/coupons" },
  ]

  const policies = [
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
  ]

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/images/streamLogo.png"
                  alt="StreamNation Logo"
                  width={50}
                  height={50}
                  className="w-12 h-12"
                />
                <div>
                  <span className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {businessInfo.name}
                  </span>
                  <p className="text-xs text-gray-400">OTT SERVICES</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {businessInfo.description}. Get instant access to your favorite services with 24/7 support and
                unbeatable prices.
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href={`https://wa.me/${businessInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Categories</h3>
            <ul className="space-y-3">
              {categories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/subscriptions/${category.slug}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <a
                  href={`tel:+91${businessInfo.phone}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  +91 {businessInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  {businessInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <MessageCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <a
                  href={`https://wa.me/${businessInfo.whatsapp}?text=Hi%20${businessInfo.name}%2C%20I%20need%20help`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  WhatsApp Support
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-400 text-sm">{businessInfo.address}</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl border border-gray-700">
              <p className="text-gray-400 text-xs mb-2">Business Owner</p>
              <p className="text-white font-semibold">Manoj Sharma</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© 2024 {businessInfo.name}. All rights reserved.</div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              {policies.map((policy) => (
                <Link
                  key={policy.name}
                  href={policy.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {policy.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

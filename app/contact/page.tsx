"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Clock,
  Users,
  Award,
  Phone,
  Mail,
  MessageCircle,
  Send,
  CheckCircle,
  Headphones,
  Shield,
  Zap,
} from "lucide-react"
import { businessInfo } from "@/lib/data"

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically submit to your backend
    console.log(formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Happy Customers",
      color: "text-blue-600",
    },
    {
      icon: Award,
      value: "4.9/5",
      label: "Customer Rating",
      color: "text-yellow-600",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Support Available",
      color: "text-green-600",
    },
    {
      icon: MapPin,
      value: "India",
      label: "Based & Operated",
      color: "text-purple-600",
    },
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us directly for immediate assistance",
      contact: `+91 ${businessInfo.phone}`,
      action: `tel:+91${businessInfo.phone}`,
      color: "bg-blue-500",
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed queries via email",
      contact: businessInfo.email,
      action: `mailto:${businessInfo.email}`,
      color: "bg-purple-500",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description: "Get instant support and place orders",
      contact: `+91 ${businessInfo.whatsapp}`,
      action: `https://wa.me/${businessInfo.whatsapp}?text=Hi%20${businessInfo.name}%2C%20I%20need%20support`,
      color: "bg-green-500",
    },
  ]

  const features = [
    {
      icon: Zap,
      title: "Instant Delivery",
      description: "Get your subscriptions within 5-10 minutes",
    },
    {
      icon: Shield,
      title: "100% Genuine",
      description: "Verified and authentic subscriptions only",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance",
    },
  ]

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
              Contact StreamNation
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8">
              Get in{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to help you with all your premium subscription needs. Reach out to us anytime for support,
              inquiries, or to place your order.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Stats */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <Card
                  key={index}
                  className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Contact Methods */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Multiple Ways to{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Reach Us</span>
            </h2>
            <p className="text-xl text-gray-600">Choose your preferred method of communication</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <p className="font-semibold text-gray-900 mb-6">{method.contact}</p>
                    <Button
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                      asChild
                    >
                      <a href={method.action} target="_blank" rel="noopener noreferrer">
                        Contact Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Contact Form and Business Info */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                          required
                          className="border-2 border-gray-200 focus:border-cyan-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter your last name"
                          required
                          className="border-2 border-gray-200 focus:border-cyan-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        className="border-2 border-gray-200 focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                        className="border-2 border-gray-200 focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        className="border-2 border-gray-200 focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help you..."
                        rows={4}
                        required
                        className="border-2 border-gray-200 focus:border-cyan-500"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 py-3 text-lg group"
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </Button>
                    <p className="text-sm text-gray-500 text-center">
                      Or contact us directly via WhatsApp for faster response
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Business Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Business Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Owner</h4>
                    <p className="text-gray-600">Manoj Sharma</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Name</h4>
                    <p className="text-gray-600">{businessInfo.name} OTT Services</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Specialization</h4>
                    <p className="text-gray-600">Premium OTT Subscriptions & Paid Applications</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Service Area</h4>
                    <p className="text-gray-600">Pan India</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">24/7 Available for Orders & Support</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon
                    return (
                      <div key={index} className="flex items-start space-x-4 group">
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                          <p className="text-gray-600 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white border-0">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Quick Order via WhatsApp</h3>
                  <p className="mb-4 opacity-90">Get instant quotes and place orders directly</p>
                  <Button className="bg-white text-green-600 hover:bg-gray-100 w-full" asChild>
                    <a
                      href={`https://wa.me/${businessInfo.whatsapp}?text=Hi%20${businessInfo.name}%2C%20I%20want%20to%20place%20an%20order`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Start WhatsApp Chat
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

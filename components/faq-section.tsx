"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Simply click on any product and select 'Order via WhatsApp'. You'll be redirected to WhatsApp with a pre-filled message. Send it to us and we'll process your order immediately.",
  },
  {
    question: "How quickly will I receive my subscription?",
    answer:
      "All subscriptions are delivered instantly within 5-10 minutes via WhatsApp. You'll receive login credentials and setup instructions immediately after payment confirmation.",
  },
  {
    question: "Are these subscriptions genuine?",
    answer:
      "Yes, absolutely! We provide 100% genuine subscriptions with full features. All accounts are verified and come with warranty support.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, bank transfers, and digital wallets. Payment details will be shared via WhatsApp after you place your order.",
  },
  {
    question: "Do you provide customer support?",
    answer:
      "Yes, we provide 24/7 customer support via WhatsApp. Our team is always ready to help you with any issues or questions.",
  },
  {
    question: "What if my subscription doesn't work?",
    answer:
      "We offer full replacement guarantee. If any subscription doesn't work as expected, we'll provide a replacement or full refund within 24 hours.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Yes, we offer refunds within 24 hours if the subscription doesn't work. Please check our refund policy for detailed terms and conditions.",
  },
  {
    question: "Do you offer bulk discounts?",
    answer:
      "Yes, we offer special discounts for bulk orders. Contact us via WhatsApp with your requirements and we'll provide a custom quote.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className=" p-8 md:py-20 bg-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-50 animate-pulse delay-1000"></div>
      </div>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers! Find everything you need to know about our services.
          </p>
        </div>

        <div className="space-y-2 md:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors duration-300">
                  {faq.question}
                </h3>
                <div className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-cyan-500 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-cyan-500 transition-all duration-300" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <a
            href={`https://wa.me/9079179449?text=Hi%20StreamNation%2C%20I%20have%20some%20questions%20about%20your%20services`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Contact us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

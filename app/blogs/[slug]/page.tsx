"use client"

import { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Heart,
  Eye,
  Facebook,
  Twitter,
  MessageCircle,
  Mail,
  Copy,
} from "lucide-react"
import { blogs } from "@/lib/data"

interface BlogPageProps {
  params: {
    slug: string
  }
}

const allBlogs = [
  ...blogs,
  {
    id: "3",
    title: "How to Save Money on Digital Subscriptions",
    slug: "save-money-digital-subscriptions",
    excerpt: "Smart tips and tricks to get the best deals on your favorite streaming services and apps.",
    content: `
# How to Save Money on Digital Subscriptions

In today's digital age, we're subscribed to more services than ever before. From streaming platforms like Netflix and Spotify to productivity tools like Adobe Creative Cloud and LinkedIn Premium, these subscriptions can quickly add up and strain your budget.

## The Hidden Cost of Subscriptions

Most people underestimate how much they spend on digital subscriptions. The average person spends over ₹3,000 per month on various digital services. That's ₹36,000 per year! But with the right strategies, you can cut this cost significantly while still enjoying all your favorite services.

## Smart Strategies to Save Money

### 1. Audit Your Current Subscriptions
Start by listing all your current subscriptions and their costs. You might be surprised by services you've forgotten about or rarely use.

### 2. Look for Bundle Deals
Many companies offer bundle packages that can save you money. For example, getting a family plan for Spotify or Netflix can be much more cost-effective than individual subscriptions.

### 3. Use Trusted Resellers
Platforms like StreamNation offer genuine subscriptions at significantly discounted prices. You can save up to 80% on premium subscriptions while getting the same features and quality.

### 4. Time Your Purchases
Many services offer promotional pricing during certain times of the year. Black Friday, New Year, and back-to-school seasons often have the best deals.

### 5. Share Family Plans
If a service offers family sharing, consider splitting the cost with friends or family members. This can reduce your individual cost significantly.

## Why Choose StreamNation?

At StreamNation, we specialize in providing genuine premium subscriptions at unbeatable prices. Here's why thousands of customers trust us:

- **Instant Delivery**: Get your subscriptions within 5-10 minutes
- **100% Genuine**: All subscriptions are verified and authentic
- **24/7 Support**: Round-the-clock customer assistance
- **Best Prices**: Save up to 80% compared to official pricing

## Conclusion

Saving money on digital subscriptions doesn't mean compromising on quality or features. With smart shopping and trusted platforms like StreamNation, you can enjoy all your favorite services while keeping your budget in check.

Ready to start saving? Contact us on WhatsApp to explore our amazing deals!
    `,
    image: "/placeholder.svg?height=400&width=800",
    published: true,
    createdAt: new Date("2024-01-12"),
  },
  {
    id: "4",
    title: "Netflix vs Amazon Prime: Which is Better?",
    slug: "netflix-vs-amazon-prime-comparison",
    excerpt: "A detailed comparison of features, content, and pricing between Netflix and Amazon Prime Video.",
    content: `
# Netflix vs Amazon Prime: The Ultimate Comparison

Choosing between Netflix and Amazon Prime Video can be challenging. Both platforms offer excellent content, but they cater to different preferences and needs. Let's break down the key differences to help you make an informed decision.

## Content Library

### Netflix
- **Original Content**: Netflix leads in original series and movies with hits like Stranger Things, The Crown, and Squid Game
- **International Content**: Excellent selection of content from around the world
- **Variety**: Strong in drama, comedy, documentaries, and anime

### Amazon Prime Video
- **Original Content**: Quality originals like The Boys, The Marvelous Mrs. Maisel, and The Lord of the Rings series
- **Movie Selection**: Better selection of recent Hollywood movies
- **Additional Benefits**: Comes with Amazon Prime membership benefits

## Pricing Comparison

### Netflix Plans
- Basic: ₹199/month (480p, 1 screen)
- Standard: ₹499/month (1080p, 2 screens)
- Premium: ₹649/month (4K, 4 screens)

### Amazon Prime Video
- Monthly: ₹179/month
- Annual: ₹1,499/year (₹125/month)
- Includes Prime delivery and other benefits

## User Experience

### Netflix
- **Interface**: Clean, intuitive design
- **Recommendations**: Excellent algorithm for content discovery
- **Offline Viewing**: Available on all plans
- **Multiple Profiles**: Up to 5 profiles per account

### Amazon Prime Video
- **Interface**: Can be cluttered with rental options
- **Recommendations**: Good but not as refined as Netflix
- **Offline Viewing**: Available for most content
- **Multiple Profiles**: Up to 6 profiles per account

## Which Should You Choose?

Choose **Netflix** if:
- You love binge-watching series
- You enjoy international content
- You want the best user experience
- You don't need additional Prime benefits

Choose **Amazon Prime Video** if:
- You want the best value for money
- You already use Amazon for shopping
- You prefer recent Hollywood movies
- You want additional Prime benefits

## Get Both at Discounted Prices

Why choose when you can have both? At StreamNation, we offer both Netflix and Amazon Prime subscriptions at heavily discounted prices:

- **Netflix Premium**: Starting at ₹299/month (Save ₹350)
- **Amazon Prime**: Starting at ₹249/month (Save ₹250)

## Conclusion

Both platforms have their strengths. Netflix excels in original content and user experience, while Amazon Prime Video offers better value with additional benefits. The best choice depends on your viewing preferences and budget.

Ready to get started? Contact StreamNation for the best deals on both platforms!
    `,
    image: "/placeholder.svg?height=400&width=800",
    published: true,
    createdAt: new Date("2024-01-08"),
  },
]

export default function BlogPage({ params }: BlogPageProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)
  const [readingTime, setReadingTime] = useState(5)

  const blog = allBlogs.find((b) => b.slug === params.slug)

  useEffect(() => {
    if (blog) {
      // Calculate reading time (average 200 words per minute)
      const wordCount = blog.content.split(" ").length
      const time = Math.ceil(wordCount / 200)
      setReadingTime(time)
    }
  }, [blog])

  if (!blog) {
    notFound()
  }

  const shareArticle = async (platform: string) => {
    const url = window.location.href
    const title = blog.title
    const text = blog.excerpt

    switch (platform) {
      case "copy":
        try {
          await navigator.clipboard.writeText(url)
          setCopiedLink(true)
          setTimeout(() => setCopiedLink(false), 2000)
        } catch (err) {
          console.error("Failed to copy link")
        }
        break
      case "whatsapp":
        window.open(`https://wa.me/?text=${encodeURIComponent(`${title}\n${url}`)}`, "_blank")
        break
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
        break
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
          "_blank",
        )
        break
      case "email":
        window.open(
          `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${text}\n\n${url}`)}`,
          "_blank",
        )
        break
    }
    setShowShareMenu(false)
  }

  const relatedBlogs = allBlogs.filter((b) => b.id !== blog.id).slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Button variant="outline" className="mb-8 group" asChild>
            <Link href="/blogs">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Blog
            </Link>
          </Button>

          {/* Article Header */}
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-600 border border-cyan-500/30 px-4 py-2 text-sm mb-6">
              StreamNation Blog
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">{blog.title}</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{blog.excerpt}</p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {blog.createdAt.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{readingTime} min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>2.5k views</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setIsLiked(!isLiked)}
                className={`border-2 transition-all duration-300 ${
                  isLiked
                    ? "border-red-500 bg-red-50 text-red-600"
                    : "border-gray-200 hover:border-red-500 hover:bg-red-50"
                }`}
              >
                <Heart className={`w-4 h-4 mr-2 ${isLiked ? "fill-current" : ""}`} />
                {isLiked ? "Liked" : "Like"}
              </Button>

              <div className="relative">
                <Button
                  variant="outline"
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  className="border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>

                {/* Share Menu */}
                {showShareMenu && (
                  <div className="absolute top-12 left-0 bg-white rounded-xl shadow-xl border border-gray-200 p-4 min-w-[200px] z-10">
                    <h4 className="font-semibold text-gray-900 mb-3">Share this article</h4>
                    <div className="space-y-2">
                      <button
                        onClick={() => shareArticle("copy")}
                        className="w-full flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <Copy className="w-4 h-4 text-gray-600" />
                        <span className="text-sm">{copiedLink ? "Copied!" : "Copy Link"}</span>
                      </button>
                      <button
                        onClick={() => shareArticle("whatsapp")}
                        className="w-full flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <MessageCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm">WhatsApp</span>
                      </button>
                      <button
                        onClick={() => shareArticle("facebook")}
                        className="w-full flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <Facebook className="w-4 h-4 text-blue-600" />
                        <span className="text-sm">Facebook</span>
                      </button>
                      <button
                        onClick={() => shareArticle("twitter")}
                        className="w-full flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <Twitter className="w-4 h-4 text-blue-400" />
                        <span className="text-sm">Twitter</span>
                      </button>
                      <button
                        onClick={() => shareArticle("email")}
                        className="w-full flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <Mail className="w-4 h-4 text-gray-600" />
                        <span className="text-sm">Email</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Featured Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
        </div>

        {/* Article Body */}
        <Card className="border-0 shadow-xl mb-16">
          <CardContent className="p-8 lg:p-12">
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-cyan-600 prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{
                __html: blog.content
                  .replace(/\n/g, "<br>")
                  .replace(/#{1,6}\s/g, (match) => {
                    const level = match.trim().length
                    return `<h${level} class="text-${4 - level}xl font-bold text-gray-900 mb-4 mt-8">`
                  })
                  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
              }}
            />
          </CardContent>
        </Card>

        {/* Related Articles */}
        <section>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
            Related{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Articles</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedBlogs.map((relatedBlog, index) => (
              <Card
                key={relatedBlog.id}
                className="overflow-hidden shadow-xl border-0 hover:shadow-2xl transition-all duration-500 group hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={relatedBlog.image || "/placeholder.svg"}
                    alt={relatedBlog.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300 line-clamp-2">
                    {relatedBlog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{relatedBlog.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3" />
                      <span>{relatedBlog.createdAt.toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-3 h-3" />
                      <span>3 min read</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group border-2 border-gray-200 hover:border-cyan-500 hover:bg-cyan-50"
                    asChild
                  >
                    <Link href={`/blogs/${relatedBlog.slug}`}>
                      Read More
                      <ArrowLeft className="w-3 h-3 ml-2 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <Card className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0 overflow-hidden relative mt-16">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          </div>
          <CardContent className="p-12 text-center relative z-10">
            <h3 className="text-3xl font-bold mb-4">Stay Updated with StreamNation</h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Get the latest articles, exclusive deals, and insider tips delivered to your WhatsApp.
            </p>
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 text-lg" asChild>
              <a
                href="https://wa.me/9079179449?text=Hi%20StreamNation%2C%20I%20want%20to%20subscribe%20to%20your%20updates"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Subscribe via WhatsApp
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

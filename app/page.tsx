import { Hero } from "@/components/hero"
import { CategoryNavigation } from "@/components/category-navigation"
import { SearchSection } from "@/components/search-section"
import { PromotionalBanner } from "@/components/promotional-banner"
import { ProductShowcase } from "@/components/product-showcase"
import { FeaturedProducts } from "@/components/featured-products"
import { CustomerReviews } from "@/components/customer-reviews"
import { ContactSection } from "@/components/contact-section"
import { StatsSection } from "@/components/stats-section"
import { FAQSection } from "@/components/faq-section"
import { SpecialOfferPopup } from "@/components/special-offer-popup"

export default function HomePage() {
  return (
    <>
      <Hero />
      <PromotionalBanner />
      <SearchSection />
      <CategoryNavigation />
      
      <ProductShowcase title="Best of Entertainment" category="entertainment" />
      <ProductShowcase title="Creative & Design Tools" category="creative" bgColor="bg-gray-50" />
      <ProductShowcase title="Professional LinkedIn" category="linkedin" />
      <ProductShowcase title="Music & Audio" category="music" bgColor="bg-gray-50" />
      <StatsSection />
      <FeaturedProducts />
      <CustomerReviews />
      <FAQSection />
      <ContactSection />
      <SpecialOfferPopup />
    </>
  )
}

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero"
import { StorySection } from "@/components/sections/story"
import { InstagramSection } from "@/components/sections/instagram-feed"
import { ProductShowcase } from "@/components/sections/product-showcase"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { FaqPreview } from "@/components/sections/faq-preview"
import { NewsletterSection } from "@/components/sections/newsletter"
import { CtaBanner } from "@/components/sections/cta-banner"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StorySection />
        <InstagramSection />
        <ProductShowcase />
        <TestimonialsSection />
        <FaqPreview />
        <NewsletterSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}

import type { Metadata } from "next"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Thread Meditation terms of service for using our website and purchasing handmade crochet products.",
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h1 className="font-serif text-4xl font-bold">
                Terms of Service
              </h1>
              <p className="text-muted-foreground mt-4">
                Last updated: April 2026
              </p>

              <div className="text-muted-foreground mt-12 space-y-8 text-base leading-relaxed">
                <div>
                  <h2 className="text-foreground font-serif text-2xl font-semibold">
                    Welcome
                  </h2>
                  <p className="mt-4">
                    By accessing and using threadmeditation.com, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website.
                  </p>
                </div>

                <div>
                  <h2 className="text-foreground font-serif text-2xl font-semibold">
                    Products &amp; Orders
                  </h2>
                  <p className="mt-4">
                    All products sold by Thread Meditation are handmade. Slight variations in colour, size, and appearance are natural and part of what makes each piece unique. Product images on our website are representative and actual items may vary slightly.
                  </p>
                </div>

                <div>
                  <h2 className="text-foreground font-serif text-2xl font-semibold">
                    Custom Orders
                  </h2>
                  <p className="mt-4">
                    Custom orders are non-refundable once production has begun. We will confirm all details including colours, size, and design before starting work on your custom piece.
                  </p>
                </div>

                <div>
                  <h2 className="text-foreground font-serif text-2xl font-semibold">
                    Intellectual Property
                  </h2>
                  <p className="mt-4">
                    All content on this website, including text, images, designs, and the Thread Meditation brand, is the property of Thread Meditation and is protected by copyright law. You may not reproduce, distribute, or use any content without written permission.
                  </p>
                </div>

                <div>
                  <h2 className="text-foreground font-serif text-2xl font-semibold">
                    Returns &amp; Exchanges
                  </h2>
                  <p className="mt-4">
                    Due to the handmade nature of our products, we do not accept returns. If your item arrives damaged, please contact us within 48 hours of delivery with photographs and we will work to resolve the issue.
                  </p>
                </div>

                <div>
                  <h2 className="text-foreground font-serif text-2xl font-semibold">
                    Limitation of Liability
                  </h2>
                  <p className="mt-4">
                    Thread Meditation is not liable for any indirect, incidental, or consequential damages arising from the use of our website or products. Our maximum liability is limited to the purchase price of the product in question.
                  </p>
                </div>

                <div>
                  <h2 className="text-foreground font-serif text-2xl font-semibold">
                    Contact
                  </h2>
                  <p className="mt-4">
                    Questions about these terms? Contact us at hello@threadmeditation.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

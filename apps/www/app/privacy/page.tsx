import type { Metadata } from "next"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Thread Meditation privacy policy \u2014 how we collect, use, and protect your personal information.",
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <h1 className="font-serif text-4xl font-bold">Privacy Policy</h1>
              <p className="text-muted-foreground mt-4">
                Last updated: April 2026
              </p>

              <div className="text-muted-foreground mt-12 space-y-8 text-base leading-relaxed">
                <div>
                  <h2 className="text-foreground font-serif text-2xl font-semibold">
                    Information We Collect
                  </h2>
                  <p className="mt-4">
                    When you visit threadmeditation.com, we may collect information you provide directly, such as your name and email address when you subscribe to our newsletter or submit a contact form.
                  </p>
                </div>

                <div>
                  <h2 className="text-foreground font-serif text-2xl font-semibold">
                    How We Use Your Information
                  </h2>
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>To respond to your inquiries and contact form submissions</li>
                    <li>To send newsletter updates you have opted into</li>
                    <li>To improve our website and services</li>
                    <li>To process orders when our shop launches</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-foreground font-serif text-2xl font-semibold">
                    Data Protection
                  </h2>
                  <p className="mt-4">
                    We take the security of your personal data seriously. Our website uses HTTPS encryption, and we do not sell, trade, or share your personal information with third parties except as necessary to provide our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-foreground font-serif text-2xl font-semibold">
                    Cookies
                  </h2>
                  <p className="mt-4">
                    We use essential cookies to ensure our website functions properly. We may also use analytics cookies to understand how visitors use our site. You can disable cookies in your browser settings.
                  </p>
                </div>

                <div>
                  <h2 className="text-foreground font-serif text-2xl font-semibold">
                    Your Rights
                  </h2>
                  <p className="mt-4">
                    You have the right to access, correct, or delete your personal data at any time. To exercise these rights, contact us at hello@threadmeditation.com.
                  </p>
                </div>

                <div>
                  <h2 className="text-foreground font-serif text-2xl font-semibold">
                    Contact
                  </h2>
                  <p className="mt-4">
                    If you have questions about this privacy policy, please contact us at hello@threadmeditation.com.
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

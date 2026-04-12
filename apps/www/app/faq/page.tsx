import type { Metadata } from "next"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { FaqJsonLd } from "@/components/seo/json-ld"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQS = [
  {
    question: "What materials do you use?",
    answer:
      "We use premium cotton and acrylic yarns selected for their softness, colour vibrancy, and long-lasting durability. Each piece is crafted with fine steel or aluminium crochet hooks depending on the detail required.",
  },
  {
    question: "How long does it take to make a piece?",
    answer:
      "Depending on complexity, a single piece can take anywhere from 2 hours (a simple keychain) to 15+ hours (a full bouquet with multiple flowers, leaves, and baby's breath). Every stitch is done by hand.",
  },
  {
    question: "Do you take custom orders?",
    answer:
      "Absolutely! We love bringing your ideas to life. DM us on Instagram @threadmeditation with your concept \u2014 we'll discuss colours, size, timeline, and pricing. Custom pieces typically take 1\u20132 weeks depending on complexity.",
  },
  {
    question: "How do I care for my crochet piece?",
    answer:
      "Gently hand wash in cool water with mild soap if needed, reshape, and air dry flat. Most pieces are display items and won't need frequent washing. Keep away from prolonged direct sunlight to preserve colours.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "We're currently setting up our shipping options and will announce availability on Instagram. For now, please reach out via DM or our contact form to discuss shipping to your location.",
  },
  {
    question: "Are your pieces safe for children?",
    answer:
      "Our pieces contain small parts (keychain hardware, beads, etc.) and are decorative items, not toys. They are not recommended for children under 3 years. For older children, they make wonderful room decorations.",
  },
  {
    question: "Can I request specific colours?",
    answer:
      "Yes! Colour customisation is one of our favourite things. Whether you want a bouquet to match wedding colours or a keychain in a specific shade, let us know and we'll do our best to accommodate your vision.",
  },
  {
    question: "Do your pieces come gift-wrapped?",
    answer:
      "We take pride in our packaging. Each piece is carefully packaged to protect it during transit and arrives looking gift-ready. For special occasions, we can add a personalised note \u2014 just ask!",
  },
  {
    question: "What is your return policy?",
    answer:
      "Because each piece is handmade to order, we don't accept returns. However, if your piece arrives damaged, please contact us within 48 hours with photos and we'll work to make it right.",
  },
  {
    question: "How can I stay updated on new releases?",
    answer:
      "Follow us on Instagram @threadmeditation for daily updates, or sign up for our newsletter on the homepage to get early access to new pieces and exclusive offers.",
  },
  {
    question: "Do you offer wholesale pricing?",
    answer:
      "We work with select boutiques and gift shops. If you're interested in carrying Thread Meditation pieces, please reach out through our contact form with the subject 'Wholesale' and we'll send you our wholesale catalogue.",
  },
  {
    question: "What makes Thread Meditation different from other crochet brands?",
    answer:
      "Every piece is genuinely handmade by a single artisan \u2014 not mass-produced or factory-made. We focus on miniature, detailed pieces with vibrant colours. Each creation is a small meditation, made with intention and care you can see and feel.",
  },
]

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Thread Meditation's handmade crochet pieces, custom orders, materials, shipping, and care instructions.",
}

export default function FaqPage() {
  return (
    <>
      <FaqJsonLd faqs={FAQS} />
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-secondary/30 py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-primary mb-4 text-sm font-medium uppercase tracking-widest">
                FAQ
              </p>
              <h1 className="font-serif text-4xl font-bold md:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="text-muted-foreground mt-4 text-lg">
                Everything you need to know about our handmade crochet pieces.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-base font-medium md:text-lg">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

"use client"

import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/magic/reveal"
import { Magnetic } from "@/components/magic/magnetic"

const FAQS = [
  { question: "What materials do you use?", answer: "We use premium cotton and acrylic yarns sourced for their softness, colour vibrancy, and durability. Each piece is crafted with a fine steel or aluminium crochet hook depending on the detail required." },
  { question: "How long does it take to make a piece?", answer: "Depending on the complexity, a single piece can take anywhere from 2 hours (a simple keychain) to 15+ hours (a full bouquet). Each stitch is done by hand \u2014 no machines, no shortcuts." },
  { question: "Do you take custom orders?", answer: "Yes! We love bringing your ideas to life. DM us on Instagram @threadmeditation with your concept and we\u2019ll discuss colours, size, and timeline. Custom pieces typically take 1\u20132 weeks." },
  { question: "How do I care for my crochet piece?", answer: "Gently hand wash in cool water with mild soap if needed, then reshape and air dry flat. Most pieces are display items and won\u2019t need frequent washing. Keep away from direct sunlight to preserve colours." },
  { question: "Do you ship internationally?", answer: "We\u2019re setting up shipping options and will announce availability on our Instagram. Currently, reach out via DM or our contact form to discuss shipping to your location." },
]

export function FaqPreview() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-2">
            <Reveal direction="left">
              <p className="text-primary mb-4 text-sm font-medium uppercase tracking-widest">FAQ</p>
              <h2 className="font-serif text-3xl leading-snug font-bold md:text-4xl">
                Questions We Love to Answer
              </h2>
              <p className="text-muted-foreground mt-4">Can&apos;t find what you&apos;re looking for?</p>
              <div className="mt-6 flex gap-4">
                <Magnetic strength={0.2}>
                  <Button asChild variant="outline" className="rounded-full">
                    <Link href="/faq">View All FAQ</Link>
                  </Button>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <Button asChild variant="ghost" className="rounded-full">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-3">
            <Reveal direction="right" delay={0.2}>
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-base font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

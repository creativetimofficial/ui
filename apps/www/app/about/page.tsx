import type { Metadata } from "next"

import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Thread Meditation \u2014 handmade crochet art born from stillness and the meditative rhythm of yarn and hook.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-secondary/30 py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-primary mb-4 text-sm font-medium uppercase tracking-widest">
                About Us
              </p>
              <h1 className="font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
                The Art of Slowing Down
              </h1>
              <p className="text-muted-foreground mt-6 text-lg leading-relaxed md:text-xl">
                Thread Meditation is more than a brand. It&apos;s a practice, a
                community, and a celebration of handmade beauty.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-6 text-lg leading-relaxed">
                <h2 className="font-serif text-3xl font-bold">How It Began</h2>
                <p className="text-muted-foreground">
                  Thread Meditation started in a quiet corner of a busy life. A
                  single crochet hook, a ball of pink yarn, and the decision to
                  slow down. What began as a personal practice to find calm
                  became something far bigger than expected.
                </p>
                <p className="text-muted-foreground">
                  Each tiny flower, each colorful butterfly, each intricate
                  bouquet is made entirely by hand. There are no machines, no
                  assembly lines, no shortcuts. Just yarn, a hook, and hours of
                  focused, meditative creation.
                </p>

                <h2 className="font-serif text-3xl font-bold pt-8">
                  What We Create
                </h2>
                <p className="text-muted-foreground">
                  Our collection includes miniature crochet flowers, butterfly
                  keychains, decorative bows, sunflower coasters, potted plants,
                  and stunning bouquets that never wilt. Each piece is a tiny
                  work of art meant to bring joy to your day.
                </p>
                <p className="text-muted-foreground">
                  We specialize in vibrant, detailed amigurumi-style pieces that
                  look almost too perfect to be handmade. But look closely and
                  you&apos;ll see the care in every stitch &mdash; that&apos;s
                  what makes them special.
                </p>

                <h2 className="font-serif text-3xl font-bold pt-8">
                  The Community
                </h2>
                <p className="text-muted-foreground">
                  Our Instagram community at @threadmeditation has grown
                  organically &mdash; people drawn to the calm of watching
                  something beautiful come to life, stitch by stitch. We share
                  our process, our inspirations, and the meditative joy of
                  crochet.
                </p>
                <p className="text-muted-foreground">
                  Whether you&apos;re here to find a unique handmade gift, add a
                  touch of handcrafted beauty to your space, or simply admire
                  the art &mdash; welcome. You&apos;re part of the thread now.
                </p>
              </div>

              {/* Values */}
              <div className="grid gap-8 pt-12 sm:grid-cols-3">
                {[
                  {
                    title: "Handmade",
                    desc: "Every piece crafted entirely by hand. No machines, no mass production.",
                  },
                  {
                    title: "Mindful",
                    desc: "Created through meditation. Each stitch is intentional and made with care.",
                  },
                  {
                    title: "Unique",
                    desc: "No two pieces are exactly alike. Each one carries its own character.",
                  },
                ].map((value) => (
                  <div key={value.title} className="text-center">
                    <h3 className="font-serif text-xl font-semibold">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 text-sm">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

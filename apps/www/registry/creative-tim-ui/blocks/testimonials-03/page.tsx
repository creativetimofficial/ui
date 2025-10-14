"use client"

import { ArrowRight } from "lucide-react"

import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card"

export default function TestimonialsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="rounded-xl bg-black text-white">
          <CardContent className="grid w-full grid-cols-1 gap-4 p-4 md:grid-cols-12">
            <div className="col-span-full md:col-span-4">
              <img
                src="https://v3.material-tailwind.com/woman-profile-2.jpg"
                alt="user profile"
                className="h-full max-h-96 w-full rounded-lg object-cover object-center"
              />
            </div>
            <div className="col-span-full p-2 md:col-span-5 md:p-6">
              <blockquote className="mb-6 md:mb-12">
                &quot;Decisions: If you can&apos;t decide, the answer is no. If
                two equally difficult paths, choose the one more painful in the
                short term (pain avoidance is creating an illusion of equality).
                Choose the path that leaves you more equanimous in the long
                term.&quot;
              </blockquote>
              <p className="font-semibold">Michael - Writer</p>
            </div>
            <div className="col-span-full p-2 md:col-span-3 md:p-6">
              <h3 className="mb-2 text-4xl font-bold">1,679,700+</h3>
              <p className="mb-4 md:mb-8">
                Developers and Companies around the world using our products.
              </p>
              <a
                href="#"
                className="flex items-center gap-1.5 font-semibold hover:underline"
              >
                See all products <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

"use client";

import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card";
import { ArrowRight } from "lucide-react";

export default function TestimonialsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="bg-black text-white rounded-xl">
          <CardContent className="p-4 w-full grid grid-cols-1 gap-4 md:grid-cols-12">
            <div className="col-span-full md:col-span-4">
              <img
                src="https://v3.material-tailwind.com/woman-profile-2.jpg"
                alt="user profile"
                className="w-full h-full rounded-lg max-h-96 object-cover object-center"
              />
            </div>
            <div className="col-span-full md:col-span-5 p-2 md:p-6">
              <blockquote className="mb-6 md:mb-12">
                &quot;Decisions: If you can&apos;t decide, the answer is no. If
                two equally difficult paths, choose the one more painful in the
                short term (pain avoidance is creating an illusion of equality).
                Choose the path that leaves you more equanimous in the long
                term.&quot;
              </blockquote>
              <p className="font-semibold">Michael - Writer</p>
            </div>
            <div className="col-span-full md:col-span-3 p-2 md:p-6">
              <h3 className="text-4xl font-bold mb-2">1,679,700+</h3>
              <p className="mb-4 md:mb-8">
                Developers and Companies around the world using our products.
              </p>
              <a
                href="#"
                className="font-semibold flex items-center gap-1.5 hover:underline"
              >
                See all products <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

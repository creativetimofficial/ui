"use client"

import { useState } from "react"
import { ChevronRight, Heart } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/creative-tim-ui/ui/accordion"
import { Badge } from "@/registry/creative-tim-ui/ui/badge"
import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card"

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"]

const SIMILAR_ITEMS = [
  {
    name: "Black Bustier Top",
    price: "€49.95",
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop&q=80",
    sizes: "Available in 5 size",
  },
  {
    name: "Black High-Waist Jeans",
    price: "€49.95",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop&q=80",
    sizes: "Available in 8 taille",
  },
]

export default function SimpleProductDetails01() {
  const [selectedSize, setSelectedSize] = useState("M")
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* Main Product Section */}
        <div className="mb-16 grid grid-cols-1 items-start gap-x-8 gap-y-10 md:grid-cols-2">
          <div className="bg-muted/30 h-full max-h-[32rem] w-full overflow-hidden rounded-xl border">
            <img
              alt="Pink Blouse"
              src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=1000&fit=crop&q=80"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="md:p-2">
            <h3 className="text-3xl font-bold">Pink Blouse</h3>
            <p className="text-primary my-4 text-3xl font-bold">$1,490</p>
            <p className="text-muted-foreground leading-relaxed [text-wrap:_balance]">
              As we live, our hearts turn colder. Cause pain is what we go
              through as we become older. We get insulted by others, lose trust
              for those others. We get back stabbed by friends. It becomes
              harder for us to give others a hand. We get our heart broken by
              people we love, even that we give them all we have. Then we lose
              family over time. What else could rust the heart more over time?
              Blackgold.
            </p>

            <div className="my-6 flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <svg
                    key={star}
                    className="h-5 w-5 fill-yellow-400"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
                <svg className="h-5 w-5 fill-gray-300" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              </div>
              <p className="text-sm font-semibold">100 Reviews</p>
            </div>

            <div className="mb-6">
              <h4 className="mb-3 text-lg font-semibold">Size</h4>
              <div className="flex flex-wrap gap-2">
                {SIZES.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    className="min-w-[3rem]"
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="mb-3 text-lg font-semibold">Color</h4>
              <div className="flex gap-2">
                <div className="h-8 w-8 cursor-pointer rounded-full border-2 border-gray-300 bg-black transition-transform hover:scale-110" />
                <div className="h-8 w-8 cursor-pointer rounded-full border-2 border-gray-300 bg-white transition-transform hover:scale-110" />
                <div className="h-8 w-8 cursor-pointer rounded-full border-2 border-gray-300 bg-gray-200 transition-transform hover:scale-110" />
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <Button className="w-full max-w-sm" size="lg">
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="icon"
                className={`h-11 w-11 ${
                  isFavorite
                    ? "text-red-500 hover:text-red-600"
                    : "text-muted-foreground hover:text-red-500"
                }`}
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart
                  className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`}
                />
              </Button>
            </div>
          </div>
        </div>

        {/* More Info & Similar Items Section */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* More Info Section */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">More Info</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="description">
                <AccordionTrigger className="text-base font-semibold">
                  Description
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-4">
                    Whether you're navigating city streets or embarking on
                    outdoor adventures, this puffer jacket ensures you stay cozy
                    and comfortable wherever you go. The versatile black hue
                    effortlessly complements any outfit, making it a go-to
                    choice for everyday wear.
                  </p>
                  <p>
                    Equipped with practical features, including a front zipper
                    closure and zippered pockets, the MidnightShield Jacket
                    offers convenient storage for your essentials while on the
                    move. Its adjustable cuffs and hem allow for a customizable
                    fit, ensuring maximum comfort and versatility.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="delivery">
                <AccordionTrigger className="text-base font-semibold">
                  Delivery & Returns
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-4">
                    <strong>Free Standard Delivery:</strong> Orders over $100
                    qualify for free standard shipping. Delivery typically takes
                    3-5 business days.
                  </p>
                  <p className="mb-4">
                    <strong>Express Shipping:</strong> Available at checkout for
                    faster delivery (1-2 business days).
                  </p>
                  <p>
                    <strong>Returns:</strong> We offer a 30-day return policy.
                    Items must be in original condition with tags attached. Free
                    returns for defective items.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="contact" className="border-b-0">
                <AccordionTrigger className="text-base font-semibold">
                  <div className="flex w-full items-center justify-between">
                    <span>Contact Us</span>
                    <ChevronRight className="h-4 w-4 shrink-0 transition-transform duration-200" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  <p className="mb-3">
                    Have questions about this product? We're here to help!
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong> support@example.com
                  </p>
                  <p className="mb-2">
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                  <p>
                    <strong>Hours:</strong> Mon-Fri, 9AM-6PM EST
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Similar Items Section */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">Similar Items</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {SIMILAR_ITEMS.map((item, index) => (
                <Card
                  key={index}
                  className="group cursor-pointer overflow-hidden transition-shadow hover:shadow-lg"
                >
                  <CardContent className="p-0">
                    <div className="bg-muted aspect-[4/5] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold tracking-wide uppercase">
                        {item.name}
                      </h4>
                      <p className="mt-2 text-lg font-bold">{item.price}</p>
                      <p className="text-muted-foreground mt-2 text-sm">
                        {item.sizes}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

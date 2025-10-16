import Link from "next/link"

import { Card } from "@/registry/creative-tim-ui/ui/card"

interface ExampleCategory {
  id: string
  title: string
  description: string
  examples: {
    name: string
    blockCount: number
    category: string
  }[]
}

const categories: ExampleCategory[] = [
  {
    id: "web3",
    title: "Web 3.0",
    description: "Developing for blockchain, crypto, or NFT platforms? These blocks are designed with the unique needs of Web3 applications in mind, from wallet integrations and token charts to secure login flows.",
    examples: [
      {
        name: "Web 3.0 Login",
        blockCount: 5,
        category: "web3"
      },
      {
        name: "Web 3.0 Charts",
        blockCount: 5,
        category: "web3"
      },
      {
        name: "Web 3.0 Cards",
        blockCount: 5,
        category: "web3"
      }
    ]
  },
  {
    id: "application-ui",
    title: "Application & Admin UI",
    description: "These blocks are perfect for building SaaS platforms, analytics dashboards, or CRMs. With clean structure and modular design, integrating them into your app is seamless, saving hours of frontend dev time.",
    examples: [
      {
        name: "Widgets",
        blockCount: 7,
        category: "cruds"
      },
      {
        name: "Charts",
        blockCount: 6,
        category: "cruds"
      },
      {
        name: "Tables",
        blockCount: 10,
        category: "cruds"
      },
      {
        name: "Modals",
        blockCount: 5,
        category: "modals"
      }
    ]
  },
  {
    id: "marketing",
    title: "Marketing & Presentation",
    description: "Showcase your brand with stunning testimonials, hero sections, and feature highlights. These blocks help you create impactful landing pages that convert.",
    examples: [
      {
        name: "Testimonials",
        blockCount: 17,
        category: "testimonials"
      },
      {
        name: "Blog Cards",
        blockCount: 6,
        category: "blog-sections"
      },
      {
        name: "Contact Forms",
        blockCount: 15,
        category: "contact"
      }
    ]
  },
  {
    id: "content-ui",
    title: "Content UI",
    description: "Build engaging content experiences with blog layouts, FAQ sections, and article displays. Perfect for content-heavy websites and documentation.",
    examples: [
      {
        name: "Blog Layouts",
        blockCount: 6,
        category: "blog-sections"
      },
      {
        name: "FAQs",
        blockCount: 6,
        category: "faqs"
      },
      {
        name: "Footers",
        blockCount: 15,
        category: "footers"
      }
    ]
  },
  {
    id: "ecommerce",
    title: "Ecommerce UI",
    description: "Complete ecommerce blocks for product pages, shopping carts, checkout flows, and order management. Everything you need to build a modern online store.",
    examples: [
      {
        name: "Product Pages",
        blockCount: 10,
        category: "ecommerce"
      },
      {
        name: "Shopping Cart",
        blockCount: 8,
        category: "ecommerce"
      },
      {
        name: "Checkout",
        blockCount: 5,
        category: "ecommerce"
      }
    ]
  }
]

export function ExamplesPreview() {
  return (
    <section className="container py-12 md:py-20 space-y-16">
      {categories.map((category) => (
        <div key={category.id} className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-2">
              {category.title}
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base max-w-4xl">
              {category.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.examples.map((example) => (
              <Link 
                key={example.name} 
                href={`/blocks/${example.category}`}
                className="group"
              >
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-4xl font-bold text-muted-foreground/30 mb-2">{example.name.charAt(0)}</div>
                      <div className="text-sm text-muted-foreground/50">{example.blockCount} Blocks</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{example.name}</h4>
                      <span className="text-sm text-muted-foreground">
                        {example.blockCount} Blocks
                      </span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

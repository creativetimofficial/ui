import Image from "next/image"
import Link from "next/link"

import { Card } from "@/registry/creative-tim-ui/ui/card"
import { Badge } from "@/registry/creative-tim-ui/ui/badge"

interface ExampleCategory {
  id: string
  title: string
  description: string
  examples: {
    name: string
    blockCount: number
    category: string
    thumbnail?: string
    comingSoon?: boolean
  }[]
}

const categories: ExampleCategory[] = [
  {
    id: "web3",
    title: "Web 3.0",
    description: "Innovative sections built for decentralized applications, blockchain projects, and crypto platforms.",
    examples: [
      {
        name: "Web 3.0 Login",
        blockCount: 5,
        category: "web3",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/login-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Web 3.0 Charts",
        blockCount: 5,
        category: "web3",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/web3-charts-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Web 3.0 Cards",
        blockCount: 5,
        category: "web3",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/collections-thumbnail.jpg"
      }
    ]
  },
  {
    id: "application-ui",
    title: "Application & Admin UI",
    description: "Fully coded interface for stunning dashboards, admin panels, and web apps.",
    examples: [
      {
        name: "Widgets",
        blockCount: 7,
        category: "cruds",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/widgets-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Charts",
        blockCount: 6,
        category: "cruds",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/charts-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Tables",
        blockCount: 10,
        category: "cruds",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/tables-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Modals",
        blockCount: 5,
        category: "modals",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/modals-thumbnail.jpg"
      },
      {
        name: "Account",
        blockCount: 7,
        category: "account",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/account-thumbnail.jpg"
      },
      {
        name: "Billing",
        blockCount: 5,
        category: "billing",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/billing-thumbnail.jpg"
      },
      {
        name: "Tables Headers",
        blockCount: 6,
        category: "cruds",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/table-headers-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Tables Footers",
        blockCount: 6,
        category: "cruds",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/table-footers-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "KPI Cards",
        blockCount: 7,
        category: "cruds",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/kpi-cards-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Sidebars",
        blockCount: 9,
        category: "sidebars",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/sidebar-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Dropdowns",
        blockCount: 6,
        category: "dropdowns",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/dropdown-filter-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "User Profile",
        blockCount: 5,
        category: "user-profile",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/user-profile-thumbnail.jpg",
        comingSoon: true
      }
    ]
  },
  {
    id: "marketing",
    title: "Marketing & Presentation",
    description: "Optimized for showcasing products and services, perfect for landing pages and marketing websites.",
    examples: [
      {
        name: "Hero Sections",
        blockCount: 18,
        category: "hero-sections",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/headers-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Testimonial Sections",
        blockCount: 17,
        category: "testimonials",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/testimonial-thumbnail.jpg"
      },
      {
        name: "Popup Sections",
        blockCount: 7,
        category: "popups",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/popup-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Authentication",
        blockCount: 6,
        category: "authentication",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/authentication-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Onboarding Sections",
        blockCount: 5,
        category: "onboarding",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/onboarding-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Navbars",
        blockCount: 10,
        category: "navbars",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/navbars-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Contact Sections",
        blockCount: 15,
        category: "contact",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/contact-us-thumbnail.jpg"
      },
      {
        name: "Team Sections",
        blockCount: 17,
        category: "team-sections",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/team-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Newsletter",
        blockCount: 17,
        category: "newsletter",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/newsletter-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Footers",
        blockCount: 16,
        category: "footers",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/footer-thumbnail.jpg"
      },
      {
        name: "Coming Soon Sections",
        blockCount: 4,
        category: "coming-soon",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/coming-soon-thumbnail.jpg",
        comingSoon: true
      }
    ]
  },
  {
    id: "content-ui",
    title: "Content UI",
    description: "Versatile UI sections for blogs, articles, and multimedia-rich content.",
    examples: [
      {
        name: "FAQs",
        blockCount: 6,
        category: "faqs",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/faq-thumbnail.jpg"
      },
      {
        name: "Feature Sections",
        blockCount: 18,
        category: "feature-sections",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/features-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Stats Sections",
        blockCount: 10,
        category: "stats-sections",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/stats-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Content Sections",
        blockCount: 16,
        category: "content-sections",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/content-section-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Cards",
        blockCount: 5,
        category: "cards",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/cards-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Error Sections",
        blockCount: 7,
        category: "error-sections",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/Error404-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Maintenance Sections",
        blockCount: 4,
        category: "maintenance-sections",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/Error500-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Blog Sections",
        blockCount: 15,
        category: "blog-sections",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/blog-posts-thumbnail.jpg"
      },
      {
        name: "Logo Sections",
        blockCount: 7,
        category: "logo-sections",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/logo-areas-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Calendar Sections",
        blockCount: 3,
        category: "calendar-sections",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/calendar-thumbnail.jpg",
        comingSoon: true
      }
    ]
  },
  {
    id: "ecommerce",
    title: "Ecommerce UI",
    description: "Ready-to-use blocks for product listings, shopping carts, and checkout flows.",
    examples: [
      {
        name: "Banner Sections",
        blockCount: 7,
        category: "banner-sections",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/banner-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Ecommerce Sections",
        blockCount: 14,
        category: "ecommerce",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/ecommerce-thumbnail.jpg"
      },
      {
        name: "Product List Sections",
        blockCount: 5,
        category: "product-list",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/product-list-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Customer Overview Sections",
        blockCount: 3,
        category: "customer-overview",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/customer-overview-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Pricing Sections",
        blockCount: 12,
        category: "pricing",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/pricing-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Categories",
        blockCount: 5,
        category: "categories",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/categories-thumbnail.jpg",
        comingSoon: true
      },
      {
        name: "Order Sections",
        blockCount: 7,
        category: "order-sections",
        thumbnail: "https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/order-tracking-thumbnail.jpg",
        comingSoon: true
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
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {category.examples.map((example) => {
              const CardContent = (
                <Card className="overflow-hidden border bg-card transition-all hover:shadow-md">
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted/30">
                    {example.thumbnail ? (
                      <Image
                        src={example.thumbnail}
                        alt={example.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-muted/80 to-muted/40" />
                    )}
                    {example.comingSoon && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Badge variant="secondary" className="bg-white dark:bg-black text-foreground font-medium px-4 py-1.5">
                          Soon
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium">{example.name}</h4>
                      <span className="text-xs text-muted-foreground">
                        {example.blockCount} Blocks
                      </span>
                    </div>
                  </div>
                </Card>
              )

              if (example.comingSoon) {
                return (
                  <div key={example.name} className="cursor-not-allowed">
                    {CardContent}
                  </div>
                )
              }

              return (
                <Link 
                  key={example.name} 
                  href={`/blocks/${example.category}`}
                  className="group"
                >
                  {CardContent}
                </Link>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  )
}

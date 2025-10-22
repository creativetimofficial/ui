import {
  CreditCard,
  Package,
  RefreshCw,
  ShoppingCart,
  Store,
  Truck,
} from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

const DATA = [
  {
    icon: ShoppingCart,
    title: "How do I order?",
    desc: "Browse our collection, add items to your cart, and proceed to checkout. We accept multiple payment methods including credit cards, PayPal, and digital wallets for your convenience.",
  },
  {
    icon: CreditCard,
    title: "How can I make the payment?",
    desc: "We accept all major credit cards, debit cards, PayPal, Apple Pay, and Google Pay. All transactions are secured with industry-standard encryption to protect your information.",
  },
  {
    icon: Truck,
    title: "How much time does it take to receive the order?",
    desc: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery. International orders typically arrive within 7-14 business days depending on your location.",
  },
  {
    icon: Store,
    title: "Can I resell the products?",
    desc: "Products purchased for personal use cannot be resold without authorization. For wholesale or reseller inquiries, please contact our business development team at business@example.com.",
  },
  {
    icon: Package,
    title: "Where do I find the shipping details?",
    desc: "Shipping information is available in your account under 'Order History'. You'll receive tracking details via email once your order ships, allowing you to monitor delivery progress.",
  },
  {
    icon: RefreshCw,
    title: "What is your return policy?",
    desc: "We offer a 30-day return policy on most items. Products must be in original condition with tags attached. Refunds are processed within 5-7 business days after we receive your return.",
  },
]

export default function FaqsGrid01() {
  return (
    <section className="px-6 py-16">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Find answers to common questions about our products, shipping, and
            policies. Can't find what you're looking for? Contact our support
            team.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map(({ icon: Icon, title, desc }, key) => (
            <Card
              key={key}
              className="group hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <CardHeader className="px-6">
                <div className="bg-primary/10 mb-3 flex h-12 w-12 items-center justify-center rounded-full">
                  <Icon className="text-primary h-6 w-6" />
                </div>
                <h3 className="text-xl leading-tight">{title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

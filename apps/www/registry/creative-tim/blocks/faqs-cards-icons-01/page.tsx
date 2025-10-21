import { CreditCard, ShoppingCart, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const DATA = [
  {
    icon: ShoppingCart,
    title: "How do I order?",
    desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.",
  },
  {
    icon: CreditCard,
    title: "How can i make the payment?",
    desc: "It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter. Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too. We're not always in the position that we want to be at.",
  },
  {
    icon: Users,
    title: "How much time does it take to receive the order?",
    desc: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?",
  },
]

export default function FaqsCardsIcons01() {
  return (
    <section className="px-6 py-16">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Frequently asked questions
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl text-lg">
            A lot of people don&apos;t appreciate the moment until it&apos;s
            passed. I&apos;m not trying my hardest, and I&apos;m not trying to
            do
          </p>
        </div>
        <div className="my-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map(({ icon: Icon, title, desc }, key) => (
            <Card key={key}>
              <CardHeader className="border-b gap-0">
                <div className="bg-primary mb-6 grid h-12 w-12 place-items-center rounded-lg">
                  <Icon className="text-primary-foreground h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold">{title}</h3>
              </CardHeader>
              <CardContent className="px-6">
                <p className="text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold">Need more help?</h3>
          <p className="text-muted-foreground mx-auto mt-4 mb-6 text-lg">
            Send us an email with more details about your specific needs.
          </p>
          <Button size="lg">Submit a Request</Button>
        </div>
      </div>
    </section>
  )
}

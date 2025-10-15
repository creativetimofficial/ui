"use client";

// @components
import { Button, Card, Typography } from "@material-tailwind/react";

// @icons
import { Cart, Community, CreditCard } from "iconoir-react";

const DATA = [
  {
    icon: Cart,
    title: "How do I order?",
    desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.",
  },
  {
    icon: CreditCard,
    title: "How can i make the payment?",
    desc: "It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter. Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too. We're not always in the position that we want to be at.",
  },
  {
    icon: Community,
    title: "How much time does it take to receive the order?",
    desc: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?",
  },
];

export default function Faq5() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center">
          <Typography as="h2" type="h3" className="mb-4">
            Frequently asked questions
          </Typography>
          <Typography
            type="lead"
            className="text-foreground max-w-xl [text-wrap:_balance] mx-auto"
          >
            A lot of people don&apos;t appreciate the moment until it&apos;s
            passed. I&apos;m not trying my hardest, and I&apos;m not trying to
            do
          </Typography>
        </div>
        <div className="my-20 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {DATA.map(({ icon: Icon, title, desc }, key) => (
            <Card key={key} className="p-4">
              <Card.Header className="border-b pb-6">
                <Card
                  color="primary"
                  className="w-12 mb-6 h-12 rounded-lg grid place-items-center"
                >
                  <Icon className="w-6 h-6 text-white" />
                </Card>
                <Typography as="h3" type="h6" className="font-semibold">
                  {title}
                </Typography>
              </Card.Header>
              <Card.Body className="px-1">
                <Typography className="[text-wrap:_balance] text-foreground">
                  {desc}
                </Typography>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Typography as="h3" type="h4">
            Need more help?
          </Typography>
          <Typography
            type="lead"
            className="text-foreground [text-wrap:_balance] mx-auto mt-4 mb-6"
          >
            Send us an email with more details about your specific needs.
          </Typography>
          <Button size="lg">Submit a Request</Button>
        </div>
      </div>
    </section>
  );
}

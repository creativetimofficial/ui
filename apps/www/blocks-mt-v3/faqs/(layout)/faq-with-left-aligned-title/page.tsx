"use client";

// @components
import { Card, Typography } from "@material-tailwind/react";

const DATA = [
  {
    title: "How do I order?",
    desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.",
  },
  {
    title: "How can i make the payment?",
    desc: "It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter. Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too. We're not always in the position that we want to be at.",
  },
  {
    title: "How much time does it take to receive the order?",
    desc: "The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it?",
  },
  {
    title: "Can I resell the products?",
    desc: "I always felt like I could do anything. That's the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can't do anything, you won't do anything. I was taught I could do everything.",
  },
];

export default function Faq3() {
  return (
    <section className="py-16">
      <div className="container mx-auto grid lg:grid-cols-5 gap-6 justify-between">
        <div className="col-span-2">
          <Typography as="h2" type="h3" className="mb-4 !leading-snug">
            Frequently asked questions
          </Typography>
          <Typography
            type="lead"
            className="text-foreground max-w-sm [text-wrap:_balance]"
          >
            A lot of people don&apos;t appreciate the moment until it&apos;s
            passed. I&apos;m not trying my hardest, and I&apos;m not trying to
            do
          </Typography>
        </div>
        <div className="col-span-3 grid md:grid-cols-2 grid-cols-1 gap-6">
          {DATA.map(({ title, desc }, key) => (
            <Card key={key} variant="ghost">
              <Card.Header className="m-0 w-full p-2">
                <Typography as="h3" type="lead" className="font-semibold">
                  {title}
                </Typography>
              </Card.Header>
              <Card.Body className="p-2">
                <Typography className="[text-wrap:_balance] text-foreground">
                  {desc}
                </Typography>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

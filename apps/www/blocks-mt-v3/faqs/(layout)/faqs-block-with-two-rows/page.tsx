"use client";

// @components
import { Button, Card, Typography } from "@material-tailwind/react";

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
  {
    title: "Where do I find the shipping details?",
    desc: "There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill. I'm not really specifically talented at anything except for the ability to learn. That's what I do. That's what I'm here for. Don't be afraid to be wrong because you can't learn anything from a compliment.",
  },
  {
    title: "How do I order?",
    desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.",
  },
];

export default function Faq4() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <Typography as="h2" type="h3" className="mb-4">
            Frequently asked questions
          </Typography>
          <Typography
            type="lead"
            className="text-foreground max-w-2xl [text-wrap:_balance] mx-auto"
          >
            A lot of people don&apos;t appreciate the moment until it&apos;s
            passed. I&apos;m not trying my hardest, and I&apos;m not trying to
            do
          </Typography>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {DATA.map(({ title, desc }, key) => (
            <Card key={key} className="p-4">
              <Card.Header className="border-b pb-6">
                <Typography as="h3" type="lead" className="font-semibold">
                  {title}
                </Typography>
              </Card.Header>
              <Card.Body className="px-1">
                <Typography className="text-foreground [text-wrap:_balance]">
                  {desc}
                </Typography>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className="text-center mt-20">
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

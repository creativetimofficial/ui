"use client";

// @components
import { Accordion, Typography } from "@material-tailwind/react";

export default function Faq6() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
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
        <div className="mb-6">
          <Typography
            as="h3"
            type="lead"
            className="font-semibold border-b border-surface py-6"
          >
            How do I order?
          </Typography>
          <Typography className="text-foreground leading-relaxed py-6">
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams. If you have the opportunity to play this game
            of life you need to appreciate every moment. A lot of people
            don&apos;t appreciate the moment until it&apos;s passed.
          </Typography>
        </div>
        <div className="mb-6">
          <Typography
            as="h3"
            type="lead"
            className="font-semibold border-b border-surface py-6"
          >
            How can i make the payment?
          </Typography>
          <Typography className="text-foreground leading-relaxed py-6">
            It really matters and then like it really doesn&apos;t matter. What
            matters is the people who are sparked by it. And the people who are
            like offended by it, it doesn&apos;t matter. Because it&apos;s about
            motivating the doers. Because I&apos;m here to follow my dreams and
            inspire other people to follow their dreams, too. We&apos;re not
            always in the position that we want to be at. We&apos;re constantly
            growing. We&apos;re constantly making mistakes. We&apos;re
            constantly trying to express ourselves and actualize our dreams. If
            you have the opportunity to play this game of life you need to
            appreciate every moment. A lot of people don&apos;t appreciate the
            moment until it&apos;s passed.
          </Typography>
        </div>
      </div>
    </section>
  );
}

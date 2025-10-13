"use client";

import * as React from "react";

// @components
import {
  Accordion,
  Button,
  IconButton,
  Rating,
  Typography,
} from "@material-tailwind/react";

// @icons
import { HeartSolid, Minus, Plus } from "iconoir-react";

const IMAGES = ["/coat-1.png", "/coat-2.png", "/coat-3.png", "/coat-4.png"];

const DATA = [
  {
    value: "one",
    title: "Features",
    desc: "The jacket could be made from a weather-resistant or waterproof fabric, such as Gore-Tex or a similar technology, to keep the wearer dry and comfortable in rainy or windy conditions.",
  },
  {
    value: "two",
    title: "Product Care",
    desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    value: "three",
    title: "Shipping & Returns",
    desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    value: "four",
    title: "Warranty",
    desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams",
  },
];

export default function EcommerceSection1() {
  const [active, setActive] = React.useState("/coat-1.png");

  return (
    <section className="py-16">
      <div className="container mx-auto grid gap-10 md:grid-cols-2 grid-cols-1">
        <div>
          <div>
            <img
              alt="image"
              src={active}
              className="h-auto w-full max-w-full border border-surface rounded-lg object-cover object-center"
            />
          </div>
          <div className="flex justify-center flex-wrap mt-4 gap-4">
            {IMAGES.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="gallery-image"
                onClick={() => setActive(img)}
                className="object-cover border border-surface rounded-md object-center h-24 w-auto cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div>
          <Typography color="default" type="h4">
            Pink Blouse
          </Typography>
          <Typography type="h6" color="primary" className="my-4">
            $1,490
          </Typography>
          <Typography className="text-foreground [text-wrap:_balance]">
            As we live, our hearts turn colder. Cause pain is what we go through
            as we become older. We get insulted by others, lose trust for those
            others. We get back stabbed by friends. It becomes harder for us to
            give others a hand. We get our heart broken by people we love, even
            that we give them all we have. Then we lose family over time. What
            else could rust the heart more over time? Blackgold.
          </Typography>
          <div className="flex items-center gap-2 my-8">
            <Rating value={4} color="warning" readonly />
            <Typography className="font-semibold text-foreground">
              100 Reviews
            </Typography>
          </div>
          <Typography type="h6" color="default" className="my-4">
            Color
          </Typography>
          <div className="flex gap-2">
            <div className="h-5 w-5 bg-black rounded" />
            <div className="h-5 w-5 bg-white rounded-[4px] border border-surface" />
            <div className="h-5 w-5 bg-surface rounded-[4px] border border-surface" />
          </div>
          <div className="my-6 flex items-center gap-2">
            <Button size="lg" className="w-full max-w-60">
              Add to Cart
            </Button>
            <IconButton size="lg" variant="outline" color="error">
              <HeartSolid className="w-5 h-5" />
            </IconButton>
          </div>
          <Accordion defaultValue="one">
            {DATA.map(({ title, desc, value }, key) => (
              <Accordion.Item key={key} value={value}>
                <Accordion.Trigger>
                  <Typography type="h6">{title}</Typography>
                  <Plus className="block h-4 w-4 group-data-[open=true]:hidden" />
                  <Minus className="hidden h-4 w-4 group-data-[open=true]:block" />
                </Accordion.Trigger>
                <Accordion.Content className="text-foreground leading-relaxed">
                  {desc}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

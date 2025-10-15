"use client";

// @components
import { Card, Typography } from "@material-tailwind/react";

// @icons
import { Code, Globe, Mail } from "iconoir-react";

const DATA = [
  {
    icon: Mail,
    title: "Premium Support",
    description:
      "You need more information? Check what other persons are saying about our product. They are very happy with their purchase.",
    options: [
      {
        icon: Globe,
        info: "730 Dyonisie Wolf Bucharest, RO 010458",
      },
      {
        icon: Mail,
        info: "hello@creative-tim.com",
      },
    ],
  },
  {
    icon: Code,
    title: "Free Updates",
    description:
      "You need more information? Check what other persons are saying about our product. They are very happy with their purchase.",
    options: [
      {
        icon: Globe,
        info: "(+40) 772 100 200 (+40) 763 310 190",
      },
      {
        icon: Mail,
        info: "hello@creative-tim.com",
      },
    ],
  },
];

export default function ContactSection4() {
  return (
    <section className="py-16">
      <div className="container mx-auto grid gap-10 lg:grid-cols-2 grid-cols-1 justify-items-center">
        {DATA.map(({ icon: Icon, title, description, options }, key) => (
          <div key={key}>
            <Card
              color="primary"
              className="w-12 mb-6 h-12 rounded-lg grid place-items-center"
            >
              <Icon className="w-6 h-6 text-white" />
            </Card>
            <Typography as="h2" type="h5" className="mt-4 mb-2">
              {title}
            </Typography>
            <Typography className="text-foreground mb-6 max-w-md">
              {description}
            </Typography>
            {options.map((option, key) => (
              <div key={key} className="mb-4">
                <div className="flex items-center gap-4">
                  {<option.icon className="w-5 h-5" />}
                  <Typography className="font-semibold">
                    {option.info}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

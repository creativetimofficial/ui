"use client";

// @components
import { Card, Typography } from "@material-tailwind/react";

// @icons
import { MapPin, Mail, Phone } from "iconoir-react";

const OPTIONS = [
  {
    icon: MapPin,
    title: "Address",
    subTitle: "Find us at the office",
    description: "12124 First Street, nr 54",
  },
  {
    icon: Mail,
    title: "Email",
    subTitle: "Send us your feedback",
    description: "hello@email.com",
  },
  {
    icon: Phone,
    title: "Phone",
    subTitle: "Give us a ring",
    description: "+1 (424) 535-3523",
  },
];

export default function ContactSection1() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Typography
            type="small"
            color="primary"
            className="block font-semibold"
          >
            Contact Us
          </Typography>
          <Typography as="h2" type="h3" className="text-center my-4">
            Got a Question?
          </Typography>
          <Typography
            type="lead"
            className="text-center text-foreground max-w-lg [text-wrap:_balance] mx-auto"
          >
            We&apos;d like to talk more about what you need
          </Typography>
        </div>
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {OPTIONS.map(({ icon: Icon, title, subTitle, description }, key) => (
            <div key={key} className="text-center">
              <Card
                color="primary"
                className="w-14 mx-auto mb-6 h-14 rounded-full grid place-items-center"
              >
                <Icon className="w-6 h-6 text-white" />
              </Card>
              <Typography type="lead" className="font-semibold">
                {title}
              </Typography>
              <Typography className="text-foreground block my-3">
                {subTitle}
              </Typography>
              <Typography>{description}</Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

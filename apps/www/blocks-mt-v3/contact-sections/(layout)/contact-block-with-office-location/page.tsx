"use client";

import * as React from "react";

// @components
import {
  Card,
  Input,
  Button,
  Textarea,
  Checkbox,
  Typography,
} from "@material-tailwind/react";

// @icons
import { Mail, Phone } from "iconoir-react";

function TextField({ label, ...props }) {
  const id = React.useId();

  return (
    <div className="w-full space-y-2">
      <Typography
        as="label"
        htmlFor={id}
        type="small"
        color="default"
        className="font-semibold"
      >
        {label}
      </Typography>
      <Input size="lg" {...props} id={id} />
    </div>
  );
}

const DATA = [
  {
    icon: Mail,
    title: "Find us at the office",
    options: ["Bld Mihail Kogalniceanu, nr. 8,", "7652 Bucharest,", "Romania"],
  },
  {
    icon: Phone,
    title: "+1(424) 535 3523",
    options: ["Michael Jordan", "+40 762 321 762", "Mon - Fri, 8:00-22:00"],
  },
];

export default function ContactSection10() {
  return (
    <section className="py-16 min-h-screen grid place-items-center">
      <div className="container mx-auto grid items-center lg:grid-cols-2 grid-cols-1 gap-10">
        <Card className="lg:p-12 p-6 lg:max-w-lg mx-auto">
          <Typography as="h3" type="h5" className="mb-6">
            Contact us
          </Typography>
          <form action="#" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-4">
              <TextField label="First Name" placeholder="John" />
              <TextField label="Last Name" placeholder="Doe" />
            </div>
            <TextField
              label="Email Address"
              type="email"
              placeholder="someone@example.com"
            />
            <div className="w-full space-y-2">
              <Typography
                as="label"
                htmlFor="message"
                type="small"
                color="default"
                className="font-semibold"
              >
                Message
              </Typography>
              <Textarea
                size="lg"
                id="message"
                placeholder="Something about your request."
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="privacy-policy" className="shrink-0">
                <Checkbox.Indicator />
              </Checkbox>
              <Typography
                as="label"
                htmlFor="privacy-policy"
                className="text-foreground"
              >
                You agree to your friendly&nbsp;
                <Typography as="a" href="#" color="primary" className="inline">
                  Privacy Policy
                </Typography>
              </Typography>
            </div>
            <Button color="primary" size="lg" isFullWidth>
              Send Message
            </Button>
          </form>
        </Card>
        <div className="lg:max-w-lg mx-auto">
          <Typography as="h2" type="h3" className="mb-4">
            Get in Touch
          </Typography>
          <Typography
            type="lead"
            className="lg:max-w-lg [text-wrap:_balance] text-foreground"
          >
            You need more information? Check what other persons are saying about
            our product. They are very happy with their purchase.
          </Typography>
          {DATA.map(({ icon: Icon, title, options }, key) => (
            <div key={key} className="mt-14">
              <div className="flex gap-3 items-center mb-2">
                <Card
                  color="primary"
                  className="w-9 h-9 grid place-items-center"
                >
                  <Icon className="w-5 h-5 text-white" />
                </Card>
                <Typography as="h3" type="h6">
                  {title}
                </Typography>
              </div>
              <div className="space-y-2 ml-12">
                {options.map((option, key) => (
                  <Typography key={key}>{option}</Typography>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

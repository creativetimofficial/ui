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
import { Mail, Phone, MacDock } from "iconoir-react";

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

const OPTIONS = [
  {
    icon: Phone,
    info: "+1(424) 535 3523",
  },
  {
    icon: Mail,
    info: "hello@mail.com",
  },
  {
    icon: MacDock,
    info: "Open Support Ticket",
  },
];

export default function ContactSection8() {
  return (
    <section className="p-6">
      <div className="bg-black rounded-xl lg:p-8 p-4 grid gap-6 items-center lg:grid-cols-2">
        <div className="lg:max-w-lg lg:mx-auto lg:p-0 p-8">
          <Typography as="h2" type="h3" className="mb-4 text-white">
            Get in Touch
          </Typography>
          <Typography
            type="lead"
            className="text-secondary md:max-w-xl [text-wrap:_balance]"
          >
            You need more information? Check what other persons are saying about
            our product. They are very happy with their purchase.
          </Typography>
          <Typography
            type="lead"
            className="my-12 text-secondary max-w-lg [text-wrap:_balance]"
          >
            730 Dyonisie Wolf Bucharest, RO 010458
          </Typography>
          <div className="space-y-4">
            {OPTIONS.map(({ icon: Icon, info }, key) => (
              <div key={key} className="flex items-center gap-4">
                {<Icon className="w-5 h-5 text-secondary" />}
                <Typography color="secondary">{info}</Typography>
              </div>
            ))}
          </div>
        </div>
        <Card className="p-6 lg:p-8">
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
            <TextField
              label="Phone Number"
              type="tel"
              maxLength={16}
              placeholder="e.g., +1 123-456-7890"
              pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
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
      </div>
    </section>
  );
}

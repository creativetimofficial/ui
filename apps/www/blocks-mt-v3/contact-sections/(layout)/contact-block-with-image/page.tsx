"use client";

import * as React from "react";

// @components
import {
  Input,
  Button,
  Textarea,
  Checkbox,
  Typography,
} from "@material-tailwind/react";

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

export default function ContactSection2() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center w-full min-h-screen">
      <div className="p-6 sm:p-12 lg:p-16">
        <div className="mb-10">
          <Typography as="h2" type="h3" className="my-4">
            Contact us
          </Typography>
          <Typography
            type="lead"
            className="text-foreground max-w-lg [text-wrap:_balance]"
          >
            Whether you have questions or you would just like to say hello,
            contact us.
          </Typography>
        </div>
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
      </div>
      <img
        src="https://v3.material-tailwind.com/gradient-pattern.jpg"
        alt="gradient-pattern"
        className="w-full h-full object-cover md:block hidden object-center"
      />
    </section>
  );
}

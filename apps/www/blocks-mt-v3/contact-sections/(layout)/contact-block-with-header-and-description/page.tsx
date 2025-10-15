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
export default function ContactSection7() {
  return (
    <section className="px-8">
      <div className="grid place-items-center min-h-screen">
        <div className="max-w-xl mx-auto">
          <Typography as="h2" type="h3" className="text-center mb-4">
            Contact us
          </Typography>
          <Typography
            type="lead"
            className="text-center text-foreground max-w-xl [text-wrap:_balance] mx-auto"
          >
            For further questions, including partnership opportunities, please
            email hello@creative-tim.com or contact using our contact form.
          </Typography>
          <form action="#" className="space-y-6 mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
              <TextField label="Full Name" placeholder="John Doe" />
              <TextField label="Email Address" placeholder="email@example.com" />
            </div>
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
      </div>
    </section>
  );
}

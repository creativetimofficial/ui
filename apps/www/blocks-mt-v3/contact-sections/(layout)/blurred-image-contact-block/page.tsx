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

export default function ContactSection5() {
  return (
    <section>
      <img
        src="https://v3.material-tailwind.com/texture-pattern.jpg"
        alt="texture-pattern"
        className="absolute right-0 top-0 h-[40%] w-full object-cover object-center lg:h-full lg:w-1/2"
      />
      <div className="container mx-auto grid h-full min-h-screen grid-cols-1 lg:grid-cols-5">
        <div className="lg:col-span-3 my-auto py-20 lg:py-6">
          <Card className="rounded-xl xl:py-20 p-8 z-10 relative xl:col-span-6">
            <div className="mx-auto lg:max-w-xl lg:text-left text-center">
              <div className="mb-10">
                <Typography as="h2" type="h3" className="mb-4">
                  Contact us
                </Typography>
                <Typography
                  type="lead"
                  className="text-foreground max-w-lg mx-auto lg:mx-0 [text-wrap:_balance]"
                >
                  Whether you have questions or you would just like to say
                  hello, contact us.
                </Typography>
              </div>
              <form action="#" className="space-y-6 text-left">
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
                    <Typography
                      as="a"
                      href="#"
                      color="primary"
                      className="inline"
                    >
                      Privacy Policy
                    </Typography>
                  </Typography>
                </div>
                <Button color="primary" size="lg" isFullWidth>
                  Send Message
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

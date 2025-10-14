"use client";

import * as React from "react";

// @components
import {
  Input,
  Button,
  Textarea,
  Typography,
  Chip,
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

const OPTIONS = ["General Inquiry", "Product Support"];

export default function ContactSection15() {
  const [selectedOption, setSelectedOption] = React.useState("");

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <Chip>
            <Chip.Label>Customer Care</Chip.Label>
          </Chip>
          <Typography as="h2" type="h3" className="mb-4 mt-8">
            We&apos;re Here to Help
          </Typography>
          <Typography
            type="lead"
            className="text-foreground max-w-2xl [text-wrap:_balance] mx-auto"
          >
            Whether it&apos;s a question about our services, a request for
            technical assistance, or suggestions for improvement, our team is
            eager to hear from you.
          </Typography>
        </div>
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-2 grid-cols-1">
          <div className="w-full h-full bg-[url(/dark-bg-pattern.jpg)] bg-cover bg-center rounded-2xl" />
          <form
            action="#"
            className="space-y-6 lg:py-2 max-w-lg mx-auto lg:mx-0"
          >
            <div className="space-y-4">
              <Typography
                as="label"
                htmlFor="message"
                type="small"
                color="default"
                className="font-semibold"
              >
                Select Options for Business Engagement
              </Typography>
              <div className="flex flex-wrap gap-2">
                {OPTIONS.map((option) => (
                  <Button
                    key={option}
                    type="button"
                    color="secondary"
                    variant={selectedOption === option ? "solid" : "outline"}
                    onClick={() =>
                      setSelectedOption((cur) => (cur === option ? "" : option))
                    }
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
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
            <Button color="primary" size="lg" isFullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

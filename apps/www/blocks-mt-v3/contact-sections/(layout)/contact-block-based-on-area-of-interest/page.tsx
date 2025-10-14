"use client";

import * as React from "react";

// @components
import {
  Card,
  Input,
  Radio,
  Button,
  Textarea,
  Typography,
} from "@material-tailwind/react";

// @icons
import {
  Mail,
  Phone,
  MacDock,
  Twitter,
  Linkedin,
  Dribbble,
  FacebookTag,
} from "iconoir-react";

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

const OPTIONS = [
  {
    option: "Design",
    radioId: "radio-link",
  },
  {
    option: "Development",
    radioId: "radio-link2",
  },
  {
    option: "Support",
    radioId: "radio-link3",
  },
  {
    option: "Other",
    radioId: "radio-link4",
  },
];
export default function ContactSection11() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <Typography as="h2" type="h3">
            Contact Us
          </Typography>
          <Typography
            type="lead"
            className="mt-4 text-foreground max-w-lg [text-wrap:_balance] mx-auto"
          >
            Any questions or remarks? Just write us a messaage!
          </Typography>
        </div>
        <Card className="p-4 lg:p-6 grid gap-10 lg:grid-cols-2 grid-cols-1 rounded-2xl">
          <div className="bg-black lg:p-16 p-8 rounded-lg grid lg:place-items-center">
            <div>
              <Typography as="h2" type="h3" className="mb-4 text-white">
                Contact Information
              </Typography>
              <Typography
                type="lead"
                className="mb-16 text-secondary max-w-lg [text-wrap:_balance]"
              >
                Fill up the form and our Team will get back to you within 24
                hours.
              </Typography>
              {DATA.map(({ icon: Icon, info }, key) => (
                <div key={key} className="flex items-center gap-4 mb-4">
                  <Icon className="w-5 h-5 text-secondary" />
                  <Typography color="secondary">{info}</Typography>
                </div>
              ))}
              <div className="mt-12 flex gap-6 items-center">
                <a href="#">
                  <Twitter className="w-6 h-6 text-secondary" />
                </a>
                <a href="#">
                  <Linkedin className="w-6 h-6 text-secondary" />
                </a>
                <a href="#">
                  <Dribbble className="w-6 h-6 text-secondary" />
                </a>
                <a href="#">
                  <FacebookTag className="w-6 h-6 text-secondary" />
                </a>
              </div>
            </div>
          </div>
          <form action="#" className="space-y-6 lg:pt-2 pb-2 pt-0 px-2">
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
                What are you interested on?
              </Typography>
              <Radio orientation="horizontal" className="flex-wrap gap-8">
                {OPTIONS.map(({ option, radioId }, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Radio.Item id={radioId}>
                      <Radio.Indicator />
                    </Radio.Item>
                    <Typography
                      as="label"
                      htmlFor={radioId}
                      className="text-foreground cursor-pointer"
                    >
                      {option}
                    </Typography>
                  </div>
                ))}
              </Radio>
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
            <Button
              color="primary"
              size="lg"
              className="max-w-fit flex ml-auto"
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}

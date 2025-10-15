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

export default function ContactSection6() {
  return (
    <section className="p-6">
      <div className="grid md:grid-cols-2 h-full min-h-[calc(100vh-48px)] grid-cols-1 items-center gap-x-10 gap-y-4">
        <div className="row-start-2 md:row-start-1 lg:max-w-md lg:mx-auto">
          <div className="mb-10">
            <Typography as="h2" type="h3" className="my-4">
              Say Hi!
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
            <TextField label="Name" placeholder="John" />
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
        </div>
        <div className="bg-black lg:p-16 p-8 rounded-xl grid h-full items-center">
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
            {OPTIONS.map(({ icon: Icon, info }, key) => (
              <div key={key} className="flex items-center gap-4 mb-4">
                {<Icon className="w-5 h-5 text-secondary" />}
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
      </div>
    </section>
  );
}

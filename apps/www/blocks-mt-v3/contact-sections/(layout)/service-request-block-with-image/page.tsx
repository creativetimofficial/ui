"use client";

import * as React from "react";

// @components
import {
  Card,
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

const SERVICES = [
  "Web Development",
  "Digital Marketing",
  "Copywriting",
  "Data Analysis",
  "Business Consultancy",
  "Social Media",
];

const EXPENSES = ["less than $1,000", "$1,000 - $5,000", "More than $5,000"];

export default function ContactSection14() {
  const [selectedService, setSelectedService] = React.useState("");
  const [selectedExpense, setSelectedExpense] = React.useState("");

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Chip>
            <Chip.Label>Request Our Services</Chip.Label>
          </Chip>
          <Typography as="h2" type="h3" className="mt-8 mb-4">
            Explore Our Diverse Services
          </Typography>
          <Typography
            type="lead"
            className="text-foreground max-w-2xl [text-wrap:_balance] mx-auto"
          >
            From creative design and marketing to technical support and
            consultancy, we cover a broad spectrum to ensure your requirements
            are fully met.
          </Typography>
        </div>
        <div className="grid gap-20 lg:grid-cols-2 grid-cols-1 h-max items-center">
          <form action="#" className="space-y-6">
            <div className="space-y-2">
              <Typography
                as="label"
                type="small"
                htmlFor="message"
                className="font-semibold"
              >
                Select Service
              </Typography>
              <div className="flex flex-wrap gap-2">
                {SERVICES.map((service) => (
                  <Button
                    key={service}
                    type="button"
                    color="secondary"
                    variant={selectedService === service ? "solid" : "outline"}
                    onClick={() =>
                      setSelectedService((cur) =>
                        cur === service ? "" : service
                      )
                    }
                  >
                    {service}
                  </Button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Typography
                as="label"
                htmlFor="message"
                type="small"
                color="default"
                className="font-semibold"
              >
                Estimated Expenses
              </Typography>
              <div className="flex flex-wrap gap-2">
                {EXPENSES.map((expense) => (
                  <Button
                    key={expense}
                    type="button"
                    color="secondary"
                    variant={selectedExpense === expense ? "solid" : "outline"}
                    onClick={() =>
                      setSelectedExpense((cur) =>
                        cur === expense ? "" : expense
                      )
                    }
                  >
                    {expense}
                  </Button>
                ))}
              </div>
            </div>
            <div className="space-y-6 pt-4">
              <div className="grid sm:grid-cols-2 gap-y-6 gap-x-4">
                <TextField label="First Name" placeholder="John" />
                <TextField label="Last Name" placeholder="Doe" />
              </div>
              <TextField
                label="Email Address"
                type="email"
                placeholder="someone@example.com"
              />
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
            <Button color="primary" size="lg">
              Send Message
            </Button>
          </form>
          <div className="w-full h-full bg-[url(/dark-bg-pattern.jpg)] bg-cover bg-center rounded-2xl" />
        </div>
      </div>
    </section>
  );
}

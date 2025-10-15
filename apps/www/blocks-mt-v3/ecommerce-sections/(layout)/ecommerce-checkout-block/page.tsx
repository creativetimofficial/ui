"use client";

import * as React from "react";

// @components
import { Input, Button, Checkbox, Typography } from "@material-tailwind/react";

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
    image: "https://v3.material-tailwind.com/coat-1.png",
    title: "Classic Suit",
    description: "Silk",
    size: "M",
    price: "$1,300",
  },
  {
    image: "https://v3.material-tailwind.com/coat-2.png",
    title: "Premium Suit",
    description: "Linen",
    size: "M",
    price: "$790",
  },
];

const PRICE_OPTIONS = [
  {
    value: "Subtotal",
    price: "$790",
  },
  {
    value: "Shipping estimate",
    price: "$0",
  },
  {
    value: "Tax estimate",
    price: "$5",
  },
];

export default function EcommerceSection5() {
  return (
    <section className="p-6">
      <div className="grid lg:grid-cols-2 h-full min-h-[calc(100vh-48px)] grid-cols-1 items-center gap-x-10 gap-y-4">
        <div className="row-start-2 lg:row-start-1 lg:max-w-xl lg:mx-auto">
          <form action="#" className="space-y-12 mt-6">
            <div className="space-y-2">
              <Typography type="h6" className="mb-4">
                Contact
              </Typography>
              <TextField
                label="Your Email"
                type="email"
                placeholder="someone@example.com"
              />
              <div className="flex items-center gap-2">
                <Checkbox id="privacy-policy" className="shrink-0">
                  <Checkbox.Indicator />
                </Checkbox>
                <Typography
                  as="label"
                  htmlFor="privacy-policy"
                  className="text-foreground"
                >
                  I agree the&nbsp;
                  <Typography
                    as="a"
                    href="#"
                    color="primary"
                    className="inline"
                  >
                    Terms & Conditions
                  </Typography>
                </Typography>
              </div>
            </div>
            <div className="space-y-4">
              <Typography type="h6" className="mb-4">
                Shipping Address
              </Typography>
              <TextField label="Address" placeholder="Street no." />
              <div className="flex flex-col sm:flex-row gap-4">
                <TextField label="City" placeholder="Street no." />
                <TextField label="Postal Code" placeholder="Street no." />
                <TextField label="Country" placeholder="Street no." />
              </div>
            </div>
            <div className="space-y-4">
              <Typography type="h6" className="mb-4">
                Payment Details
              </Typography>
              <TextField
                label="Card Details"
                placeholder="0000 0000 0000 0000"
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full space-y-2">
                  <TextField label="Expiration Date" placeholder="00/00" />
                  <div className="flex items-center gap-2">
                    <Checkbox id="shipping" className="shrink-0">
                      <Checkbox.Indicator />
                    </Checkbox>
                    <Typography
                      as="label"
                      htmlFor="shipping"
                      className="text-foreground"
                    >
                      I agree the&nbsp;
                      <Typography
                        as="a"
                        href="#"
                        color="primary"
                        className="inline"
                      >
                        Terms & Conditions
                      </Typography>
                    </Typography>
                  </div>
                </div>
                <TextField label="CVC" placeholder="000" />
              </div>
            </div>
            <div className="space-y-4">
              <Typography type="h6">Billing Address</Typography>
              <div className="flex items-center gap-2">
                <Checkbox id="billing" className="shrink-0">
                  <Checkbox.Indicator />
                </Checkbox>
                <Typography
                  as="label"
                  htmlFor="billing"
                  className="text-foreground"
                >
                  same as shipping address
                </Typography>
              </div>
            </div>
            <Button color="primary" size="lg" isFullWidth>
              Send Message
            </Button>
          </form>
        </div>
        <div className="bg-black lg:px-16 py-16 px-8 rounded-xl grid h-full items-center">
          <div>
            <div className="flex justify-end mb-10">
              <div>
                <Typography color="secondary" className="font-semibold">
                  Amount
                </Typography>
                <Typography
                  color="secondary"
                  type="lead"
                  className="font-semibold text-end"
                >
                  $2,090
                </Typography>
              </div>
            </div>
            <div>
              {OPTIONS.map(
                ({ image, title, description, size, price }, key) => (
                  <div
                    key={key}
                    className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8"
                  >
                    <div className="bg-white w-max h-max p-2 rounded-lg">
                      <img src={image} alt="product" className="h-24 w-24" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 justify-between">
                        <Typography color="secondary" className="font-semibold">
                          {title}
                        </Typography>
                        <Typography color="secondary" className="font-semibold">
                          {price}
                        </Typography>
                      </div>
                      <div className="grid space-y-2">
                        <Typography
                          color="secondary"
                          type="small"
                          className="block"
                        >
                          {description}
                        </Typography>
                        <Typography
                          color="secondary"
                          type="small"
                          className="block"
                        >
                          Size: {size}
                        </Typography>
                      </div>
                    </div>
                  </div>
                )
              )}
              <div className="space-y-3 mt-28">
                {PRICE_OPTIONS.map(({ value, price }, index) => (
                  <div key={index} className="flex justify-between">
                    <Typography color="secondary">{value}</Typography>
                    <Typography color="secondary">{price}</Typography>
                  </div>
                ))}
                <div className="flex justify-between mt-6">
                  <Typography
                    color="secondary"
                    type="lead"
                    className="font-semibold"
                  >
                    Order Total
                  </Typography>
                  <Typography color="secondary" className="font-semibold">
                    $795
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

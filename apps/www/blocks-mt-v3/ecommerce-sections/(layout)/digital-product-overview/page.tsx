"use client";

// @components
import {
  Radio,
  Button,
  Rating,
  Typography,
  Breadcrumb,
} from "@material-tailwind/react";

// @icons
import { Lock } from "iconoir-react";

const data = [
  {
    name: "HTML Version",
    desc: "@material-tailwind/react, packed with rich components and widgets.",
    price: "$39",
  },
  {
    name: "React Version",
    desc: "@material-tailwind/react, packed with rich components and widgets.",
    price: "$49",
  },
  {
    name: "Angular Version",
    desc: "@material-tailwind/react, packed with rich components and widgets.",
    price: "$99",
  },
];

export default function EcommerceSection12() {
  return (
    <section className="py-16 container mx-auto">
      <Breadcrumb>
        <Breadcrumb.Link>Home</Breadcrumb.Link>
        <Breadcrumb.Separator />
        <Breadcrumb.Link>Templates</Breadcrumb.Link>
        <Breadcrumb.Separator />
        <Breadcrumb.Link>Digital Product</Breadcrumb.Link>
      </Breadcrumb>
      <div className="mt-6 place-items-center items-center grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="w-full h-full border overflow-hidden rounded-xl shadow-lg shadow-black/5 grid place-items-center">
          <img
            src="https://v3.material-tailwind.com/preview-1.png"
            alt="product"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex-col">
          <Typography as="h2" type="h4" className="mb-2">
            Digital Product
          </Typography>
          <Typography className="mb-8 text-foreground">
            There&apos;s nothing I really wanted to do in life that I
            wasn&apos;t able to get good at. That&apos;s my skill. I&apos;m not
            really specifically.
          </Typography>
          <Typography type="lead" className="mb-4 font-semibold">
            Choose your plan
          </Typography>
          <Radio className="gap-4">
            {data.map(({ name, desc, price }) => (
              <div key={name} className="flex items-start gap-4">
                <Radio.Item id={name} className="translate-y-1.5">
                  <Radio.Indicator />
                </Radio.Item>
                <label
                  htmlFor={name}
                  className="flex items-center justify-between gap-4"
                >
                  <div>
                    <Typography
                      type="small"
                      color="default"
                      className="font-semibold block mb-0.5"
                    >
                      {name}
                    </Typography>
                    <Typography type="small" className="text-foreground block">
                      {desc}
                    </Typography>
                  </div>
                  <Typography type="h6" color="default">
                    {price}
                  </Typography>
                </label>
              </div>
            ))}
          </Radio>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button size="lg" isFullWidth>
              Buy Now
            </Button>
            <Button size="lg" isFullWidth variant="outline" color="secondary">
              Live Preview
            </Button>
          </div>
          <div className="mt-6 flex items-start justify-between">
            <Typography className="flex font-semibold items-center gap-1 text-foreground">
              <Lock className="h-4 w-4" />
              123 <span className="font-normal">Sales</span>
            </Typography>
            <div className="flex items-center gap-2">
              <Rating
                value={4}
                color="warning"
                readonly
                className="[&_svg]:w-5 [&_svg]:h-5"
              />
              <Typography className="font-semibold text-foreground">
                100 Reviews
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

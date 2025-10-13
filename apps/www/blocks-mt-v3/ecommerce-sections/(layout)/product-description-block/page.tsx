"use client";

import * as React from "react";

// @components
import {
  Breadcrumb,
  Button,
  IconButton,
  Rating,
  Typography,
} from "@material-tailwind/react";

// @icons
import { HeartSolid } from "iconoir-react";

const IMAGES = [
  {
    imgelink: "https://v3.material-tailwind.com/coat-1.png",
  },
  {
    imgelink: "https://v3.material-tailwind.com/coat-2.png",
  },
  {
    imgelink: "https://v3.material-tailwind.com/coat-3.png",
  },
  {
    imgelink: "https://v3.material-tailwind.com/coat-4.png",
  },
];

const SIZES = ["XS", "S", "M", "L"];

export default function EcommerceSection2() {
  const [active, setActive] = React.useState("/coat-1.png");
  const [selectedSize, setSelectedSize] = React.useState("S");

  return (
    <section className="py-16">
      <div className="container mx-auto grid gap-10 md:grid-cols-2 grid-cols-1">
        <div>
          <Breadcrumb>
            <Breadcrumb.Link>Store</Breadcrumb.Link>
            <Breadcrumb.Separator />
            <Breadcrumb.Link>Designers</Breadcrumb.Link>
            <Breadcrumb.Separator />
            <Breadcrumb.Link>Pink Blouse</Breadcrumb.Link>
          </Breadcrumb>
          <div className="border mt-4 border-surface overflow-hidden rounded-lg">
            <img
              src={active}
              alt="image"
              className="h-96 w-auto mx-auto object-cover object-center"
            />
          </div>
          <div className="flex justify-center flex-wrap mb-16 mt-4 gap-4">
            {IMAGES.map(({ imgelink }, index) => (
              <div key={index}>
                <img
                  src={imgelink}
                  alt="gallery-image"
                  onClick={() => setActive(imgelink)}
                  className="object-cover border border-surface rounded-md object-center h-24 w-auto cursor-pointer"
                />
              </div>
            ))}
          </div>
          <Typography color="default" type="h6">
            Product Description
          </Typography>
          <Typography className="text-foreground [text-wrap:_balance] mt-2 mb-6">
            There&apos;s nothing I really wanted to do in life that I
            wasn&apos;t able to get good at. That&apos;s my skill. I&apos;m not
            really specifically talented at anything except for the ability to
            learn. That&apos;s what I do. That&apos;s what I&apos;m here for.
            Don&apos;t be afraid to be wrong because you can&apos;t learn
            anything from a compliment.
          </Typography>
          <Typography color="default" type="h6">
            Benefits
          </Typography>
          <Typography className="text-foreground [text-wrap:_balance] mt-2 mb-6">
            There&apos;s nothing I really wanted to do in life that I
            wasn&apos;t able to get good at. That&apos;s my skill. I&apos;m not
            really specifically talented at anything except for the ability to
            learn. That&apos;s what I do. That&apos;s what I&apos;m here for.
            Don&apos;t be afraid to be wrong because you can&apos;t learn
            anything from a compliment.
          </Typography>
          <Typography color="default" type="h6">
            More about product
          </Typography>
          <Typography className="text-foreground [text-wrap:_balance] mt-2 mb-6">
            There&apos;s nothing I really wanted to do in life that I
            wasn&apos;t able to get good at. That&apos;s my skill. I&apos;m not
            really specifically talented at anything except for the ability to
            learn.
          </Typography>
        </div>
        <div>
          <Typography color="default" type="h5">
            Pink Blouse
          </Typography>
          <Typography className="text-foreground [text-wrap:_balance] my-4">
            There&apos;s nothing I really wanted to do in life that I
            wasn&apos;t able to get good at. That&apos;s my skill. I&apos;m not
            really specifically talented at anything except for the ability to
            learn.
          </Typography>
          <Typography type="h6" color="primary" className="my-4">
            $1,490
          </Typography>
          <div className="flex items-center gap-2 my-8">
            <Rating value={4} color="warning" readonly />
            <Typography className="font-semibold text-foreground">
              100 Reviews
            </Typography>
          </div>
          <Typography type="h6" color="default" className="my-4">
            Size
          </Typography>
          <div className="flex items-center gap-4">
            {SIZES.map((size) => (
              <Button
                key={size}
                onClick={() => setSelectedSize(size)}
                variant={size === selectedSize ? "solid" : "outline"}
                color={size === selectedSize ? "primary" : "secondary"}
              >
                {size}
              </Button>
            ))}
          </div>
          <div className="my-6 flex items-center gap-2">
            <Button size="lg" className="w-full max-w-60">
              Add to Cart
            </Button>
            <IconButton size="lg" variant="outline" color="error">
              <HeartSolid className="w-5 h-5" />
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
}

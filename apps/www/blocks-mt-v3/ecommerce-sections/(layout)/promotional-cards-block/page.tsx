"use client";

// @components
import { Button, Card, Typography } from "@material-tailwind/react";

export default function EcommerceSections7() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Typography color="primary" className="block font-semibold">
            Tailored Product Search
          </Typography>
          <Typography as="h2" type="h3" className="my-4">
            Find What You Need
          </Typography>
          <Typography
            type="lead"
            className="text-foreground max-w-3xl [text-wrap:_balance] mx-auto"
          >
            Whether you&apos;re looking for specific features, price ranges, or
            brands, our filters help you quickly narrow down options, so you can
            find exactly what you need with ease.
          </Typography>
        </div>
        <div className="space-y-6">
          <Card className="p-6 flex flex-col sm:flex-row items-center justify-center bg-surface-light">
            <Card.Header className="m-0 w-full">
              <img
                src="https://v3.material-tailwind.com/double-mobile-mockup.png"
                alt="apple-watch"
                className="max-h-[30rem]"
              />
            </Card.Header>
            <Card.Body className="pr-0 md:pr-16 pl-0 py-0">
              <Typography type="lead" color="primary" className="font-semibold">
                Up to 70%
              </Typography>
              <Typography color="default" as="h2" type="h1" className="my-4">
                Formal and Elegance Series
              </Typography>
              <Typography
                type="lead"
                className="text-foreground [text-wrap:_balance] mb-6 font-medium"
              >
                From sleek denim to cozy jackets, find your perfect city look
              </Typography>
              <Button size="lg">Shop Now</Button>
            </Card.Body>
          </Card>
          <Card className="p-6 flex flex-col sm:flex-row items-center justify-items-center">
            <Card.Body className="pl-0 md:pl-16 pr-0 py-0">
              <Typography type="lead" color="primary" className="font-semibold">
                Up to 50%
              </Typography>
              <Typography color="default" as="h2" type="h1" className="my-4">
                Urban New Collection
              </Typography>
              <Typography
                type="lead"
                className="text-foreground [text-wrap:_balance] mb-6 font-medium"
              >
                Functional, fashionable, and now at up to 50% off!
              </Typography>
              <Button size="lg">Shop Now</Button>
            </Card.Body>
            <Card.Header className="m-0 w-full">
              <img
                src="https://v3.material-tailwind.com/double-mobile-mockup.png"
                alt="apple-watch"
                className="max-h-[30rem]"
              />
            </Card.Header>
          </Card>
        </div>
      </div>
    </section>
  );
}

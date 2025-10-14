"use client";

// @components
import { Card, Typography } from "@material-tailwind/react";

export default function TestimonialSection17() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-16 max-w-lg">
          <Typography as="h2" type="h3" className="mb-4 [text-wrap:_balance]">
            The heartfelt testimonials of our community
          </Typography>
          <Typography
            type="lead"
            className="text-foreground [text-wrap:_balance]"
          >
            From life-enhancing gadgets to unparalleled customer support, and
            transformative learning opportunities.
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card variant="ghost" className="grid bg-surface/40">
            <Card.Body className="p-6">
              <Typography
                as="blockquote"
                type="h5"
                className="[text-wrap:_balance] md:text-start text-center"
              >
                &quot;The team went above and beyond to ensure my issue was
                resolved quickly and efficiently. Truly outstanding!&quot;
              </Typography>
            </Card.Body>
            <Card.Footer className="flex flex-col md:flex-row text-center md:text-start px-6 pb-6 items-center justify-between gap-4">
              <div>
                <Typography className="font-semibold">Jessica Devis</Typography>
                <Typography className="text-foreground">
                  Full Stack Developer @Netflix
                </Typography>
              </div>
              <img
                src="https://v3.material-tailwind.com/logo/netflix.svg"
                alt="logo"
                className="h-14 grayscale"
              />
            </Card.Footer>
          </Card>
          <Card variant="ghost" className="grid bg-surface/40">
            <Card.Body className="p-6">
              <Typography
                as="blockquote"
                type="h5"
                className="[text-wrap:_balance] md:text-start text-center"
              >
                &quot;It have broadened my horizons and helped me advance my
                career. The community is incredibly supportive.&quot;
              </Typography>
            </Card.Body>
            <Card.Footer className="flex flex-col md:flex-row mt-auto px-6 pb-6 text-center md:text-start items-center justify-between gap-4">
              <div>
                <Typography className="font-semibold">Marcell Glock</Typography>
                <Typography className="text-foreground">
                  Graphic Designer, @Coinbase
                </Typography>
              </div>
              <img
                src="https://v3.material-tailwind.com/logo/coinbase.svg"
                alt="logo"
                className="h-14 grayscale brightness-75"
              />
            </Card.Footer>
          </Card>
          <Card variant="ghost" className="grid bg-surface/40 col-span-full">
            <Card.Body className="p-6">
              <Typography
                as="blockquote"
                type="h5"
                className="[text-wrap:_balance] text-center"
              >
                &quot;Its intuitive design and powerful features make it
                indispensable. I can&apos;t imagine going back to life before
                it!&quot;
              </Typography>
            </Card.Body>
            <Card.Footer className="flex flex-col text-center mt-auto px-6 pb-6 mditems-center justify-center gap-4">
              <div>
                <Typography className="font-semibold">Emma Roberts</Typography>
                <Typography className="text-foreground">
                  Chief Executive @Spotify
                </Typography>
              </div>
              <img
                src="https://v3.material-tailwind.com/logo/spotify.svg"
                alt="logo"
                className="h-14 grayscale brightness-50"
              />
            </Card.Footer>
          </Card>
        </div>
      </div>
    </section>
  );
}

"use client";

// @components
import { Avatar, Card, Typography } from "@material-tailwind/react";

export default function TestimonialSection2() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <Card
          variant="ghost"
          className="bg-transparent grid grid-cols-12 items-end"
        >
          <div className="col-span-full md:col-span-4">
            <img
              src="https://v3.material-tailwind.com/woman-profile-1.jpg"
              alt="user profile"
              className="h-full w-full max-h-96 max-w-96 lg:max-h-[30rem] lg:max-w-full object-cover rounded-xl"
            />
          </div>
          <Card.Body className="col-span-full md:col-span-8 md:px-8 px-0 lg:px-12 py-6">
            <Typography
              type="lead"
              color="primary"
              className="lg:mb-4 mb-2 font-semibold"
            >
              Customer Story
            </Typography>
            <Typography
              type="h2"
              className="mb-4 !leading-tight [text-wrap:_balance]"
            >
              Awesome services! Fast and secure.
            </Typography>
            <Typography
              as="blockquote"
              type="h6"
              className="lg:mb-12 mb-8 text-foreground font-normal !leading-snug [text-wrap:balance]"
            >
              &quot;Wealth creation is an evolutionarily recent positive-sum
              game. Status is an old zero-sum game. Those attacking wealth
              creation are often just seeking status.&quot;
            </Typography>
            <div className="flex items-center gap-4">
              <Avatar
                alt="spotify"
                src="https://v3.material-tailwind.com/icon/spotify.svg"
              />
              <div>
                <Typography type="lead" className="font-semibold">
                  Marcell Glock
                </Typography>
                <Typography className="text-foreground">
                  Chief Executive, Spotify
                </Typography>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

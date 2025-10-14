"use client";

// @components
import { Avatar, Card, Typography } from "@material-tailwind/react";

export default function TestimonialSection1() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <Card className="bg-black rounded-xl">
          <Card.Body className="p-10 items-center w-full grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="col-span-full text-center md:text-left md:col-span-8 md:pl-4">
              <img
                src="https://v3.material-tailwind.com/logo/spotify.svg"
                alt="spotify logo"
                className="w-32 mb-2 ml-auto mr-auto md:mr-0 md:-ml-3"
              />
              <Typography
                as="blockquote"
                type="h5"
                className="mb-12 text-white !leading-snug [text-wrap:balance]"
              >
                &quot;We&apos;re not always in the position that we want to be
                at. We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams. &quot;
              </Typography>
              <div>
                <Typography as="p" type="h6" className="mb-1 text-white">
                  Marcell Glock
                </Typography>
                <Typography className="text-white/80">
                  Chief Executive, Spotify
                </Typography>
              </div>
            </div>
            <div className="col-span-full md:col-span-4 grid justify-items-center md:justify-items-end">
              <Avatar
                src="https://v3.material-tailwind.com/woman-profile-1.jpg"
                alt="user profile"
                className="w-full h-full max-w-24 md:max-w-64 max-h-24 md:max-h-64"
              />
            </div>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

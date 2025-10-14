"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/creative-tim-ui/ui/avatar";
import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card";

export default function TestimonialsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="bg-black text-white rounded-xl">
          <CardContent className="p-10 items-center w-full grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="col-span-full text-center md:text-left md:col-span-8 md:pl-4">
              <img
                src="https://v3.material-tailwind.com/logo/spotify.svg"
                alt="spotify logo"
                className="w-32 mb-2 ml-auto mr-auto md:mr-0 md:-ml-3"
              />
              <blockquote className="text-2xl mb-12 !leading-snug">
                &quot;We&apos;re not always in the position that we want to be
                at. We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams. &quot;
              </blockquote>
              <div>
                <p className="text-xl font-semibold mb-1">Marcell Glock</p>
                <p className="text-white/80">Chief Executive, Spotify</p>
              </div>
            </div>
            <div className="col-span-full md:col-span-4 grid justify-items-center md:justify-items-end">
              <Avatar className="w-24 h-24 md:w-64 md:h-64">
                <AvatarImage
                  src="https://v3.material-tailwind.com/woman-profile-1.jpg"
                  alt="user profile"
                />
                <AvatarFallback>MG</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

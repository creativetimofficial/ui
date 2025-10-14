"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/creative-tim-ui/ui/avatar";
import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card";

export default function TestimonialsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="bg-transparent border-0 shadow-none grid grid-cols-12 items-center">
          <div className="col-span-full md:col-span-4">
            <img
              src="https://v3.material-tailwind.com/logo/spotify.svg"
              alt="user profile"
              className="h-full w-full max-h-96 max-w-96 lg:max-h-[30rem] lg:max-w-full object-cover rounded-xl"
            />
          </div>
          <CardContent className="col-span-full md:col-span-8 md:px-8 px-0 lg:px-12 py-6">
            <p className="lg:mb-4 mb-2 font-semibold text-sm uppercase tracking-wide">
              What clients say
            </p>
            <h2 className="text-3xl font-bold mb-6">Work with us</h2>
            <blockquote className="text-lg lg:mb-12 mb-8 text-muted-foreground font-normal">
              &quot;Wealth creation is an evolutionarily recent positive-sum
              game. Status is an old zero-sum game. Those attacking wealth
              creation are often just seeking status.&quot;
            </blockquote>
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  alt="spotify"
                  src="https://v3.material-tailwind.com/woman-profile-1.jpg"
                />
                <AvatarFallback>MG</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-semibold">Marcell Glock</p>
                <p className="text-sm text-muted-foreground">
                  Chief Executive, Spotify
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

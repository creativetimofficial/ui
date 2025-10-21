"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function LargeBlogPreview01() {
  return (
    <div className="container mx-auto grid h-full w-full grid-cols-1 items-center gap-x-16 gap-y-6 py-16 lg:grid-cols-2">
      <img
        alt="blog preview"
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop"
        className="h-full w-full rounded-lg object-cover object-center shadow-lg"
      />
      <div>
        <p className="text-primary block font-semibold">Business</p>
        <h2 className="my-4 text-3xl font-bold lg:text-4xl">
          Autodesk looks to future of 3D with Project Escher
        </h2>
        <p className="text-muted-foreground mb-6 w-full max-w-lg text-lg">
          Warner Music Group announced today it&apos;s acquiring the selected
          assets of the music platform Songkick, including its app for finding
          concerts and the company&apos;s trademark. Songkick has been involved
          in a lawsuit against the major…{" "}
          <a
            href="#"
            className="text-foreground ml-2 inline-block font-semibold hover:underline"
          >
            Read More
          </a>
        </p>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop"
              alt="Otto Gonzalez"
            />
            <AvatarFallback>OG</AvatarFallback>
          </Avatar>
          <div className="space-y-0.5">
            <p className="text-sm font-semibold">Otto Gonzalez</p>
            <p className="text-muted-foreground text-xs">10 October 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}

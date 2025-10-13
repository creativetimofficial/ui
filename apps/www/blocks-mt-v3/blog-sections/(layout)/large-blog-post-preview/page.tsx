"use client";

// @components
import { Avatar, Typography } from "@material-tailwind/react";

export default function BlogSection10() {
  return (
    <div className="container mx-auto grid h-full w-full grid-cols-1 py-16 items-center gap-y-6 gap-x-16 lg:grid-cols-2">
      <img
        alt="image"
        src="https://v3.material-tailwind.com/texture-pattern.jpg"
        className="w-full rounded-lg object-cover shadow-lg object-center"
      />
      <div>
        <Typography color="primary" className="block font-semibold">
          Business
        </Typography>
        <Typography as="h2" type="h4" color="default" className="my-4">
          Autodesk looks to future of 3D with Project Escher
        </Typography>
        <Typography
          type="lead"
          className="mb-6 w-full max-w-lg text-foreground"
        >
          Warner Music Group announced today it&apos;s acquiring the selected
          assets of the music platform Songkick, including its app for finding
          concerts and the company&apos;s trademark. Songkick has been involved
          in a lawsuit against the major…{" "}
          <a
            href="#"
            className="inline-block ml-2 font-semibold text-black dark:text-white"
          >
            Read More
          </a>
        </Typography>
        <div className="flex items-center gap-3">
          <Avatar
            src="https://v3.material-tailwind.com/man-profile-1.jpg"
            alt="Otto Gonzalez"
          />
          <div className="space-y-0.5">
            <Typography color="default" className="font-semibold">
              Otto Gonzalez
            </Typography>
            <Typography type="small" className="block text-foreground">
              10 Octuber 2024
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

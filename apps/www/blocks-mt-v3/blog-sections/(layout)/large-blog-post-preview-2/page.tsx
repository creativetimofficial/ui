"use client";

// @components
import { Typography } from "@material-tailwind/react";

export default function BlogSection9() {
  return (
    <div className="container mx-auto grid w-full grid-cols-1 items-center gap-y-6 gap-x-16 py-16 lg:grid-cols-2">
      <div>
        <Typography color="primary" className="block font-semibold">
          House
        </Typography>
        <Typography as="h2" type="h4" color="default" className="my-4">
          Warner Music Group buys concert discovery service Songkick
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
        <Typography className="text-foreground">
          <strong>by Millie Borough,</strong> 10 days ago
        </Typography>
      </div>
      <img
        alt="blog"
        src="https://v3.material-tailwind.com/texture-pattern.jpg"
        className="w-full rounded-lg object-cover shadow-lg object-center"
      />
    </div>
  );
}

"use client";

// @components
import { Typography } from "@material-tailwind/react";

export default function BlogSection13() {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 items-center justify-between gap-x-16 gap-y-6 lg:grid-cols-2">
        <div>
          <Typography className="text-foreground">
            It really matters and then like it really doesn&apos;t matter. What
            matters is the people who are sparked by it. And the people who are
            like offended by it, it doesn&apos;t matter.
          </Typography>
          <div className="pl-8 my-8">
            <ul className="list-disc space-y-2">
              <Typography as="li" className="text-foreground">
                People are so scared to lose their hope
              </Typography>
              <Typography as="li" className="text-foreground">
                That&apos;s the main thing people
              </Typography>
              <Typography as="li" className="text-foreground">
                Thoughts- their perception of themselves!
              </Typography>
            </ul>
          </div>
          <Typography className="mb-12 text-foreground">
            It really matters and then like it really doesn&apos;t matter. What
            matters is the people who are sparked by it. And the people who are
            like offended by it, it doesn&apos;t matter.
          </Typography>
          <Typography type="h4" color="default" className="mb-4">
            We will be with you forever
          </Typography>
          <Typography className="mb-8 text-foreground">
            It really matters and then like it really doesn&apos;t matter. What
            matters is the people who are sparked by it. And the people who are
            like offended by it, it doesn&apos;t matter.
          </Typography>
          <figure className="mb-2 border-l-2 border-surface pl-4">
            <Typography
              as="blockquote"
              cite="#"
              type="lead"
              className="mb-4 font-semibold italic text-foreground/60"
            >
              &quot;And thank you for turning my personal jean jacket into a
              couture piece.&quot;
            </Typography>
            <Typography
              as="figcaption"
              type="small"
              className="ml-2 font-normal text-foreground"
            >
              — Kanye West, Producer
            </Typography>
          </figure>
        </div>
        <img
          alt="blog"
          src="https://v3.material-tailwind.com/3d-obj-4.jpg"
          className="ml-auto h-full w-full max-h-[40rem] rounded-lg object-cover object-center shadow-lg"
        />
      </div>
    </section>
  );
}

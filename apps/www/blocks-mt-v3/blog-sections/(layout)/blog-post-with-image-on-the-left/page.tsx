"use client";

// @components
import { Typography } from "@material-tailwind/react";

export default function BlogSection8() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
        <img
          className="w-full h-full max-h-80 object-cover object-center rounded-lg shadow-lg"
          src="https://v3.material-tailwind.com/texture-pattern.jpg"
          alt=""
        />
        <div className="w-full">
          <Typography type="h4" className="mb-4 [text-wrap:balance]">
            So what does the new record for the lowest level of winter ice
            actually mean
          </Typography>
          <Typography className="text-foreground">
            The Arctic Ocean freezes every winter and much of the sea-ice then
            thaws every summer, and that process will continue whatever happens
            with climate change. Even if the Arctic continues to be one of the
            fastest-warming regions of the world, it will always be plunged into
            bitterly cold polar dark every winter. And year-by-year, for all
            kinds of natural reasons, there&apos;s huge variety of the state of
            the ice. <br />
            <br />
            For a start, it does not automatically follow that a record amount
            of ice will melt this summer. More important for determining the
            size of the annual thaw is the state of the weather as the midnight
            sun approaches and temperatures rise. But over the more than 30
            years of satellite records, scientists have observed a clear pattern
            of decline, decade-by-decade. <br />
            <br />
            The Arctic Ocean freezes every winter and much of the sea-ice then
            thaws every summer, and that process will continue whatever happens
            with climate change. Even if the Arctic continues to be one of the
            fastest-warming regions of the world, it will always be plunged into
            bitterly cold polar dark every winter. And year-by-year, for all
            kinds of natural reasons, there&apos;s huge variety of the state of
            the ice.
          </Typography>
        </div>
      </div>
    </section>
  );
}

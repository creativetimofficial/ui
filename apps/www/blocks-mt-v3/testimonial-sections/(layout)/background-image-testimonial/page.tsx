/**
 * This example uses the `swiper` library to create the carousel effect,
 * please make sure to install it before using this example.
 *
 * To install the required dependency, run: `npm install swiper`
 */

"use client";

import * as React from "react";

// @styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// @components
import { Swiper, SwiperSlide } from "swiper/react";
import { Typography, IconButton, Card } from "@material-tailwind/react";

// @icons
import { NavArrowLeft, NavArrowRight } from "iconoir-react";

// @hooks
import { useSwiper } from "swiper/react";

// @utils
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SLIDES = [
  {
    image: "https://v3.material-tailwind.com/logo/netflix.svg",
    name: "Louis Miriam",
    role: "COO @ Netflix",
    quote:
      "Knowledge is either from direct experience or from verifiable, falsifiable science. There is knowledge that is transmitted but not verifiable / falsifiable. They're slowed down by their perception of themselves.",
  },
  {
    image: "https://v3.material-tailwind.com/logo/coinbase.svg",
    name: "John Down",
    role: "CEO @ Coinbase",
    quote:
      "Knowledge is either from direct experience or from verifiable, falsifiable science. There is knowledge that is transmitted but not verifiable / falsifiable. They're slowed down by their perception of themselves.",
  },
];

function CustomNavigation() {
  const swiper = useSwiper();

  return (
    <>
      <IconButton
        isCircular
        size="lg"
        variant="ghost"
        color="secondary"
        onClick={() => swiper.slidePrev()}
        className="!absolute text-white left-2 top-1/2 z-10 -translate-y-1/2 sm:grid hidden"
      >
        <NavArrowLeft className="h-7 w-7 -translate-x-0.5 stroke-2" />
      </IconButton>
      <IconButton
        isCircular
        size="lg"
        variant="ghost"
        color="secondary"
        onClick={() => swiper.slideNext()}
        className="!absolute text-white right-2 top-1/2 z-10 -translate-y-1/2 sm:grid hidden"
      >
        <NavArrowRight className="h-7 w-7 translate-x-px stroke-2" />
      </IconButton>
    </>
  );
}

function customPagination(_, className) {
  return `<span class="${className} w-4 h-4 [&.swiper-pagination-bullet-active]:!opacity-100 [&.swiper-pagination-bullet-active]:[background:rgb(var(--color-background))] !opacity-50 ![background:rgb(var(--color-background))]"></span>`;
}

export default function TestimonialSection15() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <Card className="rounded-xl p-4 bg-[url('/earth-outer-space.jpg')] bg-cover bg-center relative">
          <span className="absolute inset-0 bg-black/75 w-full h-full" />
          <Swiper
            autoplay
            pagination={{
              enabled: true,
              clickable: true,
              renderBullet: customPagination,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="relative w-full h-full"
          >
            {SLIDES.map(({ name, image, role, quote }, key) => (
              <SwiperSlide key={key}>
                <div className="px-4 sm:px-12 pt-4 sm:pt-16 md:pt-24 pb-24 items-center w-full grid grid-cols-1 gap-8 md:grid-cols-12">
                  <div className="col-span-full text-left md:col-span-8 pl-4 md:row-start-auto row-start-2">
                    <Typography
                      type="h6"
                      className="text-white font-medium mb-8 [text-wrap:_balance]"
                    >
                      &quot;{quote}&quot;
                    </Typography>
                    <div className="flex items-center gap-2">
                      <Typography className="text-white font-medium text-center ">
                        {name}
                      </Typography>
                      <Typography
                        type="small"
                        className="block text-white/80 text-center"
                      >
                        {role}
                      </Typography>
                    </div>
                  </div>
                  <div className="col-span-full md:col-span-4 grid justify-items-start md:justify-items-end">
                    <img
                      src={image}
                      alt="company logo"
                      className="h-20 md:h-24 md:mx-auto md:mb-8"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <CustomNavigation />
          </Swiper>
        </Card>
      </div>
    </section>
  );
}

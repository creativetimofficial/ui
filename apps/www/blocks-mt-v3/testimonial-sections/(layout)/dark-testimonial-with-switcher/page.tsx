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
import { Typography, IconButton } from "@material-tailwind/react";

// @icons
import { NavArrowLeft, NavArrowRight } from "iconoir-react";

// @hooks
import { useSwiper } from "swiper/react";

// @utils
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SLIDES = [
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    companyLogo: "https://v3.material-tailwind.com/logo/netflix.svg",
    name: "Linde Michel",
    role: "Social Media Executive, Netflix",
    quote:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-1.jpg",
    companyLogo: "https://v3.material-tailwind.com/logo/coinbase.svg",
    name: "John Down",
    role: "Visionary, Coinbase",
    quote:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    image: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    companyLogo: "https://v3.material-tailwind.com/logo/spotify.svg",
    name: "Marcell Glock",
    role: "Chief Executive, Spotify",
    quote:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
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

function customPagination(index, className) {
  return `<img src="${SLIDES[index].image}" class="${className} !w-8 !h-8 !rounded !mx-2 object-cover object-center !opacity-50 [&.swiper-pagination-bullet-active]:!opacity-100" />`;
}

export default function TestimonialSection4() {
  return (
    <section className="py-16 bg-black grid place-items-center min-h-screen">
      <div className="container mx-auto">
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
          {SLIDES.map(({ name, companyLogo, role, quote }, key) => (
            <SwiperSlide key={key} className="pb-24">
              <img
                src={companyLogo}
                alt="company logo"
                className="h-24 mx-auto mb-8"
              />
              <Typography
                type="h6"
                className="text-white font-medium mb-16 [text-wrap:_balance] text-center max-w-2xl mx-auto"
              >
                &quot;{quote}&quot;
              </Typography>
              <Typography className="text-white font-medium text-center ">
                {name}
              </Typography>
              <Typography
                type="small"
                className="block text-white/80 text-center"
              >
                {role}
              </Typography>
            </SwiperSlide>
          ))}
          <CustomNavigation />
        </Swiper>
      </div>
    </section>
  );
}

/**
 * This example uses the `swiper` library to create the carousel effect,
 * please make sure to install it before using this example.
 *
 * To install the required dependency, run: `npm install swiper`
 */

"use client";

import * as React from "react";

// swiper
import "swiper/css";
import "swiper/css/navigation";

// @components
import {
  Breadcrumb,
  Button,
  Card,
  IconButton,
  Rating,
  Typography,
} from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";

// @icons
import { Heart, NavArrowRight, NavArrowLeft, HeartSolid } from "iconoir-react";

// @hooks
import { useSwiper } from "swiper/react";

// @utils
import { Navigation } from "swiper/modules";

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
        className="!absolute left-2 top-1/2 z-10 -translate-y-1/2"
      >
        <NavArrowLeft className="h-7 w-7 -translate-x-0.5 stroke-2" />
      </IconButton>
      <IconButton
        isCircular
        size="lg"
        variant="ghost"
        color="secondary"
        onClick={() => swiper.slideNext()}
        className="!absolute right-2 top-1/2 z-10 -translate-y-1/2"
      >
        <NavArrowRight className="h-7 w-7 translate-x-px stroke-2" />
      </IconButton>
    </>
  );
}

const SIZES = ["XS", "S", "M", "L"];

export default function EcommerceSection10() {
  const [selectedSize, setSelectedSize] = React.useState("S");

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <Breadcrumb>
          <Breadcrumb.Link>Store</Breadcrumb.Link>
          <Breadcrumb.Separator />
          <Breadcrumb.Link>Designers</Breadcrumb.Link>
          <Breadcrumb.Separator />
          <Breadcrumb.Link>Pink Blouse</Breadcrumb.Link>
        </Breadcrumb>
        <div className="grid mt-4 gap-10 md:grid-cols-2 grid-cols-1 items-center">
          <div>
            <Card className="py-10">
              <Swiper
                modules={[Navigation]}
                className="relative rounded-lg [&_div.swiper-button-next]:text-background [&_div.swiper-button-prev]:text-background"
              >
                {["/coat-1.png", "/coat-2.png", "/coat-3.png"].map(
                  (img, index) => (
                    <SwiperSlide key={index} className="select-none">
                      <img
                        src={img}
                        alt={`image-${index}`}
                        className="h-[30rem] mx-auto object-cover"
                      />
                    </SwiperSlide>
                  )
                )}
                <CustomNavigation />
              </Swiper>
            </Card>
          </div>
          <div className="text-center">
            <Typography color="default" type="h4" className="mb-6">
              Pink Blouse
            </Typography>
            <Typography color="primary" type="h5">
              $1,290
            </Typography>
            <div className="flex items-center justify-center gap-2 my-8">
              <Rating value={4} color="warning" readonly />
              <Typography className="font-semibold text-foreground">
                100 Reviews
              </Typography>
            </div>
            <Typography className="text-foreground [text-wrap:_balance]">
              There&apos;s nothing I really wanted to do in life that I
              wasn&apos;t able to get good at. That&apos;s my skill. I&apos;m
              not really specifically talented at anything except for the
              ability to learn.
            </Typography>
            <Typography
              type="h6"
              color="default"
              className="mb-4 mt-8 text-center"
            >
              Color
            </Typography>
            <div className="flex justify-center gap-2">
              <div className="h-5 w-5 bg-black rounded" />
              <div className="h-5 w-5 bg-white rounded-[4px] border border-surface" />
              <div className="h-5 w-5 bg-surface rounded-[4px] border border-surface" />
            </div>
            <Typography
              type="h6"
              color="default"
              className="mb-4 mt-8 text-center"
            >
              Size
            </Typography>
            <div className="flex items-center justify-center gap-4">
              {SIZES.map((size) => (
                <Button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  variant={size === selectedSize ? "solid" : "outline"}
                  color={size === selectedSize ? "primary" : "secondary"}
                >
                  {size}
                </Button>
              ))}
            </div>
            <div className="my-6 flex justify-center items-center gap-2">
              <Button size="lg" className="w-full max-w-60">
                Add to Cart
              </Button>
              <IconButton size="lg" variant="outline" color="error">
                <HeartSolid className="w-5 h-5" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import * as React from "react";

// @components
import {
  Card,
  Avatar,
  IconButton,
  Typography,
  Select,
} from "@material-tailwind/react";

// @icons
import {
  CheckCircleSolid,
  SelectFace3d,
  Menu as MenuIcon,
  ViewGrid,
} from "iconoir-react";

const DATA = [
  {
    price: "9,999 NFTs",
    img: "https://v3.material-tailwind.com/nft-1.svg",
    name: "@thedreamytrees",
    title: "Dreamy Trees",
    profileImg: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    desc: "Website visitors today demand a frictionless user experience.",
  },
  {
    price: "3,000 NFTs",
    img: "https://v3.material-tailwind.com/nft-2.svg",
    name: "@3dfaces",
    title: "Face NFTs",
    profileImg: "https://v3.material-tailwind.com/man-profile-1.jpg",
    desc: "Website visitors today demand a frictionless user experience.",
  },
  {
    price: "9,999 NFTs",
    img: "https://v3.material-tailwind.com/nft-3.svg",
    name: "@theplanetsoftheuniverse",
    title: "The Planets Of The Universe",
    profileImg: "https://v3.material-tailwind.com/man-profile-2.jpg",
    desc: "Website visitors today demand a frictionless user experience.",
  },
];

export default function Web3Card4() {
  return (
    <section className="container mx-auto py-16">
      <Card variant="outline" color="secondary" className="shadow-none">
        <Card.Header className="p-6 w-full flex items-start justify-between gap-6 flex-wrap m-0">
          <div>
            <Typography as="h1" type="h5" color="default" className="mb-1">
              Trending Collections
            </Typography>
            <Typography
              type="lead"
              className="text-foreground max-w-2xl [text-wrap:balance]"
            >
              The most sought-after collections across the entire ecosystem.
            </Typography>
          </div>
          <div className="flex items-center flex-wrap gap-2">
            <Select value="Last 24H">
              <Select.Trigger
                className="w-max shrink-0"
                placeholder="Select Date"
              />
              <Select.List>
                <Select.Option value="Last 6H">Last 6H</Select.Option>
                <Select.Option value="Last 12H">Last 12H</Select.Option>
                <Select.Option value="Last 24H">Last 24H</Select.Option>
              </Select.List>
            </Select>
            <IconButton variant="outline" color="secondary">
              <MenuIcon className="w-4 h-4" />
            </IconButton>
            <IconButton variant="outline" color="secondary">
              <ViewGrid className="w-4 h-4" />
            </IconButton>
          </div>
        </Card.Header>
        <Card.Body className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-6 pb-6 pt-0">
          {DATA.map(({ price, img, name, title, profileImg, desc }, key) => (
            <Card key={key} className="relative">
              <img
                src={img}
                alt={name}
                className="h-full absolute inset-0 w-full object-cover object-center"
              />
              <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 to-bg-black/20" />
              <Card.Body className="relative z-10 h-[28rem] flex flex-col justify-between p-6">
                <Typography
                  type="small"
                  className="font-semibold flex items-center gap-2 text-white"
                >
                  <SelectFace3d className="h-4 w-4" />
                  Collection
                </Typography>
                <div>
                  <Typography
                    type="h6"
                    className="mb-1 flex items-center gap-2 text-white"
                  >
                    {title}
                    <CheckCircleSolid className="h-5 w-5 text-info" />
                  </Typography>
                  <Typography className="text-white/80">{desc}</Typography>
                  <div className="flex items-center flex-wrap gap-y-4 justify-between mt-4">
                    <div className="flex gap-2 items-center">
                      <Avatar size="xs" src={profileImg} alt={name} />
                      <Typography
                        type="small"
                        className="font-semibold text-white block"
                      >
                        {name}
                      </Typography>
                    </div>
                    <Typography
                      type="small"
                      className="font-semibold text-white block"
                    >
                      {price}
                    </Typography>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Card.Body>
      </Card>
    </section>
  );
}

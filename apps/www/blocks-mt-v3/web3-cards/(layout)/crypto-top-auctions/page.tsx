"use client";

import * as React from "react";

// @components
import {
  Card,
  Avatar,
  Button,
  IconButton,
  Typography,
  Select,
  Chip,
} from "@material-tailwind/react";

// @icons
import { ViewGrid, Menu as MenuIcon } from "iconoir-react";

const DATA = [
  {
    img: "https://v3.material-tailwind.com/nft-1.svg",
    name: "@thedreamytrees",
    desc: "Owner",
    profileImg: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    price: "1,3 BTC",
    time: "23h:03m:33s ",
  },
  {
    img: "https://v3.material-tailwind.com/nft-2.svg",
    name: "@lindemichael",
    desc: "Creator",
    profileImg: "https://v3.material-tailwind.com/man-profile-1.jpg",
    price: "0,4 BTC",
    time: "23h:03m:33s ",
  },
  {
    img: "https://v3.material-tailwind.com/nft-3.svg",
    name: "@mishastam",
    desc: "Owner",
    profileImg: "https://v3.material-tailwind.com/man-profile-2.jpg",
    price: "0,3 BTC",
    time: "23h:03m:33s ",
  },
];

export default function Web3Card3() {
  return (
    <section className="container mx-auto py-16">
      <Card variant="outline" color="secondary" className="shadow-none">
        <Card.Header className="p-6 w-full flex items-start justify-between gap-6 flex-wrap m-0">
          <div>
            <Typography as="h1" type="h5" color="default" className="mb-1">
              Top Auctions
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
            <Select value="Last 24H">
              <Select.Trigger
                className="w-max shrink-0"
                placeholder="Category"
              />
              <Select.List>
                <Select.Option value="Category 1">Category 1</Select.Option>
                <Select.Option value="Category 2">Category 2</Select.Option>
                <Select.Option value="Category 3">Category 3</Select.Option>
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
          {DATA.map(({ img, name, desc, profileImg, price, time }, key) => (
            <Card key={key} className="overflow-hidden">
              <Card.Header className="m-0 w-full relative rounded-none">
                <img
                  src={img}
                  alt={name}
                  className="h-80 w-full relative object-cover object-center"
                />
                <Chip
                  size="lg"
                  className="shadow-none bottom-4 flex items-center gap-2 bg-white/70 border-white/50 backdrop-blur backdrop-saturate-200 absolute left-4 py-1.5 px-2.5"
                >
                  <Chip.Icon className="translate-x-0 w-7 h-7">
                    <Avatar
                      src={profileImg}
                      alt={name}
                      className="w-full h-full min-w-full min-h-full"
                    />
                  </Chip.Icon>
                  <Chip.Label className="text-black my-0 ml-0 mr-3">
                    <Typography
                      type="small"
                      className="block leading-none text-xs font-semibold"
                    >
                      {name}
                    </Typography>
                    <Typography
                      type="small"
                      className="block leading-none text-xs text-foreground"
                    >
                      {desc}
                    </Typography>
                  </Chip.Label>
                </Chip>
              </Card.Header>
              <Card.Body className="p-6">
                <div className="flex items-center gap-4 mb-4 justify-between">
                  <Typography type="small" className="text-foreground block">
                    Current bid
                  </Typography>
                  <Typography
                    type="small"
                    color="default"
                    className="block font-semibold"
                  >
                    <span className="text-foreground font-normal">Ends In</span>
                    &nbsp;{time}
                  </Typography>
                </div>
                <div className="flex items-end gap-4 justify-between">
                  <div className="flex shrink-0 items-center gap-1.5">
                    <img
                      src="https://v3.material-tailwind.com/icon/eth.svg"
                      alt="ethereum"
                      className="w-5 h-5"
                    />
                    <Typography type="h6" color="default">
                      {price}
                    </Typography>
                  </div>
                  <Button variant="outline" color="secondary" size="sm">
                    Place Bid
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Card.Body>
      </Card>
    </section>
  );
}

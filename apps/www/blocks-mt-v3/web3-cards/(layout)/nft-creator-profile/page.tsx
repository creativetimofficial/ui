"use client";

import * as React from "react";

// @components
import {
  Card,
  Avatar,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";

// @icons
import { CheckCircleSolid, HeartSolid, Menu, ViewGrid } from "iconoir-react";

const DATA = [
  {
    img: "https://v3.material-tailwind.com/nft-1.svg",
    name: "@thedreamytrees",
    tokenId: "876",
    price: "1,6 ETH",
  },
  {
    img: "https://v3.material-tailwind.com/nft-2.svg",
    name: "@lindemichael",
    tokenId: "877",
    price: "0,9 ETH",
  },
  {
    img: "https://v3.material-tailwind.com/nft-3.svg",
    name: "@mishastam",
    tokenId: "878",
    price: "1,3 ETH",
  },
];

export default function Web3Card2() {
  return (
    <section className="container mx-auto py-16">
      <Card variant="outline" color="secondary" className="shadow-none">
        <Card.Header className="p-6 w-full flex items-start justify-between gap-6 flex-wrap m-0">
          <div>
            <Avatar
              src="https://v3.material-tailwind.com/woman-profile-1.jpg"
              alt="emma"
              size="sm"
            />
            <Typography
              as="h1"
              type="h5"
              color="default"
              className="mb-1 mt-4 flex items-center gap-2"
            >
              Emma <CheckCircleSolid className="w-5 h-5 text-info" />
            </Typography>
            <Typography
              type="lead"
              className="text-foreground max-w-2xl [text-wrap:balance]"
            >
              130 Collections
            </Typography>
          </div>
          <div className="flex items-center gap-2">
            <IconButton variant="outline" color="secondary">
              <Menu className="w-4 h-4" />
            </IconButton>
            <IconButton variant="outline" color="secondary">
              <ViewGrid className="w-4 h-4" />
            </IconButton>
            <Button>Follow Me</Button>
          </div>
        </Card.Header>
        <Card.Body className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-6">
          {DATA.map(({ img, name, tokenId, price }, key) => (
            <Card key={key}>
              <Card.Header className="w-full m-0 p-4 relative">
                <img
                  src={img}
                  alt={name}
                  className="h-72 w-full object-cover object-center rounded-md"
                />
                <div className="absolute flex gap-2 items-center right-6 top-6">
                  <Typography
                    type="small"
                    className="block border font-semibold text-black border-white/50 text-xs rounded bg-white/70 backdrop-blur backdrop-saturate-200 px-2.5 py-1.5"
                  >
                    Auction ends in 23h:03m:33s
                  </Typography>
                  <IconButton
                    size="xs"
                    className="bg-white hover:bg-white rounded border-white hover:border-white text-black"
                  >
                    <HeartSolid className="w-3.5 h-3.5" />
                  </IconButton>
                </div>
              </Card.Header>
              <Card.Body className="px-4 pb-4 pt-0">
                <div className="flex mb-2 items-center gap-4 justify-between">
                  <Typography type="small" className="text-foreground block">
                    Cosmic creatures
                  </Typography>
                  <div className="flex gap-1 items-center">
                    <Typography type="small" className="text-foreground block">
                      Current bid
                    </Typography>
                    <div className="flex gap-1">
                      <img
                        src="https://v3.material-tailwind.com/icon/eth.svg"
                        alt="ethereum"
                        className="w-4 h-4"
                      />
                      <Typography
                        type="small"
                        color="default"
                        className="font-semibold block"
                      >
                        {price}
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 justify-between">
                  <Typography as="h3" type="h6" color="default">
                    Picture #{tokenId}
                  </Typography>
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

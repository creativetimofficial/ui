"use client";

import * as React from "react";

// @components
import { Card, Avatar, Typography } from "@material-tailwind/react";

const DATA = [
  {
    img: "https://v3.material-tailwind.com/pixel-art-1.svg",
    name: "yqaw...09v",
    tokenId: "475",
    profession: "trader",
    profileImg: "https://v3.material-tailwind.com/woman-profile-1.jpg",
  },
  {
    img: "https://v3.material-tailwind.com/pixel-art-2.svg",
    name: "yqaw...09v",
    tokenId: "476",
    profession: "owner",
    profileImg: "https://v3.material-tailwind.com/man-profile-1.jpg",
  },
  {
    img: "https://v3.material-tailwind.com/pixel-art-3.svg",
    name: "yqaw...09v",
    tokenId: "477",
    profession: "trader",
    profileImg: "https://v3.material-tailwind.com/man-profile-1.jpg",
  },
];

export default function Web3Card1() {
  return (
    <section className="container mx-auto py-16">
      <Card variant="outline" color="secondary" className="shadow-none">
        <Card.Header className="p-6 w-full m-0">
          <Avatar
            src="https://v3.material-tailwind.com/pixel-art-1.svg"
            alt="pixel art collection"
            size="sm"
          />
          <Typography as="h1" type="h5" color="default" className="mb-1 mt-4">
            Pixelated Art
          </Typography>
          <Typography
            type="lead"
            className="text-foreground max-w-2xl [text-wrap:balance]"
          >
            These NFTs capture the essence of imagination and innovation,
            offering a glimpse into the boundless potential of the digital
            world.
          </Typography>
        </Card.Header>
        <Card.Body className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-6">
          {DATA.map(({ img, name, tokenId, profession, profileImg }, key) => (
            <Card key={key}>
              <Card.Header className="w-full m-0 p-4">
                <img
                  src={img}
                  alt={name}
                  className="h-64 w-full object-cover object-center rounded-md"
                />
              </Card.Header>
              <Card.Body className="px-6 pb-4 pt-0">
                <Typography type="small" className="text-foreground mb-1 block">
                  Pixelated Art
                </Typography>
                <Typography as="h3" type="h6" color="default">
                  Picture #{tokenId}
                </Typography>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex gap-4 items-center">
                    <Avatar size="xs" src={profileImg} alt={name} />
                    <Typography type="small" className="text-foreground block">
                      {name}
                    </Typography>
                  </div>
                  <Typography
                    type="small"
                    color="primary"
                    className="block capitalize"
                  >
                    {profession}
                  </Typography>
                </div>
              </Card.Body>
            </Card>
          ))}
        </Card.Body>
      </Card>
    </section>
  );
}

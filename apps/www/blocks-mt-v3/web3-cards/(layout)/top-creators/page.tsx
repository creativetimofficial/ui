"use client";

import * as React from "react";

// @components
import { Card, Avatar, Button, Typography } from "@material-tailwind/react";

const DATA = [
  {
    tokeId: "#1",
    profileImg: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    name: "Tina Andrew",
    desc: "Creator",
    imgs: ["/nft-1.svg", "/nft-2.svg", "/nft-4.svg"],
  },
  {
    tokeId: "#2",
    profileImg: "https://v3.material-tailwind.com/man-profile-1.jpg",
    name: "Linde Michael",
    desc: "Creator",
    imgs: ["/pixel-art-1.svg", "/pixel-art-2.svg", "/pixel-art-3.svg"],
  },
  {
    tokeId: "#3",
    profileImg: "https://v3.material-tailwind.com/man-profile-2.jpg",
    name: "Misha Stam",
    desc: "Creator",
    imgs: ["/nft-3.svg", "/nft-3.svg", "/nft-3.svg"],
  },
];

export default function Web3Card5() {
  const [timeFrame, setTimeFrame] = React.useState("month");

  return (
    <section className="container mx-auto py-16">
      <Card variant="outline" color="secondary" className="shadow-none">
        <Card.Header className="p-6 w-full flex items-start justify-between gap-6 flex-wrap m-0">
          <div>
            <Typography as="h1" type="h5" color="default" className="mb-1">
              Top Creators
            </Typography>
            <Typography
              type="lead"
              className="text-foreground max-w-2xl [text-wrap:balance]"
            >
              The most sought-after collections across the entire ecosystem.
            </Typography>
          </div>
          <div className="flex items-center flex-wrap gap-2">
            <Button
              size="sm"
              variant={timeFrame === "hour" ? "solid" : "outline"}
              color={timeFrame === "hour" ? "primary" : "secondary"}
              onClick={() => setTimeFrame("hour")}
            >
              Last 24h
            </Button>
            <Button
              size="sm"
              variant={timeFrame === "week" ? "solid" : "outline"}
              color={timeFrame === "week" ? "primary" : "secondary"}
              onClick={() => setTimeFrame("week")}
            >
              Last week
            </Button>
            <Button
              size="sm"
              variant={timeFrame === "month" ? "solid" : "outline"}
              color={timeFrame === "month" ? "primary" : "secondary"}
              onClick={() => setTimeFrame("month")}
            >
              Last month
            </Button>
          </div>
        </Card.Header>
        <Card.Body className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-6 pb-6 pt-0">
          {DATA.map(({ tokeId, profileImg, name, desc, imgs }, key) => (
            <Card key={key} className="flex flex-col justify-between">
              <Card.Header className="w-full m-0 p-4">
                <Typography color="default" className="font-semibold">
                  {tokeId}
                </Typography>
                <div className="mt-4 flex flex-wrap gap-4 items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Avatar src={profileImg} alt={name} />
                    <div className="leading-none">
                      <Typography color="default" className="font-semibold">
                        {name}
                      </Typography>
                      <Typography type="small" className="text-foreground">
                        {desc}
                      </Typography>
                    </div>
                  </div>
                  <Button size="xs" variant="outline" color="secondary">
                    See Collection
                  </Button>
                </div>
              </Card.Header>
              <Card.Body className="p-4 grid grid-cols-3 gap-4">
                {imgs.map((img, key) => (
                  <img
                    key={key}
                    src={img}
                    alt={`nft-${key}`}
                    className="h-full w-full min-h-24 object-center object-cover rounded-lg"
                  />
                ))}
              </Card.Body>
            </Card>
          ))}
        </Card.Body>
      </Card>
    </section>
  );
}

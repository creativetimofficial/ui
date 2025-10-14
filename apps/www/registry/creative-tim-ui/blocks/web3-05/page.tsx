"use client"

import { useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/creative-tim-ui/ui/avatar"
import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Card, CardContent, CardHeader } from "@/registry/creative-tim-ui/ui/card"

const DATA = [
  {
    tokenId: "#1",
    profileImg: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    name: "Tina Andrew",
    desc: "Creator",
    imgs: [
      "https://v3.material-tailwind.com/nft-1.svg",
      "https://v3.material-tailwind.com/nft-2.svg",
      "https://v3.material-tailwind.com/nft-4.svg",
    ],
  },
  {
    tokenId: "#2",
    profileImg: "https://v3.material-tailwind.com/man-profile-1.jpg",
    name: "Linde Michael",
    desc: "Creator",
    imgs: [
      "https://v3.material-tailwind.com/pixel-art-1.svg",
      "https://v3.material-tailwind.com/pixel-art-2.svg",
      "https://v3.material-tailwind.com/pixel-art-3.svg",
    ],
  },
  {
    tokenId: "#3",
    profileImg: "https://v3.material-tailwind.com/man-profile-2.jpg",
    name: "Misha Stam",
    desc: "Creator",
    imgs: [
      "https://v3.material-tailwind.com/nft-3.svg",
      "https://v3.material-tailwind.com/nft-3.svg",
      "https://v3.material-tailwind.com/nft-3.svg",
    ],
  },
]

export default function Web305() {
  const [timeFrame, setTimeFrame] = useState("month")

  return (
    <section className="container mx-auto py-16">
      <Card className="border shadow-sm">
        <CardHeader className="p-6 flex flex-row items-start justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold mb-1">Top Creators</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              The most sought-after collections across the entire ecosystem.
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-2">
            <Button
              size="sm"
              variant={timeFrame === "hour" ? "default" : "outline"}
              onClick={() => setTimeFrame("hour")}
            >
              Last 24h
            </Button>
            <Button
              size="sm"
              variant={timeFrame === "week" ? "default" : "outline"}
              onClick={() => setTimeFrame("week")}
            >
              Last week
            </Button>
            <Button
              size="sm"
              variant={timeFrame === "month" ? "default" : "outline"}
              onClick={() => setTimeFrame("month")}
            >
              Last month
            </Button>
          </div>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-6 pb-6 pt-0">
          {DATA.map(({ tokenId, profileImg, name, desc, imgs }, key) => (
            <Card key={key} className="flex flex-col justify-between">
              <CardHeader className="p-4">
                <p className="font-semibold">{tokenId}</p>
                <div className="mt-4 flex flex-wrap gap-4 items-start justify-between">
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarImage src={profileImg} alt={name} />
                      <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{name}</p>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    See Collection
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4 grid grid-cols-3 gap-4">
                {imgs.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`nft-${idx}`}
                    className="h-full w-full min-h-24 object-center object-cover rounded-lg"
                  />
                ))}
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}

"use client"

import { useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const DATA = [
  {
    tokenId: "#1",
    profileImg: "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400",
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
    profileImg: "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400",
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
        <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-6 p-6">
          <div>
            <h1 className="mb-1 text-2xl font-bold">Top Creators</h1>
            <p className="text-muted-foreground max-w-2xl text-lg">
              The most sought-after collections across the entire ecosystem.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
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
        <CardContent className="grid grid-cols-1 gap-6 px-6 pt-0 pb-6 md:grid-cols-2 lg:grid-cols-3">
          {DATA.map(({ tokenId, profileImg, name, desc, imgs }, key) => (
            <Card key={key} className="flex flex-col justify-between py-4">
              <CardHeader className="px-4 gap-0">
                <p className="font-semibold">{tokenId}</p>
                <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarImage src={profileImg} alt={name} />
                      <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{name}</p>
                      <p className="text-muted-foreground text-sm">{desc}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    See Collection
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="grid grid-cols-3 gap-4 px-4">
                {imgs.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`nft-${idx}`}
                    className="h-full min-h-24 w-full rounded-lg object-cover object-center"
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

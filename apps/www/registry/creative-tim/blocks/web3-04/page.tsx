"use client"

import { Cuboid, Grid3x3, Menu } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const DATA = [
  {
    price: "9,999 NFTs",
    img: "https://v3.material-tailwind.com/nft-1.svg",
    name: "@thedreamytrees",
    title: "Dreamy Trees",
    profileImg: "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400",
    desc: "Website visitors today demand a frictionless user experience.",
  },
  {
    price: "3,000 NFTs",
    img: "https://v3.material-tailwind.com/nft-2.svg",
    name: "@3dfaces",
    title: "Face NFTs",
    profileImg: "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400",
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
]

export default function Web304() {
  return (
    <section className="container mx-auto py-16">
      <Card className="border shadow-sm">
        <CardContent className="p-6">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-6">
            <div>
              <h1 className="mb-1 text-2xl font-bold">Trending Collections</h1>
              <p className="text-muted-foreground max-w-2xl text-lg">
                The most sought-after collections across the entire ecosystem.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Select defaultValue="Last 24H">
                <SelectTrigger className="w-max">
                  <SelectValue placeholder="Select Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Last 6H">Last 6H</SelectItem>
                  <SelectItem value="Last 12H">Last 12H</SelectItem>
                  <SelectItem value="Last 24H">Last 24H</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Grid3x3 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {DATA.map(({ price, img, name, title, profileImg, desc }, key) => (
              <Card key={key} className="relative overflow-hidden">
                <img
                  src={img}
                  alt={name}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 to-black/20" />
                <CardContent className="relative z-10 flex h-[28rem] flex-col justify-between p-6">
                  <Badge
                    variant="secondary"
                    className="w-fit border-white/30 bg-white/20 text-white backdrop-blur"
                  >
                    <Cuboid className="mr-1 h-4 w-4" />
                    Collection
                  </Badge>
                  <div>
                    <h3 className="mb-1 flex items-center gap-2 text-xl font-semibold text-white">
                      {title}
                      <Badge
                        variant="outline"
                        className="border-blue-400 text-blue-400"
                      >
                        ✓
                      </Badge>
                    </h3>
                    <p className="mb-4 text-sm text-gray-300">{desc}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={profileImg} alt={name} />
                          <AvatarFallback>{name[1]}</AvatarFallback>
                        </Avatar>
                        <p className="text-sm text-white">{name}</p>
                      </div>
                      <p className="text-sm font-semibold text-white">
                        {price}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

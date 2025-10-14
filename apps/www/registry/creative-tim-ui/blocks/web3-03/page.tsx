"use client"

import { Menu, Grid3x3 } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/creative-tim-ui/ui/avatar"
import { Badge } from "@/registry/creative-tim-ui/ui/badge"
import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Card, CardContent, CardHeader } from "@/registry/creative-tim-ui/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/creative-tim-ui/ui/select"

const DATA = [
  {
    img: "https://v3.material-tailwind.com/nft-1.svg",
    name: "@thedreamytrees",
    desc: "Owner",
    profileImg: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    price: "1,3 BTC",
    time: "23h:03m:33s",
  },
  {
    img: "https://v3.material-tailwind.com/nft-2.svg",
    name: "@lindemichael",
    desc: "Creator",
    profileImg: "https://v3.material-tailwind.com/man-profile-1.jpg",
    price: "0,4 BTC",
    time: "23h:03m:33s",
  },
  {
    img: "https://v3.material-tailwind.com/nft-3.svg",
    name: "@mishastam",
    desc: "Owner",
    profileImg: "https://v3.material-tailwind.com/man-profile-2.jpg",
    price: "0,3 BTC",
    time: "23h:03m:33s",
  },
]

export default function Web303() {
  return (
    <section className="container mx-auto py-16">
      <Card className="border shadow-sm">
        <CardHeader className="p-6 flex flex-row items-start justify-between gap-6 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold mb-1">Top Auctions</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              The most sought-after collections across the entire ecosystem.
            </p>
          </div>
          <div className="flex items-center flex-wrap gap-2">
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
            <Select defaultValue="Category 1">
              <SelectTrigger className="w-max">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Category 1">Category 1</SelectItem>
                <SelectItem value="Category 2">Category 2</SelectItem>
                <SelectItem value="Category 3">Category 3</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Menu className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Grid3x3 className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-6 pb-6 pt-0">
          {DATA.map(({ img, name, desc, profileImg, price, time }, key) => (
            <Card key={key} className="overflow-hidden">
              <CardHeader className="p-0 relative">
                <img
                  src={img}
                  alt={name}
                  className="h-80 w-full object-cover object-center"
                />
                <Badge
                  variant="secondary"
                  className="absolute bottom-4 left-4 bg-white/70 backdrop-blur border-white/50 flex items-center gap-2"
                >
                  <Avatar className="h-7 w-7">
                    <AvatarImage src={profileImg} alt={name} />
                    <AvatarFallback>{name[1]}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-black">{name}</span>
                    <span className="text-xs text-muted-foreground">{desc}</span>
                  </div>
                </Badge>
              </CardHeader>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Current bid</p>
                    <p className="text-lg font-bold">{price}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Auction ends in</p>
                    <p className="text-sm font-semibold">{time}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}

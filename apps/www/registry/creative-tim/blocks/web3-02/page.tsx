"use client"

import { Grid3x3, Heart, Menu } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

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
]

export default function Web302() {
  return (
    <section className="container mx-auto py-16">
      <Card className="border shadow-sm">
        <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-6 p-6">
          <div>
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400"
                alt="emma"
              />
              <AvatarFallback>EM</AvatarFallback>
            </Avatar>
            <h1 className="mt-4 mb-1 flex items-center gap-2 text-2xl font-bold">
              Emma
              <Badge
                variant="outline"
                className="border-blue-500 text-blue-500"
              >
                ✓
              </Badge>
            </h1>
            <p className="text-muted-foreground text-lg">130 Collections</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <Menu className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Grid3x3 className="h-4 w-4" />
            </Button>
            <Button>Follow Me</Button>
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map(({ img, name, tokenId, price }, key) => (
            <Card key={key} className="py-4">
              <CardHeader className="relative px-4 gap-0">
                <img
                  src={img}
                  alt={name}
                  className="h-72 w-full rounded-md object-cover object-center"
                />
                <div className="absolute top-6 right-6 flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="border-white/50 bg-white/70 text-black backdrop-blur"
                  >
                    Auction ends in 23h:03m:33s
                  </Badge>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-7 w-7 bg-white text-black hover:bg-white"
                  >
                    <Heart className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="px-4">
                <div className="mb-2 flex items-center justify-between gap-4">
                  <p className="text-muted-foreground text-sm">
                    Cosmic creatures
                  </p>
                  <div className="flex items-center gap-1">
                    <p className="text-muted-foreground text-sm">Current bid</p>
                    <div className="flex gap-1">
                      <img
                        src="https://v3.material-tailwind.com/icon/eth.svg"
                        alt="ethereum"
                        className="h-4 w-4"
                      />
                      <p className="text-sm font-semibold">{price}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold">Picture #{tokenId}</h3>
                  <Button size="sm">Place a Bid</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}

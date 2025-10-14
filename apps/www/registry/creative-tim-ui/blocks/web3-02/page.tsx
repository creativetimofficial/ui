"use client"

import { Heart, Menu, Grid3x3 } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/creative-tim-ui/ui/avatar"
import { Badge } from "@/registry/creative-tim-ui/ui/badge"
import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Card, CardContent, CardHeader } from "@/registry/creative-tim-ui/ui/card"

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
        <CardHeader className="p-6 flex flex-row items-start justify-between gap-6 flex-wrap">
          <div>
            <Avatar className="h-10 w-10">
              <AvatarImage
                src="https://v3.material-tailwind.com/woman-profile-1.jpg"
                alt="emma"
              />
              <AvatarFallback>EM</AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold mt-4 mb-1 flex items-center gap-2">
              Emma
              <Badge variant="outline" className="border-blue-500 text-blue-500">
                ✓
              </Badge>
            </h1>
            <p className="text-lg text-muted-foreground">130 Collections</p>
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
        <CardContent className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 p-6">
          {DATA.map(({ img, name, tokenId, price }, key) => (
            <Card key={key}>
              <CardHeader className="p-4 relative">
                <img
                  src={img}
                  alt={name}
                  className="h-72 w-full object-cover object-center rounded-md"
                />
                <div className="absolute flex gap-2 items-center right-6 top-6">
                  <Badge
                    variant="secondary"
                    className="bg-white/70 backdrop-blur text-black border-white/50"
                  >
                    Auction ends in 23h:03m:33s
                  </Badge>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-7 w-7 bg-white hover:bg-white text-black"
                  >
                    <Heart className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="px-4 pb-4 pt-0">
                <div className="flex mb-2 items-center gap-4 justify-between">
                  <p className="text-sm text-muted-foreground">Cosmic creatures</p>
                  <div className="flex gap-1 items-center">
                    <p className="text-sm text-muted-foreground">Current bid</p>
                    <div className="flex gap-1">
                      <img
                        src="https://v3.material-tailwind.com/icon/eth.svg"
                        alt="ethereum"
                        className="w-4 h-4"
                      />
                      <p className="text-sm font-semibold">{price}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 justify-between">
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

"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/creative-tim-ui/ui/avatar"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/creative-tim-ui/ui/card"

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
]

export default function Web301() {
  return (
    <section className="container mx-auto py-16">
      <Card className="border shadow-sm">
        <CardHeader className="p-6">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src="https://v3.material-tailwind.com/pixel-art-1.svg"
              alt="pixel art collection"
            />
            <AvatarFallback>PA</AvatarFallback>
          </Avatar>
          <h1 className="mt-4 mb-1 text-2xl font-bold">Pixelated Art</h1>
          <p className="text-muted-foreground max-w-2xl text-lg">
            These NFTs capture the essence of imagination and innovation,
            offering a glimpse into the boundless potential of the digital
            world.
          </p>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map(({ img, name, tokenId, profession, profileImg }, key) => (
            <Card key={key}>
              <CardHeader className="p-4">
                <img
                  src={img}
                  alt={name}
                  className="h-64 w-full rounded-md object-cover object-center"
                />
              </CardHeader>
              <CardContent className="px-6 pt-0 pb-4">
                <p className="text-muted-foreground mb-1 text-sm">
                  Pixelated Art
                </p>
                <h3 className="text-lg font-semibold">Picture #{tokenId}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={profileImg} alt={name} />
                      <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>
                    <p className="text-muted-foreground text-sm">{name}</p>
                  </div>
                  <p className="text-primary text-sm capitalize">
                    {profession}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}

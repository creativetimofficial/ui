"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/creative-tim-ui/ui/avatar"
import { Badge } from "@/registry/creative-tim-ui/ui/badge"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/creative-tim-ui/ui/card"

const POSTS = [
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
    tag: "House",
    title: "Shared Coworking",
    desc: "Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.",
    date: "Posted on 26 May",
    author: {
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop",
      name: "Otto Gonzalez",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop",
    tag: "Office",
    title: "Really Housekeeping",
    desc: "Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.",
    date: "Posted on 03 May",
    author: {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop",
      name: "Chriss Smahos",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop",
    tag: "Hub",
    title: "Coworking Office",
    desc: "Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.",
    date: "Posted on 12 April",
    author: {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop",
      name: "Elijah Miller",
    },
  },
]

export default function SimpleBlogContent01() {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map(({ img, tag, title, desc, date, author }) => (
          <Card key={title} className="overflow-hidden">
            <CardHeader className="p-4">
              <div className="relative h-60 w-full overflow-hidden rounded-lg">
                <img
                  src={img}
                  alt={title}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </CardHeader>
            <CardContent className="px-6 pt-2 pb-0">
              <Badge variant="secondary" className="mb-2">
                {tag}
              </Badge>
              <h3 className="mb-2 text-xl font-semibold">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </CardContent>
            <CardFooter className="flex items-center gap-3 p-6">
              <Avatar>
                <AvatarImage src={author.img} alt={author.name} />
                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="space-y-0.5">
                <p className="text-sm font-semibold">{author.name}</p>
                <p className="text-muted-foreground text-xs">{date}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

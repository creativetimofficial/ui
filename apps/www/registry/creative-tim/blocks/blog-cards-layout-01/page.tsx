"use client"

import { ArrowDown } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const POSTS = [
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
    tag: "Enterprise",
    title: "Autodesk and Figma looks to future of 3D printing with Project Escher",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling.",
    date: "10 September 2022",
    author: {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop",
      name: "Ryan Samuel",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop",
    tag: "Startups",
    title: "Bolt launching cross-platform service this week",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling.",
    date: "12 September 2022",
    author: {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&auto=format&fit=crop",
      name: "Nora Hazel",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop",
    tag: "Trending",
    title: "6 insights into the French Fashion landscape view",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling.",
    date: "16 September 2022",
    author: {
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop",
      name: "Otto Gonzalez",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
    tag: "Enterprise",
    title: "Autodesk looks to future of 3D printing with Project Escher",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling.",
    date: "18 September 2022",
    author: {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop",
      name: "Ryan Samuel",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&auto=format&fit=crop",
    tag: "Lifestyle",
    title: "Lyft launching cross-platform service this week",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling.",
    date: "18 September 2022",
    author: {
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&auto=format&fit=crop",
      name: "Nora Hazel",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&auto=format&fit=crop",
    tag: "Startups",
    title: "6 insights into the French Fashion landscape",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling.",
    date: "22 September 2022",
    author: {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop",
      name: "Otto Gonzalez",
    },
  },
]

export default function BlogCardsLayout01() {
  return (
    <section className="py-16">
      <div className="container mx-auto mb-12 text-center">
        <p className="text-primary mb-2 text-sm font-semibold">
          Latest Blog Posts
        </p>
        <h2 className="my-4 text-3xl font-bold">Blog Posts</h2>
        <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
          This is the paragraph where you can write more details about blogs.
          Keep you user engaged by providing meaningful information.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map(({ img, tag, title, desc, date, author }) => (
          <Card key={title} className="overflow-hidden py-0">
            <CardHeader className="p-3 pb-0">
              <img
                src={img}
                alt={title}
                className="h-56 w-full rounded-lg object-cover object-center"
              />
            </CardHeader>
            <CardContent className="px-6">
              <Badge variant="secondary" className="mb-2">
                {tag}
              </Badge>
              <CardTitle className="mb-2 text-xl">{title}</CardTitle>
              <CardDescription>{desc}</CardDescription>
            </CardContent>
            <CardFooter className="flex items-center gap-3 p-6 pt-0">
              <Avatar className="h-8 w-8">
                <AvatarImage src={author.img} alt={author.name} />
                <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-sm font-semibold">{author.name}</p>
                <p className="text-muted-foreground text-xs">{date}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button variant="ghost">
          <ArrowDown className="mr-2 h-4 w-4" />
          View More
        </Button>
      </div>
    </section>
  )
}

"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const POSTS = [
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
    tag: "Enterprise",
    title: "Autodesk looks to future of 3D printing with Project",
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
    title: "Lyft launching cross-platform service this week",
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
    title: "6 insights into the French Fashion landscape",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling.",
    date: "16 September 2022",
    author: {
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop",
      name: "Otto Gonzalez",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
    tag: "Lifestyle",
    title: "Autodesk looks to future of 3D printing with Project",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling.",
    date: "18 September 2022",
    author: {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop",
      name: "Ryan Samuel",
    },
  },
]

export default function BlogRectangularImages01() {
  return (
    <section className="py-16">
      <div className="container my-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
        {POSTS.map(({ img, tag, title, desc, date, author }) => (
          <div key={title} className="grid items-center gap-4 sm:grid-cols-2">
            <div className="h-full max-h-72 overflow-hidden rounded-lg lg:max-h-full">
              <img
                src={img}
                alt={title}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="space-y-4 p-2">
              <Badge variant="secondary">{tag}</Badge>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
              <div className="mt-6 flex items-center gap-3 md:mt-8">
                <Avatar>
                  <AvatarImage src={author.img} alt={author.name} />
                  <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <p className="mb-1 text-sm font-semibold">{author.name}</p>
                  <p className="text-muted-foreground text-xs">{date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const POSTS = [
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
    category: "Otto Gonzalez",
    title: "Autodesk looks to future of 3D printing with Project",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling.",
    tags: ["Product", "Design", "UX"],
  },
  {
    img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&auto=format&fit=crop",
    category: "Ryan Samuel",
    title: "Lyft launching cross-platform service this week",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling.",
    tags: ["Product", "Design", "UX"],
  },
  {
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&auto=format&fit=crop",
    category: "Nora Hazel",
    title: "6 insights into the French Fashion landscape",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling.",
    tags: ["Product", "Design", "UX"],
  },
]

export default function BlogPostPreviewTags01() {
  return (
    <section className="py-16">
      <div className="container mx-auto mb-16 text-center">
        <p className="text-primary mb-2 text-sm font-semibold">
          Latest Blog Posts
        </p>
        <h2 className="my-4 text-3xl font-bold">Explore Our Places</h2>
        <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
          This is the paragraph where you can write more details about blogs.
          Keep you user engaged by providing meaningful information.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 items-start gap-16 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map(({ img, category, title, desc, tags }) => (
          <div key={title} className="space-y-6">
            <div className="relative h-56 w-full overflow-hidden rounded-lg shadow-lg">
              <img
                src={img}
                alt={title}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="space-y-4">
              <p className="text-primary text-sm font-semibold">{category}</p>
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="text-muted-foreground">{desc}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-24 text-center">
        <Button>View More</Button>
      </div>
    </section>
  )
}

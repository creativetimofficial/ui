"use client"

import { useState, useRef } from "react"
import { Pause, Play } from "lucide-react"

import { Badge } from "@/registry/creative-tim-ui/ui/badge"
import { Button } from "@/registry/creative-tim-ui/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/creative-tim-ui/ui/card"

const PRODUCTS = [
  {
    id: "card-1",
    media: {
      src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=400&auto=format&fit=crop",
      alt: "Satin Wrap Dress product thumbnail",
    },
    eyebrow: "Maison Aurore",
    title: "Satin Wrap Dress",
    description: "Fluid silhouette with tie waist and soft sheen.",
    price: "$215.00",
    badges: [{ label: "New", variant: "default" as const }],
    actions: [
      { label: "Add to Bag", variant: "default" as const },
      { label: "Details", variant: "ghost" as const },
    ],
  },
  {
    id: "card-2",
    media: {
      src: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=400&auto=format&fit=crop",
      alt: "Structured Blazer product thumbnail",
    },
    eyebrow: "Atelier No. 9",
    title: "Structured Blazer",
    description: "Sharp shoulders, single-breasted, polished finish.",
    price: "$329.00",
    badges: [{ label: "Editor's Pick", variant: "secondary" as const }],
    actions: [
      { label: "Add to Bag", variant: "default" as const },
      { label: "Details", variant: "ghost" as const },
    ],
  },
  {
    id: "card-3",
    media: {
      src: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400&auto=format&fit=crop",
      alt: "Chunky Chelsea Boots product thumbnail",
    },
    eyebrow: "Linea Forte",
    title: "Chunky Chelsea Boots",
    description: "Elevated lug sole with elastic side panels.",
    price: "From $180.00",
    badges: [{ label: "Bestseller", variant: "outline" as const }],
    actions: [
      { label: "Add to Bag", variant: "default" as const },
      { label: "Details", variant: "ghost" as const },
    ],
  },
]

export default function EcommerceSectionsBlock() {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative w-full overflow-hidden rounded-xl">
      <div className="relative aspect-[16/9] w-full lg:aspect-[21/9]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full rounded-xl object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1558769132-cb1aea3c9412?q=80&w=1920&auto=format&fit=crop"
        >
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-4 bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 hover:text-white lg:left-6 lg:top-6"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>

        <div className="absolute inset-x-0 bottom-0 p-4 lg:p-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {PRODUCTS.map((product) => (
              <Card
                key={product.id}
                className="bg-white/95 backdrop-blur-sm dark:bg-black/80"
              >
                <CardHeader className="border-b pb-4">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={product.media.src}
                      alt={product.media.alt}
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="text-muted-foreground mb-1 text-xs font-medium uppercase tracking-wide">
                        {product.eyebrow}
                      </p>
                      <CardTitle className="text-lg">{product.title}</CardTitle>
                    </div>
                    {product.badges.map((badge, index) => (
                      <Badge key={index} variant={badge.variant}>
                        {badge.label}
                      </Badge>
                    ))}
                  </div>
                  <CardDescription className="line-clamp-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-xl font-semibold">{product.price}</p>
                </CardContent>
                <CardFooter className="flex gap-2 pt-0">
                  {product.actions.map((action, index) => (
                    <Button
                      key={index}
                      variant={action.variant}
                      size="sm"
                      className="flex-1"
                    >
                      {action.label}
                    </Button>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-6 text-center lg:mt-8">
            <div className="mx-auto max-w-md">
              <Button variant="secondary" size="lg" className="w-full">
                Browse Full Collection
              </Button>
              <p className="text-muted-foreground mt-2 text-sm">
                See every look, colorway, and size currently in stock.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

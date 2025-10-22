"use client"

import { useEffect, useRef, useState } from "react"
import { Pause, Play, ShoppingBag, Shuffle } from "lucide-react"

import { Button } from "@/components/ui/button"

const PRODUCTS = [
  {
    id: "card-1",
    media: {
      src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=400&h=400&auto=format&fit=crop",
      alt: "Satin Wrap Dress product thumbnail",
    },
    eyebrow: "Maison Aurore",
    title: "Satin Wrap Dress",
    description: "Fluid silhouette with tie waist and soft sheen.",
    price: "$215.00",
  },
  {
    id: "card-2",
    media: {
      src: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=400&h=400&auto=format&fit=crop",
      alt: "Structured Blazer product thumbnail",
    },
    eyebrow: "Atelier No. 9",
    title: "Structured Blazer",
    description: "Sharp shoulders, single-breasted, polished finish.",
    price: "$329.00",
  },
  {
    id: "card-3",
    media: {
      src: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=400&h=400&auto=format&fit=crop",
      alt: "Chunky Chelsea Boots product thumbnail",
    },
    eyebrow: "Linea Forte",
    title: "Chunky Chelsea Boots",
    description: "Elevated lug sole with elastic side panels.",
    price: "From $180.00",
  },
]

export default function EcommerceSectionsBlock() {
  const [isPlaying, setIsPlaying] = useState(true)
  const playerRef = useRef<any>(null)
  const [playerReady, setPlayerReady] = useState(false)

  useEffect(() => {
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    ;(window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player("youtube-player", {
        videoId: "YCIuEU2y8XI",
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: "YCIuEU2y8XI",
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: () => {
            setPlayerReady(true)
          },
        },
      })
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
      }
    }
  }, [])

  const togglePlay = () => {
    if (playerRef.current && playerReady) {
      if (isPlaying) {
        playerRef.current.pauseVideo()
      } else {
        playerRef.current.playVideo()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="relative w-full overflow-hidden rounded-xl">
      <div className="relative aspect-[16/9] w-full lg:aspect-[16/9]">
        <div
          id="youtube-player"
          className="absolute inset-0 h-full w-full rounded-xl"
          style={{
            pointerEvents: "none",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <Button
          variant="outline"
          size="icon"
          className="absolute top-4 left-4 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 hover:text-white lg:top-6 lg:left-6"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>

        <div className="absolute inset-x-0 bottom-0 space-y-6 p-4 lg:p-8">
          <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-lg dark:bg-white/95"
              >
                <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={product.media.src}
                    alt={product.media.alt}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                    {product.eyebrow}
                  </p>
                  <h3 className="truncate font-semibold text-gray-900">
                    {product.title}
                  </h3>
                  <p className="font-semibold text-gray-900">{product.price}</p>
                </div>

                <div className="flex flex-shrink-0 items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-600 hover:text-gray-900"
                  >
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-gray-600 hover:text-gray-900"
                  >
                    <Shuffle className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white/80 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              VIEW ALL PRODUCTS
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

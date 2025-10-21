"use client"

import { Heart, ShoppingCart, Star } from "lucide-react"

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

export default function CardEcommerce() {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="relative">
        <div className="aspect-video w-full bg-gradient-to-br from-amber-400 to-orange-500" />
        <Badge className="absolute top-2 right-2">New</Badge>
      </div>
      <CardHeader>
        <CardTitle>Premium Wireless Headphones</CardTitle>
        <CardDescription>
          High-quality audio with active noise cancellation
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <Star className="h-4 w-4" />
            <span className="text-muted-foreground text-sm">(128)</span>
          </div>
          <div className="text-2xl font-bold">$299</div>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button className="flex-1">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
        <Button variant="outline" size="icon">
          <Heart className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

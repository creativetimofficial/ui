"use client"

import { Calendar, Heart, ShoppingCart, Star } from "lucide-react"

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

export default function CardDemo() {
  return (
    <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Plain Card */}
      <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground text-sm">
            This is a plain card with simple content. Perfect for displaying
            basic information.
          </p>
        </CardContent>
      </Card>

      {/* Card with Title, Description, and Button */}
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            This is a brief description of the card content.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">
            More detailed information goes here in the card content area.
          </p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Learn More</Button>
        </CardFooter>
      </Card>

      {/* Blog Card */}
      <Card className="overflow-hidden">
        <div className="aspect-video w-full bg-gradient-to-br from-blue-500 to-purple-600" />
        <CardHeader>
          <div className="text-muted-foreground flex items-center gap-2 text-xs">
            <Calendar className="h-3 w-3" />
            <span>Mar 15, 2025</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
          <CardTitle className="text-lg">
            Getting Started with Next.js
          </CardTitle>
          <CardDescription className="line-clamp-2">
            Learn how to build modern web applications with Next.js, React, and
            TypeScript.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant="ghost" size="sm">
            Read More
          </Button>
        </CardFooter>
      </Card>

      {/* E-commerce Product Card */}
      <Card className="overflow-hidden">
        <div className="relative">
          <div className="aspect-square w-full bg-gradient-to-br from-amber-400 to-orange-500" />
          <Badge className="absolute top-2 right-2">New</Badge>
        </div>
        <CardHeader>
          <CardTitle className="text-lg">Premium Wireless</CardTitle>
          <CardDescription className="line-clamp-2">
            High-quality audio with noise cancellation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-0.5">
              {[...Array(4)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3 w-3 fill-yellow-400 text-yellow-400"
                />
              ))}
              <Star className="text-muted-foreground h-3 w-3" />
              <span className="text-muted-foreground ml-1 text-xs">(128)</span>
            </div>
            <div className="text-xl font-bold">$299</div>
          </div>
        </CardContent>
        <CardFooter className="gap-2">
          <Button className="flex-1" size="sm">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

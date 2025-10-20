"use client"

import { Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CardBlog() {
  return (
    <Card className="w-full max-w-md overflow-hidden">
      <div className="aspect-video w-full bg-gradient-to-br from-blue-500 to-purple-600" />
      <CardHeader>
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4" />
          <span>March 15, 2025</span>
          <span>•</span>
          <span>5 min read</span>
        </div>
        <CardTitle>Getting Started with Next.js</CardTitle>
        <CardDescription>
          Learn how to build modern web applications with Next.js, React, and
          TypeScript.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button variant="ghost">Read More</Button>
      </CardFooter>
    </Card>
  )
}

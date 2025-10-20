"use client"

import { Card, CardContent } from "@/components/ui/card"

export default function CardPlain() {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="pt-6">
        <p className="text-muted-foreground text-sm">
          This is a plain card with simple content. Perfect for displaying basic
          information.
        </p>
      </CardContent>
    </Card>
  )
}

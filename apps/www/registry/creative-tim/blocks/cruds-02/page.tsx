"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Cruds02() {
  return (
    <section className="grid min-h-screen place-items-center py-16">
      <Card className="mx-auto w-full max-w-2xl p-6 lg:p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold">
            Update Retail Staff Profile
          </h3>
          <p className="text-muted-foreground mt-1 text-sm">
            Manage employee account credentials and contact information for
            retail team members.
          </p>
        </div>
        <form action="#" className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="e.g. elena.moreno"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Work Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="e.g. elena@fashionco.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">New Password</Label>
            <Input id="password" name="password" type="password" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
            />
          </div>

          <Button type="submit" className="w-full">
            Update Profile
          </Button>
        </form>
      </Card>
    </section>
  )
}

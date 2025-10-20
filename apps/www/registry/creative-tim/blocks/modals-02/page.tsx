"use client"

import * as React from "react"
import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const NOTIFICATION = ["Email", "SMS", "Push Notification"]
const TOOLS = ["React", "Material Tailwind", "TailwindCSS", "Next.js"]

export default function ModalsBlock() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="grid min-h-screen w-full place-items-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <button
            onClick={() => setIsOpen(false)}
            className="ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <DialogHeader>
            <DialogTitle className="mb-1 text-xl">Edit Profile</DialogTitle>
            <p className="text-muted-foreground text-sm">
              Update your profile information below.
            </p>
          </DialogHeader>

          <form className="mt-6 space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-semibold">
                  My Name
                </Label>
                <Input id="name" placeholder="Emma Roberts" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="profession" className="font-semibold">
                  I&apos;m
                </Label>
                <Select>
                  <SelectTrigger id="profession" className="w-full">
                    <SelectValue placeholder="Select Profession" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ui-ux">UI/UX Designer</SelectItem>
                    <SelectItem value="frontend">Frontend Developer</SelectItem>
                    <SelectItem value="backend">Backend Developer</SelectItem>
                    <SelectItem value="fullstack">
                      Fullstack Developer
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2 border-y py-6">
              <p className="font-semibold">
                Interested in the following technologies
              </p>
              <p className="text-muted-foreground text-sm">
                Choose the frameworks you work on
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-6">
                {TOOLS.map((tool) => (
                  <div key={tool} className="flex items-center gap-2">
                    <Checkbox id={tool} />
                    <Label
                      htmlFor={tool}
                      className="text-muted-foreground cursor-pointer text-sm"
                    >
                      {tool}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Notification preferences</p>
              <p className="text-muted-foreground text-sm">
                Select where you want to be notified
              </p>
              <RadioGroup className="mt-4 flex items-center gap-6">
                {NOTIFICATION.map((notify) => (
                  <div key={notify} className="flex items-center gap-2">
                    <RadioGroupItem value={notify} id={notify} />
                    <Label
                      htmlFor={notify}
                      className="text-muted-foreground text-sm"
                    >
                      {notify}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex items-center justify-end gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Update Profile</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

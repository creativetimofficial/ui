"use client"

import * as React from "react"
import { ChevronDown, Pencil, X } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

interface UserProps {
  name: string
  img: string
  email: string
}

function User({ name, img, email }: UserProps) {
  const [selected, setSelected] = React.useState("Can View")

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={img} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="space-y-0.5">
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-muted-foreground text-sm">{email}</p>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="group">
            <span className="hidden items-center gap-1 sm:flex">
              {selected}{" "}
              <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
            </span>
            <Pencil className="block h-4 w-4 sm:hidden" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setSelected("Can View")}>
            Can View
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelected("Can Edit")}>
            Can Edit
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default function ModalsBlock() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="grid min-h-screen w-full place-items-center">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[550px]">
          <button
            onClick={() => setIsOpen(false)}
            className="ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <DialogHeader>
            <DialogTitle className="mb-1 text-xl">
              Share with New Members
            </DialogTitle>
            <p className="text-muted-foreground max-w-xl text-sm">
              Welcome new members to your team! Use this modal to seamlessly add
              individuals to your dashboard, enabling collaboration and
              enhancing productivity.
            </p>
          </DialogHeader>

          <form className="my-6 flex w-full flex-col items-center gap-2 sm:flex-row">
            <Input type="email" placeholder="Email, comma separated" />
            <Button type="submit" className="w-full shrink-0 sm:w-auto">
              Invite
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full shrink-0 sm:w-auto"
            >
              Copy Link
            </Button>
          </form>

          <div className="space-y-6">
            <User
              img="https://i.pravatar.cc/150?img=1"
              name="Emma Roberts"
              email="emma@mail.com"
            />
            <User
              img="https://i.pravatar.cc/150?img=2"
              name="John Smith"
              email="john@mail.com"
            />
            <User
              img="https://i.pravatar.cc/150?img=3"
              name="Sarah Johnson"
              email="sarah@mail.com"
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

"use client";

import * as React from "react";
import { X, ChevronDown, Pencil } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/creative-tim-ui/ui/avatar";
import { Button } from "@/registry/creative-tim-ui/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/creative-tim-ui/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/creative-tim-ui/ui/dropdown-menu";
import { Input } from "@/registry/creative-tim-ui/ui/input";

interface UserProps {
  name: string;
  img: string;
  email: string;
}

function User({ name, img, email }: UserProps) {
  const [selected, setSelected] = React.useState("Can View");

  return (
    <div className="flex items-center gap-4 justify-between">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={img} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="space-y-0.5">
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="group">
            <span className="hidden items-center gap-1 sm:flex">
              {selected}{" "}
              <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
            </span>
            <Pencil className="w-4 h-4 block sm:hidden" />
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
  );
}

export default function ModalsBlock() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="grid place-items-center w-full min-h-screen">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[550px]">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <DialogHeader>
            <DialogTitle className="text-xl mb-1">
              Share with New Members
            </DialogTitle>
            <p className="text-sm text-muted-foreground max-w-xl">
              Welcome new members to your team! Use this modal to seamlessly add
              individuals to your dashboard, enabling collaboration and enhancing
              productivity.
            </p>
          </DialogHeader>

          <form className="flex w-full my-6 items-center flex-col sm:flex-row gap-2">
            <Input type="email" placeholder="Email, comma separated" />
            <Button type="submit" className="shrink-0 w-full sm:w-auto">
              Invite
            </Button>
            <Button
              type="button"
              variant="outline"
              className="shrink-0 w-full sm:w-auto"
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
  );
}

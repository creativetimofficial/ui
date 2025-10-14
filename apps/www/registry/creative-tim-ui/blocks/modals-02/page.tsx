"use client";

import * as React from "react";
import { X } from "lucide-react";

import { Button } from "@/registry/creative-tim-ui/ui/button";
import { Checkbox } from "@/registry/creative-tim-ui/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/creative-tim-ui/ui/dialog";
import { Input } from "@/registry/creative-tim-ui/ui/input";
import { Label } from "@/registry/creative-tim-ui/ui/label";
import { RadioGroup, RadioGroupItem } from "@/registry/creative-tim-ui/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/creative-tim-ui/ui/select";

const NOTIFICATION = ["Email", "SMS", "Push Notification"];
const TOOLS = ["React", "Material Tailwind", "TailwindCSS", "Next.js"];

export default function ModalsBlock() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="grid place-items-center w-full min-h-screen">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <DialogHeader>
            <DialogTitle className="text-xl mb-1">Edit Profile</DialogTitle>
            <p className="text-sm text-muted-foreground">
              Update your profile information below.
            </p>
          </DialogHeader>

          <form className="mt-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <SelectItem value="fullstack">Fullstack Developer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="py-6 border-y space-y-2">
              <p className="font-semibold">
                Interested in the following technologies
              </p>
              <p className="text-sm text-muted-foreground">
                Choose the frameworks you work on
              </p>
              <div className="flex items-center gap-6 mt-4 flex-wrap">
                {TOOLS.map((tool) => (
                  <div key={tool} className="flex items-center gap-2">
                    <Checkbox id={tool} />
                    <Label
                      htmlFor={tool}
                      className="cursor-pointer text-sm text-muted-foreground"
                    >
                      {tool}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Notification preferences</p>
              <p className="text-sm text-muted-foreground">
                Select where you want to be notified
              </p>
              <RadioGroup className="flex items-center gap-6 mt-4">
                {NOTIFICATION.map((notify) => (
                  <div key={notify} className="flex items-center gap-2">
                    <RadioGroupItem value={notify} id={notify} />
                    <Label
                      htmlFor={notify}
                      className="text-sm text-muted-foreground"
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
  );
}

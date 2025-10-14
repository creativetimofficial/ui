"use client";

import * as React from "react";
import { X, TriangleAlert } from "lucide-react";

import { Button } from "@/registry/creative-tim-ui/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/creative-tim-ui/ui/dialog";
import { Input } from "@/registry/creative-tim-ui/ui/input";
import { Label } from "@/registry/creative-tim-ui/ui/label";

export default function ModalsBlock() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="grid place-items-center w-full min-h-screen">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <TriangleAlert className="w-14 h-14 text-destructive mb-6" />
              <DialogHeader>
                <DialogTitle className="text-xl mb-1">
                  Reset Settings
                </DialogTitle>
              </DialogHeader>
              <p className="text-sm text-muted-foreground mt-2 max-w-xl">
                Are you sure you want to reset all settings to their default
                values? This action cannot be undone.
              </p>
            </div>
          </div>

          <form className="mt-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="reset" className="text-sm">
                Please type{" "}
                <span className="text-foreground font-semibold">
                  &quot;Reset settings&quot;
                </span>{" "}
                to confirm.
              </Label>
              <div className="flex w-full items-center flex-col sm:flex-row gap-2">
                <Input
                  id="reset"
                  placeholder="Reset settings"
                  className="flex-1"
                />
                <Button type="submit" className="shrink-0 w-full sm:w-auto">
                  I understand, reset settings
                </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

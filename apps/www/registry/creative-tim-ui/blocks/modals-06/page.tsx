"use client";

import * as React from "react";
import { X, Unlock } from "lucide-react";

import { Button } from "@/registry/creative-tim-ui/ui/button";
import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/creative-tim-ui/ui/dialog";

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
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <Unlock className="w-12 h-12 text-primary mb-6" />
              <DialogHeader>
                <DialogTitle className="text-xl mb-2">
                  Publish Capsule Collection
                </DialogTitle>
              </DialogHeader>
              <p className="text-sm text-muted-foreground mt-2">
                This action will expose your private capsule collection to public
                viewing across all fashion storefronts.
              </p>
            </div>
          </div>

          <Card className="my-6">
            <CardContent className="p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Collection</span>
                <span className="text-sm font-medium">fall-winter-vault</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Views</span>
                <span className="text-sm font-medium">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Likes</span>
                <span className="text-sm font-medium">0</span>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Make Collection Public</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

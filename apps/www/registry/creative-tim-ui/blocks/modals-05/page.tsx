"use client";

import * as React from "react";
import { X, CloudUpload, Trash } from "lucide-react";

import { Button } from "@/registry/creative-tim-ui/ui/button";
import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/creative-tim-ui/ui/dialog";

const IMAGES = [
  {
    name: "cover-1.jpg",
    size: "140 KB",
  },
  {
    name: "cover-2.jpg",
    size: "288 KB",
  },
];

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
            <DialogTitle className="text-xl mb-1">Upload Files</DialogTitle>
            <p className="text-sm text-muted-foreground">
              Easily upload files to your account with just a few clicks.
            </p>
          </DialogHeader>

          <form className="mt-6 space-y-4">
            <Card className="border-dashed border-2">
              <CardContent className="p-6 grid place-items-center min-h-64">
                <label htmlFor="upload" className="cursor-pointer">
                  <input type="file" className="hidden" id="upload" />
                  <div className="max-w-md mx-auto text-center">
                    <CloudUpload className="h-12 w-12 mx-auto mb-6 text-muted-foreground" />
                    <p className="mb-2 font-semibold">
                      Drag and Drop or{" "}
                      <span className="underline">Choose a Local File</span>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Supported formats: .png, .jpg, .svg
                    </p>
                  </div>
                </label>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {IMAGES.map(({ name, size }) => (
                <Card key={name}>
                  <CardContent className="p-3 flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop&crop=center&q=80"
                        alt={name}
                        className="w-12 h-12 rounded object-cover object-center"
                      />
                      <div className="space-y-1">
                        <p className="text-sm font-semibold">{name}</p>
                        <p className="text-sm text-muted-foreground">{size}</p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="shrink-0"
                    >
                      <Trash className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex items-center justify-end gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Upload</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

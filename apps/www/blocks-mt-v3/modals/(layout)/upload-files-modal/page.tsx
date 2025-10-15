"use client";

import * as React from "react";

// @components
import {
  Dialog,
  Button,
  Typography,
  IconButton,
  Card,
} from "@material-tailwind/react";

// @icons
import { CloudUpload, Trash, Xmark } from "iconoir-react";

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

export default function Modal2() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className="grid place-items-center w-full min-h-screen">
      <Dialog size="lg" open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger as={Button} onClick={() => setIsOpen(true)}>
          Open Modal
        </Dialog.Trigger>
        <Dialog.Overlay>
          <Dialog.Content className="p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <Typography as="h2" type="lead" className="mb-1 font-semibold">
                  Upload Files
                </Typography>
                <Typography className="text-foreground">
                  Easily upload files to your account with just a few clicks.
                </Typography>
              </div>
              <Dialog.DismissTrigger
                as={IconButton}
                size="sm"
                variant="ghost"
                color="secondary"
                className="absolute right-2 top-2"
                isCircular
              >
                <Xmark className="h-5 w-5" />
              </Dialog.DismissTrigger>
            </div>

            <form action="#" className="mt-6">
              <Card
                as="label"
                htmlFor="upload"
                variant="outline"
                color="secondary"
                className="border-dashed p-6 grid place-items-center min-h-64"
              >
                <input type="file" className="hidden" id="upload" />
                <div className="max-w-md mx-auto text-center">
                  <CloudUpload className="h-12 w-12 mx-auto mb-6" />
                  <Typography className="mb-2 font-semibold">
                    Drag and Drop or&nbsp;
                    <span className="underline">Choose a Local File</span>
                  </Typography>
                  <Typography as="p" type="small" className="text-foreground">
                    Supported formats: .png, .jpg, .svg
                  </Typography>
                </div>
              </Card>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {IMAGES.map(({ name, size }) => (
                  <Card
                    key={name}
                    variant="outline"
                    color="secondary"
                    className="p-2 flex items-start justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src="https://v3.material-tailwind.com/dark-bg-pattern.jpg"
                        alt="image"
                        className="w-12 h-12 rounded object-cover object-center"
                      />
                      <div className="space-y-1">
                        <Typography
                          as="p"
                          type="small"
                          className="font-semibold"
                        >
                          {name}
                        </Typography>
                        <Typography
                          as="p"
                          type="small"
                          className="text-foreground"
                        >
                          {size}
                        </Typography>
                      </div>
                    </div>
                    <IconButton
                      type="button"
                      variant="ghost"
                      color="secondary"
                      size="sm"
                    >
                      <Trash className="w-4 h-4" />
                    </IconButton>
                  </Card>
                ))}
              </div>
              <div className="mb-1 mt-6 flex items-center justify-end gap-2">
                <Dialog.DismissTrigger
                  as={Button}
                  type="button"
                  variant="outline"
                  color="secondary"
                >
                  Cancel
                </Dialog.DismissTrigger>
                <Button type="submit">Upload</Button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog>
    </div>
  );
}

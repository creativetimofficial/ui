"use client";

import * as React from "react";

// @components
import {
  Input,
  Dialog,
  Button,
  Typography,
  IconButton,
  Select,
  Textarea,
} from "@material-tailwind/react";

// @icons
import { Trash, Xmark } from "iconoir-react";

function TextField({ label, ...props }) {
  const id = React.useId();

  return (
    <div className="w-full space-y-2">
      <Typography
        as="label"
        htmlFor={id}
        type="small"
        className="font-semibold"
      >
        {label}
      </Typography>
      <Input {...props} autoComplete="off" id={id} />
    </div>
  );
}

export default function Modal1() {
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
                  Update Product Modal
                </Typography>
                <Typography className="text-foreground">
                  Edit product features and save it.
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-6">
              {[...new Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="relative w-full h-44 rounded-md overflow-hidden"
                >
                  <img
                    src="https://v3.material-tailwind.com/dark-bg-pattern.jpg"
                    alt={`img-${i + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                  <IconButton
                    size="sm"
                    variant="ghost"
                    color="secondary"
                    className="!absolute bottom-2 right-2 text-secondary"
                  >
                    <Trash className="w-4 h-4" />
                  </IconButton>
                </div>
              ))}
            </div>

            <form action="#">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <TextField label="Product Name" placeholder="Laptop" />
                <div className="w-full">
                  <Typography
                    as="label"
                    htmlFor="category"
                    type="small"
                    className="font-semibold block mb-2"
                  >
                    Category
                  </Typography>
                  <Select>
                    <Select.Trigger
                      id="category"
                      placeholder="Select Category"
                    />
                    <Select.List>
                      <Select.Option>Electronics</Select.Option>
                      <Select.Option>Clothing</Select.Option>
                      <Select.Option>Accessories</Select.Option>
                    </Select.List>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <TextField label="Price" placeholder="1000" />
                <div className="w-full space-y-2">
                  <Typography
                    as="label"
                    htmlFor="category"
                    type="small"
                    className="font-semibold"
                  >
                    Brand
                  </Typography>
                  <Select>
                    <Select.Trigger id="category" placeholder="Select Brand" />
                    <Select.List>
                      <Select.Option>Apple</Select.Option>
                      <Select.Option>Samsung</Select.Option>
                      <Select.Option>Microsoft</Select.Option>
                    </Select.List>
                  </Select>
                </div>
              </div>
              <div className="w-full space-y-2 mb-6">
                <Typography
                  as="label"
                  htmlFor="description"
                  type="small"
                  className="font-semibold"
                >
                  Description
                </Typography>
                <Textarea
                  id="description"
                  autoComplete="off"
                  placeholder="Write something about your product."
                />
              </div>
              <TextField
                label="Tags"
                placeholder="Add up to 10 tags, separated by commas (,)"
              />
              <div className="mb-1 mt-6 flex items-center justify-end gap-2">
                <Dialog.DismissTrigger
                  as={Button}
                  type="button"
                  variant="outline"
                  color="secondary"
                >
                  Cancel
                </Dialog.DismissTrigger>
                <Button type="submit">Update Product</Button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog>
    </div>
  );
}

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
  Checkbox,
  Radio,
} from "@material-tailwind/react";

// @icons
import { Xmark } from "iconoir-react";

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

const NOTIFICATION = ["Email", "SMS", "Push Notification"];
const TOOLS = ["React", "Material Tailwind", "TailwindCSS", "Next.js"];

export default function Modal3() {
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
                  Edit Profile
                </Typography>
                <Typography className="text-foreground">
                  Update your profile information below.
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextField label="My Name" placeholder="Emma Roberts" />
                <div className="w-full">
                  <Typography
                    as="label"
                    htmlFor="im"
                    type="small"
                    className="font-semibold block mb-2"
                  >
                    I&apos;m
                  </Typography>
                  <Select>
                    <Select.Trigger id="im" placeholder="Select Profession" />
                    <Select.List>
                      <Select.Option>UI/UX Designer</Select.Option>
                      <Select.Option>Frontend Developer</Select.Option>
                      <Select.Option>Backend Developer</Select.Option>
                      <Select.Option>Fullstack Developer</Select.Option>
                    </Select.List>
                  </Select>
                </div>
              </div>
              <div className="my-10 py-9 border-y border-surface">
                <Typography className="font-semibold">
                  Interested in the following technologies
                </Typography>
                <Typography as="p" type="small" className="text-foreground">
                  Choose the frameworks you work on
                </Typography>
                <div className="flex items-center gap-6 mt-6 flex-wrap">
                  {TOOLS.map((tool) => (
                    <div key={tool} className="flex items-center gap-2">
                      <Checkbox id={tool} className="shrink-0">
                        <Checkbox.Indicator />
                      </Checkbox>
                      <Typography
                        as="label"
                        htmlFor={tool}
                        className="cursor-pointer text-foreground"
                      >
                        {tool}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-8">
                <Typography className="font-semibold">
                  Notification preferences
                </Typography>
                <Typography as="p" type="small" className="text-foreground">
                  Select where you want to be notified
                </Typography>
                <div className="flex items-center gap-6 mt-6">
                  <Radio orientation="horizontal" className="gap-6 flex-wrap">
                    {NOTIFICATION.map((notify) => (
                      <div key={notify} className="flex items-center gap-2">
                        <Radio.Item id={notify}>
                          <Radio.Indicator />
                        </Radio.Item>
                        <Typography
                          as="label"
                          htmlFor={notify}
                          className="text-foreground"
                        >
                          {notify}
                        </Typography>
                      </div>
                    ))}
                  </Radio>
                </div>
              </div>
              <div className="mb-1 flex items-center justify-end gap-2">
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

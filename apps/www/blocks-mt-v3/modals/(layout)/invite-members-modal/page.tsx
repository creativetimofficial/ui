"use client";

import * as React from "react";

// @components
import {
  Input,
  Dialog,
  Button,
  Typography,
  IconButton,
  Avatar,
  Menu,
} from "@material-tailwind/react";

// @icons
import { Xmark, NavArrowDown, EditPencil } from "iconoir-react";

function User({ name, img, email }) {
  const [selected, setSelected] = React.useState("Can View");

  return (
    <div className="flex items-center gap-4 justify-between">
      <div className="flex items-center gap-4">
        <Avatar src={img} alt={name} className="shrink-0" />
        <div className="space-y-0.5">
          <Typography as="p" type="small" className="font-semibold">
            {name}
          </Typography>
          <Typography as="p" type="small" className="text-foreground">
            {email}
          </Typography>
        </div>
      </div>
      <Menu placement="bottom-end">
        <Menu.Trigger
          as={Button}
          variant="ghost"
          size="sm"
          color="secondary"
          className="group"
        >
          <span className="hidden items-center gap-1 sm:flex">
            {selected}{" "}
            <NavArrowDown className="w-4 h-4 group-data-[open=true]:rotate-180 stroke-2 transition-transform" />
          </span>
          <EditPencil className="w-4 h-4 block sm:hidden" />
        </Menu.Trigger>
        <Menu.Content className="z-[9999]">
          <Menu.Item onClick={() => setSelected("Can View")}>
            Can View
          </Menu.Item>
          <Menu.Item onClick={() => setSelected("Can Edit")}>
            Can Edit
          </Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
  );
}

export default function Modal4() {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className="grid place-items-center w-full min-h-screen">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Trigger as={Button} onClick={() => setIsOpen(true)}>
          Open Modal
        </Dialog.Trigger>
        <Dialog.Overlay>
          <Dialog.Content className="p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <Typography as="h2" type="lead" className="mb-1 font-semibold">
                  Share with New Members
                </Typography>
                <Typography className="text-foreground max-w-xl [text-wrap:_balance]">
                  Welcome new members to your team! Use this modal to seamlessly
                  add individuals to your dashboard, enabling collaboration and
                  enhancing productivity.
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

            <form
              action="#"
              className="flex w-full my-6 items-center flex-col sm:flex-row justify-center gap-2"
            >
              <Input type="email" placeholder="Email, comma separated" />
              <Button type="submit" className="shrink-0 w-full sm:w-auto">
                Invite
              </Button>
              <Button
                type="button"
                variant="outline"
                color="secondary"
                className="shrink-0 w-full sm:w-auto"
              >
                Copy Link
              </Button>
            </form>

            <div className="space-y-6">
              <User
                img="/woman-profile-1.jpg"
                name="Emma Roberts"
                email="emma@mail.com"
              />
              <User
                img="/woman-profile-1.jpg"
                name="Emma Roberts"
                email="emma@mail.com"
              />
              <User
                img="/woman-profile-1.jpg"
                name="Emma Roberts"
                email="emma@mail.com"
              />
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog>
    </div>
  );
}

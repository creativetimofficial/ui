"use client";

import * as React from "react";

// @components
import {
  Input,
  Dialog,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

// @icons
import { Xmark, WarningCircle } from "iconoir-react";

export default function Modal5() {
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
                <WarningCircle className="w-14 h-14 text-error mb-6" />
                <Typography as="h2" type="lead" className="mb-1 font-semibold">
                  Reset Settings
                </Typography>
                <Typography className="text-foreground max-w-xl [text-wrap:_balance]">
                  Are you sure you want to reset all settings to their default
                  values? This action cannot be undone.
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
              <Typography
                as="label"
                type="small"
                htmlFor="reset"
                className="mb-2 block"
              >
                Please type{" "}
                <span className="text-black font-semibold">
                  &quot;Reset settings&quot;
                </span>{" "}
                to confirm.
              </Typography>
              <div className="flex w-full items-center flex-col sm:flex-row justify-center gap-2">
                <Input id="reset" placeholder="Reset settings" />
                <Button type="submit" className="shrink-0 w-full sm:w-auto">
                  I understand, reset settings
                </Button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog>
    </div>
  );
}

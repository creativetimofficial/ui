"use client";

// @components
import { IconButton, Typography } from "@material-tailwind/react";

// @icons
import { Instagram, X, Github, Youtube } from "iconoir-react";

const YEAR = new Date().getFullYear();

export default function Footer15() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap items-center !justify-center gap-x-10 gap-y-2 md:!justify-between">
          <Typography
            type="small"
            className="text-foreground text-center font-medium"
          >
            All rights reserved. Copyright &copy; {YEAR} Material Tailwind.
          </Typography>
          <div className="flex gap-1">
            <IconButton
              as="a"
              href="#"
              size="sm"
              color="secondary"
              variant="ghost"
            >
              <X className="h-4 w-4" />
            </IconButton>
            <IconButton
              as="a"
              href="#"
              size="sm"
              color="secondary"
              variant="ghost"
            >
              <Youtube className="h-4 w-4" />
            </IconButton>
            <IconButton
              as="a"
              href="#"
              size="sm"
              color="secondary"
              variant="ghost"
            >
              <Instagram className="h-4 w-4" />
            </IconButton>
            <IconButton
              as="a"
              href="#"
              size="sm"
              color="secondary"
              variant="ghost"
            >
              <Github className="h-4 w-4" />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

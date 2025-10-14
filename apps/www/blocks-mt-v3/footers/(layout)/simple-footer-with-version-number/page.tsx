"use client";

// @components
import { Chip, IconButton, Typography } from "@material-tailwind/react";

// @icons
import { Settings } from "iconoir-react";

const YEAR = new Date().getFullYear();

export default function Footer12() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap items-center !justify-center gap-4 md:!justify-between">
          <Typography
            type="small"
            className="text-foreground text-center font-medium"
          >
            All rights reserved. Copyright &copy; {YEAR} Material Tailwind
          </Typography>
          <div className="flex gap-4 items-center">
            <Chip>
              <Chip.Label>v3.0.0</Chip.Label>
            </Chip>
            <IconButton size="sm" variant="ghost">
              <Settings className="h-5 w-5" />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

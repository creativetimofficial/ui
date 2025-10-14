"use client";

import * as React from "react";
import { X, AlertTriangle } from "lucide-react";

import { Button } from "@/registry/creative-tim-ui/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/registry/creative-tim-ui/ui/card";
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
        <DialogContent className="sm:max-w-[550px]">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <DialogHeader>
            <DialogTitle className="text-xl mb-2">
              Disable Collection Lock Rules
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground mt-2">
            Removing edit rules will allow unrestricted changes to your seasonal
            campaign folders and product groups.
          </p>

          <Card className="my-6 border-destructive/50 bg-destructive/5">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                Access Restrictions Will Be Removed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Disabling these rules unlocks direct edits to sensitive assets and
                might affect internal syncs.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-3 mb-6">
            <p className="text-sm font-semibold">This will impact:</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Designer review checkpoints</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-destructive mt-1">•</span>
                <span>Version freeze policies</span>
              </li>
            </ul>
          </div>

          <p className="text-xs text-muted-foreground mb-6">
            Note: 0 edit lock rules currently active
          </p>

          <div className="flex items-center justify-end gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
            <Button variant="destructive">Disable Edit Locks</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

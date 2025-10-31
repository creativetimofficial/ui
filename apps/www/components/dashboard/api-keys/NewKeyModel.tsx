"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type NewKeyModalProps = {
  open: boolean;
  onClose: () => void;
  plaintextKey: string | null;
};

export default function NewKeyModal({ open, onClose, plaintextKey }: NewKeyModalProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!plaintextKey) return;
    try {
      await navigator.clipboard.writeText(plaintextKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  }

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) onClose(); }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Your new API key</DialogTitle>
          <DialogDescription>
            This key will only be shown once. Copy it now and store it somewhere safe.
          </DialogDescription>
        </DialogHeader>

        <div className="rounded-md border bg-muted p-3 font-mono text-xs text-foreground break-all">
          {plaintextKey ?? "—"}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleCopy}>
            {copied ? "Copied ✓" : "Copy key"}
          </Button>
          <Button onClick={onClose}>Done</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

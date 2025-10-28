"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cancelSubscriptionAction } from "@/lib/actions/cancelSubscription";

type Props = {
  subscriptionId: string;
  planLabel?: string; 
  trigger?: React.ReactNode;  
  disabled?: boolean;
};

export default function CancelSubscriptionDialog({
  subscriptionId,
  planLabel,
  trigger,
  disabled,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const [pending, startTransition] = React.useTransition();
  const [error, setError] = React.useState<string | null>(null);

  const onConfirm = () => {
    setError(null);
    startTransition(async () => {
      const res = await cancelSubscriptionAction(subscriptionId);
      // Your action returns either a subscription object or { error: string }
      if (res?.error) {
        setError(res.error || "Something went wrong, please try again later");
        return;
      }
      // Success: close the dialog, refresh the UI
      setOpen(false);
    });
  };

  const defaultTrigger = (
    <Button
      variant="ghost"
      disabled={disabled}
      className="cursor-pointer"
    >
      Cancel
    </Button>
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger ?? defaultTrigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Cancel subscription?
          </DialogTitle>
          <DialogDescription>
            {planLabel
              ? `Are you sure you want to cancel ${planLabel}?`
              : "Are you sure you want to cancel this subscription?"}
            {" "}This will stop future renewals. You can re-subscribe at any time.
          </DialogDescription>
        </DialogHeader>

        {error && (
          <div className="rounded-md border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-500">
            {error}
          </div>
        )}

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" disabled={pending} className="cursor-pointer">
              Keep subscription
            </Button>
          </DialogClose>
          <Button
            variant="destructive"
            onClick={onConfirm}
            disabled={pending}
            className="cursor-pointer"
          >
            {pending ? "Canceling…" : "Cancel subscription"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

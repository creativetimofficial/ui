"use client";

// @components
import {
  Button,
  Typography,
  IconButton,
  Card,
  Tooltip,
} from "@material-tailwind/react";

// @icons
import { EditPencil, Plus, Trash } from "iconoir-react";

function PaymentMethod({ type, number }) {
  const cardImg =
    type === "visa"
      ? "https://v3.material-tailwind.com/visa.webp"
      : "https://v3.material-tailwind.com/mastercard.webp";

  return (
    <Card
      variant="outline"
      color="secondary"
      className="p-4 flex items-center gap-4"
    >
      <img src={cardImg} alt={type} className="h-8 w-auto" />
      <Typography as="p" type="small" className="block font-semibold mx-4">
        **** **** **** {number}
      </Typography>
      <div className="flex items-center ml-auto gap-2">
        <Tooltip placement="top">
          <Tooltip.Trigger
            as={IconButton}
            size="sm"
            variant="ghost"
            color="error"
          >
            <Trash className="w-4 h-4" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            Delete
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
        <Tooltip placement="top">
          <Tooltip.Trigger
            as={IconButton}
            size="sm"
            variant="ghost"
            color="secondary"
          >
            <EditPencil className="w-4 h-4" />
          </Tooltip.Trigger>
          <Tooltip.Content>
            Edit
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      </div>
    </Card>
  );
}

export default function Billing3() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-start flex-col sm:flex-row gap-4 justify-between">
        <div>
          <Typography className="font-semibold">Payment Method</Typography>
          <Typography as="p" type="small" className="text-foreground">
            Manage your preferred payment methods securely and conveniently.
          </Typography>
        </div>
        <Button
          variant="outline"
          color="secondary"
          className="w-full sm:w-auto"
        >
          <Plus className="w-4 h-4 mr-2" /> Add New Card
        </Button>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <PaymentMethod type="mastercard" number="7852" />
        <PaymentMethod type="visa" number="9831" />
        <PaymentMethod type="visa" number="8362" />
        <PaymentMethod type="mastercard" number="0098" />
      </div>
    </div>
  );
}

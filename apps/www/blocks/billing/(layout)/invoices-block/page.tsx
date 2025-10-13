"use client";

// @components
import { Button, Chip, Typography, IconButton } from "@material-tailwind/react";

// @icons
import { Download } from "iconoir-react";

const DATA = [
  {
    name: "INV-24 #MS-415646",
    date: "October 15, 2024",
    amount: 2500,
    badge: "24 Days",
    isOverdue: false,
  },
  {
    name: "INV-23 #MS-415740",
    date: "October 10, 2024",
    amount: 1750,
    badge: "20 Days",
    isOverdue: false,
  },
  {
    name: "INV-22 #MS-946285",
    date: "September 15, 2024",
    amount: 1500,
    badge: "18 Days",
    isOverdue: false,
  },
  {
    name: "INV-21 #MS-739734",
    date: "September 10, 2024",
    amount: 2990,
    badge: "3 Days Overdue",
    isOverdue: true,
  },
  {
    name: "INV-20 #MS-848649",
    date: "August 15, 2024",
    amount: 3500,
    badge: "3 Days Overdue",
    isOverdue: true,
  },
];

export default function Billing1() {
  return (
    <div className="max-w-xl mx-auto">
      <div className="flex items-start gap-4 justify-between">
        <div>
          <Typography className="font-semibold">Invoices</Typography>
          <Typography as="p" type="small" className="text-foreground">
            Track and monitor your financial activity.
          </Typography>
        </div>
        <Button size="sm" variant="outline" color="secondary">
          Export
        </Button>
      </div>
      <div className="mt-6">
        {DATA.map(({ name, date, amount, badge, isOverdue }) => (
          <div
            key={name}
            className="flex flex-wrap justify-between gap-6 items-center border-b last:border-transparent border-surface py-6"
          >
            <div className="space-y-0.5 basis-full sm:basis-auto">
              <Typography type="lead" className="font-semibold">
                INV-24 #MS-415646
              </Typography>
              <Typography as="p" type="small" className="text-foreground">
                {date}
              </Typography>
            </div>
            <Chip
              size="sm"
              variant="ghost"
              color={isOverdue ? "error" : "success"}
              className="w-max sm:ml-auto"
            >
              <Chip.Label>{badge}</Chip.Label>
            </Chip>
            <Typography as="p" type="small" className="font-semibold text-end">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(amount)}
            </Typography>
            <IconButton size="sm" variant="ghost" color="secondary">
              <Download className="w-5 h-5 stroke-2" />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
}

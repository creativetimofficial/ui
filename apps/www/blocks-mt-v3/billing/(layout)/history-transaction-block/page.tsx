/**
 * This example uses the `react-day-picker` and `date-fns` libraries to create a date picker component,
 * please make sure to install them before using this example.
 *
 * To install the required dependencies, run: `npm install react-day-picker date-fns`
 */

"use client";

import * as React from "react";

// @components
import {
  Input,
  Popover,
  Typography,
  List,
  Card,
} from "@material-tailwind/react";
import { DayPicker } from "react-day-picker";

// @icons
import {
  NavArrowRight,
  NavArrowLeft,
  Calendar,
  NavArrowUp,
  NavArrowDown,
  Clock,
} from "iconoir-react";

// @utils
import { format } from "date-fns";

const DATA = {
  "March 2023": [
    {
      name: "Neflix",
      date: "27 March 2026, at 12:30 PM",
      value: 2500,
      status: "decreasing",
    },
    {
      name: "Apple",
      date: "27 March 2026, at 04:30 AM",
      value: 2000,
      status: "increasing",
    },
  ],
  "February 2023": [
    {
      name: "Stripe",
      date: "26 March 2026, at 13:45 PM",
      value: 2500,
      status: "decreasing",
    },
    {
      name: "HubSpot",
      date: "26 March 2023, at 12:30 PM",
      value: 750,
      status: "increasing",
    },
    {
      name: "Figma",
      date: "26 March 2023, at 08:30 AM",
      value: 1400,
      status: "increasing",
    },
    {
      name: "Webflow",
      date: "26 March 2023, at 05:00 AM",
      value: 0,
      status: "pending",
    },
  ],
};

const ICONS = {
  increasing: NavArrowUp,
  decreasing: NavArrowDown,
  pending: Clock,
};

const COLORS = {
  increasing: "success",
  decreasing: "error",
  pending: "default",
};

const PREFIX = {
  increasing: "+",
  decreasing: "-",
  pending: "",
};

export default function Billing2() {
  const [date, setDate] = React.useState<Date>(new Date(2024, 9, 10));

  return (
    <div className="max-w-xl mx-auto">
      <div className="flex items-start gap-4 flex-wrap justify-between">
        <div>
          <Typography className="font-semibold">
            History Transactions
          </Typography>
          <Typography as="p" type="small" className="text-foreground">
            Track and monitor your financial activity.
          </Typography>
        </div>
        <Popover placement="bottom">
          <Popover.Trigger className="sm:w-48 w-full">
            <Input
              readOnly
              onChange={() => null}
              placeholder="Select a date"
              value={date ? format(date, "PPP") : ""}
            >
              <Input.Icon placement="end">
                <Calendar className="w-full h-full" />
              </Input.Icon>
            </Input>
          </Popover.Trigger>
          <Popover.Content>
            <Popover.Arrow />
            <DayPicker
              mode="single"
              selected={date}
              onSelect={(day) => day && setDate(day)}
              showOutsideDays
              className="border-0"
              classNames={{
                day_hidden: "invisible",
                nav: "flex items-center",
                day: "h-9 w-9 p-0 ",
                day_range_end: "day-range-end",
                table: "w-full border-collapse",
                nav_button_next: "absolute right-1.5",
                nav_button_previous: "absolute left-1.5",
                head_row: "flex font-medium text-black dark:text-white",
                day_disabled: "text-foreground opacity-50",
                head_cell: "m-0.5 w-9  text-sm",
                day_today: "rounded-md bg-surface text-black dark:text-white",
                caption_label: "text-sm font-medium text-black dark:text-white",
                caption: "flex justify-center py-2 mb-4 relative items-center",
                nav_button:
                  "h-6 w-6 bg-transparent hover:bg-primary/10 p-1 rounded transition-colors duration-300",
                row: "flex w-full mt-2",
                day_selected:
                  "rounded-md bg-primary text-white hover:bg-primary hover:text-white focus:bg-primary focus:text-white",
                day_outside:
                  "day-outside text-foreground opacity-50 aria-selected:bg-primary-light aria-selected:text-black dark:aria-selected:text-white aria-selected:bg-opacity-10",
                cell: "text-foreground rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-primary/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-primary/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              }}
              components={{
                IconLeft: ({ ...props }) => (
                  <NavArrowLeft {...props} className="h-4 w-4 stroke-2" />
                ),
                IconRight: ({ ...props }) => (
                  <NavArrowRight {...props} className="h-4 w-4 stroke-2" />
                ),
              }}
            />
          </Popover.Content>
        </Popover>
      </div>
      <List className="mt-6">
        {Object.keys(DATA).map((month, key) => {
          return (
            <div key={key} className="mb-6 last:mb-0">
              <Typography className="font-semibold ml-2.5 text-foreground mb-2">
                {month}
              </Typography>
              {DATA[month].map(({ name, value, date, status }) => {
                const Icon = ICONS[status];

                return (
                  <List.Item key={name} className="mb-2 last:mb-0">
                    <List.ItemStart className="sm:block hidden">
                      <Card
                        variant="outline"
                        color="secondary"
                        className="w-12 h-12 grid place-items-center"
                      >
                        <Icon className="w-5 h-5" />
                      </Card>
                    </List.ItemStart>
                    <div className="mx-0 sm:mx-2 space-y-0.5">
                      <Typography className="font-semibold">{name}</Typography>
                      <Typography
                        as="p"
                        type="small"
                        className="text-foreground"
                      >
                        {date}
                      </Typography>
                    </div>
                    <List.ItemEnd>
                      <Typography
                        as="p"
                        type="small"
                        color={COLORS[status]}
                        className="mx-2 font-semibold"
                      >
                        {PREFIX[status]}{" "}
                        {value
                          ? new Intl.NumberFormat("en-US", {
                              style: "currency",
                              currency: "USD",
                            }).format(value)
                          : "Pending"}
                      </Typography>
                    </List.ItemEnd>
                  </List.Item>
                );
              })}
            </div>
          );
        })}
      </List>
    </div>
  );
}

"use client";

// @components
import { Typography, Card } from "@material-tailwind/react";

// @icons
import { Wifi } from "iconoir-react";

function MasterCard({ color = "black", number, holder, expires }) {
  const isBlack = color === "black";

  return (
    <Card className={isBlack ? "bg-black text-white" : "bg-white text-black"}>
      <Card.Header className="p-6 m-0 w-full">
        <Wifi className="w-6 h-6 text-inherit" />
      </Card.Header>
      <Card.Body className="px-6 py-2">
        <Typography as="p" type="h6" className="tracking-wider">
          {String(number)
            .match(/.{1,4}/g)
            ?.join(" ")}
        </Typography>
      </Card.Body>
      <Card.Footer className="p-6 flex items-end gap-6">
        <div className="space-y-0.5">
          <Typography
            type="small"
            className="text-xs font-semibold opacity-80 block"
          >
            Card Holder
          </Typography>
          <Typography className="font-semibold">{holder}</Typography>
        </div>
        <div className="space-y-0.5">
          <Typography
            type="small"
            className="text-xs font-semibold opacity-80 block"
          >
            Expires
          </Typography>
          <Typography className="font-semibold">{expires}</Typography>
        </div>
        <div className="ml-auto">
          <img
            src="https://v3.material-tailwind.com/mastercard.webp"
            alt="mastercard logo"
            className="w-auto h-8"
          />
        </div>
      </Card.Footer>
    </Card>
  );
}

export default function Billing4() {
  return (
    <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
      <MasterCard
        expires="10/25"
        holder="Jack Peterson"
        number="4562112245947852"
      />
      <MasterCard
        color="white"
        expires="10/26"
        holder="Jack Peterson"
        number="4562112245948844"
      />
    </div>
  );
}

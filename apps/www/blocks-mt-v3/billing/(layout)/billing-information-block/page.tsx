"use client";

// @components
import { Card, Button, Typography } from "@material-tailwind/react";

// @icons
import { EditPencil, Plus, SelectFace3d, Trash } from "iconoir-react";

function BillingCard({ company, contact, email, vat }) {
  return (
    <Card variant="outline" color="secondary">
      <Card.Header className="p-4 flex flex-wrap items-start justify-between gap-4 w-full m-0">
        <div className="flex items-center gap-3">
          <Card
            variant="outline"
            color="secondary"
            className="w-12 h-12 grid shrink-0 place-items-center rounded"
          >
            <SelectFace3d className="w-6 h-6" />
          </Card>
          <div className="space-y-1">
            <Typography as="p" type="small" className="font-semibold">
              {company}
            </Typography>
            <Typography as="p" type="small" className="text-foreground">
              Company
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="ghost" color="secondary">
            <EditPencil className="w-4 h-4 mr-2" />
            Edit
          </Button>
          <Button size="sm" variant="ghost" color="error">
            <Trash className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </div>
      </Card.Header>
      <Card.Body className="px-4 pb-4 pt-2">
        <ul className="space-y-2">
          <Typography
            as="li"
            type="small"
            className="text-foreground block font-semibold"
          >
            Contact: <span className="text-black">{contact}</span>
          </Typography>
          <Typography
            as="li"
            type="small"
            className="text-foreground block font-semibold"
          >
            Email Address: <span className="text-black">{email}</span>
          </Typography>
          <Typography
            as="li"
            type="small"
            className="text-foreground block font-semibold"
          >
            VAT Number: <span className="text-black">{vat}</span>
          </Typography>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default function Billing5() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex items-start flex-col sm:flex-row gap-4 justify-between">
        <div>
          <Typography className="font-semibold">Billing Information</Typography>
          <Typography as="p" type="small" className="text-foreground">
            View and update your billing details quickly and easily.
          </Typography>
        </div>
        <Button
          variant="outline"
          color="secondary"
          className="w-full sm:w-auto"
        >
          <Plus className="w-4 h-4 mr-2" /> Add New Billing
        </Button>
      </div>
      <div className="mt-6 space-y-4">
        <BillingCard
          company="Burrito Vikings"
          contact="Emma Roberts"
          email="emma@mail.com"
          vat="FRB1235476"
        />
        <BillingCard
          company="Stone Tech Zone"
          contact="Marcel Glock"
          email="marcel@mail.com"
          vat="FRB1235476"
        />
        <BillingCard
          company="Fiber Notion"
          contact="Misha Stam"
          email="misha@mail.com"
          vat="FRB1235476"
        />
      </div>
    </div>
  );
}

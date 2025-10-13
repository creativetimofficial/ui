"use client";

// @components
import { Chip, Button, Typography, Card } from "@material-tailwind/react";

const OPTIONS = [
  {
    data: "Order ID",
    value: "1234",
  },
  {
    data: "Date of Placement",
    value: "April 3, 2024",
  },
  {
    data: "Amount",
    value: "$2,570",
  },
];

const TABLE_ROW = [
  {
    img: "https://v3.material-tailwind.com/coat-1.png",
    product: "Premium Suit",
    amount: "$790",
    date: "Apr 6, 2024",
  },
  {
    img: "https://v3.material-tailwind.com/coat-2.png",
    product: "Linen Suit",
    amount: "$790",
    date: "Apr 6, 2024",
  },
  {
    img: "https://v3.material-tailwind.com/coat-3.png",
    product: "Tweed Suit",
    amount: "$990",
    date: "Apr 6, 2024",
  },
];

const TABLE_HEAD = ["Product", "Amount", "Status", "Date", "Details"];

export default function EcommerceSection9() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <Typography as="h2" type="h6">
          Order History
        </Typography>
        <Typography className="text-foreground mt-2">
          See your recent orders, download your invoices.
        </Typography>
        <Card className="mt-8 mb-4 p-4 flex items-center flex-wrap gap-4 justify-between">
          <div className="flex gap-10">
            {OPTIONS.map((option, i) => (
              <div key={i}>
                <Typography
                  type="small"
                  className="text-foreground block mb-0.5"
                >
                  {option.data}
                </Typography>
                <Typography color="default" className="font-semibold">
                  {option.value}
                </Typography>
              </div>
            ))}
          </div>
          <Button>View Invoice</Button>
        </Card>
        <Card className="overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-surface p-4">
                    <Typography
                      type="small"
                      color="default"
                      className="block font-medium"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROW.map(({ img, product, amount, date }) => (
                <tr key={product}>
                  <td className="p-4 border-b border-surface">
                    <div className="flex items-center gap-3">
                      <img src={img} alt={product} className="h-16" />
                      <Typography
                        type="small"
                        color="default"
                        className="font-semibold block"
                      >
                        {product}
                      </Typography>
                    </div>
                  </td>
                  <td className="p-4 border-b border-surface">
                    <Typography type="small" className="block text-foreground">
                      {amount}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-surface">
                    <Chip
                      size="sm"
                      variant="ghost"
                      className="w-max"
                      color="success"
                    >
                      <Chip.Label>Delivered</Chip.Label>
                    </Chip>
                  </td>
                  <td className="p-4 border-b border-surface">
                    <Typography type="small" className="block text-foreground">
                      {date}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-surface">
                    <Button size="sm" variant="outline" color="secondary">
                      Download
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </section>
  );
}

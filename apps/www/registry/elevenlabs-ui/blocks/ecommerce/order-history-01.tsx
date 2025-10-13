"use client"

import { Badge } from "@/registry/elevenlabs-ui/ui/badge"
import { Button } from "@/registry/elevenlabs-ui/ui/button"
import { Card, CardContent } from "@/registry/elevenlabs-ui/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/elevenlabs-ui/ui/table"

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
]

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
]

const TABLE_HEAD = ["Product", "Amount", "Status", "Date", "Details"]

export default function OrderHistory01() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-lg font-semibold">Order History</h2>
        <p className="text-muted-foreground mt-2">
          See your recent orders, download your invoices.
        </p>
        <Card className="mt-8 mb-4">
          <CardContent className="p-4 flex items-center flex-wrap gap-4 justify-between">
            <div className="flex gap-10">
              {OPTIONS.map((option, i) => (
                <div key={i}>
                  <p className="text-sm text-muted-foreground mb-0.5">
                    {option.data}
                  </p>
                  <p className="font-semibold">{option.value}</p>
                </div>
              ))}
            </div>
            <Button>View Invoice</Button>
          </CardContent>
        </Card>
        <Card>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  {TABLE_HEAD.map((head) => (
                    <TableHead key={head}>{head}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {TABLE_ROW.map(({ img, product, amount, date }) => (
                  <TableRow key={product}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img src={img} alt={product} className="h-16" />
                        <span className="font-semibold text-sm">{product}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {amount}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Delivered
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {date}
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </section>
  )
}

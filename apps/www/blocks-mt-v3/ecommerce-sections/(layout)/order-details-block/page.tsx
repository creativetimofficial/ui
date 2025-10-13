"use client";

import * as React from "react";

// @components
import { Timeline, Button, Card, Typography } from "@material-tailwind/react";

// @icons
import { HomeSimple, CheckCircle, Archive, Truck } from "iconoir-react";

const OPTIONS = [
  {
    title: "Subtotal",
    value: "$1,780.00",
  },
  {
    title: "Shipping estimate",
    value: "$0",
  },
  {
    title: "Tax estimate",
    value: "$5",
  },
];

export default function EcommerceSection8() {
  const [step, setStep] = React.useState("3");

  const [isVertical, setIsVertical] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-10 flex items-start gap-4 flex-wrap justify-between">
          <div>
            <Typography as="h2" type="h5">
              Order ID 1234
            </Typography>
            <Typography className="text-foreground mt-2">
              Order placed on {""}
              <span className="font-semibold">April 1, 2024</span>
            </Typography>
          </div>
          <Button>View Invoice</Button>
        </div>
        <Card>
          <Card.Header className="grid w-full m-0 md:grid-cols-2 grid-cols-1 gap-10 border-b p-6 rounded-none">
            <div className="flex gap-4">
              <img
                src="https://v3.material-tailwind.com/coat-2.png"
                alt="coat"
                className="md:h-48 h-32"
              />
              <div className="space-y-2">
                <Typography color="default" type="h6" className="font-semibold">
                  Premium Suit
                </Typography>
                <Typography color="default" className="font-semibold">
                  $790
                </Typography>
                <Typography className="text-foreground [text-wrap:_balance]">
                  The time is now for it to be okay to be great. People in this
                  world shun people for being great.
                </Typography>
                <Typography color="default" className="font-semibold">
                  Size: M
                </Typography>
              </div>
            </div>
            <div className="flex justify-between gap-6">
              <div className="space-y-2">
                <Typography color="default" className="font-semibold">
                  Delivery Address
                </Typography>
                <Typography className="text-foreground">
                  362 Ridgewood, Alaska 99669, USA.
                </Typography>
              </div>
              <div className="space-y-2">
                <Typography color="default" className="font-semibold">
                  Shipping Updates
                </Typography>
                <Typography className="text-foreground">
                  michael@email.com (307) 682-8835
                </Typography>
                <Button variant="outline" color="secondary">
                  Edit
                </Button>
              </div>
            </div>
          </Card.Header>
          <Card.Body className="w-full sm:mt-4 p-6">
            <Typography
              color="default"
              className="font-semibold mb-10 text-center"
            >
              Preparing to ship on April 3, 2024
            </Typography>
            <Timeline
              mode="stepper"
              value={step}
              onChange={(val) => setStep(val)}
              orientation={isVertical ? "vertical" : "horizontal"}
            >
              <Timeline.Item value="0" className="w-full">
                <Timeline.Header>
                  <Timeline.Separator className="!left-1/2" />
                  <Timeline.Icon className="mx-auto">
                    <CheckCircle className="w-5 h-5" />
                  </Timeline.Icon>
                </Timeline.Header>
                <Timeline.Body className="md:text-center">
                  <Typography color="default" className="font-semibold">
                    Order Placed
                  </Typography>
                  <Typography type="small" className="mt-2 text-foreground">
                    10:00 PM April 1, 2024
                  </Typography>
                </Timeline.Body>
              </Timeline.Item>
              <Timeline.Item value="1" className="w-full">
                <Timeline.Header>
                  <Timeline.Separator className="!left-1/2" />
                  <Timeline.Icon className="mx-auto">
                    <Archive className="w-5 h-5" />
                  </Timeline.Icon>
                </Timeline.Header>
                <Timeline.Body className="md:text-center">
                  <Typography color="default" className="font-semibold">
                    Shipped
                  </Typography>
                  <Typography type="small" className="mt-2 text-foreground">
                    10:00 PM April 3, 2024
                  </Typography>
                </Timeline.Body>
              </Timeline.Item>
              <Timeline.Item value="2" className="w-full">
                <Timeline.Header>
                  <Timeline.Separator className="!left-1/2" />
                  <Timeline.Icon className="mx-auto">
                    <Truck className="w-5 h-5" />
                  </Timeline.Icon>
                </Timeline.Header>
                <Timeline.Body className="md:text-center">
                  <Typography color="default" className="font-semibold">
                    Out for Delivery
                  </Typography>
                  <Typography type="small" className="mt-2 text-foreground">
                    11:00 PM April 3, 2024
                  </Typography>
                </Timeline.Body>
              </Timeline.Item>
              <Timeline.Item value="3" className="w-full">
                <Timeline.Header>
                  <Timeline.Icon className="md:mx-auto">
                    <HomeSimple className="w-5 h-5" />
                  </Timeline.Icon>
                </Timeline.Header>
                <Timeline.Body className="md:text-center !pb-0 md:!py-4">
                  <Typography color="default" className="font-semibold">
                    Delivered
                  </Typography>
                  <Typography type="small" className="mt-2 text-foreground">
                    Estimated date: April 9, 2024
                  </Typography>
                </Timeline.Body>
              </Timeline.Item>
            </Timeline>
          </Card.Body>
        </Card>
        <Card className="mt-6 grid md:grid-cols-2 grid-cols-1 gap-10">
          <Card.Body className="flex justify-between p-6 gap-6">
            <div>
              <Typography color="default" className="font-semibold">
                Billing Address
              </Typography>
              <Typography className="text-foreground mt-4">
                362 Ridgewood Dr, <br />
                Soldotna, Alaska 99669, USA
              </Typography>
            </div>
            <div>
              <Typography color="default" className="font-semibold">
                Payment information
              </Typography>
              <div className="mt-4 flex flex-wrap items-start gap-4">
                <div className="border rounded-md px-2 shrink-0">
                  <img
                    src="https://v3.material-tailwind.com/visa.webp"
                    alt="visa"
                    className="w-10 h-8"
                  />
                </div>
                <div>
                  <Typography color="default" className="mb-1">
                    Visa 1234
                  </Typography>
                  <Typography className="text-foreground">
                    Expiry 06/2026
                  </Typography>
                </div>
              </div>
            </div>
          </Card.Body>
          <Card.Body className="space-y-4 w-full p-6 lg:max-w-md lg:ml-auto">
            {OPTIONS.map(({ title, value }, key) => (
              <div key={key} className="flex justify-between">
                <Typography className="text-foreground">{title}</Typography>
                <Typography className="text-foreground">{value}</Typography>
              </div>
            ))}
            <div className="flex justify-between border-t py-4">
              <Typography color="default" className="font-semibold">
                Order Total
              </Typography>
              <Typography color="default" className="font-semibold">
                $790
              </Typography>
            </div>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

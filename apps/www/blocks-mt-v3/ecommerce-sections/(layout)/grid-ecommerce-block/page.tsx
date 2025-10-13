"use client";

// @components
import { Card, Typography, Button } from "@material-tailwind/react";

const CARDS = [
  {
    image: "https://v3.material-tailwind.com/3d-obj-1.jpg",
    title: "New",
    subtitle: "Urban Chick Collection",
  },
  {
    image: "https://v3.material-tailwind.com/3d-obj-2.jpg",
    title: "Shop Sales",
    subtitle: "Urban Chick Collection",
  },
  {
    image: "https://v3.material-tailwind.com/3d-obj-3.jpg",
    title: "50% off",
    subtitle: "Urban Chick Collection",
  },
];

export default function EcommerceSection6() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <Typography color="default" className="font-semibold mb-8">
          Gear Up and Enjoy Savings | Get up to 50% off on select items
        </Typography>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {CARDS.map(({ image, title, subtitle }, index) => (
            <Card key={index}>
              <Card.Header className="m-0 w-full max-h-80 h-full p-4">
                <img
                  src={image}
                  alt="iamge"
                  className="rounded w-full h-full object-cover object-center"
                />
              </Card.Header>
              <Card.Body className="px-6 py-2 text-center">
                <Typography color="primary" className="font-semibold">
                  {title}
                </Typography>
                <Typography type="h5" className="mt-4 font-semibold">
                  {subtitle}
                </Typography>
              </Card.Body>
              <Card.Footer className="p-6 text-center">
                <Button>Read More</Button>
              </Card.Footer>
            </Card>
          ))}
        </div>
        <Card className="flex flex-col md:flex-row mt-6 items-center">
          <Card.Header className="m-0 w-full h-96 p-4">
            <img
              src="https://v3.material-tailwind.com/3d-obj-4.jpg"
              alt="iamge"
              className="rounded w-full h-full object-cover object-center"
            />
          </Card.Header>
          <Card.Body className="justify-items-center text-center">
            <Typography type="lead" color="primary" className="font-semibold">
              UP TO 70%
            </Typography>
            <Typography type="h5" className="mt-4 font-semibold">
              Formal Elegance Series
            </Typography>
            <Button className="mt-6">Discover</Button>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

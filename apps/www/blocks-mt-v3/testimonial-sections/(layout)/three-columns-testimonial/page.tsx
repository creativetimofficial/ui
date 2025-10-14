"use client";

// @components
import { Card, Typography, Rating } from "@material-tailwind/react";

const TESTIMONIALS = [
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    name: "Lucian Eurel",
    role: "CEO Discord",
    quote:
      "Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!",
    rating: 5,
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-1.jpg",
    name: "Linde Michel",
    role: "CFO Slack",
    quote:
      "Don't be scared of the truth because we need to restart the human foundation in truth. That's why I love you like Kanye loves Kanye I love Rick Owens• bed design but the back is not so attractive.",
    rating: 4,
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-2.jpg",
    name: "Misha Stam",
    role: "COO Dribbble",
    quote:
      "Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!",
    rating: 5,
  },
];

export default function TestimonialSection3() {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map(({ name, image, role, quote, rating }, key) => (
          <Card key={key} variant="ghost" className="bg-transparent">
            <Card.Body className="p-0 text-center">
              <img
                src={image}
                alt={`${name} image`}
                className="w-full h-full mx-auto max-w-40 max-h-40 object-cover object-center rounded-xl mb-4"
              />
              <Typography type="lead" className="font-semibold">
                {name}
              </Typography>
              <Typography className="text-foreground">{role}</Typography>
              <Typography
                as="blockquote"
                type="lead"
                className="mt-4 mb-6 [text-wrap:_balance] mx-auto max-w-lg"
              >
                &quot;{quote}&quot;
              </Typography>
              <Rating value={rating} color="warning" readonly />
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}

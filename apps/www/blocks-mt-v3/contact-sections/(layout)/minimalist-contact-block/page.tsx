"use client";

// @components
import { Card, Typography } from "@material-tailwind/react";

// @icons
import { Mail, Phone, User, OpenBook } from "iconoir-react";

const OPTIONS = [
  {
    icon: OpenBook,
    title: "Address",
    description: "12124 First Street, nr 54",
  },
  {
    icon: Mail,
    title: "Email",
    description: "hello@email.com",
  },
  {
    icon: Phone,
    title: "Phone",
    description: "+1 (424) 535-3523",
  },
  {
    icon: User,
    title: "Contact",
    description: "Andrew Samian",
  },
];

export default function ContactSection3() {
  return (
    <section>
      <div className="grid place-items-center text-center bg-[url('/dark-bg-pattern.jpg')] h-full min-h-[70vh] bg-cover bg-center w-full">
        <div className="-mt-8">
          <Typography as="h2" type="h3" className="mb-4 text-white">
            Got a Question?
          </Typography>
          <Typography type="lead" className="text-white/80">
            We&apos;d like to talk more about what you need
          </Typography>
        </div>
      </div>
      <div className="container mx-auto -mt-20 pb-4">
        <Card className="py-8">
          <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
            {OPTIONS.map(({ icon: Icon, title, description }, key) => (
              <div key={key} className="text-center">
                <Card
                  color="primary"
                  className="w-12 mx-auto h-12 rounded-lg grid place-items-center"
                >
                  <Icon className="w-6 h-6 text-white" />
                </Card>
                <Typography type="lead" className="font-semibold mt-4 mb-1">
                  {title}
                </Typography>
                <Typography className="text-foreground">
                  {description}
                </Typography>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

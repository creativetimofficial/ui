"use client";

// @components
import { Card, Typography } from "@material-tailwind/react";

// @icons
import { NavArrowRight } from "iconoir-react";

export default function TestimonialSection13() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <Card className="bg-black rounded-xl">
          <Card.Body className="p-4 w-full grid grid-cols-1 gap-4 md:grid-cols-12">
            <div className="col-span-full md:col-span-4">
              <img
                src="https://v3.material-tailwind.com/woman-profile-2.jpg"
                alt="user profile"
                className="w-full h-full rounded-lg max-h-96 object-cover object-center"
              />
            </div>
            <div className="col-span-full md:col-span-5 p-2 md:p-6">
              <Typography
                as="blockquote"
                className="mb-6 md:mb-12 text-white [text-wrap:balance]"
              >
                &quot;Decisions: If you can&apos;t decide, the answer is no. If
                two equally difficult paths, choose the one more painful in the
                short term (pain avoidance is creating an illusion of equality).
                Choose the path that leaves you more equanimous in the long
                term.&quot;
              </Typography>
              <Typography className="font-semibold text-white">
                Michael - Writer
              </Typography>
            </div>
            <div className="col-span-full md:col-span-3 p-2 md:p-6">
              <Typography as="p" type="h4" className="text-white mb-2">
                1,679,700+
              </Typography>
              <Typography className="text-white mb-4 md:mb-8">
                Developers and Companies around the world using our products.
              </Typography>
              <a
                href="#"
                className="font-semibold text-white flex items-center gap-1.5"
              >
                See all products <NavArrowRight className="w-5 h-5 stroke-2" />
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}

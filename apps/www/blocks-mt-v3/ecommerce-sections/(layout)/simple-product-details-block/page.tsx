"use client";

// @components
import {
  Button,
  IconButton,
  Rating,
  Typography,
} from "@material-tailwind/react";

// @icons
import { HeartSolid } from "iconoir-react";

export default function EcommerceSection14() {
  return (
    <section className="py-16">
      <div className="container mx-auto grid gap-y-10 gap-x-6 items-center md:grid-cols-2 grid-cols-1">
        <div className="h-full w-full max-h-[30rem] border border-surface rounded-lg">
          <img
            alt="image"
            src="https://v3.material-tailwind.com/coat-1.png"
            className="w-auto mx-auto h-full"
          />
        </div>
        <div className="md:p-2">
          <Typography color="default" type="h4">
            Pink Blouse
          </Typography>
          <Typography type="h6" color="primary" className="my-4">
            $1,490
          </Typography>
          <Typography className="text-foreground [text-wrap:_balance]">
            As we live, our hearts turn colder. Cause pain is what we go through
            as we become older. We get insulted by others, lose trust for those
            others. We get back stabbed by friends. It becomes harder for us to
            give others a hand. We get our heart broken by people we love, even
            that we give them all we have. Then we lose family over time. What
            else could rust the heart more over time? Blackgold.
          </Typography>
          <div className="flex items-center gap-2 my-8">
            <Rating value={4} color="warning" readonly />
            <Typography className="font-semibold text-foreground">
              100 Reviews
            </Typography>
          </div>
          <Typography type="h6" color="default" className="my-4">
            Color
          </Typography>
          <div className="flex gap-2">
            <div className="h-5 w-5 bg-black rounded" />
            <div className="h-5 w-5 bg-white rounded-[4px] border border-surface" />
            <div className="h-5 w-5 bg-surface rounded-[4px] border border-surface" />
          </div>
          <div className="mt-6 flex items-center gap-2">
            <Button className="w-full max-w-60">Add to Cart</Button>
            <IconButton variant="outline" color="error">
              <HeartSolid className="w-4 h-4" />
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
}

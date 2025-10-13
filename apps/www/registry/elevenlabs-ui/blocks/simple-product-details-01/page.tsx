"use client"

import { Heart } from "lucide-react"
import { Button } from "@/registry/elevenlabs-ui/ui/button"

export default function SimpleProductDetails01() {
  return (
    <section className="py-16">
      <div className="container mx-auto grid gap-y-10 gap-x-6 items-center md:grid-cols-2 grid-cols-1">
        <div className="h-full w-full max-h-[30rem] border rounded-lg">
          <img
            alt="Pink Blouse"
            src="https://v3.material-tailwind.com/coat-1.png"
            className="w-auto mx-auto h-full"
          />
        </div>
        <div className="md:p-2">
          <h3 className="text-2xl font-bold">Pink Blouse</h3>
          <p className="text-2xl font-semibold text-primary my-4">$1,490</p>
          <p className="text-muted-foreground [text-wrap:_balance]">
            As we live, our hearts turn colder. Cause pain is what we go through
            as we become older. We get insulted by others, lose trust for those
            others. We get back stabbed by friends. It becomes harder for us to
            give others a hand. We get our heart broken by people we love, even
            that we give them all we have. Then we lose family over time. What
            else could rust the heart more over time? Blackgold.
          </p>
          <div className="flex items-center gap-2 my-8">
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 fill-yellow-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <svg className="w-5 h-5 fill-gray-300" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            </div>
            <p className="font-semibold text-sm">100 Reviews</p>
          </div>
          <h4 className="text-lg font-semibold my-4">Color</h4>
          <div className="flex gap-2">
            <div className="h-5 w-5 bg-black rounded cursor-pointer" />
            <div className="h-5 w-5 bg-white rounded border cursor-pointer" />
            <div className="h-5 w-5 bg-gray-200 rounded border cursor-pointer" />
          </div>
          <div className="mt-6 flex items-center gap-2">
            <Button className="w-full max-w-60">Add to Cart</Button>
            <Button variant="outline" size="icon" className="text-red-500">
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

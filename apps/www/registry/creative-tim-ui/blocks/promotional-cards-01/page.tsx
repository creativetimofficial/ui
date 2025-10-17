"use client"

import { useState } from "react"

const PRODUCTS = [
  {
    name: "Active toning essence",
    price: "$59.00",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Hydrating face serum",
    price: "$49.00",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Vitamin C moisturizer",
    price: "$65.00",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=800",
  },
]

export default function PromotionalCards01() {
  const [currentProduct, setCurrentProduct] = useState(0)

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl shadow-xl lg:grid-cols-2">
          {/* Left: Product Showcase */}
          <div className="flex flex-col items-center justify-center bg-[#e8e3dc] p-16">
            <div className="mb-8 flex h-80 w-80 items-center justify-center">
              <img
                src={PRODUCTS[currentProduct].image}
                alt={PRODUCTS[currentProduct].name}
                className="h-full w-full object-contain drop-shadow-2xl transition-all duration-500"
              />
            </div>
            <h3 className="mb-2 text-center text-lg font-medium text-gray-800">
              {PRODUCTS[currentProduct].name}
            </h3>
            <p className="mb-6 text-center text-xl font-semibold text-gray-900">
              {PRODUCTS[currentProduct].price}
            </p>
            <div className="flex gap-2">
              {PRODUCTS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProduct(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    currentProduct === index
                      ? "w-8 bg-gray-800"
                      : "bg-gray-400 hover:bg-gray-600"
                  }`}
                  aria-label={`View product ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Hero Image with Text */}
          <div className="relative flex min-h-[500px] items-center justify-center lg:min-h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1581182815808-b6eb627a8798?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1065"
              alt="Beauty model"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="relative z-10 px-8 text-center lg:px-16">
              <h2 className="font-serif text-5xl leading-tight font-light text-white drop-shadow-lg lg:text-6xl">
                Glow up with
                <br />
                nature
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Heart } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const FILTERS = [
  {
    id: "categories",
    label: "Categories",
    options: ["All", "Shirts", "Pants", "Sweaters", "Jackets"],
  },
  {
    id: "size",
    label: "Size",
    options: ["All Sizes", "XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    id: "material",
    label: "Material",
    options: ["All Materials", "Cotton", "Cashmere", "Wool", "Silk", "Linen"],
  },
  {
    id: "color",
    label: "Color",
    options: ["All Colors", "Black", "Blue", "Gray", "Brown", "White", "Navy"],
  },
  {
    id: "pattern",
    label: "Pattern",
    options: ["All Patterns", "Solid", "Striped", "Cable-knit", "Printed"],
  },
]

const PRODUCTS = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=973",
    brand: "Zegna",
    name: "Cable-knit cashmere cardigan",
    price: "€3,450",
    badge: "Exclusive",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1559745482-57bfa9ca5a8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1481",
    brand: "Zegna",
    name: "Cotton and cashmere shirt",
    price: "€675",
    badge: null,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1737608734653-d1eaad541d46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1027",
    brand: "Zegna",
    name: "Wool straight pants",
    price: "€1,450",
    badge: "Exclusive",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1661327930345-9c6714b603b3?auto=format&fit=crop&q=80&w=400&h=400",
    brand: "Zegna",
    name: "Cashmere sweater",
    price: "€1,950",
    badge: "New Arrival",
  },
]

export default function ProductListingFilters01() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string>
  >({})

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    )
  }

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <Select
                key={filter.id}
                value={selectedFilters[filter.id] || filter.options[0]}
                onValueChange={(value) =>
                  setSelectedFilters((prev) => ({
                    ...prev,
                    [filter.id]: value,
                  }))
                }
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder={filter.label} />
                </SelectTrigger>
                <SelectContent>
                  {filter.options.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-sm">462 Products</span>
            <Select defaultValue="featured">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group bg-card relative overflow-hidden rounded-lg border transition-all hover:shadow-lg"
            >
              {product.badge && (
                <Badge
                  variant="secondary"
                  className="absolute top-3 left-3 z-10 bg-white dark:bg-gray-900"
                >
                  {product.badge}
                </Badge>
              )}
              <button
                onClick={() => toggleFavorite(product.id)}
                className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-colors hover:bg-white dark:bg-gray-900/90 dark:hover:bg-gray-900"
              >
                <Heart
                  className={`h-4 w-4 transition-colors ${
                    favorites.includes(product.id)
                      ? "fill-red-500 text-red-500"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                />
              </button>

              <div className="bg-muted/30 aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="border-t p-4">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{product.brand}</p>
                    <p className="text-muted-foreground mt-1 text-sm leading-tight">
                      {product.name}
                    </p>
                  </div>
                </div>
                <p className="mt-2 font-semibold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

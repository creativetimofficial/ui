import { type Registry } from "shadcn/schema"

export const ui: Registry["items"] = [
  {
    name: "software-purchase-card",
    type: "registry:ui",
    registryDependencies: ["button", "card", "badge"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "ui/software-purchase-card.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "card-demo",
    type: "registry:ui",
    registryDependencies: ["card", "button", "badge"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "examples/card-demo.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "card-plain",
    type: "registry:ui",
    registryDependencies: ["card"],
    files: [
      {
        path: "examples/card-plain.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "card-with-button",
    type: "registry:ui",
    registryDependencies: ["card", "button"],
    files: [
      {
        path: "examples/card-with-button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "card-blog",
    type: "registry:ui",
    registryDependencies: ["card", "button"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "examples/card-blog.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "card-ecommerce",
    type: "registry:ui",
    registryDependencies: ["card", "button", "badge"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "examples/card-ecommerce.tsx",
        type: "registry:ui",
      },
    ],
  },
]

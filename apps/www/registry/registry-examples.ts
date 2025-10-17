import { type Registry } from "shadcn/schema"

export const examples: Registry["items"] = [
  {
    name: "software-purchase-card-demo",
    type: "registry:example",
    registryDependencies: ["software-purchase-card"],
    files: [
      {
        path: "examples/software-purchase-card-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "card-demo",
    type: "registry:example",
    registryDependencies: ["card", "button", "badge"],
    files: [
      {
        path: "examples/card-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "card-plain",
    type: "registry:example",
    registryDependencies: ["card"],
    files: [
      {
        path: "examples/card-plain.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "card-with-button",
    type: "registry:example",
    registryDependencies: ["card", "button"],
    files: [
      {
        path: "examples/card-with-button.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "card-blog",
    type: "registry:example",
    registryDependencies: ["card", "button"],
    files: [
      {
        path: "examples/card-blog.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "card-ecommerce",
    type: "registry:example",
    registryDependencies: ["card", "button", "badge"],
    files: [
      {
        path: "examples/card-ecommerce.tsx",
        type: "registry:example",
      },
    ],
  },
]

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
]

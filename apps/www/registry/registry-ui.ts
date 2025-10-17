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
]

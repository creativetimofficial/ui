import { type Registry } from "shadcn/schema"

export const ui: Registry["items"] = [
  {
    name: "orb",
    type: "registry:ui",
    dependencies: [
      "@react-three/drei",
      "@react-three/fiber",
      "three",
      "@types/three",
    ],
    files: [
      {
        path: "ui/orb.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "waveform",
    type: "registry:ui",
    files: [
      {
        path: "ui/waveform.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "live-waveform",
    type: "registry:ui",
    files: [
      {
        path: "ui/live-waveform.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "shimmering-text",
    type: "registry:ui",
    dependencies: ["motion"],
    files: [
      {
        path: "ui/shimmering-text.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "audio-player",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slider", "@radix-ui/react-dropdown-menu"],
    registryDependencies: ["button", "dropdown-menu"],
    files: [
      {
        path: "ui/audio-player.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "message",
    type: "registry:ui",
    dependencies: ["class-variance-authority"],
    registryDependencies: ["avatar"],
    files: [
      {
        path: "ui/message.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "conversation",
    type: "registry:ui",
    dependencies: ["use-stick-to-bottom"],
    registryDependencies: ["button"],
    files: [
      {
        path: "ui/conversation.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "response",
    type: "registry:ui",
    dependencies: ["streamdown"],
    files: [
      {
        path: "ui/response.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "bar-visualizer",
    type: "registry:ui",
    files: [
      {
        path: "ui/bar-visualizer.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "voice-picker",
    type: "registry:ui",
    dependencies: ["@elevenlabs/elevenlabs-js"],
    registryDependencies: [
      "button",
      "badge",
      "command",
      "popover",
      "https://ui.elevenlabs.io/r/orb.json",
      "https://ui.elevenlabs.io/r/audio-player.json",
    ],
    files: [
      {
        path: "ui/voice-picker.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "voice-button",
    type: "registry:ui",
    registryDependencies: [
      "button",
      "https://ui.elevenlabs.io/r/live-waveform.json",
    ],
    files: [
      {
        path: "ui/voice-button.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "conversation-bar",
    type: "registry:ui",
    registryDependencies: [
      "button",
      "https://ui.elevenlabs.io/r/live-waveform.json",
      "card",
      "separator",
      "textarea",
    ],
    dependencies: ["@elevenlabs/react"],
    files: [
      {
        path: "ui/conversation-bar.tsx",
        type: "registry:ui",
      },
    ],
  },
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

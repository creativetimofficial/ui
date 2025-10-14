import { type Registry } from "shadcn/schema"

export const blocks: Registry["items"] = [
  {
    name: "speaker-01",
    description: "EL-01 Speaker",
    type: "registry:block",
    registryDependencies: [
      "https://ui.elevenlabs.io/r/audio-player.json",
      "https://ui.elevenlabs.io/r/orb.json",
      "https://ui.elevenlabs.io/r/waveform.json",
      "button",
      "card",
    ],
    files: [
      {
        path: "blocks/speaker-01/page.tsx",
        type: "registry:page",
        target: "app/speaker/page.tsx",
      },
      {
        path: "blocks/speaker-01/components/speaker.tsx",
        type: "registry:component",
        target: "components/speaker.tsx",
      },
    ],
    meta: {
      iframeHeight: "900px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["audio"],
  },
  {
    name: "transcriber-01",
    description: "Transcriber",
    type: "registry:block",
    registryDependencies: [
      "https://ui.elevenlabs.io/r/live-waveform.json",
      "button",
      "card",
      "scroll-area",
      "separator",
    ],
    dependencies: ["@elevenlabs/elevenlabs-js", "streamdown"],
    files: [
      {
        path: "blocks/transcriber-01/page.tsx",
        type: "registry:page",
        target: "app/transcriber-01/page.tsx",
      },
      {
        path: "blocks/transcriber-01/actions/transcribe.ts",
        type: "registry:file",
        target: "app/transcriber-01/actions/transcribe.ts",
      },
    ],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["audio"],
  },
  {
    name: "voice-chat-01",
    description: "Voice chat 1",
    type: "registry:block",
    registryDependencies: [
      "https://ui.elevenlabs.io/r/orb.json",
      "https://ui.elevenlabs.io/r/shimmering-text.json",
      "button",
      "card",
      "https://ui.elevenlabs.io/r/message.json",
      "https://ui.elevenlabs.io/r/response.json",
      "https://ui.elevenlabs.io/r/conversation.json",
      "scroll-area",
    ],
    dependencies: ["@elevenlabs/react"],
    files: [
      {
        path: "blocks/voice-chat-01/page.tsx",
        type: "registry:page",
        target: "app/voice-chat/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "800px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["agents"],
  },
  {
    name: "voice-chat-02",
    description: "Voice chat 2",
    type: "registry:block",
    registryDependencies: [
      "https://ui.elevenlabs.io/r/orb.json",
      "https://ui.elevenlabs.io/r/shimmering-text.json",
      "button",
      "card",
    ],
    dependencies: ["@elevenlabs/react", "framer-motion"],
    files: [
      {
        path: "blocks/voice-chat-02/page.tsx",
        type: "registry:page",
        target: "app/voice-chat/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["agents"],
  },
  {
    name: "voice-chat-03",
    description: "Voice chat 3",
    type: "registry:block",
    registryDependencies: [
      "https://ui.elevenlabs.io/r/conversation-bar.json",
      "https://ui.elevenlabs.io/r/conversation.json",
      "https://ui.elevenlabs.io/r/message.json",
      "https://ui.elevenlabs.io/r/orb.json",
      "https://ui.elevenlabs.io/r/response.json",
      "tooltip",
      "card",
      "button",
    ],
    dependencies: ["@elevenlabs/react"],
    files: [
      {
        path: "blocks/voice-chat-03/page.tsx",
        type: "registry:page",
        target: "app/voice-chat/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "800px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["agents"],
  },
  {
    name: "music-player-01",
    description: "Music player with playlist",
    type: "registry:block",
    registryDependencies: [
      "https://ui.elevenlabs.io/r/audio-player.json",
      "button",
      "scroll-area",
    ],
    files: [
      {
        path: "blocks/music-player-01/page.tsx",
        type: "registry:page",
        target: "app/music-player/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["audio"],
  },
  {
    name: "music-player-02",
    description: "Simple music player",
    type: "registry:block",
    registryDependencies: [
      "https://ui.elevenlabs.io/r/audio-player.json",
      "card",
    ],
    files: [
      {
        path: "blocks/music-player-02/page.tsx",
        type: "registry:page",
        target: "app/music-player/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "400px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["audio"],
  },
  {
    name: "voice-form-01",
    description: "Voice-fill form",
    type: "registry:block",
    registryDependencies: [
      "https://ui.elevenlabs.io/r/voice-button.json",
      "https://ui.elevenlabs.io/r/live-waveform.json",
      "button",
      "card",
      "form",
      "input",
    ],
    dependencies: ["@elevenlabs/elevenlabs-js", "ai", "zod"],
    files: [
      {
        path: "blocks/voice-form-01/page.tsx",
        type: "registry:page",
        target: "app/voice-form/page.tsx",
      },
      {
        path: "blocks/voice-form-01/schema.ts",
        type: "registry:file",
        target: "app/voice-form/schema.ts",
      },
      {
        path: "blocks/voice-form-01/actions/voice-to-form.ts",
        type: "registry:file",
        target: "app/voice-form/actions/voice-to-form.ts",
      },
    ],
    meta: {
      iframeHeight: "700px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["audio"],
  },
  {
    name: "voice-nav-01",
    description: "Voice-nav site navigation",
    type: "registry:block",
    registryDependencies: [
      "https://ui.elevenlabs.io/r/voice-button.json",
      "button",
      "card",
    ],
    dependencies: ["@elevenlabs/elevenlabs-js", "ai", "zod"],
    files: [
      {
        path: "blocks/voice-nav-01/page.tsx",
        type: "registry:page",
        target: "app/voice-nav/page.tsx",
      },
      {
        path: "blocks/voice-nav-01/actions/voice-to-site.ts",
        type: "registry:file",
        target: "app/voice-nav/actions/voice-to-site.ts",
      },
    ],
    meta: {
      iframeHeight: "900px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["audio"],
  },
  {
    name: "software-purchase-01",
    description: "Software purchase approval card",
    type: "registry:block",
    registryDependencies: ["software-purchase-card", "separator"],
    files: [
      {
        path: "blocks/software-purchase-01/page.tsx",
        type: "registry:page",
        target: "app/software-purchase/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "900px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["forms"],
  },
  {
    name: "billing-information-01",
    description: "Billing information management",
    type: "registry:block",
    registryDependencies: ["button", "card"],
    files: [
      {
        path: "blocks/billing-information-01/page.tsx",
        type: "registry:page",
        target: "app/billing-information/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "700px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["billing"],
  },
  {
    name: "card-display-01",
    description: "Credit card display",
    type: "registry:block",
    registryDependencies: ["card"],
    files: [
      {
        path: "blocks/card-display-01/page.tsx",
        type: "registry:page",
        target: "app/card-display/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "400px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["billing"],
  },
  {
    name: "payment-method-01",
    description: "Payment methods management",
    type: "registry:block",
    registryDependencies: ["button", "card", "tooltip"],
    files: [
      {
        path: "blocks/payment-method-01/page.tsx",
        type: "registry:page",
        target: "app/payment-method/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "500px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["billing"],
  },
  {
    name: "transaction-history-01",
    description: "Transaction history with date picker",
    type: "registry:block",
    registryDependencies: ["button", "calendar", "card", "popover"],
    dependencies: ["date-fns"],
    files: [
      {
        path: "blocks/transaction-history-01/page.tsx",
        type: "registry:page",
        target: "app/transaction-history/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "800px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["billing"],
  },
  {
    name: "invoices-01",
    description: "Invoices list with status badges",
    type: "registry:block",
    registryDependencies: ["badge", "button", "separator"],
    files: [
      {
        path: "blocks/invoices-01/page.tsx",
        type: "registry:page",
        target: "app/invoices/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "700px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["billing"],
  },
  {
    name: "simple-blog-content-01",
    description: "Simple blog content cards",
    type: "registry:block",
    registryDependencies: ["avatar", "badge", "card"],
    files: [
      {
        path: "blocks/simple-blog-content-01/page.tsx",
        type: "registry:page",
        target: "app/simple-blog-content/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "800px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["blog-sections"],
  },
  {
    name: "blog-cards-layout-01",
    description: "Blog cards with view more button",
    type: "registry:block",
    registryDependencies: ["avatar", "badge", "button", "card"],
    files: [
      {
        path: "blocks/blog-cards-layout-01/page.tsx",
        type: "registry:page",
        target: "app/blog-cards-layout/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1200px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["blog-sections"],
  },
  {
    name: "blog-post-preview-tags-01",
    description: "Blog posts with tags",
    type: "registry:block",
    registryDependencies: ["badge", "button"],
    files: [
      {
        path: "blocks/blog-post-preview-tags-01/page.tsx",
        type: "registry:page",
        target: "app/blog-post-preview-tags/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1100px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["blog-sections"],
  },
  {
    name: "highlighted-blog-posts-01",
    description: "Highlighted blog posts with icons",
    type: "registry:block",
    registryDependencies: ["button", "card"],
    files: [
      {
        path: "blocks/highlighted-blog-posts-01/page.tsx",
        type: "registry:page",
        target: "app/highlighted-blog-posts/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "800px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["blog-sections"],
  },
  {
    name: "blog-rectangular-images-01",
    description: "Blog posts with rectangular images",
    type: "registry:block",
    registryDependencies: ["avatar", "badge"],
    files: [
      {
        path: "blocks/blog-rectangular-images-01/page.tsx",
        type: "registry:page",
        target: "app/blog-rectangular-images/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1000px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["blog-sections"],
  },
  {
    name: "large-blog-preview-01",
    description: "Large blog post preview",
    type: "registry:block",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "blocks/large-blog-preview-01/page.tsx",
        type: "registry:page",
        target: "app/large-blog-preview/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "700px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["blog-sections"],
  },
  {
    name: "simple-product-details-01",
    description: "Simple product details grid",
    type: "registry:block",
    registryDependencies: ["button", "card"],
    files: [
      {
        path: "blocks/simple-product-details-01/page.tsx",
        type: "registry:page",
        target: "app/simple-product-details/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1000px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["ecommerce"],
  },
  {
    name: "grid-ecommerce-01",
    description: "Product grid with filters",
    type: "registry:block",
    registryDependencies: ["button", "card", "select"],
    files: [
      {
        path: "blocks/grid-ecommerce-01/page.tsx",
        type: "registry:page",
        target: "app/grid-ecommerce/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1200px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["ecommerce"],
  },
  {
    name: "promotional-cards-01",
    description: "Promotional product cards",
    type: "registry:block",
    registryDependencies: ["button", "card"],
    files: [
      {
        path: "blocks/promotional-cards-01/page.tsx",
        type: "registry:page",
        target: "app/promotional-cards/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "800px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["ecommerce"],
  },
  {
    name: "order-history-01",
    description: "Order history table",
    type: "registry:block",
    registryDependencies: ["badge", "button", "card"],
    files: [
      {
        path: "blocks/order-history-01/page.tsx",
        type: "registry:page",
        target: "app/order-history/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1000px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["ecommerce"],
  },
  {
    name: "empty-shopping-cart-01",
    description: "Empty shopping cart state",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/empty-shopping-cart-01/page.tsx",
        type: "registry:page",
        target: "app/empty-shopping-cart/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "800px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["ecommerce"],
  },
  {
    name: "digital-product-overview-01",
    description: "Digital product with plan options",
    type: "registry:block",
    registryDependencies: ["button", "label", "radio-group"],
    files: [
      {
        path: "blocks/digital-product-overview-01/page.tsx",
        type: "registry:page",
        target: "app/digital-product-overview/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1000px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["ecommerce"],
  },
  {
    name: "product-description-01",
    description: "Product description with gallery",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/product-description-01/page.tsx",
        type: "registry:page",
        target: "app/product-description/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1200px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["ecommerce"],
  },
  {
    name: "dark-product-overview-01",
    description: "Dark themed product overview",
    type: "registry:block",
    registryDependencies: ["button", "tabs"],
    files: [
      {
        path: "blocks/dark-product-overview-01/page.tsx",
        type: "registry:page",
        target: "app/dark-product-overview/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1000px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["ecommerce"],
  },
  {
    name: "shopping-cart-01",
    description: "Shopping cart with summary",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "select"],
    files: [
      {
        path: "blocks/shopping-cart-01/page.tsx",
        type: "registry:page",
        target: "app/shopping-cart/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1100px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["ecommerce"],
  },
  {
    name: "checkout-01",
    description: "Checkout form with order summary",
    type: "registry:block",
    registryDependencies: ["button", "checkbox", "input", "label"],
    files: [
      {
        path: "blocks/checkout-01/page.tsx",
        type: "registry:page",
        target: "app/checkout/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "900px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["ecommerce"],
  },
  {
    name: "complex-product-description-01",
    description: "Product description with accordion",
    type: "registry:block",
    registryDependencies: ["accordion", "button"],
    files: [
      {
        path: "blocks/complex-product-description-01/page.tsx",
        type: "registry:page",
        target: "app/complex-product-description/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1200px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["ecommerce"],
  },
  {
    name: "interactive-product-preview-01",
    description: "Interactive room product preview",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/interactive-product-preview-01/page.tsx",
        type: "registry:page",
        target: "app/interactive-product-preview/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1100px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["ecommerce"],
  },
  {
    name: "order-details-01",
    description: "Order details with timeline",
    type: "registry:block",
    registryDependencies: ["button", "card"],
    files: [
      {
        path: "blocks/order-details-01/page.tsx",
        type: "registry:page",
        target: "app/order-details/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1000px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["ecommerce"],
  },
  {
    name: "product-details-01",
    description: "Product details with image carousel",
    type: "registry:block",
    registryDependencies: ["button", "card"],
    files: [
      {
        path: "blocks/product-details-01/page.tsx",
        type: "registry:page",
        target: "app/product-details/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1000px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["ecommerce"],
  },
  {
    name: "simple-faq-01",
    description: "Simple FAQ with dividers",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/simple-faq-01/page.tsx",
        type: "registry:page",
        target: "app/simple-faq/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "800px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["faqs"],
  },
  {
    name: "faqs-list-01",
    description: "FAQ list with accordion",
    type: "registry:block",
    registryDependencies: ["accordion"],
    files: [
      {
        path: "blocks/faqs-list-01/page.tsx",
        type: "registry:page",
        target: "app/faqs-list/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "900px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["faqs"],
  },
  {
    name: "faq-left-title-01",
    description: "FAQ with left-aligned title and card grid",
    type: "registry:block",
    registryDependencies: ["card"],
    files: [
      {
        path: "blocks/faq-left-title-01/page.tsx",
        type: "registry:page",
        target: "app/faq-left-title/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "800px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["faqs"],
  },
  {
    name: "faqs-grid-cta-01",
    description: "FAQ grid with CTA section",
    type: "registry:block",
    registryDependencies: ["button", "card"],
    files: [
      {
        path: "blocks/faqs-grid-cta-01/page.tsx",
        type: "registry:page",
        target: "app/faqs-grid-cta/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1200px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["faqs"],
  },
  {
    name: "faqs-cards-icons-01",
    description: "FAQ cards with icons and CTA",
    type: "registry:block",
    registryDependencies: ["button", "card"],
    files: [
      {
        path: "blocks/faqs-cards-icons-01/page.tsx",
        type: "registry:page",
        target: "app/faqs-cards-icons/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1100px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["faqs"],
  },
  {
    name: "faqs-grid-01",
    description: "Simple FAQ grid layout",
    type: "registry:block",
    registryDependencies: ["card"],
    files: [
      {
        path: "blocks/faqs-grid-01/page.tsx",
        type: "registry:page",
        target: "app/faqs-grid/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1000px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["faqs"],
  },
  {
    name: "contact-sections-01",
    description: "Simple contact form with contact info",
    type: "registry:block",
    registryDependencies: [
      "button",
      "card",
      "checkbox",
      "input",
      "label",
      "textarea",
    ],
    files: [
      {
        path: "blocks/contact-sections-01/page.tsx",
        type: "registry:page",
        target: "app/contact-sections-01/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "900px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["contact"],
  },
  {
    name: "contact-sections-02",
    description: "Contact form with image background",
    type: "registry:block",
    registryDependencies: ["button", "checkbox", "input", "label", "textarea"],
    files: [
      {
        path: "blocks/contact-sections-02/page.tsx",
        type: "registry:page",
        target: "app/contact-sections-02/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "900px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["contact"],
  },
  {
    name: "contact-sections-03",
    description: "Contact form with dark info panel",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label", "textarea"],
    files: [
      {
        path: "blocks/contact-sections-03/page.tsx",
        type: "registry:page",
        target: "app/contact-sections-03/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "900px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["contact"],
  },
  {
    name: "contact-sections-04",
    description: "Minimalist contact with icon cards",
    type: "registry:block",
    registryDependencies: ["card"],
    files: [
      {
        path: "blocks/contact-sections-04/page.tsx",
        type: "registry:page",
        target: "app/contact-sections-04/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "800px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["contact"],
  },
  {
    name: "contact-sections-05",
    description: "Contact form with map and option selection",
    type: "registry:block",
    registryDependencies: ["badge", "button", "input", "label", "textarea"],
    files: [
      {
        path: "blocks/contact-sections-05/page.tsx",
        type: "registry:page",
        target: "app/contact-sections-05/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1000px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["contact"],
  },
  {
    name: "contact-sections-06",
    description: "Centered contact with circular icon badges",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/contact-sections-06/page.tsx",
        type: "registry:page",
        target: "app/contact-sections-06/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "800px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["contact"],
  },
  {
    name: "contact-sections-07",
    description: "Contact form with office location details",
    type: "registry:block",
    registryDependencies: [
      "button",
      "card",
      "checkbox",
      "input",
      "label",
      "textarea",
    ],
    files: [
      {
        path: "blocks/contact-sections-07/page.tsx",
        type: "registry:page",
        target: "app/contact-sections-07/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "900px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["contact"],
  },
  {
    name: "contact-sections-08",
    description: "Contact form with area of interest selection",
    type: "registry:block",
    registryDependencies: [
      "button",
      "card",
      "input",
      "label",
      "radio-group",
      "textarea",
    ],
    files: [
      {
        path: "blocks/contact-sections-08/page.tsx",
        type: "registry:page",
        target: "app/contact-sections-08/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1000px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["contact"],
  },
  {
    name: "contact-sections-09",
    description: "Dark background contact with detailed info",
    type: "registry:block",
    registryDependencies: [
      "button",
      "card",
      "checkbox",
      "input",
      "label",
      "textarea",
    ],
    files: [
      {
        path: "blocks/contact-sections-09/page.tsx",
        type: "registry:page",
        target: "app/contact-sections-09/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "900px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["contact"],
  },
  {
    name: "contact-sections-10",
    description: "Contact form with info cards",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label", "textarea"],
    files: [
      {
        path: "blocks/contact-sections-10/page.tsx",
        type: "registry:page",
        target: "app/contact-sections-10/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1000px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["contact"],
  },
  {
    name: "contact-sections-11",
    description: "Dark gradient contact form with backdrop blur",
    type: "registry:block",
    registryDependencies: ["button", "input", "label", "textarea"],
    files: [
      {
        path: "blocks/contact-sections-11/page.tsx",
        type: "registry:page",
        target: "app/contact-sections-11/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1000px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["contact"],
  },
  {
    name: "contact-sections-12",
    description: "Contact form with background image overlay",
    type: "registry:block",
    registryDependencies: ["button", "input", "label", "textarea"],
    files: [
      {
        path: "blocks/contact-sections-12/page.tsx",
        type: "registry:page",
        target: "app/contact-sections-12/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1000px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["contact"],
  },
  {
    name: "contact-sections-13",
    description: "Contact information cards with form",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label", "textarea"],
    files: [
      {
        path: "blocks/contact-sections-13/page.tsx",
        type: "registry:page",
        target: "app/contact-sections-13/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1200px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["contact"],
  },
  {
    name: "contact-sections-14",
    description: "Gradient background contact form with asterisk fields",
    type: "registry:block",
    registryDependencies: ["button", "input", "label", "textarea"],
    files: [
      {
        path: "blocks/contact-sections-14/page.tsx",
        type: "registry:page",
        target: "app/contact-sections-14/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1100px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["contact"],
  },
  {
    name: "contact-sections-15",
    description: "Contact options with quick contact form",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/contact-sections-15/page.tsx",
        type: "registry:page",
        target: "app/contact-sections-15/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1000px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["contact"],
  },
  {
    name: "web3-01",
    description: "NFT collection preview with pixel art",
    type: "registry:block",
    registryDependencies: ["avatar", "card"],
    files: [
      {
        path: "blocks/web3-01/page.tsx",
        type: "registry:page",
        target: "app/web3-01/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "900px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["web3"],
  },
  {
    name: "web3-02",
    description: "NFT creator profile with collection gallery",
    type: "registry:block",
    registryDependencies: ["avatar", "badge", "button", "card"],
    files: [
      {
        path: "blocks/web3-02/page.tsx",
        type: "registry:page",
        target: "app/web3-02/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1100px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["web3"],
  },
  {
    name: "web3-03",
    description: "Top crypto auctions with countdown timer",
    type: "registry:block",
    registryDependencies: ["avatar", "badge", "button", "card", "select"],
    files: [
      {
        path: "blocks/web3-03/page.tsx",
        type: "registry:page",
        target: "app/web3-03/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1100px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["web3"],
  },
  {
    name: "web3-04",
    description: "Trending NFT collections with gradient overlay",
    type: "registry:block",
    registryDependencies: ["avatar", "badge", "button", "card", "select"],
    files: [
      {
        path: "blocks/web3-04/page.tsx",
        type: "registry:page",
        target: "app/web3-04/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1100px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["web3"],
  },
  {
    name: "web3-05",
    description: "Top NFT creators with time filter",
    type: "registry:block",
    registryDependencies: ["avatar", "button", "card"],
    files: [
      {
        path: "blocks/web3-05/page.tsx",
        type: "registry:page",
        target: "app/web3-05/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1000px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["web3"],
  },
  {
    name: "cruds-01",
    description: "Edit apparel item form with product details",
    type: "registry:block",
    registryDependencies: [
      "button",
      "card",
      "input",
      "label",
      "select",
      "textarea",
    ],
    files: [
      {
        path: "blocks/cruds-01/page.tsx",
        type: "registry:page",
        target: "app/cruds-01/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1000px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["cruds"],
  },
  {
    name: "cruds-02",
    description: "Update retail staff profile form",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/cruds-02/page.tsx",
        type: "registry:page",
        target: "app/cruds-02/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "800px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["cruds"],
  },
  {
    name: "cruds-03",
    description: "Stylist account settings with profile photo upload",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label", "select"],
    files: [
      {
        path: "blocks/cruds-03/page.tsx",
        type: "registry:page",
        target: "app/cruds-03/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1200px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["cruds"],
  },
]

import { type Registry } from "shadcn/schema"

export const blocks: Registry["items"] = [
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
      details:
        "A comprehensive software purchase approval interface featuring company information, pricing tiers, and detailed cost breakdown with tax calculations.",
    },
    categories: ["forms"],
  },
  {
    name: "billing-information-01",
    description: "Manage billing contacts and company information",
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
      details:
        "Easily manage billing contacts and information associated with different companies within one platform. Built with shadcn/ui Card and Button components for a clean, accessible interface. Perfect for multi-company billing management, enterprise dashboards, and SaaS platforms requiring organized billing contact management.",
    },
    categories: ["billing"],
  },
  {
    name: "card-display-01",
    description: "Credit card display with dark and light themes",
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
      details:
        "Showcases dark and light versions of a card with bank brand logos. Built with shadcn/ui Card component for consistent styling across themes. Ideal for payment forms, checkout processes, wallet sections, financial dashboards, and any interface requiring elegant credit card visualization with theme support.",
    },
    categories: ["billing"],
  },
  {
    name: "payment-method-01",
    description: "Payment method management with edit and delete",
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
      details:
        "Manage payment methods with a straightforward UI layout featuring shadcn/ui Card, Button, and Tooltip components. Card brands are clearly identified, sensitive information is partially hidden for security, and editing/deleting functions are easily accessible. Includes a call-to-action button for adding new payment methods. Perfect for account settings, billing pages, and checkout flows.",
    },
    categories: ["billing"],
  },
  {
    name: "transaction-history-01",
    description: "Financial transaction history with trend indicators",
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
      details:
        "Provides a detailed record of financial transactions with various service providers, featuring trend arrows indicating whether values are up or down. Built with shadcn/ui Button, Calendar, Card, and Popover components for an interactive filtering experience. Includes date range selection for easy transaction filtering. Ideal for billing dashboards, financial reports, and transaction monitoring interfaces.",
    },
    categories: ["billing"],
  },
  {
    name: "invoices-01",
    description: "Invoice overview with status badges and download",
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
      details:
        "Provides an overview of invoices with shadcn/ui Badge components indicating payment status (paid, pending, overdue) and Button components for downloading invoice PDFs. Clean, organized layout with visual separators for easy scanning. Perfect for billing portals, accounting dashboards, and financial management systems requiring clear invoice tracking and download capabilities.",
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
    categories: ["blog"],
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
    categories: ["blog"],
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
    categories: ["blog"],
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
    categories: ["blog"],
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
    categories: ["blog"],
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
    categories: ["blog"],
  },
  {
    name: "simple-product-details-01",
    description: "Simple product details grid",
    type: "registry:block",
    registryDependencies: ["button", "card", "accordion", "badge"],
    files: [
      {
        path: "blocks/simple-product-details-01/page.tsx",
        type: "registry:page",
        target: "app/simple-product-details/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1800px",
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
    registryDependencies: ["button", "label", "radio-group", "badge"],
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
    registryDependencies: ["button", "tabs", "badge"],
    files: [
      {
        path: "blocks/dark-product-overview-01/page.tsx",
        type: "registry:page",
        target: "app/dark-product-overview/page.tsx",
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
    name: "shopping-cart-01",
    description: "Shopping cart with summary",
    type: "registry:block",
    registryDependencies: [
      "button",
      "card",
      "input",
      "select",
      "badge",
      "separator",
    ],
    files: [
      {
        path: "blocks/shopping-cart-01/page.tsx",
        type: "registry:page",
        target: "app/shopping-cart/page.tsx",
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
    name: "checkout-01",
    description: "Checkout form with order summary",
    type: "registry:block",
    registryDependencies: [
      "button",
      "checkbox",
      "input",
      "label",
      "badge",
      "separator",
    ],
    files: [
      {
        path: "blocks/checkout-01/page.tsx",
        type: "registry:page",
        target: "app/checkout/page.tsx",
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
    registryDependencies: ["button", "badge"],
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
    registryDependencies: ["button", "card", "badge", "separator"],
    files: [
      {
        path: "blocks/order-details-01/page.tsx",
        type: "registry:page",
        target: "app/order-details/page.tsx",
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
    name: "product-listing-filters-01",
    description: "Product listing with filters and sort",
    type: "registry:block",
    registryDependencies: ["button", "badge", "select"],
    files: [
      {
        path: "blocks/product-listing-filters-01/page.tsx",
        type: "registry:page",
        target: "app/product-listing-filters/page.tsx",
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
    name: "ecommerce-sections-01",
    description: "Runway video spotlight with product cards",
    type: "registry:block",
    registryDependencies: ["badge", "button", "card"],
    files: [
      {
        path: "blocks/ecommerce-sections-01/page.tsx",
        type: "registry:page",
        target: "app/ecommerce-sections/page.tsx",
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
    name: "ecommerce-sections-02",
    description: "Luxury product detail page with image gallery",
    type: "registry:block",
    registryDependencies: ["badge", "button"],
    files: [
      {
        path: "blocks/ecommerce-sections-02/page.tsx",
        type: "registry:page",
        target: "app/ecommerce-sections/page.tsx",
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
  {
    name: "footers-01",
    description: "Simple footer with social links",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/footers-01/page.tsx",
        type: "registry:page",
        target: "app/footers-01/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "300px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["footers"],
  },
  {
    name: "footers-02",
    description: "Footer with navigation links and subscription",
    type: "registry:block",
    registryDependencies: ["button", "checkbox", "input", "label"],
    files: [
      {
        path: "blocks/footers-02/page.tsx",
        type: "registry:page",
        target: "app/footers-02/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "500px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["footers"],
  },
  {
    name: "footers-03",
    description: "Website footer with CTA",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/footers-03/page.tsx",
        type: "registry:page",
        target: "app/footers-03/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "300px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["footers"],
  },
  {
    name: "footers-04",
    description: "Simple dark footer",
    type: "registry:block",
    registryDependencies: ["button", "card", "input"],
    files: [
      {
        path: "blocks/footers-04/page.tsx",
        type: "registry:page",
        target: "app/footers-04/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "600px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["footers"],
  },
  {
    name: "footers-05",
    description: "Complex dark footer",
    type: "registry:block",
    registryDependencies: ["button", "input", "label", "select"],
    files: [
      {
        path: "blocks/footers-05/page.tsx",
        type: "registry:page",
        target: "app/footers-05/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "700px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["footers"],
  },
  {
    name: "footers-06",
    description: "Advanced light footer",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/footers-06/page.tsx",
        type: "registry:page",
        target: "app/footers-06/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "500px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["footers"],
  },
  {
    name: "footers-07",
    description: "Simple footer with country selection",
    type: "registry:block",
    registryDependencies: ["button", "select"],
    files: [
      {
        path: "blocks/footers-07/page.tsx",
        type: "registry:page",
        target: "app/footers-07/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "300px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["footers"],
  },
  {
    name: "footers-08",
    description: "Simple footer with version number",
    type: "registry:block",
    registryDependencies: ["badge", "button"],
    files: [
      {
        path: "blocks/footers-08/page.tsx",
        type: "registry:page",
        target: "app/footers-08/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "300px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["footers"],
  },
  {
    name: "footers-09",
    description: "Footer with notification and CTA",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/footers-09/page.tsx",
        type: "registry:page",
        target: "app/footers-09/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "350px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["footers"],
  },
  {
    name: "footers-10",
    description: "Footer with page links",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/footers-10/page.tsx",
        type: "registry:page",
        target: "app/footers-10/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "350px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["footers"],
  },
  {
    name: "footers-11",
    description: "Website footer with statement",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/footers-11/page.tsx",
        type: "registry:page",
        target: "app/footers-11/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "450px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["footers"],
  },
  {
    name: "footers-12",
    description: "Website footer with navigation",
    type: "registry:block",
    registryDependencies: [],
    files: [
      {
        path: "blocks/footers-12/page.tsx",
        type: "registry:page",
        target: "app/footers-12/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "300px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["footers"],
  },
  {
    name: "footers-13",
    description: "Simple centered website footer",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/footers-13/page.tsx",
        type: "registry:page",
        target: "app/footers-13/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "450px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["footers"],
  },
  {
    name: "footers-14",
    description: "Website footer for apps",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/footers-14/page.tsx",
        type: "registry:page",
        target: "app/footers-14/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "700px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["footers"],
  },
  {
    name: "footers-15",
    description: "Website footer with quote",
    type: "registry:block",
    registryDependencies: ["button"],
    files: [
      {
        path: "blocks/footers-15/page.tsx",
        type: "registry:page",
        target: "app/footers-15/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "400px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["footers"],
  },
  {
    name: "testimonials-01",
    description: "Simple centered testimonials with avatars",
    type: "registry:block",
    registryDependencies: ["avatar", "card", "badge"],
    files: [
      {
        path: "blocks/testimonials-01/page.tsx",
        type: "registry:page",
        target: "app/testimonials-01/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "700px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["testimonials"],
  },
  {
    name: "testimonials-02",
    description: "Testimonial cards with social proof badges",
    type: "registry:block",
    registryDependencies: ["avatar", "card"],
    files: [
      {
        path: "blocks/testimonials-02/page.tsx",
        type: "registry:page",
        target: "app/testimonials-02/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "900px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["testimonials"],
  },
  {
    name: "testimonials-03",
    description: "Testimonial with statistics and metrics",
    type: "registry:block",
    registryDependencies: ["card"],
    files: [
      {
        path: "blocks/testimonials-03/page.tsx",
        type: "registry:page",
        target: "app/testimonials-03/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "500px",
      container: "w-full bg-surface",
      mobile: "component",
      private: true,
    },
    categories: ["testimonials"],
  },
  {
    name: "testimonials-04",
    description: "Three column testimonials with star ratings",
    type: "registry:block",
    registryDependencies: ["card"],
    files: [
      {
        path: "blocks/testimonials-04/page.tsx",
        type: "registry:page",
        target: "app/testimonials-04/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "700px",
      container: "w-full bg-surface",
      mobile: "component",
      private: true,
    },
    categories: ["testimonials"],
  },
  {
    name: "testimonials-05",
    description: "Dark testimonials with avatar and star ratings",
    type: "registry:block",
    registryDependencies: ["avatar", "card"],
    files: [
      {
        path: "blocks/testimonials-05/page.tsx",
        type: "registry:page",
        target: "app/testimonials-05/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "700px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["testimonials"],
  },
  {
    name: "testimonials-06",
    description: "Company logo testimonial with large quote",
    type: "registry:block",
    registryDependencies: ["avatar", "card"],
    files: [
      {
        path: "blocks/testimonials-06/page.tsx",
        type: "registry:page",
        target: "app/testimonials-06/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "500px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["testimonials"],
  },
  {
    name: "testimonials-07",
    description: "Interactive testimonials with profile switcher",
    type: "registry:block",
    registryDependencies: ["avatar"],
    files: [
      {
        path: "blocks/testimonials-07/page.tsx",
        type: "registry:page",
        target: "app/testimonials-07/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "600px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["testimonials"],
  },
  {
    name: "testimonials-08",
    description: "Light testimonials with star ratings",
    type: "registry:block",
    registryDependencies: ["avatar", "card"],
    files: [
      {
        path: "blocks/testimonials-08/page.tsx",
        type: "registry:page",
        target: "app/testimonials-08/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "700px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["testimonials"],
  },
  {
    name: "testimonials-09",
    description: "Customer story with large heading and avatar",
    type: "registry:block",
    registryDependencies: ["avatar", "card"],
    files: [
      {
        path: "blocks/testimonials-09/page.tsx",
        type: "registry:page",
        target: "app/testimonials-09/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "500px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["testimonials"],
  },
  {
    name: "testimonials-10",
    description: "Monochromatic testimonials with company logos",
    type: "registry:block",
    registryDependencies: ["badge", "card", "button"],
    files: [
      {
        path: "blocks/testimonials-10/page.tsx",
        type: "registry:page",
        target: "app/testimonials-10/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "700px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["testimonials"],
  },
  {
    name: "testimonials-11",
    description: "Testimonial cards with focus state",
    type: "registry:block",
    registryDependencies: ["avatar", "card"],
    files: [
      {
        path: "blocks/testimonials-11/page.tsx",
        type: "registry:page",
        target: "app/testimonials-11/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "700px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["testimonials"],
  },
  {
    name: "testimonials-12",
    description: "Grid layout testimonials with company logos",
    type: "registry:block",
    registryDependencies: ["card"],
    files: [
      {
        path: "blocks/testimonials-12/page.tsx",
        type: "registry:page",
        target: "app/testimonials-12/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "800px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["testimonials"],
  },
  {
    name: "testimonials-13",
    description: "Dark card testimonial with rounded avatar",
    type: "registry:block",
    registryDependencies: ["avatar", "card"],
    files: [
      {
        path: "blocks/testimonials-13/page.tsx",
        type: "registry:page",
        target: "app/testimonials-13/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "500px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["testimonials"],
  },
  {
    name: "testimonials-14",
    description: "Light testimonials with card shadow",
    type: "registry:block",
    registryDependencies: ["avatar", "card"],
    files: [
      {
        path: "blocks/testimonials-14/page.tsx",
        type: "registry:page",
        target: "app/testimonials-14/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "700px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["testimonials"],
  },
  {
    name: "testimonials-15",
    description: "Testimonials with submit button",
    type: "registry:block",
    registryDependencies: ["card"],
    files: [
      {
        path: "blocks/testimonials-15/page.tsx",
        type: "registry:page",
        target: "app/testimonials-15/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "600px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["testimonials"],
  },
  {
    name: "testimonials-16",
    description: "Dark carousel testimonials with navigation",
    type: "registry:block",
    registryDependencies: ["card", "button"],
    files: [
      {
        path: "blocks/testimonials-16/page.tsx",
        type: "registry:page",
        target: "app/testimonials-16/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "600px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["testimonials"],
  },
  {
    name: "testimonials-17",
    description: "Background image carousel testimonials",
    type: "registry:block",
    registryDependencies: ["card", "button"],
    files: [
      {
        path: "blocks/testimonials-17/page.tsx",
        type: "registry:page",
        target: "app/testimonials-17/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "600px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["testimonials"],
  },
  {
    name: "modals-01",
    description: "Alert modal with confirmation input for reset settings",
    type: "registry:block",
    registryDependencies: ["dialog", "button", "input", "label"],
    files: [
      {
        path: "blocks/modals-01/page.tsx",
        type: "registry:page",
        target: "app/modals-01/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "600px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["modals"],
  },
  {
    name: "modals-02",
    description: "Edit profile modal with form inputs and preferences",
    type: "registry:block",
    registryDependencies: [
      "dialog",
      "button",
      "input",
      "label",
      "select",
      "checkbox",
      "radio-group",
    ],
    files: [
      {
        path: "blocks/modals-02/page.tsx",
        type: "registry:page",
        target: "app/modals-02/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "700px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["modals"],
  },
  {
    name: "modals-03",
    description: "Invite members modal with team management",
    type: "registry:block",
    registryDependencies: [
      "dialog",
      "button",
      "input",
      "avatar",
      "dropdown-menu",
    ],
    files: [
      {
        path: "blocks/modals-03/page.tsx",
        type: "registry:page",
        target: "app/modals-03/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "700px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["modals"],
  },
  {
    name: "modals-04",
    description: "Update product modal with image gallery and form",
    type: "registry:block",
    registryDependencies: [
      "dialog",
      "button",
      "input",
      "label",
      "select",
      "textarea",
    ],
    files: [
      {
        path: "blocks/modals-04/page.tsx",
        type: "registry:page",
        target: "app/modals-04/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "800px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["modals"],
  },
  {
    name: "modals-05",
    description: "Upload files modal with drag and drop",
    type: "registry:block",
    registryDependencies: ["dialog", "button", "card"],
    files: [
      {
        path: "blocks/modals-05/page.tsx",
        type: "registry:page",
        target: "app/modals-05/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "700px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["modals"],
  },
  {
    name: "modals-06",
    description: "Publish capsule collection modal with metadata display",
    type: "registry:block",
    registryDependencies: ["dialog", "button", "card"],
    files: [
      {
        path: "blocks/modals-06/page.tsx",
        type: "registry:page",
        target: "app/modals-06/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "650px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["modals"],
  },
  {
    name: "modals-07",
    description: "Change collection visibility settings modal",
    type: "registry:block",
    registryDependencies: ["dialog", "button"],
    files: [
      {
        path: "blocks/modals-07/page.tsx",
        type: "registry:page",
        target: "app/modals-07/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "500px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["modals"],
  },
  {
    name: "modals-08",
    description:
      "Disable collection lock rules modal with alert and impact list",
    type: "registry:block",
    registryDependencies: ["dialog", "button", "card"],
    files: [
      {
        path: "blocks/modals-08/page.tsx",
        type: "registry:page",
        target: "app/modals-08/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "750px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["modals"],
  },
  {
    name: "modals-09",
    description:
      "Transfer showroom ownership modal with form fields and warning",
    type: "registry:block",
    registryDependencies: [
      "dialog",
      "button",
      "input",
      "label",
      "select",
      "card",
    ],
    files: [
      {
        path: "blocks/modals-09/page.tsx",
        type: "registry:page",
        target: "app/modals-09/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "750px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["modals"],
  },
  {
    name: "modals-10",
    description: "Permanently remove archive modal with effects list",
    type: "registry:block",
    registryDependencies: ["dialog", "button", "card"],
    files: [
      {
        path: "blocks/modals-10/page.tsx",
        type: "registry:page",
        target: "app/modals-10/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "750px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["modals"],
  },
  {
    name: "modals-11",
    description: "Confirm vault deletion modal with text input verification",
    type: "registry:block",
    registryDependencies: ["dialog", "button", "input", "label"],
    files: [
      {
        path: "blocks/modals-11/page.tsx",
        type: "registry:page",
        target: "app/modals-11/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "550px",
      container: "w-full bg-surface",
      mobile: "component",
    },
    categories: ["modals"],
  },
  {
    name: "account-basic-info-01",
    description: "Personal information management form",
    type: "registry:block",
    registryDependencies: [
      "button",
      "card",
      "input",
      "label",
      "select",
      "calendar",
      "popover",
    ],
    dependencies: ["date-fns"],
    files: [
      {
        path: "blocks/account-basic-info-01/page.tsx",
        type: "registry:page",
        target: "app/account-basic-info/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1000px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["account"],
  },
  {
    name: "account-2fa-01",
    description: "Two-factor authentication setup",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label", "switch"],
    files: [
      {
        path: "blocks/account-2fa-01/page.tsx",
        type: "registry:page",
        target: "app/account-2fa/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "800px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
      details:
        "Secure your account with two-factor authentication. Enable authenticator apps, configure backup codes, and manage security verification methods for enhanced account protection.",
    },
    categories: ["account"],
  },
  {
    name: "account-change-password-01",
    description: "Change password form with validation",
    type: "registry:block",
    registryDependencies: ["button", "card", "input", "label"],
    files: [
      {
        path: "blocks/account-change-password-01/page.tsx",
        type: "registry:page",
        target: "app/account-change-password/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "700px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["account"],
  },
  {
    name: "account-notifications-01",
    description: "Notification preferences management",
    type: "registry:block",
    registryDependencies: ["button", "card", "switch"],
    files: [
      {
        path: "blocks/account-notifications-01/page.tsx",
        type: "registry:page",
        target: "app/account-notifications/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "900px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["account"],
  },
  {
    name: "account-sessions-01",
    description: "Active sessions and devices management",
    type: "registry:block",
    registryDependencies: ["button", "card"],
    files: [
      {
        path: "blocks/account-sessions-01/page.tsx",
        type: "registry:page",
        target: "app/account-sessions/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "800px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["account"],
  },
  {
    name: "account-avatar-upload-01",
    description: "Profile avatar upload and management",
    type: "registry:block",
    registryDependencies: ["button", "card"],
    files: [
      {
        path: "blocks/account-avatar-upload-01/page.tsx",
        type: "registry:page",
        target: "app/account-avatar-upload/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "600px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["account"],
  },
  {
    name: "account-integrations-01",
    description: "Third-party integrations management",
    type: "registry:block",
    registryDependencies: ["button", "card", "switch"],
    files: [
      {
        path: "blocks/account-integrations-01/page.tsx",
        type: "registry:page",
        target: "app/account-integrations/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "900px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
    },
    categories: ["account"],
  },
  {
    name: "ai-chat-streaming-01",
    description: "AI chat with streaming responses and thinking process",
    type: "registry:block",
    registryDependencies: [
      "button",
      "card",
      "input",
      "label",
      "select",
      "scroll-area",
      "avatar",
    ],
    files: [
      {
        path: "blocks/ai-chat-streaming-01/page.tsx",
        type: "registry:page",
        target: "app/ai-chat-streaming/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "800px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
      details:
        "Interactive AI chat interface with real-time streaming responses and optional thinking process visualization. Features API provider selection from top 5 AI services, configurable API keys, and smooth message animations. Perfect for AI-powered chat applications, customer support bots, and conversational interfaces.",
    },
    categories: ["ai-agents"],
  },
  {
    name: "ai-image-generator-01",
    description: "AI image generator with upload and editor capabilities",
    type: "registry:block",
    registryDependencies: [
      "button",
      "card",
      "input",
      "label",
      "select",
      "slider",
      "tabs",
      "textarea",
    ],
    files: [
      {
        path: "blocks/ai-image-generator-01/page.tsx",
        type: "registry:page",
        target: "app/ai-image-generator/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1000px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
      details:
        "Comprehensive AI image generation tool with built-in editor. Generate images from text prompts using top AI providers, upload existing images, and edit with real-time adjustments for brightness, contrast, and saturation. Includes image size selection, download functionality, and intuitive tabbed interface. Ideal for creative applications, content generation, and image manipulation tools.",
    },
    categories: ["ai-agents"],
  },
  {
    name: "ai-video-generator-01",
    description: "AI video generation agent with preview",
    type: "registry:block",
    registryDependencies: [
      "button",
      "card",
      "input",
      "label",
      "select",
      "textarea",
      "progress",
      "badge",
    ],
    files: [
      {
        path: "blocks/ai-video-generator-01/page.tsx",
        type: "registry:page",
        target: "app/ai-video-generator/page.tsx",
      },
    ],
    meta: {
      iframeHeight: "1100px",
      container:
        "w-full bg-surface min-h-svh flex px-4 py-12 items-center md:py-20 justify-center min-w-0",
      mobile: "component",
      details:
        "Advanced AI video generation interface with progress tracking and gallery view. Generate videos from text descriptions using leading AI providers like Runway, Pika, and OpenAI Sora. Features customizable duration, style selection, real-time progress indicators, video preview with playback controls, and generation history. Perfect for video content creation, marketing materials, and AI-powered media platforms.",
    },
    categories: ["ai-agents"],
  },
]

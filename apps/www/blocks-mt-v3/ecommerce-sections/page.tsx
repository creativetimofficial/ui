// @components
import { Typography } from "@material-tailwind/react";
import { BlockPreview, ThemeConfig } from "@/components";

// @types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tailwind CSS & React Ecommerce Blocks - Material Tailwind PRO",
  description:
    "Effective ecommerce UI/UX design focuses on creating a seamless, intuitive, and visually appealing shopping experience, which includes features like clear product images, detailed descriptions, easy navigation, and secure payment options.",
  alternates: {
    canonical: "https://www.material-tailwind.com/v3/ecommerce-sections",
  },
  openGraph: {
    title: "Tailwind CSS & React Ecommerce Blocks - Material Tailwind PRO",
    description:
      "Effective ecommerce UI/UX design focuses on creating a seamless, intuitive, and visually appealing shopping experience, which includes features like clear product images, detailed descriptions, easy navigation, and secure payment options.",
    url: "https://www.material-tailwind.com/v3/ecommerce-sections",
  },
  twitter: {
    title: "Tailwind CSS & React Ecommerce Blocks - Material Tailwind PRO",
    description:
      "Effective ecommerce UI/UX design focuses on creating a seamless, intuitive, and visually appealing shopping experience, which includes features like clear product images, detailed descriptions, easy navigation, and secure payment options.",
  },
};

export default function EcommerceSections() {
  return (
    <div className="container py-16">
      <ThemeConfig />
      <section className="mb-16">
        <Typography as="h1" type="h4" className="mb-4">
          Tailwind CSS & React Ecommerce Blocks - Material Tailwind PRO
        </Typography>
        <Typography
          type="lead"
          className="text-foreground max-w-5xl [text-wrap:_balance]"
        >
          Effective ecommerce UI/UX design focuses on creating a seamless,
          intuitive, and visually appealing shopping experience, which includes
          features like clear product images, detailed descriptions, easy
          navigation, and secure payment options.
        </Typography>
      </section>
      <BlockPreview
        isFree
        height="h-[60vh]"
        path="/blocks/ecommerce-sections/simple-product-details-block"
        title="Simple Product Details Block"
        desc="Try this completely free product details section for your Tailwind CSS and React e-commerce project! It enables users to view the product's price, reviews, available colors, and add the product to the cart or favorites."
      />
      <BlockPreview
        height="h-[82vh]"
        path="/blocks/ecommerce-sections/dark-product-overview"
        title="Dark Product Overview"
        desc="If you are looking for an elegant way to present your products, check out this stunning block example!"
      />
      <BlockPreview
        height="h-[65vh]"
        path="/blocks/ecommerce-sections/digital-product-overview"
        title="Digital Product Overview"
        desc="Add this overview section including pricing plan, call-to-action buttons, sales count, and star rating to showcase your digital product."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/ecommerce-sections/interactive-product-preview"
        title="Interactive Product Preview"
        desc="Use this modern and engaging ecommerce block with clickable white circles overlaid on the image, which allow the user to view details about the items and add them to their cart."
      />
      <BlockPreview
        height="h-[75vh]"
        path="/blocks/ecommerce-sections/product-details-block"
        title="Product Details Block"
        desc="Use this example of product details section with image, description, essential purchase options, call to action (Add to cart), and breadcrumb navigation."
      />
      <BlockPreview
        height="h-[68vh]"
        path="/blocks/ecommerce-sections/order-history-ecommerce-block"
        title="Order History Ecommerce Block"
        desc="Add this Tailwind CSS block to your project if you want to provide customers with an overview of their past orders. The layout is clean and straightforward, designed to provide essential details at a glance, with options to retrieve more detailed information if necessary."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/ecommerce-sections/order-details-block"
        title="Order Details Block"
        desc="Use this order details block which includes an order ID header, placement date, product description, order progress tracker, shipping update contacts, payment information, a cost summary, and a button to view the invoice."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/ecommerce-sections/promotional-cards-block"
        title="Promotional Cards Block"
        desc="Use this block example to your ecommerce website for promotional purposes."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/ecommerce-sections/grid-ecommerce-block"
        title="Grid Ecommerce Block"
        desc="This ecommerce block is a grid layout showcasing four different collections or sales categories for a fashion retail website."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/ecommerce-sections/ecommerce-checkout-block"
        title="Ecommerce Checkout Block"
        desc="Add this block to your project for the final steps in the online shopping process, allowing the user to review their purchase and enter payment and shipping information before completing the transaction."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/ecommerce-sections/empty-ecommerce-shopping-cart"
        title="Empty Ecommerce Shopping Cart"
        desc="Use this simple and versatile example of an empty shopping cart block for your ecommerce project."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/ecommerce-sections/shopping-cart-block"
        title="Shopping Cart Block"
        desc="Add this block to your project for the final steps in the online shopping process with an upsell section."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/ecommerce-sections/product-description-block"
        title="Product Description Block"
        desc="The product page layout is designed to provide the necessary information for purchasing, including visuals, price, sizing, and detailed product attributes"
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/ecommerce-sections/complex-product-description"
        title="Complex Product Description Block"
        desc="This block example includes all the elements you are looking for on a product description page, from ratings, and choose sizes/colors, to breadcrumb navigation."
      />
    </div>
  );
}

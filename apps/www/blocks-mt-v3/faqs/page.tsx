// @components
import { Typography } from "@material-tailwind/react";
import { BlockPreview, ThemeConfig } from "@/components";

// @types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tailwind CSS & React FAQs - Material Tailwind PRO",
  description:
    "The customers are happy if they can easily access the information they need. Use our examples of FAQs section coded with Tailwind CSS and React to guide the user through your website's content and encourage self-service.",
  alternates: {
    canonical: "https://www.material-tailwind.com/v3/faqs",
  },
  openGraph: {
    title: "Tailwind CSS & React FAQs - Material Tailwind PRO",
    description:
      "The customers are happy if they can easily access the information they need. Use our examples of FAQs section coded with Tailwind CSS and React to guide the user through your website's content and encourage self-service.",
    url: "https://www.material-tailwind.com/v3/faqs",
  },
  twitter: {
    title: "Tailwind CSS & React FAQs - Material Tailwind PRO",
    description:
      "The customers are happy if they can easily access the information they need. Use our examples of FAQs section coded with Tailwind CSS and React to guide the user through your website's content and encourage self-service.",
  },
};

export default function FAQs() {
  return (
    <div className="container py-16">
      <ThemeConfig />
      <section className="mb-16">
        <Typography as="h1" type="h4" className="mb-4">
          Tailwind CSS & React FAQs - Material Tailwind PRO
        </Typography>
        <Typography
          type="lead"
          className="text-foreground max-w-5xl [text-wrap:_balance]"
        >
          The customers are happy if they can easily access the information they
          need. Use our examples of FAQs section coded with Tailwind CSS and
          React to guide the user through your website&apos;s content and
          encourage self-service.
        </Typography>
      </section>
      <BlockPreview
        isFree
        height="h-[85vh]"
        path="/blocks/faqs/simple-faq-block"
        title="Simple FAQ Block"
        desc="Use this static FAQ block to allow users to view the entire answer from the beginning."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/faqs/cards-faqs-with-cta"
        title="Cards FAQs with CTA"
        desc="Get started easier with this FAQ block that contains a headline, description, three cards with suggestive icons, and a CTA button."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/faqs/faqs-block-with-two-rows"
        title="FAQs Block with Two Rows"
        desc="Use this FAQ example if you want to add more questions."
      />
      <BlockPreview
        height="h-[68vh]"
        path="/blocks/faqs/faq-with-left-aligned-title"
        title="FAQ with Left Aligned Title"
        desc="In this example, the layout is clean and straightforward, featuring a clear header, left aligned. The FAQ block is divided into four different queries, two on the left and two on the right, each with its own answer box."
      />
      <BlockPreview
        height="h-[80vh]"
        path="/blocks/faqs/multiple-questions-block"
        title="Multiple Questions Block"
        desc="Check out this example to see how you can add multiple questions to your FAQ block."
      />
      <BlockPreview
        height="h-[70vh]"
        path="/blocks/faqs/faqs-list"
        title="FAQs List"
        desc="This example showcases a list of clickable questions - interactive elements that a user can select to reveal more information or answers."
      />
    </div>
  );
}

// @components
import { Typography } from "@material-tailwind/react";
import { BlockPreview, ThemeConfig } from "@/components";

// @types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tailwind CSS & React Billing Blocks - Material Tailwind PRO",
  description:
    "Our billing blocks are dedicated to managing billing-related tasks. This could include viewing invoices, managing payment methods, tracking subscription plans, or handling any financial transactions associated with the user&apos;s account.",
  alternates: { canonical: "https://www.material-tailwind.com/v3/billing" },
  openGraph: {
    title: "Tailwind CSS & React Billing Blocks - Material Tailwind PRO",
    description:
      "Our billing blocks are dedicated to managing billing-related tasks. This could include viewing invoices, managing payment methods, tracking subscription plans, or handling any financial transactions associated with the user&apos;s account.",
    url: "https://www.material-tailwind.com/v3/billing",
  },
  twitter: {
    title: "Tailwind CSS & React Billing Blocks - Material Tailwind PRO",
    description:
      "Our billing blocks are dedicated to managing billing-related tasks. This could include viewing invoices, managing payment methods, tracking subscription plans, or handling any financial transactions associated with the user&apos;s account.",
  },
};

export default function Billing() {
  return (
    <div className="container py-16">
      <ThemeConfig />
      <section className="mb-16">
        <Typography as="h1" type="h4" className="mb-4">
          Tailwind CSS & React Billing Blocks - Material Tailwind PRO
        </Typography>
        <Typography
          type="lead"
          className="text-foreground max-w-5xl [text-wrap:_balance]"
        >
          Our billing blocks are dedicated to managing billing-related tasks.
          This could include viewing invoices, managing payment methods,
          tracking subscription plans, or handling any financial transactions
          associated with the user&apos;s account.
        </Typography>
      </section>
      <BlockPreview
        isFree
        moreSpacing
        height="h-[68vh]"
        path="/blocks/billing/billing-information-block"
        title="Billing Information Block"
        desc="This block is designed to help users easily manage their billing contacts and information associated with different companies within one platform."
      />
      <BlockPreview
        moreSpacing
        height="h-[26vh]"
        path="/blocks/billing/card-block"
        title="Card Block"
        desc="This block showcases dark and light versions of a card with bank brand. Use this block to your payment form, checkout process, wallet section, financial dashboard, and more."
      />
      <BlockPreview
        moreSpacing
        height="h-[29vh]"
        path="/blocks/billing/payment-method-block"
        title="Payment Method Block"
        desc="Use our block example to manage payment methods. The UI layout is straightforward, with card brands clearly identified, sensitive information partially hidden, and editing/deleting functions. It also includes a call-to-action button."
      />
      <BlockPreview
        moreSpacing
        height="h-[60vh]"
        path="/blocks/billing/history-transaction-block"
        title="History Transaction Block"
        desc="This Tailwind billing block provides a detailed record of a user's financial transactions with various service providers. Arrows indicate whether trades are up or down."
      />
      <BlockPreview
        moreSpacing
        height="h-[60vh]"
        path="/blocks/billing/invoices-block"
        title="Invoices Block"
        desc="This block provides an overview of invoices, including badges indicating payment status and a call-to-action button for downloading."
      />
    </div>
  );
}

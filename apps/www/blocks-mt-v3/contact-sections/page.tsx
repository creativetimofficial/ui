// @components
import { Typography } from "@material-tailwind/react";
import { BlockPreview, ThemeConfig } from "@/components";

// @types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tailwind CSS & React Contact Blocks - Material Tailwind PRO",
  description:
    "The contact block should display information like addresses, offices, contact phone numbers, and its importance is not to be missed. Sometimes users visit the website only looking for this section. See below our examples of contact blocks built with Tailwind CSS and React.",
  alternates: {
    canonical: "https://www.material-tailwind.com/v3/contact-sections",
  },
  openGraph: {
    title: "Tailwind CSS & React Contact Blocks - Material Tailwind PRO",
    description:
      "The contact block should display information like addresses, offices, contact phone numbers, and its importance is not to be missed. Sometimes users visit the website only looking for this section. See below our examples of contact blocks built with Tailwind CSS and React.",
    url: "https://www.material-tailwind.com/v3/contact-sections",
  },
  twitter: {
    title: "Tailwind CSS & React Contact Blocks - Material Tailwind PRO",
    description:
      "The contact block should display information like addresses, offices, contact phone numbers, and its importance is not to be missed. Sometimes users visit the website only looking for this section. See below our examples of contact blocks built with Tailwind CSS and React.",
  },
};

export default function ContactSections() {
  return (
    <div className="container py-16">
      <ThemeConfig />
      <section className="mb-16">
        <Typography as="h1" type="h4" className="mb-4">
          Tailwind CSS & React Contact Blocks - Material Tailwind PRO
        </Typography>
        <Typography
          type="lead"
          className="text-foreground max-w-5xl [text-wrap:_balance]"
        >
          The contact block should display information like addresses, offices,
          contact phone numbers, and its importance is not to be missed.
          Sometimes users visit the website only looking for this section. See
          below our examples of contact blocks built with Tailwind CSS and
          React.
        </Typography>
      </section>
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/contact-sections/contact-with-map"
        title="Contact with Map"
        desc="Use this structured contact block that offers a direct communication line through a form, alongside a pinpointed map location of the office."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/contact-sections/service-request-block-with-image"
        title="Service Request Block with Image"
        desc="Use this responsive service request form coded with Tailwind CSS and React that allows clients to specify their needs, budget range, and submit a message for customized solutions."
      />
      <BlockPreview
        height="h-[78vh]"
        path="/blocks/contact-sections/simple-contact-block"
        title="Simple Contact Block"
        desc="Get started with this versatile contact form layout that offers direct communication options, including phone, email, and support tickets, alongside a consent checkbox for privacy policy."
      />
      <BlockPreview
        height="h-[78vh]"
        path="/blocks/contact-sections/simple-contact-form"
        title="Simple Contact Form"
        desc="Implement this responsive contact form with a centered heading to get started easier."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/contact-sections/contact-block-based-on-area-of-interest"
        title="Contact Block Based on Area of Interest"
        desc="Copy-paste to your project this contact block that includes a simple form along with direct options for calling, emailing, and opening a support ticket based on your interest, complemented by social media links."
      />
      <BlockPreview
        height="h-[78vh]"
        path="/blocks/contact-sections/contact-block-with-office-location"
        title="Contact Block with Office Location"
        desc="Add this responsive contact form block to your project that allows visitors to send messages, and offers essential information such as office location and a direct line to a representative for immediate assistance."
      />
      <BlockPreview
        height="h-[72vh]"
        path="/blocks/contact-sections/dark-background-contact-block-with-detailed-info"
        title="Dark Background Contact Block with Detailed Info"
        desc="Get started with this minimalist contact block that combines a straightforward light contact form with essential details like physical office location and direct contact information on dark layout."
      />
      <BlockPreview
        height="h-[76vh]"
        path="/blocks/contact-sections/simple-dark-background-contact-block"
        title="Simple Dark Background Contact Block"
        desc="Get started with our simple Tailwind CSS contact block coded with React."
      />
      <BlockPreview
        height="h-[70vh]"
        path="/blocks/contact-sections/contact-block-with-header-and-description"
        title="Contact Block with Header and Description"
        desc="A clean contact block that offers direct email and a simplified messaging option, reinforcing user privacy with a policy agreement checkbox."
      />
      <BlockPreview
        height="h-[72vh]"
        path="/blocks/contact-sections/block-with-essential-contact-information"
        title="Block with Essential Contact Information"
        desc="Add a dual-section contact interface with a simple message form and comprehensive contact details, including social links and support ticket access."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/contact-sections/blurred-image-contact-block"
        title="Blurred Image Contact Block"
        desc="Use our contact block with blurred background image which provides a warm aesthetic with its soft hues and indistinct shapes, creating a visually appealing contrast that allows the form elements to stand out."
      />
      <BlockPreview
        height="h-[42vh]"
        path="/blocks/contact-sections/two-contact-methods-block"
        title="Two Contact Methods Block"
        desc="Implement this content block example if you want to present two types of contact methods on your website."
      />
      <BlockPreview
        height="h-[60vh]"
        path="/blocks/contact-sections/minimalist-contact-block"
        title="Minimalist Contact Block"
        desc="Use this contact section if you want to include your company's main information like phone number, email address, and office address."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/contact-sections/contact-block-with-image"
        title="Contact Block with Image"
        desc="Try this example that contains a contact form and a representative image."
      />
      <BlockPreview
        height="h-[50vh]"
        path="/blocks/contact-sections/centered-contact-block-with-icons"
        title="Centered Contact Block with Icons"
        desc="Use this contact section if you want to include your company's main information like phone number, email address, and office address. Copy-paste the code and add it to your Tailwind CSS project!"
      />
    </div>
  );
}

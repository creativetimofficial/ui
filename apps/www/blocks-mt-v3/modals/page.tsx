// @components
import { Typography } from "@material-tailwind/react";
import { BlockPreview, ThemeConfig } from "@/components";

// @types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tailwind CSS & React Modal Blocks - Material Tailwind PRO",
  description: `Capture the user&apos;s attention using our block examples. Alert
          modals are used to convey important information, warnings, errors, or
          to confirm user actions. They require an action, such as clicking an
          "OK" button, to be dismissed so that the user has received
          and acknowledged the information.`,
  alternates: {
    canonical: "https://www.material-tailwind.com/v3/modals",
  },
  openGraph: {
    title: "Tailwind CSS & React Modal Blocks - Material Tailwind PRO",
    description: `Capture the user&apos;s attention using our block examples. Alert
          modals are used to convey important information, warnings, errors, or
          to confirm user actions. They require an action, such as clicking an
          "OK" button, to be dismissed so that the user has received
          and acknowledged the information.`,
    url: "https://www.material-tailwind.com/v3/modals",
  },
  twitter: {
    title: "Tailwind CSS & React Modal Blocks - Material Tailwind PRO",
    description: `Capture the user&apos;s attention using our block examples. Alert
          modals are used to convey important information, warnings, errors, or
          to confirm user actions. They require an action, such as clicking an
          "OK" button, to be dismissed so that the user has received
          and acknowledged the information.`,
  },
};

export default function Modals() {
  return (
    <div className="container py-16">
      <ThemeConfig />
      <section className="mb-16">
        <Typography as="h1" type="h4" className="mb-4">
          Tailwind CSS & React Modal Blocks - Material Tailwind PRO
        </Typography>
        <Typography
          type="lead"
          className="text-foreground max-w-5xl [text-wrap:_balance]"
        >
          Capture the user&apos;s attention using our block examples. Alert
          modals are used to convey important information, warnings, errors, or
          to confirm user actions. They require an action, such as clicking an
          &quot;OK&quot; button, to be dismissed so that the user has received
          and acknowledged the information.
        </Typography>
      </section>
      <BlockPreview
        isFree
        height="h-[50vh]"
        path="/blocks/modals/alert-modal"
        title="Alert Modal"
        desc="Use this alert modal example which presents a message that prompts the user for confirmation before proceeding with an action that is irreversible. This type of modal is an example of a safeguard for user."
      />
      <BlockPreview
        height="h-[70vh]"
        path="/blocks/modals/invite-members-modal"
        title="Invite Members Modal"
        desc="This modal is a common feature in collaborative software and project management tools, allowing the administrator or team leader to manage access permissions for new and existing members efficiently."
      />
      <BlockPreview
        height="h-[70vh]"
        path="/blocks/modals/form-modal"
        title="Form Modal"
        desc="Use this form modal to allow users to update their personal information and preferences. It comes with headline, description, profile info inputs, checkboxes, radio buttons, and call-to-action buttons."
      />
      <BlockPreview
        height="h-[65vh]"
        path="/blocks/modals/upload-files-modal"
        title="Upload Files Modal"
        desc="Try this modal example to provides users with the functionality to upload files to their account. It comes with an area where users can drag and drop files or choose to upload from their local file system."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/modals/update-product-modal"
        title="Update Product Modal"
        desc="Use this alert modal for editing and updating product information. It comes with headline, descriptions, placeholders, inputs, and call-to-action buttons."
      />
    </div>
  );
}

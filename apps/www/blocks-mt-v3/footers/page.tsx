// @components
import { Typography } from "@material-tailwind/react";
import { BlockPreview, ThemeConfig } from "@/components";

// @types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tailwind CSS & React Footers - Material Tailwind PRO",
  description:
    "The website footer is used for displaying general information that a user might want to access from any page within your site, like useful resources, legal pages, contact information, and more. See below our examples of Footers coded with Tailwind CSS and React.",
  alternates: {
    canonical: "https://www.material-tailwind.com/v3/footers",
  },
  openGraph: {
    title: "Tailwind CSS & React Footers - Material Tailwind PRO",
    description:
      "The website footer is used for displaying general information that a user might want to access from any page within your site, like useful resources, legal pages, contact information, and more. See below our examples of Footers coded with Tailwind CSS and React.",
    url: "https://www.material-tailwind.com/v3/footers",
  },
  twitter: {
    title: "Tailwind CSS & React Footers - Material Tailwind PRO",
    description:
      "The website footer is used for displaying general information that a user might want to access from any page within your site, like useful resources, legal pages, contact information, and more. See below our examples of Footers coded with Tailwind CSS and React.",
  },
};

export default function Footers() {
  return (
    <div className="container py-16">
      <ThemeConfig />
      <section className="mb-16">
        <Typography as="h1" type="h4" className="mb-4">
          Tailwind CSS & React Footers - Material Tailwind PRO
        </Typography>
        <Typography
          type="lead"
          className="text-foreground max-w-5xl [text-wrap:_balance]"
        >
          The website footer is used for displaying general information that a
          user might want to access from any page within your site, like useful
          resources, legal pages, contact information, and more. See below our
          examples of Footers coded with Tailwind CSS and React.
        </Typography>
      </section>
      <BlockPreview
        height="h-[23vh]"
        path="/blocks/footers/footer-with-page-links"
        title="Footer with Page Links"
        desc="Try this free Tailwind CSS footer example that contains page links and a copyright notice."
      />
      <BlockPreview
        height="h-[17vh]"
        path="/blocks/footers/simple-footer-with-social-links"
        title="Simple Footer with Social Links"
        desc="Try this minimalist footer example with social links and copyright statement."
      />
      <BlockPreview
        height="h-[32vh]"
        path="/blocks/footers/simple-footer-with-country-selection"
        title="Simple Footer with Country Selection"
        desc="Use this footer example with navigation links, copyright statement, country dropdown, and settings icon that works perfectly for international websites with versions for different countries."
      />
      <BlockPreview
        height="h-[20vh]"
        path="/blocks/footers/footer-with-notification-and-cta"
        title="Footer with Notification and CTA"
        desc="Try this footer example if you want to attract the users' attention with the notification and call to action. It also includes navigation links and a copyright statement."
      />
      <BlockPreview
        height="h-[17vh]"
        path="/blocks/footers/simple-footer-with-version-number"
        title="Simple Footer with Version Number"
        desc="Use this footer example if you want to let the users know what website version is available."
      />
      <BlockPreview
        height="h-[17vh]"
        path="/blocks/footers/website-footer-with-navigation"
        title="Website Footer with Navigation"
        desc="Try this versatile footer example with just navigation links and copyright statement."
      />
      <BlockPreview
        height="h-[56vh]"
        path="/blocks/footers/simple-dark-footer"
        title="Simple Dark Footer"
        desc="Use this responsive footer example styled with Tailwind CSS that comes with dark design, email input, and CTA button."
      />
      <BlockPreview
        height="h-[39vh]"
        path="/blocks/footers/footer-with-navigation-links-and-subscription"
        title="Footer with Navigation Links and Subscription"
        desc="This footer is designed to provide users with navigation to important sections of the website, legal information, and a subscription option for ongoing communication with the company."
      />
      <BlockPreview
        height="h-[28vh]"
        path="/blocks/footers/website-footer-with-quote"
        title="Website Footer with Quote"
        desc="Use this footer block to your project if you want to add a representative quote for the company."
      />
      <BlockPreview
        height="h-[22vh]"
        path="/blocks/footers/website-footer-with-cta"
        title="Website Footer with CTA"
        desc="Try this footer example with navigation links, copyright notice, and CTA button."
      />
      <BlockPreview
        height="h-[28vh]"
        path="/blocks/footers/simple-centered-website-footer"
        title="Simple Centered Website Footer"
        desc="Use this footer example for a centered layout with social media link, copyright notice, and navigation links."
      />
      <BlockPreview
        height="h-[46vh]"
        path="/blocks/footers/complex-dark-footer"
        title="Complex Dark Footer"
        desc="The footer is a complex block suitable for an international e-commerce or service-oriented website, including elements such as company information, user account navigation, legal resources, multilingual and multicurrency options, and a subscription feature for weekly newsletters."
      />
      <BlockPreview
        height="h-[38vh]"
        path="/blocks/footers/advanced-light-footer"
        title="Advanced Light Footer"
        desc="Try this footer example with four columns of navigation links, social links, copyright notice, title, and description."
      />
      <BlockPreview
        height="h-[40vh]"
        path="/blocks/footers/website-footer-for-apps"
        title="Website Footer for Apps"
        desc="This footer example works perfectly on websites with a more complex and large structure. Copy-paste the code and add it to your Tailwind CSS and React project!"
      />
      <BlockPreview
        height="h-[34vh]"
        path="/blocks/footers/website-footer-with-statement"
        title="Website Footer with Statement"
        desc="This footer example works perfectly on websites with a more complex and large structure. It also includes the company's statement."
      />
      <BlockPreview
        height="h-[36vh]"
        path="/blocks/footers/websites-with-navigation-and-subscribe-section"
        title="Website with Navigation and Subscribe Section"
        desc="Use this website footer example to display the most important links and give the users possibility to subscribe to the newsletter."
      />
    </div>
  );
}

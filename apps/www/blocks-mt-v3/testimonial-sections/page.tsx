// @components
import { Typography } from "@material-tailwind/react";
import { BlockPreview, ThemeConfig } from "@/components";

// @types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tailwind CSS & React Testimonials - Material Tailwind PRO",
  description: `In a world full of fake news and publicity, having real feedback,
          especially from happy clients, will be the first factor that impacts
          the purchase decision. Use our examples of Testimonials Sections coded
          with Tailwind CSS and React to build trust and credibility.`,
  alternates: {
    canonical: "https://www.material-tailwind.com/v3/testimonial-sections",
  },
  openGraph: {
    title: "Tailwind CSS & React Testimonials - Material Tailwind PRO",
    description: `In a world full of fake news and publicity, having real feedback,
          especially from happy clients, will be the first factor that impacts
          the purchase decision. Use our examples of Testimonials Sections coded
          with Tailwind CSS and React to build trust and credibility.`,
    url: "https://www.material-tailwind.com/v3/testimonial-sections",
  },
  twitter: {
    title: "Tailwind CSS & React Testimonials - Material Tailwind PRO",
    description: `In a world full of fake news and publicity, having real feedback,
          especially from happy clients, will be the first factor that impacts
          the purchase decision. Use our examples of Testimonials Sections coded
          with Tailwind CSS and React to build trust and credibility.`,
  },
};

export default function TestimonialSections() {
  return (
    <div className="container py-16">
      <ThemeConfig />
      <section className="mb-16">
        <Typography as="h1" type="h4" className="mb-4">
          Tailwind CSS & React Testimonials - Material Tailwind PRO
        </Typography>
        <Typography
          type="lead"
          className="text-foreground max-w-5xl [text-wrap:_balance]"
        >
          In a world full of fake news and publicity, having real feedback,
          especially from happy clients, will be the first factor that impacts
          the purchase decision. Use our examples of Testimonials Sections coded
          with Tailwind CSS and React to build trust and credibility.
        </Typography>
      </section>
      <BlockPreview
        isFree
        height="h-[85vh]"
        path="/blocks/testimonial-sections/simple-grid-layout-arrangement"
        title="Simple Grid Layout Arrangement"
        desc="Use this free testimonial block that features a header, a description, and quotes arranged in a grid layout. It includes logos along with the names and job titles of the people. The block is designed with a clean and minimalist approach, incorporating ample white space to prevent clutter."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/testimonial-sections/cards-testimonial"
        title="Cards Testimonial"
        desc="In this block example, the testimonials are arranged in a grid layout, with each one in its own card-like container. Each testimonial includes: a profile picture, the person's name, twitter handle, a date, and a logo button."
      />
      <BlockPreview
        height="h-[52vh]"
        path="/blocks/testimonial-sections/background-image-testimonial"
        title="Background Image Testimonial"
        desc="This block features a striking quote in white text against a dark-themed background. The design is sleek and modern, with the logo subtly positioned to associate the testimonial with the brand."
      />
      <BlockPreview
        height="h-[52vh]"
        path="/blocks/testimonial-sections/simple-testimonial-with-profile-images"
        title="Simple testimonial with profile images"
        desc="This testimonial block features a large, bold title with an image, quote, and smaller profile images. The layout is clean, with a large white space and a simple color palette, focused on the message and the individual."
      />
      <BlockPreview
        height="h-[54vh]"
        path="/blocks/testimonial-sections/testimonial-with-stats"
        title="Testimonial with stats"
        desc="The layout of this block is divided into two sections - the left side features an image, and the right side is dedicated to the testimonial text and a statistic that showcases the company's reach."
      />
      <BlockPreview
        height="h-[66vh]"
        path="/blocks/testimonial-sections/monochromatic-testimonial-with-logos"
        title="Monochromatic testimonial with logos"
        desc="The design of this testimonial block is minimalist and utilizes a monochromatic color scheme. It includes an icon, a header, subheader, logos, text, and CTA buttons."
      />
      <BlockPreview
        height="h-[66vh]"
        path="/blocks/testimonial-sections/dark-card-testimonial-with-rating"
        title="Dark card testimonial with rating"
        desc="This block comes with three testimonials presented in a row and follows a grid-like structure. At the bottom of each card, there are star ratings and the cards also include a circular image and the person's name and title/affiliation."
      />
      <BlockPreview
        height="h-[60vh]"
        path="/blocks/testimonial-sections/light-card-testimonial-with-rating"
        title="Light card testimonial with rating"
        desc="The color scheme here is lighter, with a white or very light background, as opposed to the dark theme of the previous example. Unlike the previous dark cards, these cards do not have a gradient background or shadow effect, resulting in a flatter and cleaner design."
      />
      <BlockPreview
        height="h-[62vh]"
        path="/blocks/testimonial-sections/light-testimonial-with-card-shadow"
        title="Light testimonial with card shadow"
        desc="In this example, the cards come with a subtle shadow, suggesting a slight elevation from the background, which adds depth to the flat design."
      />
      <BlockPreview
        height="h-[46vh]"
        path="/blocks/testimonial-sections/company-logo-testimonial"
        title="Company logo testimonial"
        desc="The design of this block is very clean, with a lot of white space that directs focus to the company logo, the testimonial text, and the attribution. The simplicity of the design can help prevent distractions and ensure the message is clear."
      />
      <BlockPreview
        height="h-[60vh]"
        path="/blocks/testimonial-sections/testimonial-cards-with-focus"
        title="Testimonial cards with focus"
        desc="In this block example, there are three testimonials, each within its own card. The middle card has a dark background, which creates a focal point and draws the eye to the central testimonial."
      />
      <BlockPreview
        height="h-[60vh]"
        path="/blocks/testimonial-sections/simple-centered-testimonial"
        title="Simple centered testimonial"
        desc="Use this versatile testimonial block with includes a header, subheader, text quote, and circular profile images."
      />
      <BlockPreview
        height="h-[42vh]"
        path="/blocks/testimonial-sections/testimonial-with-submit"
        title="Testimonial with submit"
        desc="On the right, there is an additional card with a + sign and the text -Add Testimonial-, which serves as a call to action for other clients to submit their testimonials. This interactive element encourages users to contribute their feedback."
      />
      <BlockPreview
        height="h-[58vh]"
        path="/blocks/testimonial-sections/three-columns-testimonial"
        title="Three columns testimonial"
        desc="The testimonial design in the image provided is modern and straightforward, consisting of the following elements: images, names, titles, and ratings."
      />
      <BlockPreview
        height="h-[62vh]"
        path="/blocks/testimonial-sections/testimonial-with-summary"
        title="Testimonial with summary"
        desc="This design effectively highlights the positive feedback and could be particularly persuasive to potential customers due to the association with a high-profile executive and brand."
      />
      <BlockPreview
        height="h-[52vh]"
        path="/blocks/testimonial-sections/simple-dark-testimonial-with-rounded-image"
        title="Simple dark testimonial with rounded image"
        desc="Use this simple and elegant testimonial section. Copy-paste it now to your Tailwind CSS project!"
      />
    </div>
  );
}

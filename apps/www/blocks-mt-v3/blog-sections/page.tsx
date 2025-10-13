// @components
import { Typography } from "@material-tailwind/react";
import { BlockPreview, ThemeConfig } from "@/components";

// @types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tailwind CSS & React Blog Template - Material Tailwind PRO",
  description:
    "The blog is very important for the search engine optimization strategy; its design must attract the users and display the content right. See below our beautiful examples of blog sections built with Tailwind CSS and React.",
  alternates: {
    canonical: "https://www.material-tailwind.com/v3/blog-sections",
  },
  openGraph: {
    title: "Tailwind CSS & React Blog Template - Material Tailwind PRO",
    description:
      "The blog is very important for the search engine optimization strategy; its design must attract the users and display the content right. See below our beautiful examples of blog sections built with Tailwind CSS and React.",
    url: "https://www.material-tailwind.com/v3/blog-sections",
  },
  twitter: {
    title: "Tailwind CSS & React Blog Template - Material Tailwind PRO",
    description:
      "The blog is very important for the search engine optimization strategy; its design must attract the users and display the content right. See below our beautiful examples of blog sections built with Tailwind CSS and React.",
  },
};

export default function BlogSections() {
  return (
    <div className="container py-16">
      <ThemeConfig />
      <section className="mb-16">
        <Typography as="h1" type="h4" className="mb-4">
          Tailwind CSS & React Blog Template - Material Tailwind PRO
        </Typography>
        <Typography
          type="lead"
          className="text-foreground max-w-5xl [text-wrap:_balance]"
        >
          The blog is very important for the search engine optimization
          strategy; its design must attract the users and display the content
          right. See below our beautiful examples of blog sections built with
          Tailwind CSS and React.
        </Typography>
      </section>
      <BlockPreview
        isFree
        height="h-[78vh]"
        path="/blocks/blog-sections/blog-template-with-image-filter"
        title="Blog Template with Image Filter"
        desc="Try this beautiful block example with headline, description, and three cards which include title, description, background image, and filter."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/blog-sections/two-columns-blog-template"
        title="Two Columns Blog Template"
        desc="Here is an example of a Tailwind CSS block featuring two columns of cards, suitable for booking websites or blogs."
      />
      <BlockPreview
        height="h-[75vh]"
        path="/blocks/blog-sections/blog-post-template"
        title="Blog Post Template"
        desc="Add this blog post section to your website to get started easier using Tailwind CSS and React."
      />
      <BlockPreview
        height="h-[60vh]"
        path="/blocks/blog-sections/articles-preview-block"
        title="Articles Preview Block"
        desc="Use this articles preview with call-to-action as a teaser for a longer article. Copy-paste this block to your project."
      />
      <BlockPreview
        height="h-[60vh]"
        path="/blocks/blog-sections/simple-blog-content-block"
        title="Simple Blog Content Block"
        desc="In the example below, each card represents a distinct piece of information, featuring an image, a title, a brief description, and some additional details like author attribution and the post date."
      />
      <BlockPreview
        height="h-[46vh]"
        path="/blocks/blog-sections/large-blog-post-preview"
        title="Large Blog Post Preview"
        desc="The layout presented in the block below is a combination of image and text, typically used for featured articles, blog posts, or news items on a website. The large image draws the viewer's attention."
      />
      <BlockPreview
        height="h-[46vh]"
        path="/blocks/blog-sections/large-blog-post-preview-2"
        title="Large Blog Post Preview 2"
        desc="Similar to the previous block example, this section is a large article preview, with the image placed on the right side."
      />
      <BlockPreview
        height="h-[75vh]"
        path="/blocks/blog-sections/blog-post-with-image-on-the-left"
        title="Blog Post with Image on the Left"
        desc="Use our template example to create the user interface for your blog articles."
      />
      <BlockPreview
        height="h-[67vh]"
        path="/blocks/blog-sections/dark-blog-posts-preview"
        title="Dark Blog Posts Preview"
        desc="Use this articles preview block that comes with dark design to add an elegance note to your UI."
      />
      <BlockPreview
        height="h-[67vh]"
        path="/blocks/blog-sections/light-blog-posts-preview"
        title="Light Blog Posts Preview"
        desc="If you prefer a light design, use this blog block example with CTA buttons."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/blog-sections/article-presentation-template"
        title="Article Presentation Template"
        desc="This block features a layout designed for storytelling or presenting articles, with a strong visual element to capture interest."
      />
      <BlockPreview
        height="h-[75vh]"
        path="/blocks/blog-sections/highlighted-blog-posts-block"
        title="Highlighted Blog Posts Block"
        desc="This UI section is used to highlight featured articles, blog entries, services, or categories on a platform, enticing users to explore various topics."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/blog-sections/blog-post-preview-with-tags"
        title="Blog Post Preview with Tags"
        desc="This example is perfect if you want to emphasize the blog post's categories."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/blog-sections/blog-section-with-rectangular-images"
        title="Blog Section with Rectangular Images"
        desc="Try this articles collection block with rectangular images."
      />
      <BlockPreview
        height="h-[85vh]"
        path="/blocks/blog-sections/blog-section-with-cards-layout"
        title="Blog Section with Cards Layout"
        desc="Use this versatile blog section example that includes cards for each blog post with a suggestive image, title, description, author, publication date, and category of the blog post."
      />
    </div>
  );
}

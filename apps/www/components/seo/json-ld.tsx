import { siteConfig } from "@/lib/config"

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Thread Meditation",
    url: "https://threadmeditation.com",
    logo: "https://threadmeditation.com/images/logo.png",
    sameAs: [
      siteConfig.links.instagram,
      siteConfig.links.tiktok,
      siteConfig.links.pinterest,
      siteConfig.links.youtube,
    ],
    description: siteConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.contact.email,
      contactType: "customer service",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Thread Meditation",
    url: "https://threadmeditation.com",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}

export function FaqJsonLd({
  faqs,
}: {
  faqs: { question: string; answer: string }[]
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

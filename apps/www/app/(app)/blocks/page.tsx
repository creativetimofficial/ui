import { BlockDisplay } from "@/components/block-display"

export const dynamic = "force-static"
export const revalidate = false

const FEATURED_BLOCKS = [
  "software-purchase-01",
  "dark-product-overview-01",
  "web3-04",
  "account-basic-info-01",
  "cruds-01",
  "testimonials-03",
]

export default async function BlocksPage() {
  return (
    <div className="flex flex-col gap-12 md:gap-24">
      {FEATURED_BLOCKS.map((name) => (
        <BlockDisplay name={name} key={name} />
      ))}
    </div>
  )
}

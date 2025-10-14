// @components
import { Typography } from "@material-tailwind/react";
import { BlockPreview, ThemeConfig } from "@/components";

// @types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tailwind CSS & React Web 3 Cards - Material Tailwind PRO",
  description: `Explore our crypto card sections that can be customized to perfectly
          fit your dApps and Web 3 projects. From NFT collection cards and
          creator profile previews to auction cards, we&apos;ve got everything
          you need.`,
  alternates: {
    canonical: "https://www.material-tailwind.com/v3/web3-cards",
  },
  openGraph: {
    title: "Tailwind CSS & React Web 3 Cards - Material Tailwind PRO",
    description: `Explore our crypto card sections that can be customized to perfectly
          fit your dApps and Web 3 projects. From NFT collection cards and
          creator profile previews to auction cards, we&apos;ve got everything
          you need.`,
    url: "https://www.material-tailwind.com/v3/web3-cards",
  },
  twitter: {
    title: "Tailwind CSS & React Web 3 Cards - Material Tailwind PRO",
    description: `Explore our crypto card sections that can be customized to perfectly
          fit your dApps and Web 3 projects. From NFT collection cards and
          creator profile previews to auction cards, we&apos;ve got everything
          you need.`,
  },
};

export default function Web3Cards() {
  return (
    <div className="container py-16">
      <ThemeConfig />
      <section className="mb-16">
        <Typography as="h1" type="h4" className="mb-4">
          Tailwind CSS & React Web 3 Cards - Material Tailwind PRO
        </Typography>
        <Typography
          type="lead"
          className="text-foreground max-w-5xl [text-wrap:_balance]"
        >
          Explore our crypto card sections that can be customized to perfectly
          fit your dApps and Web 3 projects. From NFT collection cards and
          creator profile previews to auction cards, we&apos;ve got everything
          you need.
        </Typography>
      </section>
      <BlockPreview
        isFree
        moreSpacing
        height="h-[55vh]"
        path="/blocks/web3-cards/top-creators"
        title="Top Creators"
        desc="Use this Web 3 section to present the best NFT creators represented by avatar components, highlighting their collections and ranking them based on popularity over different time frames - through time filters."
      />
      <BlockPreview
        moreSpacing
        height="h-[74vh]"
        path="/blocks/web3-cards/web3-trending-collections"
        title="Web 3 Trending Collections"
        desc="This Tailwind CSS block displays the most popular NFT collections using cards that showcase the collection name, a brief description, a preview image, the number of NFTs in the collection, and a verification badge."
      />
      <BlockPreview
        moreSpacing
        height="h-[73vh]"
        path="/blocks/web3-cards/crypto-top-auctions"
        title="Crypto Top Auctions"
        desc="This section highlights the most active NFT auctions using cards that showcase the current highest bid, a preview image of the NFT, the creator's name, the remaining time for the auction, and a -Place Bid- button."
      />
      <BlockPreview
        moreSpacing
        height="h-[76vh]"
        path="/blocks/web3-cards/nft-creator-profile"
        title="NFT Creator Profile"
        desc="This section showcases a preview of one creator's collections. It contains collections count, follow button, and collections preview cards."
      />
      <BlockPreview
        height="h-[74vh]"
        path="/blocks/web3-cards/nfts-collection-preview"
        title="NFTs Collection Preview"
        desc="In this section, each card displays a preview image of the NFT, its name and number, the owner's name, and roles (e.g., Trader)."
      />
    </div>
  );
}

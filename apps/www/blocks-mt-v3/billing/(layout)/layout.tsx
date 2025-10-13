// @components
import { BlockFullPreview } from "@/components";

export default function BlockPreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <BlockFullPreview>{children}</BlockFullPreview>;
}

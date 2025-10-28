import SubscriptionDetailClient from "./SubscriptionDetailClient";

export default async function SubscriptionDetailPage({ params }: { params: { id: string } }) {
  const awaitedParams = await params;
  return <SubscriptionDetailClient id={awaitedParams.id} />;
}

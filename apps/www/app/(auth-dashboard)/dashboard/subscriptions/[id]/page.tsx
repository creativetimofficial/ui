import DashboardShell from "@/components/auth/DashboardShell";
import SubscriptionDetailClient from "./SubscriptionDetailClient";

export default async function SubscriptionDetailPage({ params }: { params: { id: string } }) {
  const awaitedParams = await params;
  return (
    <DashboardShell>
      <SubscriptionDetailClient id={awaitedParams.id} />
    </DashboardShell>
  );
}

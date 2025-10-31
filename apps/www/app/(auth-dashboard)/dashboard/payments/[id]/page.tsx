import DashboardShell from "@/components/auth/DashboardShell";
import PaymentsDetailClient from "./PaymentsDetailClient";

export default async function PaymentDetailPage({ params }: { params: { id: string } }) {
  const awaitedParams = await params;
  return (
    <DashboardShell title="Payments">
      <PaymentsDetailClient id={awaitedParams.id} />
    </DashboardShell>
  );
}

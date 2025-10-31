import DashboardShell from "@/components/auth/DashboardShell";
import PaymentsClient from "./PaymentsClient";

export default async function PaymentsPage() {
  return (
    <DashboardShell title="Payments">
      <PaymentsClient />
    </DashboardShell>
  );
}

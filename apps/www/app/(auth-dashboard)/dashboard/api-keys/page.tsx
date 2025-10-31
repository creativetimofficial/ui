import DashboardShell from "@/components/auth/DashboardShell";
import ApiKeysClient from "./ApiKeysClient";

export default function ApiKeysPage() {
  return (
    <DashboardShell title="Api Keys">
      <ApiKeysClient />
    </DashboardShell>
  );
}

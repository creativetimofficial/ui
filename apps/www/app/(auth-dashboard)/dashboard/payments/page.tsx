import PaymentsClient from "./PaymentsClient";

export default async function PaymentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground border-b pb-6">Payments</h1>
      <PaymentsClient />
    </div>
  );
}

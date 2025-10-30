import PaymentsDetailClient from "./PaymentsDetailClient";

export default async function PaymentDetailPage({ params }: { params: { id: string } }) {
  const awaitedParams = await params;
  return <PaymentsDetailClient id={awaitedParams.id} />;
}

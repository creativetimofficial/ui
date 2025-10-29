import PaymentDetailClient from "./PaymentDetailClient";

export default async function PaymentDetailPage({ params }: { params: { id: string } }) {
  const awaitedParams = await params;
  return <PaymentDetailClient id={awaitedParams.id} />;
}

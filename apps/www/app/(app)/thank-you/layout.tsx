import { AuthProvider } from "@/components/auth/AuthProvider";

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}

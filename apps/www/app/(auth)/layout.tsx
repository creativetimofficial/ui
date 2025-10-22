import { AuthProvider } from "@/components/auth/AuthProvider";

// app/(auth)/layout.tsx
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
    <div className="bg-background relative z-10 flex min-h-svh flex-col">
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
    </AuthProvider>
  );
}

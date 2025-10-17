"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { HeroTestimonial } from "@/components/auth/HeroTestimonial";
import { Button } from "@/registry/creative-tim-ui/ui/button";
import { ClientRedirect } from "./ClientRedirect";

type AuthLayoutProps = {
  /** Main title */
  title: string;
  /** Optional subtitle below title */
  subtitle?: string;
  /** Form or page content */
  children: React.ReactNode;
  /** If true, show "Back to login" link below */
  footerLink?: { label: string; href: string; hrefText: string };
  /** If user is already signed in, what route to push */
  dashboardHref?: string;
  /** Show forgot password link (for login page only) */
  showForgotPasswordLink?: boolean;
};

export function AuthLayout({
  title,
  subtitle,
  children,
  footerLink,
  dashboardHref = "/dashboard",
  showForgotPasswordLink = false,
}: AuthLayoutProps) {
  const router = useRouter();
  const { user } = useAuth();

  // Loader only when unauthenticated AND bootstrap still running
  // if (!user && !bootstrapDone) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center">
  //       <div className="text-muted-foreground text-sm">Loading…</div>
  //     </div>
  //   );
  // }

  // If authenticated, render a redirect component (never return null)
  if (user) return <ClientRedirect href={dashboardHref} />;

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:items-center min-h-screen">
        {/* LEFT SIDE */}
        <div className="flex items-center justify-center w-10/12 sm:w-6/12 mx-auto">
          <div className="w-full">
            {/* Title + subtitle */}
            <h2 className="mt-16 text-3xl font-bold leading-tight sm:text-3xl text-slate-900 dark:text-slate-100">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-base text-muted-foreground mb-8">
                {subtitle}
              </p>
            )}

            {/* Form / content */}
            {children}

            {/* Footer link */}
            {footerLink && (
              <div className="mt-8 text-center text-muted-foreground text-sm">
                {footerLink.label}{" "}
                <Button
                  type="button"
                  variant="link"
                  className="underline underline-offset-4 transition-colors cursor-pointer p-0 h-auto text-muted-foreground"
                  onClick={() => router.push(footerLink.href)}
                >
                  {footerLink.hrefText}
                </Button>
              </div>
            )}

            {/* Forgot password (only on login page) */}
            {showForgotPasswordLink && (
              <div className="mt-1 text-center">
                <Button
                  type="button"
                  variant="link"
                  className="p-0 h-auto text-muted-foreground underline underline-offset-4 transition-colors cursor-pointer text-sm"
                  onClick={() => router.push("/forgot-password")}
                >
                  Forgot password?
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <HeroTestimonial />
      </div>
    </div>
  );
}

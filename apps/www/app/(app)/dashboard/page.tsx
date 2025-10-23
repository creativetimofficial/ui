'use client';

import { useAuth } from "@/components/auth/AuthProvider";
import React from "react";

export default function DashboardPage() {
  const { user } = useAuth();

  // If there's no user, show a white window spinner.
  if (!user) {
    return (
      <main className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="flex flex-col items-center">
          <svg className="animate-spin h-8 w-8 text-gray-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
          </svg>
          <span>Loading...</span>
        </div>
      </main>
    );
  }

  // Once we have a user, check their license status
  let licenseStatusMessage = "";
  if (user.license && user.license.status) {
    if (user.license.status === "none") {
      licenseStatusMessage = "No license for the user";
    } else {
      licenseStatusMessage = "Yes there is a license";
    }
  } else {
    licenseStatusMessage = "No license information available.";
  }

  return (
    <main className="max-w-3xl mx-auto mt-16 px-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="rounded-lg bg-white shadow p-6">
        <p className="text-gray-700">Welcome to your dashboard!</p>
        <pre className="text-xs bg-gray-50 p-2 rounded">
          {licenseStatusMessage}
        </pre>
      </div>
    </main>
  );
}

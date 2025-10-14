export async function googleLogin(idToken: string): Promise<Response> {
  if (!process.env.NEXT_PUBLIC_RAILS_BASE_URL) {
    throw new Error("Missing NEXT_PUBLIC_RAILS_BASE_URL");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_RAILS_BASE_URL}/api/v1/auth/google`,
    {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: idToken }),
    }
  );

  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(msg || "Google login failed");
  }

  return res;
}

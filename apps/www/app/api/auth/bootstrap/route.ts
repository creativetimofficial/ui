import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: Request) {
  // Always go to dashboard on success, login on failure
  const successRedirect = new URL(`${process.env.NEXT_PUBLIC_APP_URL}/dashboard`, req.url);
  const loginRedirect = new URL(`${process.env.NEXT_PUBLIC_APP_URL}/ui/login`, req.url);

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_APP_URL}/api/v1/auth/refresh`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    cache: "no-store",
  }).catch(() => null);

  if (res && res.ok) {
    return NextResponse.redirect(successRedirect);
  }

  const redirect = NextResponse.redirect(loginRedirect);
  redirect.cookies.set("rt_present", "", { path: "/", maxAge: 0 });
  return redirect;
}


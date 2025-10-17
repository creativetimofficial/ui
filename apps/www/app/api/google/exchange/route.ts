// app/api/google/exchange/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { code } = await req.json();
    if (!code) {
      return NextResponse.json({ error: "Missing code" }, { status: 400 });
    }

    const client_id = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
    const client_secret = process.env.GOOGLE_CLIENT_SECRET!;
    if (!client_id || !client_secret) {
      return NextResponse.json({ error: "Missing env vars" }, { status: 500 });
    }

    // Exchange code -> tokens (requires client_secret; must be server-side)
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id,
        client_secret,
        grant_type: "authorization_code",
        // GIS popup/code flow uses this special redirect_uri
        redirect_uri: "postmessage",
      }),
    });

    if (!tokenRes.ok) {
      const txt = await tokenRes.text();
      return NextResponse.json(
        { error: "Google token exchange failed", details: txt },
        { status: 400 }
      );
    }

    const tokens = await tokenRes.json(); // { id_token, access_token, ... }
    const id_token = tokens?.id_token as string | undefined;
    if (!id_token) {
      return NextResponse.json({ error: "Missing id_token" }, { status: 400 });
    }

    // Return id_token to the browser; it will POST to Rails
    return NextResponse.json({ id_token });
  } catch (e) {
    const errorMessage = e instanceof Error ? e.message : String(e);
    return NextResponse.json(
      { error: "Unexpected error", details: errorMessage },
      { status: 500 }
    );
  }
}


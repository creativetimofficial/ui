// lib/api-keys.ts
import { api } from "@/lib/auth/api";

export type ApiKeySummary = {
  id: number;
  name: string | null;
  prefix: string;
  created_at: string;
  revoked_at: string | null;
  expires_at: string | null;
  last_used_at: string | null;
};

export type CreatedApiKeyResponse = {
  id: number;
  name: string | null;
  prefix: string;
  plaintext_key: string; // <-- show this once!
  created_at: string;
  expires_at: string | null;
};

// GET /api/v1/api_keys
export async function fetchApiKeys(): Promise<ApiKeySummary[]> {
  return api<ApiKeySummary[]>("/api_keys", {
    method: "GET",
  });
}

// POST /api/v1/api_keys
export async function createApiKey(params: {
  name?: string;
  expires_at?: string | null;
}): Promise<CreatedApiKeyResponse> {
  return api<CreatedApiKeyResponse>("/api_keys", {
    method: "POST",
    body: JSON.stringify(params),
  });
}

// DELETE /api/v1/api_keys/:id
export async function revokeApiKey(id: number): Promise<{ success: boolean }> {
  return api<{ success: boolean }>(`/api_keys/${id}`, {
    method: "DELETE",
  });
}

// POST /api/v1/api_keys/:id/rotate
export async function rotateApiKey(id: number): Promise<{ id: number; plaintext_key: string }> {
  return api<{ id: number; plaintext_key: string }>(
    `/api_keys/${id}/rotate`,
    {
      method: "POST",
    }
  );
}

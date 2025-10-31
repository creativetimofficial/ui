"use client";

import { useEffect, useState } from "react";
import {
  fetchApiKeys,
  createApiKey,
  revokeApiKey,
  rotateApiKey,
  type ApiKeySummary,
  type CreatedApiKeyResponse,
} from "@/lib/api/apiKeys";
import NewKeyModal from "@/components/dashboard/api-keys/NewKeyModel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function ApiKeysPage() {
  const [keys, setKeys] = useState<ApiKeySummary[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [revokeId, setRevokeId] = useState<number | null>(null);

  // show plaintext after create/rotate
  const [showModal, setShowModal] = useState(false);
  const [newPlaintext, setNewPlaintext] = useState<string | null>(null);

  // create dialog state
  const [createOpen, setCreateOpen] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");
  const [newKeyExpiry, setNewKeyExpiry] = useState<string>("");

  // load keys on mount
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await fetchApiKeys();
        if (mounted) {
          setKeys(data);
        }
      } catch (err) {
        console.error("Failed to fetch keys", err);
        if (mounted) {
          setKeys([]);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  function handleCreate() {
    setCreateOpen(true);
  }

  async function handleCreateSubmit() {
    if (!newKeyName.trim()) return;

    try {
      setBusy(true);

      const expiresAtIso =
        newKeyExpiry.trim() === "" ? null : new Date(newKeyExpiry).toISOString();

      const created: CreatedApiKeyResponse = await createApiKey({
        name: newKeyName.trim(),
        expires_at: expiresAtIso,
      });

      // show plaintext modal
      setNewPlaintext(created.plaintext_key);
      setShowModal(true);

      // optimistic insert row
      setKeys((prev) =>
        prev
          ? [
              {
                id: created.id,
                name: created.name,
                prefix: created.prefix,
                created_at: created.created_at,
                revoked_at: null,
                expires_at: created.expires_at,
                last_used_at: null,
              },
              ...prev,
            ]
          : [
              {
                id: created.id,
                name: created.name,
                prefix: created.prefix,
                created_at: created.created_at,
                revoked_at: null,
                expires_at: created.expires_at,
                last_used_at: null,
              },
            ]
      );

      // reset dialog
      setCreateOpen(false);
      setNewKeyName("");
      setNewKeyExpiry("");
    } catch (err) {
      console.error("Failed to create key", err);
    } finally {
      setBusy(false);
    }
  }

  async function handleRevokeConfirm() {
    if (revokeId == null) return;
    try {
      setBusy(true);
      await revokeApiKey(revokeId);
      setKeys((prev) => (prev ? prev.filter((k) => k.id !== revokeId) : prev));
    } catch (err) {
      console.error("Failed to revoke key", err);
    } finally {
      setBusy(false);
      setRevokeId(null);
    }
  }

  async function handleRotate(id: number) {
    try {
      setBusy(true);
      const rotated = await rotateApiKey(id);
      setNewPlaintext(rotated.plaintext_key);
      setShowModal(true);
    } catch (err) {
      console.error("Failed to rotate key", err);
    } finally {
      setBusy(false);
    }
  }

  const empty = !loading && keys && keys.length === 0;

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <Card className="mt-6">
        <CardHeader className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
          <div className="flex-1">
            <CardTitle>Manage keys</CardTitle>
            <CardDescription className="mt-2">
              Manage your API keys here.
            </CardDescription>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-4 flex-shrink-0 flex sm:justify-end w-full sm:w-auto">
            <Button
              onClick={handleCreate}
              disabled={busy}
              className="cursor-pointer"
            >
              <span className="text-lg leading-none">＋</span>
              <span>Create API key</span>
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          {loading ? (
            <div className="space-y-3">
              <Skeleton className="h-9 w-40" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          ) : empty ? (
            <Alert>
              <AlertTitle>No API keys found</AlertTitle>
              <AlertDescription>
                You don&apos;t have any API keys associated with this account.
              </AlertDescription>
            </Alert>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="pr-4">Name</TableHead>
                  <TableHead className="pr-4">Prefix</TableHead>
                  <TableHead className="pr-4">Created</TableHead>
                  <TableHead className="pr-4">Last used</TableHead>
                  <TableHead className="pr-4">Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {keys?.map((k) => {
                  const created = new Date(k.created_at).toLocaleString();
                  const lastUsed = k.last_used_at
                    ? new Date(k.last_used_at).toLocaleString()
                    : "—";
                  const status = k.revoked_at
                    ? "Revoked"
                    : k.expires_at && new Date(k.expires_at) < new Date()
                    ? "Expired"
                    : "Active";

                  return (
                    <TableRow key={k.id}>
                      <TableCell className="pr-4">
                        <div className="font-medium">
                          {k.name || "Untitled key"}
                        </div>
                      </TableCell>

                      <TableCell className="pr-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs text-muted-foreground break-all">
                            {k.prefix}
                          </span>
                        </div>
                      </TableCell>

                      <TableCell className="pr-4 text-muted-foreground">
                        {created}
                      </TableCell>

                      <TableCell className="pr-4 text-muted-foreground">
                        {lastUsed}
                      </TableCell>

                      <TableCell className="pr-4">
                        <Badge
                          variant="secondary"
                          className={
                            status === "Active"
                              ? "text-emerald-500 bg-emerald-600/10 gap-2 py-1"
                              : status === "Expired"
                              ? "text-red-500 bg-red-600/10 gap-2 py-1"
                              : "text-red-500 bg-red-600/10 gap-2 py-1"
                          }
                        >
                          {status}
                        </Badge>
                      </TableCell>

                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          {!k.revoked_at && (
                            <>
                              <Button
                                variant="outline"
                                size="sm"
                                disabled={busy}
                                className="cursor-pointer"
                                onClick={() => handleRotate(k.id)}
                              >
                                Rotate
                              </Button>
                              <Button
                                variant="destructive"
                                size="sm"
                                disabled={busy}
                                className="cursor-pointer"
                                onClick={() => setRevokeId(k.id)}
                              >
                                Revoke
                              </Button>
                            </>
                          )}
                          {k.revoked_at && (
                            <span className="text-muted-foreground italic">
                              (revoked)
                            </span>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      {/* One-time plaintext key modal */}
      <NewKeyModal
        open={showModal}
        plaintextKey={newPlaintext}
        onClose={() => {
          setShowModal(false);
          setNewPlaintext(null);
        }}
      />

      {/* Revoke confirm dialog */}
      <AlertDialog
        open={revokeId != null}
        onOpenChange={(open) => !open && setRevokeId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Revoke API key?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The key will stop working
              immediately.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              disabled={busy}
              onClick={() => setRevokeId(null)}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              disabled={busy}
              onClick={handleRevokeConfirm}
            >
              Revoke
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Create key dialog (name + expiry) */}
      <AlertDialog
        open={createOpen}
        onOpenChange={(open) => {
          if (!busy) setCreateOpen(open);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create API key</AlertDialogTitle>
            <AlertDialogDescription>
              Give this key a name so you recognize it later.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="space-y-4 py-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="new-key-name" className="text-sm font-medium">
                Key name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="new-key-name"
                placeholder="e.g. MacBook CLI, Staging server, Zapier integration"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                disabled={busy}
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="new-key-expiry" className="text-sm font-medium">
                Expires at{" "}
                <span className="text-gray-400 dark:text-white text-xs font-normal">
                  (optional)
                </span>
              </Label>
              <Input
                id="new-key-expiry"
                type="datetime-local"
                value={newKeyExpiry}
                onChange={(e) => setNewKeyExpiry(e.target.value)}
                disabled={busy}
              />
              <p className="text-xs text-muted-foreground">
                Leave blank for no expiration.
              </p>
            </div>
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel
              disabled={busy}
              onClick={() => {
                if (busy) return;
                setCreateOpen(false);
                setNewKeyName("");
                setNewKeyExpiry("");
              }}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              disabled={busy || newKeyName.trim() === ""}
              onClick={handleCreateSubmit}
            >
              Create key
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

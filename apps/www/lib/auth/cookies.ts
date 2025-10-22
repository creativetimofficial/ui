export function hasRefreshMarker(): boolean {
  if (typeof document === "undefined") return false;
  // exact match to avoid partial collisions
  return document.cookie.split("; ").some((c) => c === "rt_present=1");
}

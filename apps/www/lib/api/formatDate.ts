// lib/formatDate.ts
export function formatDate(
  value?: string | number | Date | null,
  formatOptions?: Intl.DateTimeFormatOptions | string
): string {
  if (!value) return "—";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";

  // Support simple string presets like "MMM d, yyyy"
  if (typeof formatOptions === "string") {
    // translate simple token formats into Intl options
    switch (formatOptions) {
      case "MMM d, yyyy":
        formatOptions = { month: "short", day: "numeric", year: "numeric" };
        break;
      case "MMMM d, yyyy":
        formatOptions = { month: "long", day: "numeric", year: "numeric" };
        break;
      case "yyyy-MM-dd":
        return date.toISOString().split("T")[0];
      default:
        formatOptions = { year: "numeric", month: "short", day: "numeric" };
    }
  }

  try {
    return new Intl.DateTimeFormat(undefined, formatOptions).format(date);
  } catch {
    return date.toLocaleDateString();
  }
}

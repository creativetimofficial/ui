// // lib/formatMoney.ts
// export function formatMoney(
//   amount: number | string,
//   currency: string,
//   options?: {
//     locale?: string;
//     amountIsMinorUnits?: boolean; // Paddle usually sends minor units (cents)
//   }
// ): string {
//   const { locale = "en-US", amountIsMinorUnits = true } = options || {};
//   const numeric = typeof amount === "string" ? Number(amount) : amount;

//   const fractionDigits = getCurrencyFractionDigits(currency);
//   const divisor = amountIsMinorUnits ? Math.pow(10, fractionDigits) : 1;
//   const value = numeric / divisor;

//   return new Intl.NumberFormat(locale, {
//     style: "currency",
//     currency,
//     maximumFractionDigits: fractionDigits,
//   }).format(value);
// }

// function getCurrencyFractionDigits(currency: string): number {
//   try {
//     const digits = new Intl.NumberFormat(undefined, {
//       style: "currency",
//       currency,
//     }).resolvedOptions().maximumFractionDigits;
//     // Intl.NumberFormat may return undefined in some rare edge cases
//     return typeof digits === "number" ? digits : 2;
//   } catch {
//     // fallback for unknown codes
//     return 2;
//   }
// }


// lib/formatMoney.ts
export function formatMoney(
  amount: number | string | null | undefined,
  currency?: string | null,
  options?: {
    locale?: string;
    amountIsMinorUnits?: boolean;   // default true = cents/minor units
    fallbackCurrency?: string;      // default "USD"
    fallbackDigits?: number;        // default 2
  }
): string {
  const {
    locale = "en-US",
    amountIsMinorUnits = true,
    fallbackDigits = 2,
  } = options || {};

  // Normalize the amount (supports "0.96e4")
  const numeric = Number(amount ?? 0);
  if (!Number.isFinite(numeric)) return "—";

  // Normalize the currency code (may be missing on first render)
  const code = (currency ?? "").toString().trim().toUpperCase();

  // Decide fraction digits
  const digits = code
    ? getCurrencyFractionDigitsSafe(code, fallbackDigits)
    : fallbackDigits;

  // Convert minor units → major (e.g., cents → dollars)
  const divisor = amountIsMinorUnits ? Math.pow(10, digits) : 1;
  const value = numeric / divisor;

  // If we don't have a valid code yet, format as a plain number
  if (!code) {
    return value.toFixed(digits); // or `${value.toFixed(digits)} ${fallbackCurrency}`
  }

  // Try currency formatting; if it fails, fall back to plain number + code
  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency: code,
      maximumFractionDigits: digits,
      minimumFractionDigits: digits,
    }).format(value);
  } catch {
    // Fallback: still show a sensible value
    return `${value.toFixed(digits)} ${code}`;
  }
}

function getCurrencyFractionDigitsSafe(code: string, fallback: number): number {
  try {
    const opts = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: code,
    }).resolvedOptions();
    return typeof opts.maximumFractionDigits === "number"
      ? opts.maximumFractionDigits
      : fallback;
  } catch {
    return fallback;
  }
}

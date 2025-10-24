/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Environments, initializePaddle, Paddle } from '@paddle/paddle-js';
import { useAuth } from '@/components/auth/AuthProvider';

// type PaddleCheckoutOptions = {
//   customer?: { email: string };
//   settings?: { successUrl: string };
//   items: { priceId: string; quantity: number }[];
//   customData?: Record<string, any>;
// };

type HandleBuyParams = {
  priceId: string;
  type?: string[];
  productId?: string;
  productName?: string;
  teamSize?: number;
  team?: boolean;
};

// Decide if we need to sign before checkout
// function isSigningNeeded(productId?: string): boolean {
//   if (!productId) return true; // if missing, always sign

//   const allowed = (process.env.NEXT_PUBLIC_ALLOWED_PRODUCTS || "")
//     .split(",")
//     .map((id) => id.trim())
//     .filter(Boolean);

//   // If it's not in our trusted list, we need a signature
//   return !allowed.includes(productId);
// }


export function usePaddle() {
  const [paddle, setPaddle] = useState<Paddle | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN && process.env.NEXT_PUBLIC_PADDLE_ENV) {
      initializePaddle({
        token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
        environment: process.env.NEXT_PUBLIC_PADDLE_ENV as Environments,
      }).then((paddleInstance) => {
        if (paddleInstance) {
          setPaddle(paddleInstance);
        }
      });
    }
  }, []);

  const handleBuy = async ({
    priceId,
    type = [],
    productId,
    productName,
    teamSize,
    team = false,
    }: HandleBuyParams) => {
      setIsProcessing(true);
      try {
        if (!paddle) throw new Error("Paddle instance not available");

        const customData = {
          team,
          type,
          teamSize,
          productId,
          productName,
        };

        const checkoutOptions: any = {
          items: [{ priceId, quantity: 1 }],
          settings: { successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/ui/thank-you` },
          customData, // 👈 Add customData directly
        };

        if (user?.email) checkoutOptions.customer = { email: user.email };

        await paddle.Checkout.open(checkoutOptions);
      } finally {
        setIsProcessing(false);
      }
    };

  return {
    paddle,
    isProcessing,
    handleBuy,
  };
}

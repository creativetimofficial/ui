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

        const checkoutOptions: any = {
          items: [{ priceId, quantity: 1 }],
          settings: { successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/ui/thank-you` },
        };

        if (user?.email) checkoutOptions.customer = { email: user.email };

        // 🧩 custom data payload
        const customData = {
          team,
          type,
          teamSize,
          productId,
          productName,
        };

        // 🔐 sign via backend
        let signedCustomData: Record<string, any> | null = null;
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/paddle/sign-custom-data`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(customData),
          });
          if (res.ok) signedCustomData = await res.json();
          else console.warn("Failed to sign custom_data; proceeding unsigned");
        } catch (err) {
          console.error("Error signing custom_data:", err);
        }

        checkoutOptions.customData = signedCustomData || customData;
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

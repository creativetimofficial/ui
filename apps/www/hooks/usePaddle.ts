/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { Environments, initializePaddle, Paddle } from '@paddle/paddle-js';
import { useAuth } from '@/components/auth/AuthProvider';

type PaddleCheckoutOptions = {
  customer?: { email: string };
  settings?: { successUrl: string };
  items: { priceId: string; quantity: number }[];
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

  const handleBuy = async (
    priceId: string,
    type?: string[],
    productId?: string,
    productName?: string,
    teamSize?: number
  ) => {
    setIsProcessing(true);
    try {
      if (!paddle) {
        console.error('Paddle instance not available');
        return;
      }

      const checkoutOptions: PaddleCheckoutOptions = {
        items: [{ priceId, quantity: 1 }],
        settings: {
          successUrl: `${process.env.NEXT_PUBLIC_APP_URL}/thank-you`,
        },
      };

      if (user?.email) {
        checkoutOptions.customer = { email: user.email };
      }

      // Build custom data payload
      const customData: Record<string, any> = {};
      if (type) customData.type = Array.isArray(type) ? type : [type];
      if (teamSize) customData.teamSize = teamSize;
      if (productId) customData.productId = productId;
      if (productName) customData.productName = productName;

      if (Object.keys(customData).length > 0) {
        (checkoutOptions as any).customData = customData;
      }

      await paddle.Checkout.open(checkoutOptions);
    } catch (error) {
      console.error('Subscription error:', error);
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

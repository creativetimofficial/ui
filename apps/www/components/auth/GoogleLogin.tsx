"use client";

import * as React from "react";
import { Button } from "@/registry/elevenlabs-ui/ui/button";

type GoogleAPI = {
  accounts: {
    id: {
      initialize: (config: {
        client_id: string;
        callback: ({ credential }: { credential?: string }) => void;
      }) => void;
      prompt: (callback: (notification: GooglePromptNotification) => void) => void;
    };
  };
};

type GooglePromptNotification = {
  isNotDisplayed: () => boolean;
  isSkippedMoment: () => boolean;
  // ...other possible fields if needed
};

declare global {
  interface Window {
    google?: GoogleAPI;
  }
}

type GoogleLoginProps = {
  /** Called when Google returns the ID token */
  onCredential: (idToken: string) => void;
  /** Called if something goes wrong (optional) */
  onError?: (err: unknown) => void;
  /** Optional extra classes for the button container */
  className?: string;
  /** Optional extra classes for the custom button */
  buttonClassName?: string;
  /** Optional custom label content (defaults to Google G + text) */
  label?: React.ReactNode;
};

export function GoogleLogin({
  onCredential,
  onError,
  className,
  buttonClassName,
  label,
}: GoogleLoginProps) {
  const initialized = React.useRef(false);

  React.useEffect(() => {
    if (initialized.current) return;
    if (!window.google) {
      onError?.(new Error("Google API script not loaded"));
      return;
    }

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    if (!clientId) {
      onError?.(new Error("Missing NEXT_PUBLIC_GOOGLE_CLIENT_ID"));
      return;
    }

    // Initialize the Google Identity Services SDK
    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: ({ credential }: { credential?: string }) => {
        if (credential) {
          onCredential(credential);
        }
      },
    });

    initialized.current = true;
  }, [onCredential, onError]);

  const handleClick = React.useCallback(() => {
    if (!window.google) {
      onError?.(new Error("Google API not loaded"));
      return;
    }

    // This opens Google's account chooser / One Tap UI
    window.google.accounts.id.prompt((notification: GooglePromptNotification) => {
      // Optional: handle suppressed UI here if needed
      if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
        console.warn("Google One Tap was not displayed:", notification);
      }
    });
  }, [onError]);

  return (
    <div className={className}>
      <Button
        type="button"
        onClick={handleClick}
        variant={'outline'}
        className={
          buttonClassName ??
          "w-full inline-flex items-center justify-center cursor-pointer"
        }
      >
        {label ?? (
          <>
            {/* Google G icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5">
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4
                C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20
                C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12
                c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4
                C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238
                C29.211,35.091,26.715,36,24,36
                c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303
                c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238
                C36.971,39.205,44,34,44,24
                C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            <span>Continue with Google</span>
          </>
        )}
      </Button>
    </div>
  );
}

"use client";

import { FirebaseAnalyticsProvider } from "./firebase-analytics";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FirebaseAnalyticsProvider />
      {children}
    </>
  );
}

"use client";

import { FirebaseAnalyticsProvider } from "./firebase-analytics";
import { AuthInitializer } from "./auth-initializer";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FirebaseAnalyticsProvider />
      <AuthInitializer />
      {children}
    </>
  );
}

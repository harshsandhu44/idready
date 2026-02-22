"use client";

import { useEffect } from "react";
import { initAnalytics } from "@idready/firebase";
import "@/lib/firebase";

export function FirebaseAnalyticsProvider() {
  useEffect(() => {
    initAnalytics().catch(console.error);
  }, []);

  return null;
}

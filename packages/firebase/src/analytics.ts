import type { Analytics } from "firebase/analytics";
import { getFirebaseApp } from "./app";

let instance: Analytics | null = null;

export async function initAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") return null;
  if (instance) return instance;

  const { getAnalytics, isSupported } = await import("firebase/analytics");
  if (!(await isSupported())) return null;

  instance = getAnalytics(getFirebaseApp());
  return instance;
}

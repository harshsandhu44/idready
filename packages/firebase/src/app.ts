import { getApps, initializeApp, type FirebaseApp, type FirebaseOptions } from "firebase/app";

let appInstance: FirebaseApp | null = null;

export function initFirebaseApp(config: FirebaseOptions): FirebaseApp {
  if (appInstance) return appInstance;
  appInstance = getApps().length === 0 ? initializeApp(config) : getApps()[0];
  return appInstance;
}

export function getFirebaseApp(): FirebaseApp {
  if (!appInstance) throw new Error("Firebase not initialized. Call initFirebaseApp() first.");
  return appInstance;
}

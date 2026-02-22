import { getAuth, type Auth } from "firebase/auth";
import { getFirebaseApp } from "./app";

let instance: Auth | null = null;

export function getFirebaseAuth(): Auth {
  if (!instance) instance = getAuth(getFirebaseApp());
  return instance;
}

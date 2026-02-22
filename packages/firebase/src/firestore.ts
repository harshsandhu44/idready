import { getFirestore, type Firestore } from "firebase/firestore";
import { getFirebaseApp } from "./app";

let instance: Firestore | null = null;

export function getFirebaseFirestore(): Firestore {
  if (!instance) instance = getFirestore(getFirebaseApp());
  return instance;
}

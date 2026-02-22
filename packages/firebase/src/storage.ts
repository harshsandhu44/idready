import { getStorage, type FirebaseStorage } from "firebase/storage";
import { getFirebaseApp } from "./app";

let instance: FirebaseStorage | null = null;

export function getFirebaseStorage(): FirebaseStorage {
  if (!instance) instance = getStorage(getFirebaseApp());
  return instance;
}

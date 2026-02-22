import { create } from "zustand";
import { onAuthStateChanged, type User } from "firebase/auth";
import { getFirebaseAuth } from "@idready/firebase";

type AuthStore = {
  user: User | null;
  loading: boolean;
  initialize: () => () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  loading: true,
  initialize: () => {
    const auth = getFirebaseAuth();
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      set({ user, loading: false });
    });
    return unsubscribe;
  },
}));

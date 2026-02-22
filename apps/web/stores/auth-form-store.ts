import { create } from "zustand";

type Step = "email" | "sign-in" | "sign-up" | "forgot-password";

type AuthFormStore = {
  step: Step;
  email: string;
  googleOnly: boolean;
  setStep: (step: Step) => void;
  setEmail: (email: string) => void;
  setGoogleOnly: (v: boolean) => void;
  reset: () => void;
};

export const useAuthFormStore = create<AuthFormStore>((set) => ({
  step: "email",
  email: "",
  googleOnly: false,
  setStep: (step) => set({ step }),
  setEmail: (email) => set({ email }),
  setGoogleOnly: (googleOnly) => set({ googleOnly }),
  reset: () => set({ step: "email", email: "", googleOnly: false }),
}));

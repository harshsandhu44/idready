"use client";

import { useEffect } from "react";
import { useAuthFormStore } from "@/stores/auth-form-store";
import { EmailStep } from "@/components/auth/email-step";
import { SignInStep } from "@/components/auth/sign-in-step";
import { SignUpStep } from "@/components/auth/sign-up-step";

export default function SignInPage() {
  const { step, reset } = useAuthFormStore();

  useEffect(() => {
    return () => reset();
  }, [reset]);

  return (
    <div className="rounded-xl border bg-card p-8 shadow-sm">
      {step === "email" && <EmailStep />}
      {step === "sign-in" && <SignInStep />}
      {step === "sign-up" && <SignUpStep />}
    </div>
  );
}

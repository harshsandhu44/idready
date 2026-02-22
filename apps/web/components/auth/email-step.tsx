"use client";

import { useState } from "react";
import { fetchSignInMethodsForEmail } from "firebase/auth";
import { getFirebaseAuth } from "@idready/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GoogleSignInButton } from "./google-sign-in-button";
import { useAuthFormStore } from "@/stores/auth-form-store";

export function EmailStep() {
  const { email, setEmail, setStep, setGoogleOnly } = useAuthFormStore();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const auth = getFirebaseAuth();
      const methods = await fetchSignInMethodsForEmail(auth, email);
      if (methods.length === 0) {
        setGoogleOnly(false);
        setStep("sign-up");
      } else if (
        methods.includes("google.com") &&
        !methods.includes("password")
      ) {
        setGoogleOnly(true);
        setStep("sign-in");
      } else {
        setGoogleOnly(false);
        setStep("sign-in");
      }
    } catch (err: unknown) {
      const code = (err as { code?: string }).code;
      if (code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="space-y-1 text-center">
        <h1 className="text-2xl font-semibold">Welcome</h1>
        <p className="text-sm text-muted-foreground">
          Sign in or create an account to continue
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
        </div>
        {error && <p className="text-sm text-destructive">{error}</p>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Checking..." : "Continue"}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">or</span>
        </div>
      </div>

      <GoogleSignInButton />
    </div>
  );
}

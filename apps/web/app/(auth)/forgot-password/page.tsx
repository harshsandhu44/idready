"use client";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { getFirebaseAuth } from "@idready/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthFormStore } from "@/stores/auth-form-store";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ForgotPasswordPage() {
  const { email: storedEmail } = useAuthFormStore();
  const [email, setEmail] = useState(storedEmail);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const auth = getFirebaseAuth();
      await sendPasswordResetEmail(auth, email);
    } catch (err: unknown) {
      const code = (err as { code?: string }).code;
      if (code === "auth/invalid-email") {
        setLoading(false);
        setError("Please enter a valid email address.");
        return;
      }
      // For user-not-found and all other errors, show success for security
    } finally {
      setLoading(false);
    }
    setSent(true);
  }

  return (
    <div className="rounded-xl border bg-card p-8 shadow-sm">
      {sent ? (
        <div className="space-y-4 text-center">
          <div className="flex justify-center">
            <CheckCircle className="size-12 text-green-500" />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold">Check your inbox</h1>
            <p className="text-sm text-muted-foreground">
              If an account exists for{" "}
              <span className="font-medium text-foreground">{email}</span>,
              you&apos;ll receive a password reset link shortly.
            </p>
          </div>
          <Link
            href="/sign-in"
            className="inline-block text-sm text-primary hover:underline"
          >
            Back to sign in
          </Link>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="space-y-1 text-center">
            <h1 className="text-2xl font-semibold">Reset password</h1>
            <p className="text-sm text-muted-foreground">
              Enter your email and we&apos;ll send you a reset link
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
              {loading ? "Sending..." : "Send reset link"}
            </Button>
          </form>

          <div className="text-center">
            <Link
              href="/sign-in"
              className="text-sm text-muted-foreground hover:text-foreground hover:underline"
            >
              Back to sign in
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

import Link from "next/link";
import { ScanFace } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 px-4">
      <div className="w-full max-w-sm">
        <Link href="/" className="mb-8 flex items-center justify-center gap-2">
          <span className="flex items-center justify-center rounded-lg bg-primary p-1.5">
            <ScanFace className="size-5 text-primary-foreground" />
          </span>
          <span className="text-sm font-semibold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>
        {children}
      </div>
    </main>
  );
}

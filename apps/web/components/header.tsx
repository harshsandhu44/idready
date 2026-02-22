import Link from "next/link";
import { ScanFace } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex items-center justify-center rounded-lg bg-primary p-1.5">
            <ScanFace className="size-5 text-primary-foreground" />
          </span>
          <span className="text-sm font-semibold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {siteConfig.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button size="sm" asChild>
          <Link href={siteConfig.nav.cta.href}>{siteConfig.nav.cta.label}</Link>
        </Button>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { ScanFace } from "lucide-react";
import { signOut } from "firebase/auth";
import { getFirebaseAuth } from "@idready/firebase";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { siteConfig } from "@/lib/config";
import { useAuthStore } from "@/stores/auth-store";

function getAvatarFallback(
  displayName: string | null,
  email: string | null
): string {
  const name = displayName ?? email ?? "U";
  return name[0].toUpperCase();
}

export function Header() {
  const { user, loading } = useAuthStore();

  async function handleSignOut() {
    await signOut(getFirebaseAuth());
  }

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

        <div className="flex items-center gap-3">
          {loading ? (
            <div className="h-9 w-20 invisible" aria-hidden="true" />
          ) : user ? (
            <>
              <Button size="sm" asChild>
                <Link href={siteConfig.nav.cta.href}>
                  {siteConfig.nav.cta.label}
                </Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar className="size-8 cursor-pointer">
                    <AvatarFallback>
                      {getAvatarFallback(user.displayName, user.email)}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      {user.displayName && (
                        <p className="text-sm font-medium leading-none">
                          {user.displayName}
                        </p>
                      )}
                      {user.email && (
                        <p className="text-xs leading-none text-muted-foreground">
                          {user.email}
                        </p>
                      )}
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleSignOut}
                    className="cursor-pointer"
                  >
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button size="sm" variant="ghost" asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href={siteConfig.nav.cta.href}>
                  {siteConfig.nav.cta.label}
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

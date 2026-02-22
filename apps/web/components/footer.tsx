import Link from "next/link";
import { ScanFace } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function Footer() {
  const linkGroups = Object.values(siteConfig.footer.links);

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex items-center justify-center rounded-lg bg-primary p-1.5">
                <ScanFace className="size-5 text-primary-foreground" />
              </span>
              <span className="text-sm font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.heading}>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground">
                {group.heading}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {siteConfig.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

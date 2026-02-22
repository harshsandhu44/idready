import Link from "next/link";
import {
  Upload,
  Crop,
  Download,
  Zap,
  Globe,
  ShieldCheck,
  Smartphone,
  Lock,
  ArrowRight,
  Image,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

// ─── Utility components ──────────────────────────────────────────────────────

const iconMap: Record<string, LucideIcon> = {
  Upload,
  Crop,
  Download,
  Zap,
  Globe,
  ShieldCheck,
  Smartphone,
  Lock,
  Image,
};

function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? Image;
  return <Icon className={className} />;
}

function ImagePlaceholder({
  aspectRatio,
  icon,
  label,
  className,
}: {
  aspectRatio: string;
  icon?: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl bg-muted ${aspectRatio} ${className ?? ""}`}
    >
      {icon && (
        <DynamicIcon name={icon} className="size-8 text-muted-foreground/50" />
      )}
      {label && (
        <span className="text-xs text-muted-foreground/60">{label}</span>
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
      {children}
    </span>
  );
}

// ─── Sections ────────────────────────────────────────────────────────────────

function HeroSection() {
  const { hero } = siteConfig;
  const [line1, line2] = hero.headline.split("\n");

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(var(--primary)/0.08),transparent)] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Left */}
        <div className="flex flex-col items-start gap-6">
          <SectionLabel>{hero.badge}</SectionLabel>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {line1}
            <br />
            <span className="text-primary">{line2}</span>
          </h1>

          <p className="max-w-md text-lg text-muted-foreground">{hero.subtext}</p>

          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <Link href={hero.primaryCta.href}>{hero.primaryCta.label}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">{hero.trustLine}</p>
        </div>

        {/* Right — before / after */}
        <div className="relative flex items-center justify-center gap-4">
          <div className="-rotate-3">
            <ImagePlaceholder
              aspectRatio="aspect-[3/4]"
              icon="Image"
              label="Your photo"
              className="w-44 sm:w-52"
            />
          </div>

          <div className="flex flex-col items-center gap-1 text-muted-foreground">
            <ArrowRight className="size-6" />
          </div>

          <div className="rotate-2">
            <ImagePlaceholder
              aspectRatio="aspect-[3/4]"
              icon="Image"
              label="Passport ready"
              className="w-44 border-2 border-primary/30 sm:w-52"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const { howItWorks } = siteConfig;

  return (
    <section id="how-it-works" className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <SectionLabel>{howItWorks.label}</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {howItWorks.heading}
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Dashed connector */}
          <div className="absolute left-0 right-0 top-16 hidden border-t border-dashed border-border/60 md:block" />

          {howItWorks.steps.map((step) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center gap-4 rounded-2xl border border-border bg-background p-6 text-center"
            >
              <span className="absolute right-4 top-3 font-mono text-5xl font-bold text-muted/60 select-none">
                {step.number}
              </span>

              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                <DynamicIcon name={step.icon} className="size-6 text-primary" />
              </div>

              <ImagePlaceholder
                aspectRatio="aspect-video"
                icon={step.icon}
                className="w-full"
              />

              <div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const { features } = siteConfig;

  return (
    <section id="features" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <SectionLabel>{features.label}</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {features.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-border p-6 transition-shadow hover:shadow-xs"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-primary">
                <DynamicIcon
                  name={item.icon}
                  className="size-5 text-muted-foreground transition-colors group-hover:text-primary-foreground"
                />
              </div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExamplesSection() {
  const { examples } = siteConfig;

  return (
    <section id="examples" className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 flex flex-col items-center gap-3 text-center">
          <SectionLabel>{examples.label}</SectionLabel>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {examples.heading}
          </h2>
          <p className="max-w-lg text-muted-foreground">{examples.subtext}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {examples.items.map((item, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <ImagePlaceholder
                    aspectRatio="aspect-square"
                    icon="Image"
                    label={item.beforeLabel}
                  />
                </div>
                <ArrowRight className="size-5 shrink-0 text-muted-foreground" />
                <div className="flex-1">
                  <ImagePlaceholder
                    aspectRatio="aspect-[3/4]"
                    icon="Image"
                    label={item.afterLabel}
                    className="border border-primary/20"
                  />
                </div>
              </div>
              <p className="text-center text-xs text-muted-foreground">
                {item.beforeLabel} → {item.afterLabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  const { finalCta } = siteConfig;

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-muted/40 p-10 text-center md:p-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {finalCta.heading}
          </h2>
          <p className="max-w-md text-muted-foreground">{finalCta.subtext}</p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild>
              <Link href={finalCta.primaryCta.href}>
                {finalCta.primaryCta.label}
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={finalCta.secondaryCta.href}>
                {finalCta.secondaryCta.label}
              </Link>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">{finalCta.note}</p>
        </div>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <ExamplesSection />
      <FinalCtaSection />
    </>
  );
}

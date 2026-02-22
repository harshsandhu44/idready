export const siteConfig = {
  name: "IDReady",
  tagline: "Passport photos from your phone",
  description:
    "Create perfect passport-size photos in seconds. Upload your image, we'll crop, resize, and format it to official government standards.",
  url: "https://idready.app",

  metadata: {
    title: "IDReady — Passport Photos in Seconds",
    description:
      "Create perfect passport-size photos in seconds. Upload your image, we'll crop, resize, and format it to official government standards.",
    keywords: [
      "passport photo",
      "id photo",
      "passport size photo",
      "photo tool",
      "government id photo",
    ],
  },

  nav: {
    links: [
      { label: "How It Works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Examples", href: "#examples" },
    ],
    cta: { label: "Create Photo", href: "/create" },
  },

  hero: {
    badge: "No account required",
    headline: "Passport photos\nready in seconds",
    subtext:
      "Upload a photo, get a perfectly formatted passport-size image. Supports US, UK, EU, and 50+ country standards.",
    primaryCta: { label: "Create Your Photo", href: "/create" },
    secondaryCta: { label: "See How It Works", href: "#how-it-works" },
    trustLine: "100% free · No watermarks · Instant download",
  },

  howItWorks: {
    label: "Simple process",
    heading: "Three steps to the perfect photo",
    steps: [
      {
        number: "01",
        icon: "Upload",
        title: "Upload your photo",
        description:
          "Take a selfie or upload an existing photo. Any well-lit, front-facing image works.",
      },
      {
        number: "02",
        icon: "Crop",
        title: "We format it",
        description:
          "Our tool automatically detects your face, crops to the right dimensions, and meets all requirements.",
      },
      {
        number: "03",
        icon: "Download",
        title: "Download and print",
        description:
          "Get your photo instantly. Print at home or at any photo shop — guaranteed to be accepted.",
      },
    ],
  },

  features: {
    label: "Why IDReady",
    heading: "Everything you need for a perfect ID photo",
    items: [
      {
        icon: "Zap",
        title: "Instant results",
        description:
          "No waiting, no queues. Your photo is processed and ready to download in under 10 seconds.",
      },
      {
        icon: "Globe",
        title: "50+ country standards",
        description:
          "US passport, UK visa, EU ID, and more. We support official requirements for over 50 countries.",
      },
      {
        icon: "ShieldCheck",
        title: "Compliance guaranteed",
        description:
          "Every photo meets government specifications for size, background, lighting, and face position.",
      },
      {
        icon: "Smartphone",
        title: "Works on any device",
        description:
          "Capture directly from your phone camera or upload from your desktop — no app needed.",
      },
      {
        icon: "Lock",
        title: "Private by design",
        description:
          "Your photos are never stored or shared. We process and immediately discard them after download.",
      },
      {
        icon: "Download",
        title: "Print-ready files",
        description:
          "Get high-resolution files optimized for printing at standard photo sizes. No editing needed.",
      },
    ],
  },

  examples: {
    label: "Real results",
    heading: "See the transformation",
    subtext:
      "From any casual photo to a professional, compliant passport photo in seconds.",
    items: [
      { beforeLabel: "Your photo", afterLabel: "Passport ready" },
      { beforeLabel: "Your photo", afterLabel: "Passport ready" },
      { beforeLabel: "Your photo", afterLabel: "Passport ready" },
    ],
  },

  finalCta: {
    heading: "Ready for your perfect passport photo?",
    subtext:
      "Join thousands of people who skipped the photo booth. Free, fast, and guaranteed to be accepted.",
    primaryCta: { label: "Create Your Photo Free", href: "/create" },
    secondaryCta: { label: "Learn more", href: "#how-it-works" },
    note: "No account required · Instant download · 100% free",
  },

  footer: {
    links: {
      product: {
        heading: "Product",
        items: [
          { label: "How It Works", href: "#how-it-works" },
          { label: "Features", href: "#features" },
          { label: "Examples", href: "#examples" },
          { label: "Create Photo", href: "/create" },
        ],
      },
      support: {
        heading: "Support",
        items: [
          { label: "FAQ", href: "/faq" },
          { label: "Contact", href: "/contact" },
          { label: "Country Requirements", href: "/requirements" },
        ],
      },
      legal: {
        heading: "Legal",
        items: [
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" },
        ],
      },
    },
    copyright: `© ${new Date().getFullYear()} IDReady. All rights reserved.`,
  },
} as const;

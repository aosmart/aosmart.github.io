// src/content/site.ts
export type SiteNavItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  author: {
    name: string;
    email?: string;
    url?: string;
    socials?: {
      x?: string;
      github?: string;
      linkedin?: string;
    };
  };
  nav: SiteNavItem[];
  seo: {
    ogImage?: string;
    robots: string;
    themeColor: string;
  };
};

export const site: SiteConfig = {
  name: "",
  tagline: "A boring, production-ready Astro starter.",
  description:
    "Astro Baseline is a minimal HTML-first starter with senior defaults: SEO, JSON-LD, a11y basics, and clean structure.",
  url: import.meta.env.SITE_URL ?? "https://example.com",
  locale: "en",
  author: {
    name: "",
    email: "",
    url: "https://example.com",
    socials: {},
  },
  nav: [
    { label: "Accueil", href: "/" },
    { label: "Exclusion de pluie", href: "/pluie" },
    { label: "Météorologie", href: "/meteo" },
    { label: "Flux de carbone", href: "/flux" },
    { label: "Équipe", href: "/equipe" },
    { label: "Nouvelles", href: "/news" },
    { label: "Galerie de photos", href: "/photos" },
  ],
  seo: {
    ogImage: "/images/og/og-default.jpg",
    robots: "index,follow",
    themeColor: "#fbfbf9",
  },
};

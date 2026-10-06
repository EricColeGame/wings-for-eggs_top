export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "+1 Wings For Eggs Wiki",
  shortName: "+1 Wings For Eggs",
  logoText: "W",
  tagline: "Eggs, Wings, Animals, Areas & Rebirth Guides",
  description: "Your ultimate +1 Wings For Eggs wiki! Fly to distant nests, steal Eggs, hatch Animals, earn Cash, upgrade Wings, and Rebirth to reach farther areas.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://wings-for-eggs.top",
  supportEmail: "support@wings-for-eggs.top",
  gameUrl: "https://www.roblox.com/games/80242821185181/1-Wings-For-Eggs",
  heroVideoId: "9YAemHVbsNc", // Roblox +1 Wings For Eggs gameplay showcase
  social: {
    discord: "https://www.roblox.com/games/80242821185181/1-Wings-For-Eggs",
    youtube: "https://www.youtube.com/watch?v=9YAemHVbsNc",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};

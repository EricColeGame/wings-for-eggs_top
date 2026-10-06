import { defineRouting } from "next-intl/routing";
import { siteConfig } from "@/config/site";

export const locales = ["en", "es", "pt", "fr"] as const;

export const routing = defineRouting({
  locales: [...locales] as string[],
  defaultLocale: siteConfig.defaultLocale,
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof locales)[number];

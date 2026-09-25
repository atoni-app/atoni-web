import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/en", "/es", "/privacy", "/terms", "/en/privacy", "/en/terms", "/es/privacy", "/es/terms"].map((path) => ({ url: `https://atoni.app${path}`, lastModified: new Date("2026-09-25"), changeFrequency: path ? "monthly" : "weekly", priority: path === "" ? 1 : path === "/en" || path === "/es" ? 0.9 : 0.6 }));
}

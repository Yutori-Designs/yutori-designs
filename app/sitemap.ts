import { MetadataRoute } from "next";

// One host everywhere: the www address, to match metadataBase, canonicals and the Vercel redirect.
const BASE = "https://www.yutoridesigns.in";

// Google ignores priority and changeFrequency, and it learns to ignore lastModified
// when every page says "now". So only url is listed. If you want lastModified, give each
// page the real date you last changed it, for example new Date("2026-10-06").
const paths = [
  "",
  "/our-projects",
  "/interior-designers-mangalore",
  "/interior-designers-udupi",
  "/service/interior-design",
  "/service/space-planning",
  "/service/turnkey-project-execution",
  "/service/commercial",
  "/service/residential",
  "/service/office-space",
  "/contact-us",
  "/overview",
  "/our-team",
  "/our-values",
  "/our-operating-model",
  "/testimonial",
  "/blogs",
  // Blog articles
  "/blogs/interior-design-firms-house-design-philosophy",
  "/blogs/interior-design-mangalore-luxury-villas-premium-homes",
  "/blogs/top-interior-designers-mangalore-services",
  "/blogs/how-commercial-interior-designers-work",
  "/blogs/best-home-interior-designers-in-mangalore",
  "/blogs/mangalore-architects",
  "/blogs/interior-designers-mangalore",
  "/blogs/luxury-interior-designers-mangalore",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${BASE}${path}` }));
}
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
  "/faqs",
  // Blog articles
  "/blogs/office-interior-design-udupi-manipal-planning-guide",
  "/blogs/interior-design-firms-house-design-philosophy",
  "/blogs/interior-design-mangalore-luxury-villas-premium-homes",
  "/blogs/top-interior-designers-mangalore-services",
  "/blogs/how-commercial-interior-designers-work",
  "/blogs/best-home-interior-designers-in-mangalore",
  "/blogs/mangalore-architects",
  "/blogs/interior-designers-mangalore",
  "/blogs/luxury-interior-designers-mangalore",
  "/our-projects/carpe-diem-coastal-villa-mattu",
  "/our-projects/hotel-Jewel-Park-hemmady",
  "/our-projects/xpheno-manipal-office",
  "/our-projects/yutori-designs-udupi-office",
  "/our-projects/vruddhi-properties-office-udupi",
  "/our-projects/timeless-collections-commercial-spaces-udupi",
  "/our-projects/niveus-part-of-NTT-Data-mangalore",
  "/our-projects/novigo-solutions-mangalore-office",
  "/our-projects/park-avenue-udupi-residences",
  "/our-projects/niveus-part-of-NTT-Data-udupi-office",
  "/our-projects/goan-paradise-office-Panaji",
  "/our-projects/hotel-shivaprasad-grand-kundapura",
  "/our-projects/shesha-krishna-convention-hall-thallur",
  "/our-projects/st-joseph-iti-jeppu",
  "/our-projects/philip-neri-school-basroor",
  "/our-projects/rosary-church-santhakatte",
  "/our-projects/st-francis-assisi-church-tallur",
  "/our-projects/hollywood-town-garden-roof",
  "/our-projects/high-street-gabion-residences",
  "/our-projects/nandi-hills-residences",
  "/our-projects/sangolda-residences",
  "/our-projects/kadri-enclave-residences",
  "/our-projects/tc-palya-apartment",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `${BASE}${path}` }));
}

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://yutoridesigns.in", lastModified: new Date(), priority: 1.0, changeFrequency: "weekly" },
    { url: "https://yutoridesigns.in/our-projects", lastModified: new Date(), priority: 0.9, changeFrequency: "weekly" },
    { url: "https://yutoridesigns.in/service/interior-design", lastModified: new Date(), priority: 0.9, changeFrequency: "monthly" },
    { url: "https://yutoridesigns.in/service/space-planning", lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" },
    { url: "https://yutoridesigns.in/service/turn-key-project-execution", lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" },
    { url: "https://yutoridesigns.in/service/commercial", lastModified: new Date(), priority: 0.9, changeFrequency: "monthly" },
    { url: "https://yutoridesigns.in/service/residential", lastModified: new Date(), priority: 0.9, changeFrequency: "monthly" },
    { url: "https://yutoridesigns.in/service/office-space", lastModified: new Date(), priority: 0.8, changeFrequency: "monthly" },
    { url: "https://yutoridesigns.in/contact-us", lastModified: new Date(), priority: 0.9, changeFrequency: "monthly" },
    { url: "https://yutoridesigns.in/overview", lastModified: new Date(), priority: 0.7, changeFrequency: "monthly" },
    { url: "https://yutoridesigns.in/our-team", lastModified: new Date(), priority: 0.6, changeFrequency: "monthly" },
    { url: "https://yutoridesigns.in/our-values", lastModified: new Date(), priority: 0.5, changeFrequency: "yearly" },
    { url: "https://yutoridesigns.in/our-operating-model", lastModified: new Date(), priority: 0.5, changeFrequency: "yearly" },
    { url: "https://yutoridesigns.in/testimonial", lastModified: new Date(), priority: 0.7, changeFrequency: "monthly" },
    { url: "https://yutoridesigns.in/blogs", lastModified: new Date(), priority: 0.8, changeFrequency: "weekly" },
    { url: "https://yutoridesigns.in/events", lastModified: new Date(), priority: 0.5, changeFrequency: "monthly" },
  ];
}
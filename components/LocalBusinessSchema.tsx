export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "InteriorDesignerBusiness",
    "@id": "https://yutoridesigns.in/#organization",
    name: "Yutori Designs",
    description:
      "Interior design and turnkey execution firm serving Mangalore, Udupi, and Coastal Karnataka.",
    url: "https://yutoridesigns.in",
    logo: "https://yutoridesigns.in/images/brand/logo-green.png",
    image: "https://yutoridesigns.in/images/brand/og-image.jpg",
    telephone: "+91-6360732460",
    email: "info@yutoridesigns.in",
    priceRange: "₹₹₹",
    areaServed: [
      { "@type": "City", name: "Mangalore" },
      { "@type": "City", name: "Udupi" },
    ],
    location: [
      {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1st Floor, Silver Bell, Kinnimulki",
          addressLocality: "Udupi",
          addressRegion: "Karnataka",
          postalCode: "576101",
          addressCountry: "IN",
        },
      },
      {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Vruddhi Enclave, Konchady, Derebail",
          addressLocality: "Mangalore",
          addressRegion: "Karnataka",
          postalCode: "575008",
          addressCountry: "IN",
        },
      },
    ],
    sameAs: [
      "https://www.instagram.com/yutoridesignsin",
      "https://www.facebook.com/people/Yutori-Designs/61579105091629/",
      "https://www.youtube.com/@yutoridesigns",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
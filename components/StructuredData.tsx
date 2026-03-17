export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: "A Tana Empanada",
    description:
      "Veteran-owned food truck serving handcrafted empanadas in Charlotte, NC. Love Food · Live Free.",
    url: "https://atanaempanada.com",
    telephone: "+19803554099",
    email: "info@atanaempanada.com",
    servesCuisine: ["Latin American", "Empanadas"],
    priceRange: "$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Charlotte",
      addressRegion: "NC",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: "Charlotte",
    },
    sameAs: [
      "https://www.instagram.com/atanafoodtruck/",
      "https://www.facebook.com/atanafoodtruck/",
      "https://streetfoodfinder.com/atanafoodtruck",
    ],
    menu: "https://atanaempanada.com/menu",
    hasMap: "https://streetfoodfinder.com/atanafoodtruck",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

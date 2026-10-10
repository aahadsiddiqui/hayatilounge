import { drinksMenu, foodMenu } from "@/data/menu";

export function RestaurantJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Hayati Lounge",
    description:
      "Hayati Lounge is a halal-friendly lounge in Ajax, Ontario serving shareables, handhelds, salads, desserts, mocktails, tea and coffee in a modern and welcoming atmosphere.",
    url: "https://hayatilounge.vercel.app",
    image: "https://hayatilounge.vercel.app/hero.jpg",
    logo: "https://hayatilounge.vercel.app/logo.jpg",
    telephone: "+1-647-835-9672",
    address: {
      "@type": "PostalAddress",
      streetAddress: "190 Station St, Unit 1",
      addressLocality: "Ajax",
      addressRegion: "ON",
      postalCode: "L1S 2G3",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.8506,
      longitude: -79.0278,
    },
    areaServed: [
      { "@type": "City", name: "Ajax" },
      { "@type": "City", name: "Pickering" },
      { "@type": "City", name: "Whitby" },
      { "@type": "AdministrativeArea", name: "Durham Region" },
    ],
    servesCuisine: [
      "Middle Eastern",
      "Mediterranean",
      "Canadian",
      "Fusion",
    ],
    priceRange: "$$",
    currenciesAccepted: "CAD",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    hasMenu: "https://hayatilounge.vercel.app/menu",
    sameAs: [
      "https://www.instagram.com/hayatilounge",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "12:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "12:00",
        closes: "01:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "12:00",
        closes: "23:00",
      },
    ],
    menu: {
      "@type": "Menu",
      hasMenuSection: [...foodMenu, ...drinksMenu].map((section) => ({
        "@type": "MenuSection",
        name: [section.title, section.subtitle].filter(Boolean).join(" "),
        ...(section.note && { description: section.note }),
        hasMenuItem: section.items.map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          ...(item.description && { description: item.description }),
          offers: { "@type": "Offer", price: item.price.toFixed(2), priceCurrency: "CAD" },
        })),
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

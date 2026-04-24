export function RestaurantJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Hayati Lounge",
    description:
      "Hayati Lounge is an upscale lounge and restaurant in Ajax, Ontario serving apps, salads, handhelds, desserts, and drinks in a modern and welcoming atmosphere.",
    url: "https://hayatilounge.vercel.app",
    image: "https://hayatilounge.vercel.app/hero.jpg",
    logo: "https://hayatilounge.vercel.app/logo.jpg",
    telephone: "",
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
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Apps",
          hasMenuItem: [
            { "@type": "MenuItem", name: "Fries", offers: { "@type": "Offer", price: "7.99", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Cajun Fries", offers: { "@type": "Offer", price: "8.99", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Truffle Fries", offers: { "@type": "Offer", price: "11.99", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Poutine", offers: { "@type": "Offer", price: "12.99", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Loaded Fries", offers: { "@type": "Offer", price: "16.99", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Beef Tacos", offers: { "@type": "Offer", price: "14.99", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Shrimp Tacos", offers: { "@type": "Offer", price: "15.99", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Wings w/ Fries", offers: { "@type": "Offer", price: "17.99", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Bruschetta", offers: { "@type": "Offer", price: "11.99", priceCurrency: "CAD" } },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Salads",
          hasMenuItem: [
            { "@type": "MenuItem", name: "Caesar Salad", offers: { "@type": "Offer", price: "11.99", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Greek Salad", offers: { "@type": "Offer", price: "12.99", priceCurrency: "CAD" } },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Handhelds (with fries)",
          hasMenuItem: [
            { "@type": "MenuItem", name: "Buffalo Sandwich", offers: { "@type": "Offer", price: "16.99", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Chicken Burger", offers: { "@type": "Offer", price: "15.99", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Beef Burger", offers: { "@type": "Offer", price: "16.99", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Club Wrap", offers: { "@type": "Offer", price: "14.99", priceCurrency: "CAD" } },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Desserts",
          hasMenuItem: [
            { "@type": "MenuItem", name: "Cheesecake", offers: { "@type": "Offer", price: "11.99", priceCurrency: "CAD" } },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Drinks",
          hasMenuItem: [
            { "@type": "MenuItem", name: "Soft Drinks", description: "Coke, Coke Zero, Fuze, Ginger Ale, Sprite", offers: { "@type": "Offer", price: "2.99", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Red Bull", offers: { "@type": "Offer", price: "5.50", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Barbican", offers: { "@type": "Offer", price: "5.50", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Green Tea", offers: { "@type": "Offer", price: "3.99", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Black Tea", offers: { "@type": "Offer", price: "3.99", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Peppermint Tea", offers: { "@type": "Offer", price: "3.99", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Mint Tea", offers: { "@type": "Offer", price: "3.99", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Karak Chai", offers: { "@type": "Offer", price: "5.99", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Saffron Tea", offers: { "@type": "Offer", price: "6.99", priceCurrency: "CAD" } },
            { "@type": "MenuItem", name: "Tea Pot", offers: { "@type": "Offer", price: "12.99", priceCurrency: "CAD" } },
          ],
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

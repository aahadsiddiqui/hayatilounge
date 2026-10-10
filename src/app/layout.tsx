import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Great_Vibes } from "next/font/google";
import "./globals.css";
import { RestaurantJsonLd } from "./structured-data";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const BASE_URL = "https://hayatilounge.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Hayati Lounge | Restaurant & Lounge in Ajax, Ontario",
    template: "%s | Hayati Lounge Ajax",
  },
  description:
    "Hayati Lounge is Ajax's premier upscale lounge. Mezze boards, Korean wings, birria quesadillas, shawarma wraps, mocktails, karak chai and Dubai pistachio brownies. Dine in Ajax, Ontario.",

  keywords: [
    "Hayati Lounge",
    "lounge Ajax Ontario",
    "restaurant Ajax Ontario",
    "Ajax lounge",
    "Ajax restaurant",
    "Ajax cafe",
    "Ajax food",
    "Durham Region restaurant",
    "Durham Region lounge",
    "Ontario lounge",
    "upscale lounge Ajax",
    "Middle Eastern restaurant Ajax",
    "desserts Ajax",
    "Dubai pistachio brownie Ajax",
    "Korean wings Ajax",
    "mocktails Ajax",
    "karak chai Ajax",
    "shawarma wrap Ajax",
    "best lounge Ajax",
    "best restaurant Ajax",
    "date night Ajax",
    "family restaurant Ajax",
    "halal restaurant Ajax",
    "lounge Ontario",
    "restaurant near me Ajax",
    "food near me Ajax",
    "Hayati",
    "hayati lounge menu",
    "Ajax Ontario dining",
    "evening lounge Ajax",
    "late night restaurant Ajax",
  ],

  authors: [{ name: "Hayati Lounge", url: BASE_URL }],
  creator: "Hayati Lounge",
  publisher: "Hayati Lounge",

  category: "restaurant",

  openGraph: {
    type: "website",
    locale: "en_CA",
    url: BASE_URL,
    siteName: "Hayati Lounge",
    title: "Hayati Lounge | Restaurant & Lounge in Ajax, Ontario",
    description:
      "Ajax's upscale lounge. Shareables, handhelds, mocktails, karak chai and desserts. Good drinks, better company.",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Hayati Lounge — Ajax, Ontario",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hayati Lounge | Restaurant & Lounge in Ajax, Ontario",
    description:
      "Ajax's upscale lounge. Shareables, handhelds, mocktails, karak chai and desserts.",
    images: ["/hero.jpg"],
  },

  alternates: {
    canonical: BASE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${cinzel.variable} ${greatVibes.variable} antialiased`}
      >
        <RestaurantJsonLd />
        {children}
      </body>
    </html>
  );
}

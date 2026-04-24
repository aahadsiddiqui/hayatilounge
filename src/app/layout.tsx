import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { RestaurantJsonLd } from "./structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const BASE_URL = "https://hayatilounge.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Hayati Lounge | Restaurant & Lounge in Ajax, Ontario",
    template: "%s | Hayati Lounge Ajax",
  },
  description:
    "Hayati Lounge is Ajax's premier upscale lounge and restaurant. Enjoy shawarma wraps, beef short ribs, salmon, desserts, and more in a modern, welcoming atmosphere. Dine in Ajax, Ontario.",

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
    "shawarma Ajax",
    "shish kabob Ajax",
    "desserts Ajax",
    "crème brûlée Ajax",
    "cheesecake Ajax",
    "salmon restaurant Ajax",
    "beef short ribs Ajax",
    "garlic shrimp Ajax",
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
      "Ajax's upscale lounge & restaurant. Shawarma wraps, short ribs, salmon, garlic shrimp, and decadent desserts. Experience Hayati.",
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
      "Ajax's upscale lounge & restaurant. Shawarma wraps, short ribs, salmon, garlic shrimp, and decadent desserts.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <RestaurantJsonLd />
        {children}
      </body>
    </html>
  );
}

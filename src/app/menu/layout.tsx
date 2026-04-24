import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the full Hayati Lounge menu: apps, salads, handhelds with fries, drinks, and cheesecake. Serving Ajax, Ontario.",
  keywords: [
    "Hayati Lounge menu",
    "Ajax restaurant menu",
    "Ajax lounge menu",
    "chicken wings Ajax",
    "cheesecake Ajax",
    "food menu Ajax Ontario",
    "Middle Eastern food Ajax",
    "beef tacos Ajax",
    "burgers Ajax",
    "halal food Ajax",
    "Durham Region food",
  ],
  alternates: {
    canonical: "https://hayatilounge.vercel.app/menu",
  },
  openGraph: {
    title: "Menu | Hayati Lounge Ajax",
    description:
      "Apps, salads, handhelds, drinks, and dessert. See the full Hayati Lounge menu — Ajax, Ontario's upscale lounge & restaurant.",
    url: "https://hayatilounge.vercel.app/menu",
    images: [
      {
        url: "/loaded-fries.png",
        width: 1200,
        height: 630,
        alt: "Hayati Lounge Food Menu",
      },
    ],
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

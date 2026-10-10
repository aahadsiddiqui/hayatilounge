import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the full Hayati Lounge menu: shareables, handhelds, salads, desserts, mocktails, juices, tea and coffee. Serving Ajax, Ontario.",
  keywords: [
    "Hayati Lounge menu",
    "Ajax restaurant menu",
    "Ajax lounge menu",
    "mezze board Ajax",
    "Korean wings Ajax",
    "birria quesadilla Ajax",
    "shawarma wrap Ajax",
    "Dubai pistachio brownie Ajax",
    "mocktails Ajax",
    "karak chai Ajax",
    "halal food Ajax",
    "Durham Region food",
  ],
  alternates: {
    canonical: "https://hayatilounge.vercel.app/menu",
  },
  openGraph: {
    title: "Menu | Hayati Lounge Ajax",
    description:
      "Shareables, handhelds, desserts, mocktails, tea and coffee. See the full Hayati Lounge menu — Ajax, Ontario.",
    url: "https://hayatilounge.vercel.app/menu",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Hayati Lounge Menu",
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

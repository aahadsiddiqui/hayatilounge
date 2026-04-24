import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the full Hayati Lounge menu. Apps, salads, wraps, mains, and desserts. Serving Ajax, Ontario with dishes like beef short ribs, salmon, chicken shawarma, garlic shrimp, crème brûlée, and cheesecake.",
  keywords: [
    "Hayati Lounge menu",
    "Ajax restaurant menu",
    "Ajax lounge menu",
    "shawarma Ajax",
    "beef short ribs Ajax",
    "salmon restaurant Ajax",
    "garlic shrimp Ajax",
    "chicken wings Ajax",
    "crème brûlée Ajax",
    "cheesecake Ajax",
    "food menu Ajax Ontario",
    "Middle Eastern food Ajax",
    "shish kabob Ajax",
    "beef tacos Ajax",
    "wraps Ajax",
    "halal food Ajax",
    "Durham Region food",
  ],
  alternates: {
    canonical: "https://hayatilounge.vercel.app/menu",
  },
  openGraph: {
    title: "Menu | Hayati Lounge Ajax",
    description:
      "Apps, wraps, mains, and desserts. See the full Hayati Lounge menu — Ajax, Ontario's upscale lounge & restaurant.",
    url: "https://hayatilounge.vercel.app/menu",
    images: [
      {
        url: "/ribs.png",
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

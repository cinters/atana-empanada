import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "A Tana Empanada | Handcrafted Empanadas in Charlotte, NC",
  description:
    "Veteran-owned food truck serving handcrafted empanadas in Charlotte, NC. Find us at Birdsong Brewery and events around town. Love food. Live free.",
  openGraph: {
    title: "A Tana Empanada",
    description: "Love Food · Live Free — Charlotte's Empanada Food Truck",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="antialiased">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}

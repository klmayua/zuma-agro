import type { Metadata } from "next";
import { Libre_Caslon_Text, Manrope, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import PortalDirectory from "@/components/layout/PortalDirectory";

const libreCaslon = Libre_Caslon_Text({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-caslon",
  display: "swap",
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zuma Agro-Allied | Sovereign Agro-Industrial Transformation",
  description: "Executive platform and logistics corridors driving national agro-industrial multipliers, scale, and food security.",
};

export default function RootLayout({
  children,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${libreCaslon.variable} ${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {/* Desktop Global Navbar */}
        <Navbar />

        {/* Primary Page Canvas */}
        <main className="flex-1 w-full pb-20 md:pb-0">{children}</main>

        {/* Desktop Global Footer */}
        <Footer />

        {/* Mobile Fixed Bottom Nav & Sheet */}
        <MobileBottomNav />

        {/* Desktop Floating Portal Navigator */}
        <PortalDirectory />
      </body>
    </html>
  );
}

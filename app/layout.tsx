import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const roablade = localFont({
  src: "../public/brand/roablade.otf",
  variable: "--font-brand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manifest",
  description: "A branded editorial storefront inspired by modern fashion merchandising.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roablade.variable}`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrop = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Etran | Trustworthy APP",
  description: "Created by olyad negero in Feb 27 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${manrop.className} antialiased`}>{children}</body>
    </html>
  );
}

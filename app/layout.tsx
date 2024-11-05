import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans_Condensed, IBM_Plex_Sans } from 'next/font/google'
import Navbar from "@/components/Navbar";

const ibm_sans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans',
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

const ibm_sans_condensed = IBM_Plex_Sans_Condensed({
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans-condensed',
  weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "YT Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibm_sans.variable} ${ibm_sans_condensed.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

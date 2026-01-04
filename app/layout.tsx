import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BPP Detailing | Mobile Car Valeting & Detailing in East Preston",
        description:
            "BPP Detailing offers professional mobile car valeting and detailing in East Preston and surrounding areas. Interior, exterior, mini and full valet services with a focus on quality and attention to detail.",
    openGraph: {
        title: "BPP Detailing",
        description:
            "Professional mobile car valeting and detailing in East Preston and surrounding areas.",
        url: "https://bppdetailing.co.uk",
        siteName: "BPP Detailing",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "BPP Detailing – Mobile Car Valeting & Detailing",
            },
        ],
        type: "website",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

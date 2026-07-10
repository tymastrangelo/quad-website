import type { Metadata, Viewport } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quad | Campus happens here",
  description:
    "Quad is the home for everything happening at Elon University: every event, every club, one personalized feed. Free for students with an @elon.edu email.",
  openGraph: {
    title: "Quad | Campus happens here",
    description:
      "Every event, every club, everything happening at Elon, in one app built for your campus.",
    type: "website",
    images: ["/quad-icon.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0406",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable} h-full`}>
      <body className="grain min-h-full font-sans">{children}</body>
    </html>
  );
}

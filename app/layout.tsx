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
    "Quad puts Elon's club events in one feed and on a live campus map. See what's happening now, say you're going in one tap. Free for students with an @elon.edu email.",
  openGraph: {
    title: "Quad | Campus happens here",
    description:
      "Elon's club events in one feed and on a live campus map, built for students.",
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

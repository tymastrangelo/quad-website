import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

// Web fallback for the app's rounded display face (SF Pro Rounded on Apple).
const nunito = Nunito({
  variable: "--font-nunito",
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "onby | Everything happening on campus",
  description:
    "onby puts your campus's events and organizations in one feed built around you. Save what you want to catch, get a nudge before it starts, and come on by. Starting at Elon University, spring 2027.",
  openGraph: {
    title: "onby | Everything happening on campus. Come on by.",
    description:
      "Your campus's events and organizations in one feed built around you. Starting at Elon University, spring 2027.",
    type: "website",
    images: ["/onby-icon.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4f0" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full`}>
      <body className="grain min-h-full font-sans">{children}</body>
    </html>
  );
}

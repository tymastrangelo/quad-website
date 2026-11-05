import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { MotionProvider } from "@/components/site/motion-provider";
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
    "onby puts every event and org at your school in one app. It works with the events system your campus already uses, or runs on its own if there isn’t one.",
  openGraph: {
    title: "onby | Everything happening on campus. Come on by.",
    description:
      "Every event and org at your school in one app, alongside your campus’s events system or on its own.",
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
      <body className="paper min-h-full font-sans">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}

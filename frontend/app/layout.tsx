import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from '@/app/hooks/useAuth'
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
  title: "Anisync - Start Tracking Anime Today",
  description: "Track your favorite anime, discover upcoming releases, and manage your watchlist effortlessly in one organized platform. Stay updated with the latest episodes, release schedules, and trending series so you never miss a moment of the anime you love.",
  authors: [{ name: "EMA", url: "https://github.com/enkoki/Anisync" }],
  openGraph: {
    title: "Anisync - Start Tracking Anime Today",
    description: "Track your favorite anime, see upcoming releases, and manage your watchlist effortlessly.",
    url: "https://anisynced.netlify.app/",
    siteName: "Anisync",
    images: [
      {
        url: "https://anisynced.netlify.app/og-logo.ico",
        width: 128,
        height: 128,
        alt: "Anisync App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anisync - Start Tracking Anime Today",
    description: "Track your favorite anime, discover upcoming releases, and manage your watchlist effortlessly in one organized platform. Stay updated with the latest episodes, release schedules, and trending series so you never miss a moment of the anime you love.",
    images: ["https://anisynced.netlify.app/og-logo.ico"],
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
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

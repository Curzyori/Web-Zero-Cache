import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isIndo = locale === "id";

  return {
    metadataBase: new URL("https://zero-cache.curzy.dev"),
    title: "ZeroCache",
    description: isIndo
      ? "Pembersih cache Android sekali ketuk dengan mode Root & Tanpa Root"
      : "One-tap Android cache cleaner with Root & No-Root modes",
    other: {
      "og:title": "ZeroCache",
      "og:description": isIndo
        ? "Pembersih cache Android sekali ketuk dengan mode Root & Tanpa Root"
        : "One-tap Android cache cleaner with Root & No-Root modes",
      "og:image": "/og-image.png",
      "og:type": "website",
      "twitter:card": "summary_large_image",
      "twitter:title": "ZeroCache",
      "twitter:description": isIndo
        ? "Pembersih cache Android sekali ketuk dengan mode Root & Tanpa Root"
        : "One-tap Android cache cleaner with Root & No-Root modes",
      "twitter:image": "/og-image.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}

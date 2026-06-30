import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Installation } from "@/components/Installation";
import { DownloadSection } from "@/components/DownloadSection";
import { Preview } from "@/components/Preview";
import { Trash2, Accessibility, Smartphone, Zap, Palette, Languages } from "lucide-react";

async function getGitHubStars(repo: string): Promise<number> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return 0;
    const data = await res.json();
    return data.stargazers_count || 0;
  } catch {
    return 0;
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const stars = await getGitHubStars("Curzyori/zero-cache");

  const navProps = {
    locale,
    logo: "/logo.png",
    githubRepo: "Curzyori/zero-cache",
    stars,
    brandColor: "blue" as const,
  };

  const heroProps = {
    logo: "/logo.png",
    name: "ZeroCache",
    tagline: locale === "id" ? "Pembersih cache Android sekali ketuk dengan mode Root & Tanpa Root" : "One-tap Android cache cleaner with Root & No-Root modes",
    brandColor: "blue" as const,
    ctaPrimary: locale === "id" ? "Unduh APK" : "Download APK",
    ctaSecondary: locale === "id" ? "Lihat di GitHub" : "View on GitHub",
    githubRepo: navProps.githubRepo,
    downloadUrl: "https://github.com/Curzyori/zero-cache/releases/tag/V1.0.0",
  };

  const featuresProps = {
    title: locale === "id" ? "Fitur" : "Features",
    features: [
      {
        title: locale === "id" ? "Satu Ketukan Hapus Semua" : "One-Tap Clear All",
        description: locale === "id"
          ? "Satu tombol untuk menghapus semua cache aplikasi yang terdeteksi secara instan."
          : "Single button to clear all detected app cache instantly.",
        icon: Trash2,
      },
      {
        title: locale === "id" ? "Mode Tanpa Root" : "No-Root Mode",
        description: locale === "id"
          ? "Menggunakan AccessibilityService untuk mengetuk otomatis tombol Hapus Cache."
          : "Uses AccessibilityService to auto-tap Clear Cache button.",
        icon: Accessibility,
      },
      {
        title: locale === "id" ? "Mode Root" : "Root Mode",
        description: locale === "id"
          ? "Perintah pm clear langsung untuk pembersihan lebih cepat di perangkat yang di-root."
          : "Direct pm clear commands for faster clearing on rooted devices.",
        icon: Smartphone,
      },
      {
        title: locale === "id" ? "Progres Langsung" : "Live Progress",
        description: locale === "id"
          ? "Indikator animasi 3 titik selama proses pembersihan."
          : "Animated 3-dot indicator during clearing process.",
        icon: Zap,
      },
      {
        title: locale === "id" ? "Mode Gelap" : "Dark Mode",
        description: locale === "id"
          ? "Dukungan tema gelap dan terang secara sistem."
          : "System-wide dark and light theme support.",
        icon: Palette,
      },
      {
        title: locale === "id" ? "Multi-Bahasa" : "Multi-Language",
        description: locale === "id"
          ? "Beralih antara Bahasa Inggris dan Bahasa Indonesia."
          : "Toggle between English and Bahasa Indonesia.",
        icon: Languages,
      },
    ],
    brandColor: "blue" as const,
  };

  const installationProps = {
    title: locale === "id" ? "Instalasi" : "Installation",
    subtitle: locale === "id" ? "Build dari Source" : "Build from Source",
    code: "git clone https://github.com/Curzyori/zero-cache.git\ncd zero-cache\n./gradlew assembleDebug",
    brandColor: "blue" as const,
  };

  const downloadProps = {
    title: locale === "id" ? "Unduh" : "Download",
    latestVersion: "v1.0.0",
    versionLabel: locale === "id" ? "Versi Terbaru" : "Latest Version",
    files: [{ name: "Zero-Cache-v1.0.0.apk", url: "https://github.com/Curzyori/zero-cache/releases/download/V1.0.0/Zero-Cache-v1.0.0.apk" }],
    sourceCodeLabel: "Source Code",
    sourceUrl: "https://github.com/Curzyori/zero-cache",
    githubRepo: navProps.githubRepo,
    brandColor: "blue" as const,
  };

  const previewProps = {
    images: [
      { src: "/images/dash.jpg", alt: "ZeroCache Dashboard" },
    ],
  };

  const footerProps = {
    copyright: "© 2026 Curzyori",
    githubRepo: navProps.githubRepo,
    licenseName: "Apache-2.0",
    licenseUrl: "https://github.com/Curzyori/zero-cache/blob/main/LICENSE",
  };

  return (
    <>
      <Navbar {...navProps} />
      <Hero {...heroProps} />
      <Features {...featuresProps} />
      <Installation {...installationProps} />
      <Preview {...previewProps} />
      <DownloadSection {...downloadProps} />
      <Footer {...footerProps} />
    </>
  );
}

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
    tagline: "One-tap Android cache cleaner with Root & No-Root modes",
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
        title: "One-Tap Clear All",
        description: "Single button to clear all detected app cache instantly",
        icon: Trash2,
      },
      {
        title: "No-Root Mode",
        description: "Uses AccessibilityService to auto-tap Clear Cache button",
        icon: Accessibility,
      },
      {
        title: "Root Mode",
        description: "Direct pm clear commands for faster clearing on rooted devices",
        icon: Smartphone,
      },
      {
        title: "Live Progress",
        description: "Animated 3-dot indicator during clearing process",
        icon: Zap,
      },
      {
        title: "Dark Mode",
        description: "System-wide dark and light theme support",
        icon: Palette,
      },
      {
        title: "Multi-Language",
        description: "Toggle between English and Bahasa Indonesia",
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
    files: [{ name: "Zero-Cache-v1.0.0.apk", url: "https://github.com/Curzyori/zero-cache/releases/tag/V1.0.0" }],
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

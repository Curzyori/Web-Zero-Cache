import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookOpen, CheckCircle, Settings, AlertCircle, FileText, Download, Trash2, Accessibility, Smartphone, Zap, Languages } from "lucide-react";

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

export default async function DocsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const stars = await getGitHubStars("Curzyori/zero-cache");
  const isIndo = locale === "id";

  const navProps = {
    locale,
    logo: "/logo.png",
    name: "ZeroCache",
    githubRepo: "Curzyori/zero-cache",
    stars,
    brandColor: "blue" as const,
  };

  return (
    <>
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:font-medium focus:shadow-lg"
      >
        {isIndo ? "Lewati ke konten utama" : "Skip to main content"}
      </a>

      <Navbar {...navProps} />
      <main id="main-content" className="flex-1 pt-24 pb-16 px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">
            {isIndo ? "Dokumentasi ZeroCache" : "ZeroCache Documentation"}
          </h1>
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-500" />
              {isIndo ? "Pendahuluan" : "Introduction"}
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              {isIndo
                ? "ZeroCache adalah aplikasi pembersih cache Android yang ramah privasi yang membantu Anda membebaskan ruang penyimpanan dengan satu ketukan. Aplikasi ini bekerja dalam mode Root dan Tanpa Root, sehingga dapat diakses oleh semua pengguna Android tanpa memandang konfigurasi perangkat."
                : "ZeroCache is a privacy-friendly Android cache cleaner app that helps you free up storage space with a single tap. It works in both Root and No-Root mode, making it accessible to all Android users regardless of their device configuration."}
            </p>
            <p className="text-foreground/70 leading-relaxed mt-4">
              {isIndo
                ? "Aplikasi ini menggunakan AccessibilityService untuk mengetuk otomatis tombol Hapus Cache untuk setiap aplikasi dalam mode Tanpa Root, sedangkan mode Root memberikan pembersihan lebih cepat melalui perintah sistem langsung."
                : "The app uses AccessibilityService to automatically tap the \"Clear Cache\" button for each app in No-Root mode, while Root mode provides faster clearing through direct system commands."}
            </p>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-blue-500" />
              {isIndo ? "Fitur" : "Features"}
            </h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>{isIndo ? "Satu Ketukan Hapus Semua" : "One-Tap Clear All"}</strong> —
                  {isIndo ? " Satu tombol untuk menghapus semua cache aplikasi secara instan." : " Single button to clear all detected app cache instantly."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>{isIndo ? "Mode Tanpa Root" : "No-Root Mode"}</strong> —
                  {isIndo ? " Menggunakan AccessibilityService untuk mengetuk otomatis tombol Hapus Cache." : " Uses AccessibilityService to auto-tap Clear Cache button."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>{isIndo ? "Mode Root" : "Root Mode"}</strong> —
                  {isIndo ? " Perintah pm clear langsung untuk pembersihan lebih cepat di perangkat yang di-root." : " Direct pm clear commands for faster clearing on rooted devices."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>{isIndo ? "Progres Langsung" : "Live Progress"}</strong> —
                  {isIndo ? " Indikator animasi 3 titik selama proses pembersihan." : " Animated 3-dot indicator during clearing process."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>{isIndo ? "Mode Gelap" : "Dark Mode"}</strong> —
                  {isIndo ? " Dukungan tema gelap dan terang secara sistem." : " System-wide dark and light theme support."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong>{isIndo ? "Multi-Bahasa" : "Multi-Language"}</strong> —
                  {isIndo ? " Beralih antara Bahasa Inggris dan Bahasa Indonesia." : " Toggle between English and Bahasa Indonesia."}
                </span>
              </li>
            </ul>
          </section>

          {/* Installation */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Download className="h-6 w-6 text-blue-500" />
              {isIndo ? "Instalasi" : "Installation"}
            </h2>
            <p className="text-foreground/70 mb-4">
              {isIndo
                ? "Unduh APK versi terbaru langsung dari halaman rilis GitHub:"
                : "Download the latest APK from the GitHub releases page:"}
            </p>
            <div className="bg-secondary/50 rounded-lg p-4 mb-4">
              <p className="text-sm font-mono text-foreground/80">
                <a href="https://github.com/Curzyori/zero-cache/releases" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  https://github.com/Curzyori/zero-cache/releases
                </a>
              </p>
            </div>
            
            <h3 className="text-lg font-semibold mb-3">{isIndo ? "Build dari Source" : "Build from Source"}</h3>
            <div className="bg-secondary/50 rounded-lg p-4">
              <pre className="text-sm font-mono text-foreground/80 overflow-x-auto">
{`# Clone the repository
git clone https://github.com/Curzyori/zero-cache.git
cd zero-cache

# Build the APK
./gradlew assembleDebug`}
              </pre>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Settings className="h-6 w-6 text-blue-500" />
              {isIndo ? "Spesifikasi Teknologi" : "Tech Stack"}
            </h2>
            <ul className="space-y-2 text-foreground/70">
              <li><strong>{isIndo ? "Platform" : "Platform"}:</strong> Android</li>
              <li><strong>{isIndo ? "Bahasa" : "Language"}:</strong> Kotlin</li>
              <li><strong>{isIndo ? "Sistem Build" : "Build System"}:</strong> Gradle (Gradle Kotlin DSL)</li>
              <li><strong>{isIndo ? "Desain" : "Design"}:</strong> Material Design 3</li>
              <li><strong>{isIndo ? "Arah UX" : "UX Direction"}:</strong> {isIndo ? "Estetika utilitas bersih dan fungsional" : "Clean, functional utility aesthetic"}</li>
              <li><strong>License:</strong> Apache-2.0</li>
            </ul>
          </section>

          {/* How It Works */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Zap className="h-6 w-6 text-blue-500" />
              {isIndo ? "Cara Kerja" : "How It Works"}
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              {isIndo
                ? "ZeroCache memindai semua aplikasi yang terinstal di perangkat Anda dan menampilkan ukuran cache mereka. Saat Anda mengetuk Hapus Semua, aplikasi menggunakan AccessibilityService untuk meniru ketukan pada tombol sistem Hapus Cache (mode Tanpa Root) atau menjalankan perintah pm clear langsung (mode Root)."
                : "ZeroCache scans all installed apps on your device and displays their cache sizes. When you tap \"Clear All\", the app either uses AccessibilityService to simulate taps on the system \"Clear Cache\" button (No-Root mode) or executes pm clear commands directly (Root mode)."}
            </p>
            <p className="text-foreground/70 leading-relaxed mt-4">
              {isIndo
                ? "Indikator progres langsung menampilkan status pembersihan dengan pemuat animasi 3 titik. Aplikasi mendukung Bahasa Inggris dan Indonesia."
                : "A live progress indicator shows the clearing status with an animated 3-dot loader. The app supports both English and Indonesian languages."}
            </p>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-blue-500" />
              {isIndo ? "Pemecahan Masalah" : "Troubleshooting"}
            </h2>
            <div className="space-y-4">
              <div className="bg-secondary/30 rounded-lg p-4">
                <h3 className="font-medium mb-2">{isIndo ? "Mode Tanpa Root tidak berfungsi" : "No-Root mode not working"}</h3>
                <p className="text-foreground/70 text-sm">{isIndo ? "Pastikan ZeroCache memiliki izin Aksesibilitas yang diaktifkan. Buka Pengaturan > Aksesibilitas > ZeroCache dan nyalakan." : "Make sure ZeroCache has Accessibility permission enabled. Go to Settings > Accessibility > ZeroCache and turn it on."}</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <h3 className="font-medium mb-2">{isIndo ? "Cache tidak terhapus dengan benar" : "Cache not clearing properly"}</h3>
                <p className="text-foreground/70 text-sm">{isIndo ? "Beberapa versi Android memiliki pembatasan pada penghapusan cache untuk aplikasi sistem tertentu. Coba mode Root untuk hasil lebih baik di perangkat yang di-root." : "Some Android versions have restrictions on clearing cache for certain system apps. Try Root mode for better results on rooted devices."}</p>
              </div>
            </div>
          </section>

          {/* License */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-blue-500" />
              {isIndo ? "Lisensi" : "License"}
            </h2>
            <p className="text-foreground/70">
              {isIndo ? "Proyek ini dirilis di bawah " : "This project is released under the "}<strong>{isIndo ? "Lisensi Apache 2.0" : "Apache License 2.0"}</strong>.
              {isIndo ? " Lihat file " : " See the "}<a href="https://github.com/Curzyori/zero-cache/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LICENSE</a>{isIndo ? " untuk teks lengkap." : " for full text."}
            </p>
          </section>
        </div>
      </main>

      <Footer
        copyright="© 2026 Curzyori"
        githubRepo="Curzyori/zero-cache"
        licenseName="Apache-2.0"
        licenseUrl="https://github.com/Curzyori/zero-cache/blob/main/LICENSE"
      />
    </>
  );
}

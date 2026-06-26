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

  const navProps = {
    locale,
    logo: "/logo.png",
    githubRepo: "Curzyori/zero-cache",
    stars,
    brandColor: "blue" as const,
  };

  return (
    <>
      <Navbar {...navProps} />
      
      <main className="flex-1 pt-24 pb-16 px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">ZeroCache Documentation</h1>
          
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Introduction
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              ZeroCache is a privacy-friendly Android cache cleaner app that helps you free up storage space with a single tap.
              It works in both Root and No-Root mode, making it accessible to all Android users regardless of their device configuration.
            </p>
            <p className="text-foreground/70 leading-relaxed mt-4">
              The app uses AccessibilityService to automatically tap the &quot;Clear Cache&quot; button for each app in No-Root mode,
              while Root mode provides faster clearing through direct system commands.
            </p>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Features
            </h2>
            <ul className="space-y-3 text-foreground/70">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>One-Tap Clear All</strong> — Single button to clear all detected app cache instantly</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>No-Root Mode</strong> — Uses AccessibilityService to auto-tap Clear Cache button</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Root Mode</strong> — Direct pm clear commands for faster clearing on rooted devices</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Live Progress</strong> — Animated 3-dot indicator during clearing process</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Dark Mode</strong> — System-wide dark and light theme support</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span><strong>Multi-Language</strong> — Toggle between English and Bahasa Indonesia</span>
              </li>
            </ul>
          </section>

          {/* Installation */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Download className="h-6 w-6" />
              Installation
            </h2>
            <p className="text-foreground/70 mb-4">
              Download the latest APK from the GitHub releases page:
            </p>
            <div className="bg-secondary/50 rounded-lg p-4 mb-4">
              <p className="text-sm font-mono text-foreground/80">
                <a href="https://github.com/Curzyori/zero-cache/releases" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  https://github.com/Curzyori/zero-cache/releases
                </a>
              </p>
            </div>
            
            <h3 className="text-lg font-semibold mb-3">Build from Source</h3>
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
              <Settings className="h-6 w-6" />
              Tech Stack
            </h2>
            <ul className="space-y-2 text-foreground/70">
              <li><strong>Platform:</strong> Android</li>
              <li><strong>Language:</strong> Kotlin</li>
              <li><strong>Build System:</strong> Gradle (Gradle Kotlin DSL)</li>
              <li><strong>Design:</strong> Material Design 3</li>
              <li><strong>UX Direction:</strong> Clean, functional utility aesthetic</li>
              <li><strong>License:</strong> GPL-3.0</li>
            </ul>
          </section>

          {/* How It Works */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Zap className="h-6 w-6" />
              How It Works
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              ZeroCache scans all installed apps on your device and displays their cache sizes.
              When you tap &quot;Clear All&quot;, the app either uses AccessibilityService to simulate taps on the system
              &quot;Clear Cache&quot; button (No-Root mode) or executes pm clear commands directly (Root mode).
            </p>
            <p className="text-foreground/70 leading-relaxed mt-4">
              A live progress indicator shows the clearing status with an animated 3-dot loader.
              The app supports both English and Indonesian languages.
            </p>
          </section>

          {/* Troubleshooting */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <AlertCircle className="h-6 w-6" />
              Troubleshooting
            </h2>
            <div className="space-y-4">
              <div className="bg-secondary/30 rounded-lg p-4">
                <h3 className="font-medium mb-2">No-Root mode not working</h3>
                <p className="text-foreground/70 text-sm">Make sure ZeroCache has Accessibility permission enabled. Go to Settings &gt; Accessibility &gt; ZeroCache and turn it on.</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <h3 className="font-medium mb-2">Cache not clearing properly</h3>
                <p className="text-foreground/70 text-sm">Some Android versions have restrictions on clearing cache for certain system apps. Try Root mode for better results on rooted devices.</p>
              </div>
            </div>
          </section>

          {/* License */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6" />
              License
            </h2>
            <p className="text-foreground/70">
              This project is released under the <strong>GNU General Public License v3.0</strong>.
              See the LICENSE file for full text.
            </p>
          </section>
        </div>
      </main>

      <Footer copyright="© 2026 Curzyori" githubRepo="Curzyori/zero-cache" />
    </>
  );
}

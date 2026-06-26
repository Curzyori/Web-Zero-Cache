import { GitHubIcon } from "@/components/ui/Icons";

interface FooterProps {
  copyright: string;
  githubRepo: string;
}

export function Footer({ copyright, githubRepo }: FooterProps) {
  return (
    <footer className="border-t border-foreground/10 py-8 px-4">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/60">{copyright}</p>

        <a
          href={`https://github.com/${githubRepo}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors"
        >
          <GitHubIcon className="h-4 w-4" />
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
}

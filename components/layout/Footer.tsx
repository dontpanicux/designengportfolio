export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <p className="font-mono text-xs text-[var(--color-ink-subtle)]">
          © {new Date().getFullYear()}
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[var(--color-ink-subtle)] transition-colors hover:text-[var(--color-ink)]"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[var(--color-ink-subtle)] transition-colors hover:text-[var(--color-ink)]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

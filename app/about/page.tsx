import type { Metadata } from "next";
import { FadeIn } from "@/components/motion/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description: "Design engineer focused on interactive, animated, and accessible web experiences.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-2xl px-6">
        <FadeIn as="div">
          <h1
            className="font-sans font-semibold tracking-tight text-[var(--color-ink)]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            About
          </h1>
        </FadeIn>

        <FadeIn as="div" delay={0.1} className="mt-8 space-y-5 text-[var(--color-ink-muted)]">
          <p className="text-lg leading-relaxed">
            I&apos;m a design engineer who works at the intersection of visual
            design and front-end engineering. I care deeply about the details —
            timing curves, type scales, interaction states — and I think the web
            is one of the most powerful storytelling mediums we have.
          </p>
          <p className="leading-relaxed">
            My work focuses on building experiences that are not just functional
            but genuinely delightful: animations that feel considered, interfaces
            that respond intelligently, and systems that scale.
          </p>
          <p className="leading-relaxed">
            I&apos;m currently looking for design engineering roles where I can
            work closely with designers and engineers to raise the craft bar.
          </p>
        </FadeIn>

        <FadeIn as="div" delay={0.2} className="mt-12">
          <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-subtle)]">
            Reach out
          </h2>
          <a
            href="mailto:hello@example.com"
            className="text-[var(--color-accent)] transition-opacity hover:opacity-70"
          >
            hello@example.com
          </a>
        </FadeIn>
      </div>
    </main>
  );
}

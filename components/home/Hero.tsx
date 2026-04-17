"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const reduced = useReducedMotion();

  const words = ["Design", "Engineer"];

  return (
    <section className="relative flex min-h-screen flex-col items-start justify-end px-6 pb-16 pt-32">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-ink) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Role label */}
        <motion.p
          className="mb-6 font-mono text-sm text-[var(--color-ink-muted)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Available for work · 2025
        </motion.p>

        {/* Main headline — staggered word reveal */}
        <div className="overflow-hidden" aria-label="Design Engineer">
          <div className="flex flex-wrap gap-x-[0.25em]">
            {words.map((word, wi) => (
              <div key={word} className="overflow-hidden">
                <motion.span
                  className="inline-block font-sans text-[var(--text-display)] font-semibold leading-[0.95] tracking-tight text-[var(--color-ink)]"
                  style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
                  initial={reduced ? { opacity: 0 } : { y: "110%", opacity: 0 }}
                  animate={reduced ? { opacity: 1 } : { y: "0%", opacity: 1 }}
                  transition={{
                    duration: reduced ? 0.1 : 0.7,
                    delay: reduced ? 0 : 0.3 + wi * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  aria-hidden="true"
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <motion.p
          className="mt-8 max-w-xl text-lg text-[var(--color-ink-muted)]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          I build interfaces where design and engineering are the same thing —
          animated, accessible, and obsessively crafted.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.div
            className="h-px w-12 bg-[var(--color-ink-subtle)]"
            animate={{ scaleX: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
          />
          <span className="font-mono text-xs text-[var(--color-ink-subtle)]">
            scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}

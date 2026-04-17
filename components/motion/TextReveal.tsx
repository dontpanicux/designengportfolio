"use client";

import { motion } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { charReveal, staggerContainerFast } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  delay?: number;
  splitBy?: "char" | "word";
}

export function TextReveal({
  text,
  className,
  as: Tag = "h1",
  delay = 0,
  splitBy = "char",
}: TextRevealProps) {
  // Ref lives on a wrapper div to avoid element-specific type mismatches
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });
  const reduced = useReducedMotion();

  const units =
    splitBy === "char"
      ? text.split("")
      : text.split(" ").map((w, i, arr) => (i < arr.length - 1 ? w + " " : w));

  if (reduced) {
    return (
      <div ref={ref}>
        <motion.span
          className={cn("overflow-hidden", className)}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.1, delay }}
        >
          <Tag>{text}</Tag>
        </motion.span>
      </div>
    );
  }

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          ...staggerContainerFast,
          visible: {
            ...(staggerContainerFast.visible as object),
            transition: {
              staggerChildren: splitBy === "char" ? 0.03 : 0.05,
              delayChildren: delay,
            },
          },
        }}
      >
        <Tag className={cn("overflow-hidden", className)} aria-label={text}>
          {units.map((unit, i) => (
            <motion.span
              key={i}
              variants={charReveal}
              className="inline-block"
              aria-hidden="true"
            >
              {unit}
            </motion.span>
          ))}
        </Tag>
      </motion.div>
    </div>
  );
}

"use client";

import { motion, type Variants } from "motion/react";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  duration?: number;
  as?: React.ElementType;
  threshold?: number;
}

export function FadeIn({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  duration,
  as: Tag = "div",
  threshold = 0.1,
}: FadeInProps) {
  const [ref, inView] = useInView<HTMLElement>({ threshold, once: true });
  const reduced = useReducedMotion();

  const resolvedVariants: Variants = reduced
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.1, delay } },
      }
    : {
        hidden: variants.hidden,
        visible: {
          ...(typeof variants.visible === "object" ? variants.visible : {}),
          transition: {
            ...(typeof variants.visible === "object" &&
            "transition" in variants.visible
              ? (variants.visible as { transition?: object }).transition
              : {}),
            delay,
            ...(duration ? { duration } : {}),
          },
        },
      };

  const MotionTag = motion.create(Tag);

  return (
    <MotionTag
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={resolvedVariants}
    >
      {children}
    </MotionTag>
  );
}

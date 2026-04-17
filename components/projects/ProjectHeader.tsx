"use client";

import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import type { Project } from "@/types/project";

interface ProjectHeaderProps {
  project: Project;
}

export function ProjectHeader({ project }: ProjectHeaderProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const bgY = useTransform(smoothProgress, [0, 1], ["0%", "40%"]);
  const textY = useTransform(smoothProgress, [0, 1], ["0%", "60%"]);
  const opacity = useTransform(smoothProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={sectionRef} className="relative h-[70vh] overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: bgY,
          background: `radial-gradient(ellipse at 30% 50%, ${project.accent}, oklch(10% 0.01 250))`,
        }}
      />

      {/* Text content */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end px-6 pb-12"
        style={{ y: textY, opacity }}
      >
        <div className="mx-auto w-full max-w-6xl">
          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 px-2.5 py-0.5 font-mono text-xs text-white/60"
              >
                {tag}
              </span>
            ))}
            <span className="rounded-full border border-white/20 px-2.5 py-0.5 font-mono text-xs text-white/60">
              {project.year}
            </span>
          </div>

          <h1
            className="font-sans font-semibold tracking-tight text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            {project.title}
          </h1>

          <p className="mt-4 max-w-xl text-base text-white/70">
            {project.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { motion } from "motion/react";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current && project.coverVideo) {
      videoRef.current.preload = "auto";
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Cover image / video area */}
        <div
          className="relative mb-4 overflow-hidden rounded-[var(--radius-lg)]"
          style={{ aspectRatio: "16 / 10" }}
        >
          {/* Placeholder gradient (replaced by real images later) */}
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]"
            style={{
              background: `radial-gradient(ellipse at 30% 50%, ${project.accent}, oklch(10% 0.01 250))`,
            }}
          />

          {/* Video overlay (hidden until hover) */}
          {project.coverVideo && (
            <video
              ref={videoRef}
              src={project.coverVideo}
              muted
              loop
              playsInline
              preload="none"
              className={cn(
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
                hovered ? "opacity-100" : "opacity-0"
              )}
            />
          )}

          {/* Project number */}
          <span className="absolute left-4 top-4 font-mono text-xs text-white/40">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Metadata */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-medium text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]">
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-[var(--color-ink-muted)] line-clamp-2">
              {project.description}
            </p>
          </div>
          <span className="shrink-0 font-mono text-xs text-[var(--color-ink-subtle)]">
            {project.year}
          </span>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--color-border)] px-2.5 py-0.5 font-mono text-xs text-[var(--color-ink-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.article>
  );
}

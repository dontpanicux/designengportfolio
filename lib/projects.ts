import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "fluid-canvas",
    title: "Fluid Canvas",
    description:
      "200k GPU-simulated particles that morph between shapes in real-time, driven by pointer interaction and GLSL shaders.",
    year: 2025,
    tags: ["WebGL", "Three.js", "Animation"],
    coverImage: "/images/fluid-canvas-cover.jpg",
    accent: "oklch(65% 0.22 260)",
    featured: true,
  },
  {
    slug: "surface",
    title: "Surface",
    description:
      "A live-documented design system: token architecture, accessible components, and a re-themeable demo all on one page.",
    year: 2025,
    tags: ["Design System", "React", "TypeScript"],
    coverImage: "/images/surface-cover.jpg",
    accent: "oklch(65% 0.18 160)",
  },
  {
    slug: "emergence",
    title: "Emergence",
    description:
      "A scroll-driven campaign microsite for a fictional SDK launch — kinetic type, animated browser mockups, and canvas confetti.",
    year: 2025,
    tags: ["Animation", "Scroll", "Motion"],
    coverImage: "/images/emergence-cover.jpg",
    accent: "oklch(65% 0.22 30)",
    featured: true,
  },
  {
    slug: "sequence",
    title: "Sequence",
    description:
      "A 500vh pinned-scroll film: a 3D credit card disassembles into its component layers and reassembles, Apple-style.",
    year: 2025,
    tags: ["WebGL", "Three.js", "Scroll"],
    coverImage: "/images/sequence-cover.jpg",
    accent: "oklch(65% 0.22 200)",
  },
  {
    slug: "gradient-engine",
    title: "Gradient Engine",
    description:
      "An interactive CSS gradient playground exploiting @property, conic-gradient, and oklch for fully animated, no-JS-render gradients.",
    year: 2025,
    tags: ["CSS", "Animation"],
    coverImage: "/images/gradient-engine-cover.jpg",
    accent: "oklch(70% 0.25 320)",
  },
  {
    slug: "token-bridge",
    title: "Token Bridge",
    description:
      "A Figma plugin that extracts design tokens and exports them as Tailwind v4 @theme blocks — ready to paste into globals.css.",
    year: 2025,
    tags: ["Figma", "TypeScript", "Design System"],
    coverImage: "/images/token-bridge-cover.jpg",
    accent: "oklch(65% 0.18 80)",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

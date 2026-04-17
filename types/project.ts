export type ProjectTag =
  | "WebGL"
  | "CSS"
  | "React"
  | "Animation"
  | "Design System"
  | "Figma"
  | "TypeScript"
  | "Three.js"
  | "Scroll"
  | "Motion";

export interface Project {
  slug: string;
  title: string;
  description: string;
  year: number;
  tags: ProjectTag[];
  coverImage: string;
  coverVideo?: string;
  accent: string;
  featured?: boolean;
}

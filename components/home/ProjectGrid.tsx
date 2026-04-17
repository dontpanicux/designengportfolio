import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { FadeIn } from "@/components/motion/FadeIn";

export function ProjectGrid() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn as="div" className="mb-12 flex items-baseline justify-between">
          <h2 className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-subtle)]">
            Selected Work
          </h2>
          <span className="font-mono text-xs text-[var(--color-ink-subtle)]">
            {projects.length} projects
          </span>
        </FadeIn>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

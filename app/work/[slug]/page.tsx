import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";
import { ProjectHeader } from "@/components/projects/ProjectHeader";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen pt-20">
      <ProjectHeader project={project} />
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-[var(--color-ink-muted)]">
          Case study coming soon.
        </p>
      </div>
    </main>
  );
}

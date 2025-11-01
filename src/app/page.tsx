import { projects } from "@/data/projects";
import { ProjectCard, ProjectCardSkeleton } from "@/components/project-card";
import { loadProjectsTitleFromJson } from "@/lib/json-projects";

export default function Home() {
  const hasProjects = projects.length > 0;
  const title = loadProjectsTitleFromJson() ?? "My Personal App Projects";
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground">A curated list of apps I’ve built and shipped.</p>
      </div>

      {hasProjects ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      )}
    </section>
  );
}

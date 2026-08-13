import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/dashboard/ProjectCard";
import { CardHeader } from "@/components/ui/Card";

export function ProjectsSection() {
  return (
    <section id="projects" className="mt-12 md:mt-16" aria-labelledby="projects-heading">
      <CardHeader
        title="Project Performance"
        subtitle="Selected work and applications I've built."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}

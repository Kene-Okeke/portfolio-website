import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import type { Project } from "@/data/projects";
import { StatusBadge } from "./StatusBadge";
import { Button } from "@/components/ui/Button";

type ProjectCardProps = {
  project: Project;
};

function getStatusBadgeHref(project: Project): string | undefined {
  if (project.status === "LIVE" && project.liveUrl) {
    return project.liveUrl;
  }

  if (project.status === "BUILDING" && project.githubUrl) {
    return project.githubUrl;
  }

  return undefined;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusHref = getStatusBadgeHref(project);

  return (
    <article className="rounded-lg border border-border bg-panel p-5 md:p-6 flex flex-col h-full hover:border-border-hover transition-colors">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-foreground tracking-wide truncate">
            {project.name}
          </h3>
          <p className="text-xs text-muted mt-0.5">{project.type}</p>
        </div>
        <StatusBadge status={project.status} href={statusHref} />
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-[10px] font-mono text-muted bg-background border border-border rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-sm text-muted leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border">
        <Link
          href={`/projects/${project.slug}`}
          className="text-xs font-medium tracking-wide text-accent hover:text-accent/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          VIEW CASE STUDY →
        </Link>
        {project.liveUrl && (
          <Button
            href={project.liveUrl}
            external
            variant="ghost"
            size="sm"
            className="!px-0 !py-0 !border-0"
          >
            LIVE SITE <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </Button>
        )}
        {project.githubUrl && (
          <Button
            href={project.githubUrl}
            external
            variant="ghost"
            size="sm"
            className="!px-0 !py-0 !border-0"
          >
            <GitHubIcon className="w-3 h-3" /> GitHub
          </Button>
        )}
      </div>
    </article>
  );
}

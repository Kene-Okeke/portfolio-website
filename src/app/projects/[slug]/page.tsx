import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getProjectBySlug,
  getAllProjectSlugs,
  type Project,
} from "@/data/projects";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";
import { ScreenshotPlaceholder } from "@/components/dashboard/ScreenshotPlaceholder";

type Props = {
  params: Promise<{ slug: string }>;
};

const DEDICATED_CASE_STUDY_SLUGS = ["shop-eleven", "garden-of-becoming"];

export async function generateStaticParams() {
  return getAllProjectSlugs()
    .filter((slug) => !DEDICATED_CASE_STUDY_SLUGS.includes(slug))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} — Case Study`,
    description: project.description,
    openGraph: {
      title: `${project.name} — Case Study | Kene Okeke`,
      description: project.description,
    },
  };
}

function CaseStudySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8 last:mb-0">
      <h2 className="text-[10px] font-semibold tracking-[0.15em] text-muted uppercase mb-3">
        {title}
      </h2>
      <div className="text-sm text-muted leading-relaxed">{children}</div>
    </section>
  );
}

function ProjectCaseStudy({ project }: { project: Project }) {
  const { caseStudy: cs } = project;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-8 md:px-8 md:py-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-xs text-muted hover:text-accent transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
        >
          <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
          Back to Projects
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <StatusBadge status={project.status} />
            <span className="text-xs text-muted">{project.type}</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
            {project.name}
          </h1>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] font-mono text-muted bg-panel border border-border rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-6">
            {project.liveUrl && (
              <Button href={project.liveUrl} external variant="primary">
                Live Project <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} external variant="secondary">
                <GitHubIcon className="w-3.5 h-3.5" /> GitHub
              </Button>
            )}
          </div>
        </header>

        <Card className="mb-8">
          <CaseStudySection title="Project Overview">
            <p>{cs.overview}</p>
          </CaseStudySection>

          <CaseStudySection title="Problem">
            <p>{cs.problem}</p>
          </CaseStudySection>

          <CaseStudySection title="Solution">
            <p>{cs.solution}</p>
          </CaseStudySection>

          <CaseStudySection title="Features">
            <ul className="space-y-2" role="list">
              {cs.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span
                    className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Technology">
            <ul className="flex flex-wrap gap-2" role="list">
              {cs.technology.map((tech) => (
                <li
                  key={tech}
                  className="px-2 py-1 text-xs font-mono text-foreground bg-background border border-border rounded"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Architecture">
            <p>{cs.architecture}</p>
          </CaseStudySection>

          <CaseStudySection title="Challenges">
            <ul className="space-y-2" role="list">
              {cs.challenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-2">
                  <span
                    className="mt-2 h-1 w-1 rounded-full bg-muted shrink-0"
                    aria-hidden="true"
                  />
                  {challenge}
                </li>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection title="Result">
            <p>{cs.result}</p>
          </CaseStudySection>
        </Card>

        <Card>
          <CardHeader title="Screenshots" />
          <div className="grid gap-4 sm:grid-cols-2">
            {cs.screenshots.map((screenshot) => (
              <ScreenshotPlaceholder
                key={screenshot.src}
                src={screenshot.src}
                alt={screenshot.alt}
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudy project={project} />;
}

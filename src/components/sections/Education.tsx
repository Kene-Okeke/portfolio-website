import { GraduationCap, Award } from "lucide-react";
import { educationItems } from "@/data/education";
import { Card, CardHeader } from "@/components/ui/Card";

export function EducationSection() {
  return (
    <section
      id="education"
      className="mt-12 md:mt-16"
      aria-labelledby="education-heading"
    >
      <CardHeader
        title="Education & Certifications"
        subtitle="Academic foundation and professional credentials."
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {educationItems.map((item) => {
          const Icon = item.type === "degree" ? GraduationCap : Award;
          return (
            <Card
              key={item.title}
              className="flex flex-col hover:border-border-hover transition-colors"
            >
              <div className="flex items-start gap-4 flex-1">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-background">
                  <Icon
                    className="h-4 w-4 text-accent"
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold tracking-[0.15em] text-muted uppercase mb-1">
                    {item.type === "degree" ? "Degree" : "Certification"}
                  </p>
                  <h3 className="text-sm font-semibold text-foreground leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted leading-relaxed">
                    {item.institution}
                  </p>
                </div>
              </div>
              {item.viewUrl && item.type === "certification" && (
                <div className="mt-4 pt-4 border-t border-border">
                  <a
                    href={item.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium tracking-wide text-accent hover:text-accent/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                  >
                    VIEW →
                  </a>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
}

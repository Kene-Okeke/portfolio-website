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
              className="hover:border-border-hover transition-colors"
            >
              <div className="flex items-start gap-4">
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
            </Card>
          );
        })}
      </div>
    </section>
  );
}

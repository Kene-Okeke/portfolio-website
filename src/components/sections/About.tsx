import { aboutContent } from "@/data/about";
import { Card, CardHeader } from "@/components/ui/Card";

export function AboutSection() {
  return (
    <section
    id="about"
    className="mt-12 md:mt-16 scroll-mt-20"
    aria-labelledby="about-heading"
  >
      <CardHeader title="About" />
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2">
          <div className="prose prose-invert max-w-none">
            {aboutContent.bio.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-sm text-muted leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </Card>
        <Card>
          <h3 className="text-[10px] font-semibold tracking-[0.15em] text-muted uppercase mb-4">
            Interests
          </h3>
          <ul className="space-y-2" role="list">
            {aboutContent.interests.map((interest) => (
              <li
                key={interest}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <span
                  className="h-1 w-1 rounded-full bg-accent shrink-0"
                  aria-hidden="true"
                />
                {interest}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}

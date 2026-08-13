import { aboutContent } from "@/data/about";
import { CardHeader } from "@/components/ui/Card";

export function JourneySection() {
  return (
    <section
      id="journey"
      className="mt-12 md:mt-16"
      aria-labelledby="journey-heading"
    >
      <CardHeader title="Development Journey" />
      <div className="relative">
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden sm:block"
          aria-hidden="true"
        />
        <div className="space-y-6">
          {aboutContent.journey.map((item, index) => (
            <article key={index} className="relative sm:pl-8">
              <span
                className="absolute left-0 top-1.5 hidden sm:block h-[15px] w-[15px] rounded-full border-2 border-accent bg-background"
                aria-hidden="true"
              />
              <div className="rounded-lg border border-border bg-panel p-5">
                <p className="text-[10px] font-mono text-muted tracking-wide">
                  {item.period}
                </p>
                <h3 className="mt-1 text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs text-accent mt-0.5">{item.subtitle}</p>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

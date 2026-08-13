import { siteConfig } from "@/data/site";
import { ProfileCard } from "@/components/dashboard/ProfileCard";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Card, CardHeader } from "@/components/ui/Card";

export function OverviewSection() {
  return (
    <section id="overview" aria-labelledby="overview-heading">
      <h2 id="overview-heading" className="sr-only">
        Overview
      </h2>
      <div className="grid gap-4 md:gap-5">
        <ProfileCard />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          <MetricCard label="Projects" value={siteConfig.metrics.projects} />
          <MetricCard label="Core Stack" value={siteConfig.metrics.coreStack} />
          <MetricCard label="Focus" value={siteConfig.metrics.focus} />
          <MetricCard label="Status" value={siteConfig.metrics.status} />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader title="Current Focus" />
            <ul className="space-y-2" role="list">
              {siteConfig.currentFocus.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <span
                    className="h-1 w-1 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <CardHeader title="Specialization" />
            <ul className="space-y-2" role="list">
              {siteConfig.specialization.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <span
                    className="h-1 w-1 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

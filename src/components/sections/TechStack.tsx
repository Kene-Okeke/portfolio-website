import { stackGroups } from "@/data/stack";
import { StackCard } from "@/components/dashboard/StackCard";
import { CardHeader } from "@/components/ui/Card";

export function TechStackSection() {
  return (
    <section id="stack" className="mt-12 md:mt-16" aria-labelledby="stack-heading">
      <CardHeader title="Technology Stack" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {stackGroups.map((group) => (
          <StackCard key={group.category} group={group} />
        ))}
      </div>
    </section>
  );
}

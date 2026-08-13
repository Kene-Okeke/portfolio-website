import type { StackGroup } from "@/data/stack";

type StackCardProps = {
  group: StackGroup;
};

export function StackCard({ group }: StackCardProps) {
  return (
    <div className="rounded-lg border border-border bg-panel p-5">
      <h3 className="text-[10px] font-semibold tracking-[0.15em] text-muted uppercase mb-4">
        {group.category}
      </h3>
      <ul className="space-y-2" role="list">
        {group.items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-sm text-foreground"
          >
            <span
              className="h-1 w-1 rounded-full bg-accent shrink-0"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/data/projects";

type StatusBadgeProps = {
  status: ProjectStatus | "AVAILABLE";
  className?: string;
  href?: string;
};

const statusStyles: Record<string, string> = {
  LIVE: "bg-accent/10 text-accent border-accent/30",
  BUILDING: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  COMPLETE: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  AVAILABLE: "bg-accent/10 text-accent border-accent/30",
};

export function StatusBadge({ status, className, href }: StatusBadgeProps) {
  const badgeClassName = cn(
    "inline-flex items-center px-2 py-0.5 text-[10px] font-semibold tracking-[0.1em] uppercase border rounded",
    statusStyles[status],
    href && "hover:opacity-80 transition-opacity",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={badgeClassName}
      >
        {status}
      </a>
    );
  }

  return <span className={badgeClassName}>{status}</span>;
}

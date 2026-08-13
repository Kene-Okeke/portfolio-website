import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
  id?: string;
};

export function Card({ children, className, as: Tag = "div", id }: CardProps) {
  return (
    <Tag
      id={id}
      className={cn(
        "rounded-lg border border-border bg-panel p-5 md:p-6",
        className
      )}
    >
      {children}
    </Tag>
  );
}

type CardHeaderProps = {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
};

export function CardHeader({
  title,
  subtitle,
  action,
  className,
}: CardHeaderProps) {
  return (
    <div
      className={cn(
        "mb-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between",
        className
      )}
    >
      <div>
        <h2 className="text-xs font-semibold tracking-[0.15em] text-muted uppercase">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-muted">{subtitle}</p>
        )}
      </div>
      {action}
    </div>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
};

export function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="rounded-lg border border-border bg-panel p-4 md:p-5">
      <p className="text-[10px] font-medium tracking-[0.15em] text-muted uppercase">
        {label}
      </p>
      <p className="mt-2 text-xl md:text-2xl font-semibold text-foreground tracking-tight">
        {value}
      </p>
    </div>
  );
}

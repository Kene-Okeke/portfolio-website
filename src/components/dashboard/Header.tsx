"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

function formatDateTime(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export function Header() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-lg font-semibold text-foreground tracking-tight">
          Developer Portfolio
        </h1>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="text-[10px] font-medium tracking-[0.15em] text-accent uppercase">
            Open to opportunities
          </span>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xs text-muted font-mono">{formatDateTime(now)}</p>
        <p className="text-xs text-muted/70 font-mono mt-0.5">
          {formatTime(now)} GMT
        </p>
      </div>
    </header>
  );
}

export function DashboardFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 pt-8 border-t border-border">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-wide text-foreground">
            {siteConfig.name.toUpperCase()}
          </p>
          <p className="text-[10px] tracking-[0.2em] text-muted uppercase mt-0.5">
            {siteConfig.role}
          </p>
        </div>
        <p className="text-xs text-muted">
          © {year} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}

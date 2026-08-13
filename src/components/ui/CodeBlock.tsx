"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronUp, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

type CodeBlockProps = {
  filename: string;
  language: string;
  code: string;
  defaultExpanded?: boolean;
  className?: string;
};

export function CodeBlock({
  filename,
  language,
  code,
  defaultExpanded = false,
  className,
}: CodeBlockProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-background overflow-hidden",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3 border-b border-border bg-panel px-4 py-2.5">
        <div className="min-w-0">
          <p className="truncate font-mono text-[11px] text-foreground">
            {filename}
          </p>
          <p className="text-[10px] uppercase tracking-[0.12em] text-muted">
            {language}
          </p>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1.5 rounded px-2 py-1 text-[10px] font-medium tracking-wide text-muted hover:text-foreground hover:bg-panel-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={copied ? "Copied to clipboard" : "Copy code"}
          >
            {copied ? (
              <Check className="h-3 w-3 text-accent" aria-hidden="true" />
            ) : (
              <Copy className="h-3 w-3" aria-hidden="true" />
            )}
            {copied ? "Copied" : "Copy"}
          </button>
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className="inline-flex items-center gap-1 rounded px-2 py-1 text-[10px] font-medium tracking-wide text-muted hover:text-foreground hover:bg-panel-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-expanded={expanded}
          >
            {expanded ? (
              <ChevronUp className="h-3 w-3" aria-hidden="true" />
            ) : (
              <ChevronDown className="h-3 w-3" aria-hidden="true" />
            )}
            {expanded ? "Collapse" : "Expand"}
          </button>
        </div>
      </div>
      {expanded && (
        <pre className="overflow-x-auto p-4 text-xs leading-relaxed text-accent font-mono">
          <code className="text-accent">{code}</code>
        </pre>
      )}
    </div>
  );
}

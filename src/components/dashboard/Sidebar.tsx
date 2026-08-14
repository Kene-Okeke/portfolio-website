"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type SidebarProps = {
  activeSection: string;
  onNavigate: (href: string) => void;
};

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  return (
    <aside className="hidden lg:flex lg:w-56 xl:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 lg:border-r lg:border-border lg:bg-sidebar z-40">
      <div className="flex flex-col h-full px-5 py-8">
        <div className="mb-10">
          <p className="text-sm font-bold tracking-[0.2em] text-foreground">
            KENE
          </p>
          <p className="text-[10px] font-medium tracking-[0.25em] text-muted uppercase mt-0.5">
            Developer
          </p>
        </div>

        <nav className="flex-1 space-y-1" aria-label="Main navigation">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <button
                key={item.href}
                onClick={() => onNavigate(item.href)}
                className={cn(
                  "w-full text-left px-3 py-2.5 text-xs font-medium tracking-[0.12em] rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isActive
                    ? "bg-panel text-foreground border-l-2 border-accent pl-[10px]"
                    : "text-muted hover:text-foreground hover:bg-panel/50"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 border-t border-border">
          <div className="flex items-center gap-2 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-muted tracking-wide uppercase text-[10px]">
              Available for work
            </span>
          </div>
          <p className="mt-2 text-xs text-muted">{siteConfig.location}</p>
        </div>
      </div>
    </aside>
  );
}

type MobileNavProps = {
  activeSection: string;
  onNavigate: (href: string) => void;
};

export function MobileNav({ activeSection, onNavigate }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavigate = (href: string) => {
    setOpen(false);
  
    requestAnimationFrame(() => {
      onNavigate(href);
    });
  };

  return (
    <header className="lg:hidden sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <p className="text-sm font-bold tracking-[0.15em]">KENE</p>
          <p className="text-[9px] tracking-[0.2em] text-muted uppercase">
            Developer
          </p>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md text-muted hover:text-foreground hover:bg-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <motion.nav
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="border-t border-border bg-sidebar px-4 py-4 space-y-1"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <button
                key={item.href}
                onClick={() => handleNavigate(item.href)}
                className={cn(
                  "w-full text-left px-3 py-3 text-xs font-medium tracking-[0.12em] rounded-md transition-colors",
                  isActive
                    ? "bg-panel text-foreground"
                    : "text-muted hover:text-foreground hover:bg-panel/50"
                )}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-4 mt-4 border-t border-border flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="text-[10px] text-muted tracking-wide uppercase">
              Available for work · {siteConfig.location}
            </span>
          </div>
        </motion.nav>
      )}
    </header>
  );
}

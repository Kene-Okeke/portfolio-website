import { siteConfig } from "@/data/site";
import { ProfileImage } from "./ProfileImage";

export function ProfileCard() {
  return (
    <div className="rounded-lg border border-border bg-panel p-5 md:p-6">
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border border-border bg-panel-hover">
          <ProfileImage />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-bold tracking-wide text-foreground">
            {siteConfig.name.toUpperCase()}
          </h2>
          <p className="text-[10px] font-medium tracking-[0.2em] text-accent uppercase mt-1">
            {siteConfig.role}
          </p>
          <p className="text-xs text-muted mt-1">{siteConfig.location}</p>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            {siteConfig.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}

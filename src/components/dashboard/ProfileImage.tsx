"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/data/site";

export function ProfileImage() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-panel-hover">
        <span className="text-lg font-bold text-muted/50">KO</span>
      </div>
    );
  }

  return (
    <Image
      src="/profile.jpg"
      alt={`${siteConfig.name} profile photo`}
      fill
      className="object-cover"
      sizes="80px"
      priority
      onError={() => setHasError(true)}
    />
  );
}

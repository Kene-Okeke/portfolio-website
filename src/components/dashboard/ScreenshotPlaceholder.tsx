"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageIcon } from "lucide-react";

type ScreenshotPlaceholderProps = {
  src: string;
  alt: string;
  /** "cover" crops to 16:9; "full" shows the entire image at natural aspect ratio */
  variant?: "cover" | "full";
  width?: number;
  height?: number;
};

export function ScreenshotPlaceholder({
  src,
  alt,
  variant = "cover",
  width,
  height,
}: ScreenshotPlaceholderProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="aspect-video rounded-lg border border-border bg-panel flex flex-col items-center justify-center gap-2 p-4">
        <ImageIcon className="w-6 h-6 text-muted/40" aria-hidden="true" />
        <p className="text-[10px] text-muted text-center font-mono">{alt}</p>
        <p className="text-[9px] text-muted/60 font-mono">{src}</p>
      </div>
    );
  }

  if (variant === "full") {
    const imageWidth = width ?? 786;
    const imageHeight = height ?? 1024;
    const sizes =
      width != null
        ? `(max-width: ${imageWidth}px) 100vw, ${imageWidth}px`
        : "(max-width: 640px) 100vw, (max-width: 1152px) calc(100vw - 4rem), 1024px";

    return (
      <div className="rounded-lg border border-border overflow-hidden bg-panel">
        <Image
          src={src}
          alt={alt}
          width={imageWidth}
          height={imageHeight}
          quality={90}
          className="block w-full h-auto"
          sizes={sizes}
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video rounded-lg border border-border overflow-hidden bg-panel">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes="(max-width: 640px) 100vw, 400px"
        onError={() => setHasError(true)}
      />
    </div>
  );
}

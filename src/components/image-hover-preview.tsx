"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  containerClassName?: string;
};

export function ImageHoverPreview({ src, alt, containerClassName }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={containerClassName ?? "relative w-full aspect-video"}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Image src={src} alt={alt} fill className="object-contain bg-muted" />

      {/* Animated hover overlay; pointer-events disabled so mouseleave is detected */}
      <div
        aria-hidden
        className={`fixed inset-0 z-50 flex items-center justify-center pointer-events-none transition-opacity duration-200 ease-out ${
          open ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div
          className={`relative mx-auto w-full max-w-5xl p-6 transition-transform duration-200 ease-out ${
            open ? "scale-100" : "scale-95"
          }`}
        >
          <div className="relative mx-auto aspect-video w-full">
            <Image src={src} alt={alt} fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
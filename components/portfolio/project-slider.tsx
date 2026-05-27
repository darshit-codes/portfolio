"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type ProjectSliderProps = {
  images: string[];
  title: string;
};

export function ProjectSlider({ images, title }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const isMultiple = images.length > 1;

  return (
    <div className="relative group w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
      {/* Images */}
      <div className="relative w-full h-full p-2 sm:p-4">
        {images.map((src, idx) => (
          <div
            key={`${src}-${idx}`}
            className={cn(
              "absolute inset-2 sm:inset-4 transition-all duration-1000 ease-in-out",
              idx === currentIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-[0.98] pointer-events-none z-0"
            )}
          >
            <Image
              src={src}
              alt={`${title} - View ${idx + 1}`}
              fill
              className="object-contain"
              priority={idx === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {isMultiple && (
        <>
          <div className="absolute inset-0 flex items-center justify-between p-4 z-20">
            <button
              onClick={prevSlide}
              className="size-10 sm:size-12 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-white/70 backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-white hover:text-black hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="size-5 sm:size-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="size-10 sm:size-12 flex items-center justify-center rounded-full bg-black/50 border border-white/10 text-white/70 backdrop-blur-md opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-white hover:text-black hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="size-5 sm:size-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300 bg-white",
                  idx === currentIndex ? "w-8 opacity-100" : "w-1.5 opacity-30 hover:opacity-50"
                )}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

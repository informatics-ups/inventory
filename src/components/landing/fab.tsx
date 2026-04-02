"use client";

import { Button } from "@/components/ui/button";
import { removeHash } from "@/lib/hooks/removeHash";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

export function FloatingActionButton() {
  const threshold = 0.25;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = useCallback((): void => {
    const scrolled: number = window.scrollY;
    const totalScrollable: number =
      document.documentElement.scrollHeight - window.innerHeight;

    setIsVisible(
      totalScrollable > 0 && scrolled >= totalScrollable * threshold,
    );
  }, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    window.addEventListener("resize", toggleVisibility, { passive: true });

    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", toggleVisibility);
    };
  }, [toggleVisibility]);

  return (
    <div
      className={cn(
        "animate-bounce fixed bottom-8 right-8 z-50 group",
        isVisible ? "" : "hidden",
      )}
    >
      <Button
        className="size-12 rounded-full signature-gradient shadow-ambient border-none active:scale-90 transition-transform"
        size="icon-lg"
        onClick={() => {
          removeHash();
          window.scrollTo({ top: 0 });
        }}
      >
        <ArrowUp className="size-7" />
      </Button>
      <span className="absolute right-15 top-1/2 -translate-y-1/2 bg-surface-bright px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none text-on-surface">
        Go To Top
      </span>
    </div>
  );
}

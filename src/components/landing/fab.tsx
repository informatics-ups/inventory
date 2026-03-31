"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function FloatingActionButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      <Button
        className="size-16 rounded-full signature-gradient shadow-ambient border-none active:scale-90 transition-transform"
        size="icon-lg"
      >
        <Plus className="size-7" />
      </Button>
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-surface-bright px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none text-on-surface">
        LOG NEW ASSET
      </span>
    </div>
  );
}

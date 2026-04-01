"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const t = useTranslations("LandingPage");

  return (
    <section
      id="hero"
      className="relative min-h-[820px] flex items-center overflow-hidden px-6 md:px-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="hero-overlay absolute inset-0 z-10" />
        <Image
          src="/hero-lab.png"
          alt="Laboratory Interior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl px-6 xl:px-16 pt-16">
        <Badge
          variant="outline"
          className="mb-6 border-primary/30 bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase !p-4 rounded-full"
        >
          {t("badge")} : {t("title")}
        </Badge>

        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-4 leading-tight">
          {t("tagline").split(".").slice(0, 2).join(".")}.{" "}
          <br />
          <span className="bg-linear-(--signature-gradient) text-transparent bg-clip-text">
            {t("tagline").split(".").slice(2).join(".").trim() || "Run the Lab."}
          </span>
        </h1>

        <p className="font-headline text-xl md:text-2xl font-light text-on-surface-variant mb-12 opacity-80 max-w-2xl">
          {t("subtitle")}
        </p>

        <div className="flex flex-wrap gap-4">
          <Button
            className="px-8 py-6 rounded-xl signature-gradient text-on-primary font-bold text-lg border-none hover:opacity-90 active:scale-95 transition-all"
          >
            Borrow Assets
          </Button>
            <Link
              href="#inventory-overview"
              className={cn(buttonVariants({ variant: "outline", size: "default" }), "px-8 py-6 rounded-xl bg-surface-container-high text-on-surface font-semibold text-lg border-outline-variant/20 hover:bg-surface-container-highest transition-all")}
            >
              View Public Board
            </Link>
        </div>
      </div>
    </section>
  );
}

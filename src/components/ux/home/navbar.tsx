"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Globe, Moon, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navLinks = [
  { key: "dashboard", href: "#", active: true },
  { key: "items", href: "#" },
  { key: "rooms", href: "#" },
  { key: "reports", href: "#" },
];

export function Navbar() {
  const t = useTranslations("LandingPage");

  return (
    <nav
      id="main-nav"
      className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl font-headline"
      style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.4)" }}
    >
      <div className="flex items-center justify-between px-6 md:px-8 h-16 w-full max-w-[1440px] mx-auto">
        {/* Logo + Nav Links */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-primary"
          >
            {t("title")}
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className={
                  link.active
                    ? "text-primary border-b-2 border-primary pb-1 text-sm font-semibold"
                    : "text-on-surface-variant hover:text-on-surface transition-colors text-sm font-medium"
                }
              >
                {link.key === "dashboard"
                  ? "Dashboard"
                  : link.key === "items"
                    ? "Item List"
                    : link.key === "rooms"
                      ? "Room Management"
                      : "Reports"}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon-sm"
            className="text-on-surface-variant hover:text-on-surface"
          >
            <Globe />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="text-on-surface-variant hover:text-on-surface"
          >
            <Moon />
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="text-on-surface-variant hover:text-on-surface"
          >
            <Bell />
          </Button>
          <Avatar className="ml-2">
            <AvatarImage src="/avatar.png" alt="User" />
            <AvatarFallback className="bg-surface-container-highest text-xs text-on-surface-variant">
              U
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
}

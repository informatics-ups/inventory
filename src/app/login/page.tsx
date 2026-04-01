import Link from "next/link";
import {
  ArrowRight,
  FlaskConical,
  GraduationCap,
  Lock,
  MonitorCog,
  User,
  UserRoundCheck,
  View,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const roleCards = [
  {
    title: "Lecturer",
    description:
      "Full authority. Approves equipment borrow requests, manages lab schedules, and exports analytical reports.",
    icon: GraduationCap,
    accentClass: "signature-gradient text-on-primary",
    borderClass: "border-primary/25 hover:border-primary/55",
  },
  {
    title: "IT Engineer",
    description:
      "Full CRUD access. Systems maintenance, stock reconciliation, and hardware health monitoring.",
    icon: MonitorCog,
    accentClass: "bg-secondary text-on-secondary",
    borderClass: "border-outline-variant/40 hover:border-secondary/60",
  },
  {
    title: "Student",
    description:
      "Browse inventory, request item loans, and view personal borrow history.",
    icon: User,
    accentClass: "bg-surface-container-highest text-on-surface border border-outline-variant/40",
    borderClass: "border-outline-variant/40 hover:border-on-surface/40",
  },
  {
    title: "Guest",
    description:
      "Read-only view of public laboratory catalogues and general availability status.",
    icon: View,
    accentClass: "bg-surface-container-highest text-on-surface border border-outline-variant/40",
    borderClass: "border-outline-variant/40 hover:border-on-surface/40",
  },
] as const;

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-surface text-on-surface">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-28 size-[30rem] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-28 -left-28 size-[35rem] rounded-full bg-secondary/10 blur-[140px]" />
      </div>

      <main className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-10 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-10 lg:py-14">
        <section className="lg:col-span-5">
          <Badge variant="outline" className="mb-6 px-3 py-1.5 uppercase tracking-[0.2em]">
            <UserRoundCheck data-icon="inline-start" />
            Secure Laboratory Portal
          </Badge>

          <h1 className="font-headline text-5xl leading-[1.05] font-extrabold tracking-tight md:text-7xl">
            The Precision <span className="text-primary">Archive.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-on-surface-variant md:text-lg">
            University Laboratory Inventory Management System. Streamlining asset tracking,
            procurement, and laboratory sessions with surgical precision.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-low p-4">
              <FlaskConical className="text-primary" />
              <h3 className="mt-3 font-headline text-lg font-bold">Lecturer</h3>
              <p className="text-[10px] tracking-[0.18em] text-on-surface-variant uppercase">
                Full Authority
              </p>
            </div>
            <div className="rounded-2xl border border-outline-variant/30 bg-surface-container-low p-4">
              <MonitorCog className="text-secondary" />
              <h3 className="mt-3 font-headline text-lg font-bold">IT Engineer</h3>
              <p className="text-[10px] tracking-[0.18em] text-on-surface-variant uppercase">
                System Ops
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-7 lg:col-span-7">
          <div className="glass-panel rounded-[2rem] border border-outline-variant/30 p-7 shadow-2xl shadow-black/45 md:p-10">
            <div className="mb-8">
              <h2 className="font-headline text-2xl font-bold">Institutional Sign-in</h2>
              <p className="mt-1 text-sm text-on-surface-variant">
                Use your university credentials to proceed
              </p>
            </div>

            <form className="flex flex-col gap-5">
              <label className="flex flex-col gap-2">
                <span className="ml-1 text-sm font-medium text-on-surface-variant">ID or Email Address</span>
                <Input
                  type="email"
                  placeholder="e.g. j.doe@university.edu"
                  className="h-14 rounded-xl border-transparent bg-surface-container-highest pl-4 text-on-surface placeholder:text-outline/60"
                />
              </label>

              <label className="flex flex-col gap-2">
                <span className="ml-1 text-sm font-medium text-on-surface-variant">Secure Password</span>
                <div className="relative">
                  <Lock className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-outline" />
                  <Input
                    type="password"
                    placeholder="••••••••••••"
                    className="h-14 rounded-xl border-transparent bg-surface-container-highest pl-11 text-on-surface placeholder:text-outline/60"
                  />
                </div>
              </label>

              <div className="flex items-center justify-between gap-4 py-1">
                <label className="flex items-center gap-2 text-sm text-on-surface-variant">
                  <input
                    type="checkbox"
                    className="size-4 rounded border-outline-variant bg-surface-container-highest text-primary accent-primary"
                  />
                  Keep me active
                </label>
                <Link href="#" className="text-sm font-medium text-primary hover:text-primary-fixed-dim">
                  Recover Password
                </Link>
              </div>

              <Button
                size="lg"
                className="signature-gradient h-14 rounded-xl text-lg font-extrabold tracking-wide text-on-primary"
              >
                Authenticate Access
                <ArrowRight data-icon="inline-end" />
              </Button>

              <div className="flex items-center gap-3 py-1">
                <div className="h-px flex-1 bg-outline-variant/30" />
                <span className="text-[10px] tracking-[0.16em] text-outline uppercase">
                  Or continue with
                </span>
                <div className="h-px flex-1 bg-outline-variant/30" />
              </div>

              <Button
                type="button"
                size="lg"
                variant="outline"
                className="h-14 rounded-xl border-outline-variant/45 bg-surface-container-low text-sm font-semibold tracking-[0.08em] uppercase hover:bg-surface-container-high"
              >
                Sign in with SSO
              </Button>
            </form>
          </div>

          <div className="flex items-center gap-4 px-2">
            <div className="h-px flex-1 bg-outline-variant/30" />
            <span className="text-[11px] tracking-[0.2em] text-outline uppercase">
              Select Primary Workspace
            </span>
            <div className="h-px flex-1 bg-outline-variant/30" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {roleCards.map((role) => {
              const Icon = role.icon;

              return (
                <Button
                  key={role.title}
                  type="button"
                  variant="outline"
                  className={`h-auto justify-start gap-4 rounded-2xl bg-surface-container-low px-5 py-5 text-left ${role.borderClass}`}
                >
                  <Avatar className={`size-12 rounded-xl ${role.accentClass}`}>
                    <AvatarFallback className="rounded-xl bg-transparent text-current">
                      <Icon />
                    </AvatarFallback>
                  </Avatar>

                  <span className="flex flex-col gap-1 text-left">
                    <span className="font-headline text-base font-bold text-on-surface">{role.title}</span>
                    <span className="w-full text-xs leading-relaxed text-on-surface-variant whitespace-normal break-words">{role.description}</span>
                  </span>
                </Button>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="flex flex-col items-center justify-between gap-4 border-t border-outline-variant/35 px-6 py-8 text-[10px] tracking-[0.14em] text-on-surface-variant uppercase md:flex-row md:px-10">
        <p>© 2026 University Laboratory Inventory Management. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:text-on-surface">
            Support
          </Link>
          <Link href="#" className="hover:text-on-surface">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-on-surface">
            Documentation
          </Link>
        </div>
      </footer>
    </div>
  );
}

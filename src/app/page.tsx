import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero";
import { InventoryOverview } from "@/components/landing/overview";
import { BorrowStatus } from "@/components/landing/status";
import { Footer } from "@/components/landing/footer";
import { FloatingActionButton } from "@/components/landing/fab";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <HeroSection />
        <InventoryOverview />
        <BorrowStatus />
      </main>
      <Footer />
      <FloatingActionButton />
    </>
  );
}

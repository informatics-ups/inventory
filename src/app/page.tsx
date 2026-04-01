import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { InventoryOverview } from "@/components/landing/inventory-overview";
import { BorrowStatus } from "@/components/landing/borrow-status";
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

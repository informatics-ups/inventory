import { Navbar } from "@/components/ux/home/navbar";
import { HeroSection } from "@/components/ux/home/hero";
import { InventoryOverview } from "@/components/ux/home/overview";
import { BorrowStatus } from "@/components/ux/home/status";
import { Footer } from "@/components/ux/home/footer";
import { FloatingActionButton } from "@/components/ux/home/fab";

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

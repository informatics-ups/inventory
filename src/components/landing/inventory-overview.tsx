import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Wallet, Download } from "lucide-react";

function StatusBead({
  color,
  glow,
}: {
  color: string;
  glow: string;
}) {
  return (
    <div
      className={`size-2 rounded-full ${color} ${glow}`}
    />
  );
}

function StatCard({
  label,
  value,
  bead,
}: {
  label: string;
  value: string;
  bead?: { color: string; glow: string };
}) {
  return (
    <div className="p-8 rounded-xl bg-surface-container-low border border-outline-variant/10 flex flex-col justify-between min-h-[160px]">
      {bead && (
        <div className="flex items-center gap-2 mb-4">
          <StatusBead color={bead.color} glow={bead.glow} />
          <span className="text-xs uppercase tracking-widest text-on-surface-variant font-medium">
            {label}
          </span>
        </div>
      )}
      <div>
        <p className="text-3xl font-bold tracking-tighter text-on-surface">
          {value}
        </p>
      </div>
    </div>
  );
}

export function InventoryOverview() {
  const t = useTranslations("LandingPage.overview");

  return (
    <section
      id="inventory-overview"
      className="py-24 px-6 md:px-16 bg-surface-container-lowest"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h2 className="font-headline text-4xl font-bold mb-2 text-on-surface">
              {t("title")}
            </h2>
            <p className="text-on-surface-variant">{t("description")}</p>
          </div>
          <div className="hidden md:block">
            <span className="text-xs font-body uppercase tracking-widest text-outline">
              Last Sync: 2 mins ago
            </span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {/* Total Items — spans 2 cols */}
          <div className="md:col-span-2 lg:col-span-2 p-8 rounded-xl bg-surface-container-low border border-outline-variant/10 flex flex-col justify-between min-h-[200px]">
            <div className="flex justify-between items-start">
              <Package className="text-primary size-7" />
              <Badge
                variant="outline"
                className="text-primary text-xs font-bold bg-primary/10 border-primary/20 px-2 py-0.5 rounded"
              >
                +12% this month
              </Badge>
            </div>
            <div className="mt-auto">
              <p className="text-4xl font-extrabold text-on-surface tracking-tighter">
                2,841
              </p>
              <p className="text-on-surface-variant font-medium">
                {t("card.tracked")}
              </p>
            </div>
          </div>

          {/* Available */}
          <StatCard
            label={t("card.available")}
            value="1,402"
            bead={{
              color: "bg-status-available",
              glow: "bead-available",
            }}
          />

          {/* Borrowed */}
          <StatCard
            label={t("card.borrowed")}
            value="943"
            bead={{
              color: "bg-status-borrowed",
              glow: "bead-borrowed",
            }}
          />

          {/* Maintenance */}
          <StatCard
            label={t("card.maintenance")}
            value="38"
            bead={{
              color: "bg-status-warning",
              glow: "bead-warning",
            }}
          />

          {/* Defective */}
          <StatCard
            label={t("card.defective")}
            value="12"
            bead={{
              color: "bg-status-error",
              glow: "bead-error",
            }}
          />

          {/* Total Asset Valuation — full width gradient card */}
          <div className="md:col-span-4 lg:col-span-6 p-8 rounded-xl signature-gradient flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="p-4 bg-on-primary/10 rounded-full">
                <Wallet className="size-8 text-on-primary" />
              </div>
              <div>
                <h3 className="text-on-primary font-bold text-sm md:text-base opacity-80 uppercase tracking-widest">
                  {t("card.valuation")}
                </h3>
                <p className="text-4xl md:text-5xl font-extrabold text-on-primary tracking-tighter">
                  $1,482,900.00
                </p>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <Button className="w-full md:w-auto px-6 py-3 bg-on-primary text-primary font-bold rounded-xl hover:bg-on-primary/90 active:scale-95 transition-all border-none">
                <Download data-icon="inline-start" />
                Download Audit PDF
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

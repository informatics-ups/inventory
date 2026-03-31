import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, SlidersHorizontal, ArrowRight } from "lucide-react";

type BorrowStatus = "on_track" | "due_soon" | "overdue";

interface BorrowRecord {
  initials: string;
  name: string;
  itemCode: string;
  itemName: string;
  borrowedAt: string;
  expectedReturn: string;
  status: BorrowStatus;
}

const borrowData: BorrowRecord[] = [
  {
    initials: "JD",
    name: "Jonathan Doe",
    itemCode: "SPEC-00421",
    itemName: "Mass Spectrometer V3",
    borrowedAt: "Oct 24, 09:15 AM",
    expectedReturn: "Oct 24, 04:00 PM",
    status: "on_track",
  },
  {
    initials: "SR",
    name: "Siti Rahmawati",
    itemCode: "MIC-09210",
    itemName: "Electronic Microscope",
    borrowedAt: "Oct 23, 02:30 PM",
    expectedReturn: "Oct 24, 10:00 AM",
    status: "due_soon",
  },
  {
    initials: "AW",
    name: "Alex Wong",
    itemCode: "CEN-00122",
    itemName: "High-Speed Centrifuge",
    borrowedAt: "Oct 22, 11:00 AM",
    expectedReturn: "Oct 23, 05:00 PM",
    status: "overdue",
  },
  {
    initials: "BK",
    name: "Budi Kusuma",
    itemCode: "LAS-04821",
    itemName: "Laser Interferometer",
    borrowedAt: "Oct 24, 08:00 AM",
    expectedReturn: "Oct 24, 06:00 PM",
    status: "on_track",
  },
];

const statusConfig: Record<
  BorrowStatus,
  { color: string; glow: string; label: string }
> = {
  on_track: {
    color: "bg-status-available",
    glow: "bead-available",
    label: "On Track",
  },
  due_soon: {
    color: "bg-status-warning",
    glow: "bead-warning",
    label: "Due Soon",
  },
  overdue: {
    color: "bg-status-error",
    glow: "bead-error",
    label: "Overdue",
  },
};

export function BorrowStatus() {
  const t = useTranslations("LandingPage.borrow");

  return (
    <section id="borrow-status" className="py-24 px-6 md:px-16 bg-surface">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h2 className="font-headline text-4xl font-bold mb-2 text-on-surface">
              {t("title")}
            </h2>
            <p className="text-on-surface-variant">{t("description")}</p>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline size-4" />
              <Input
                className="bg-surface-container-high border-none rounded-xl pl-10 pr-4 py-2 text-sm w-64 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary"
                placeholder="Filter by Student or Item..."
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="bg-surface-container-high rounded-xl text-on-surface-variant hover:text-on-surface"
            >
              <SlidersHorizontal />
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="rounded-xl border border-outline-variant/10 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-surface-container-low border-b-outline-variant/10 hover:bg-surface-container-low">
                <TableHead className="text-on-surface-variant text-xs uppercase tracking-widest font-semibold px-6 py-4">
                  {t("table.header.borrower")}
                </TableHead>
                <TableHead className="text-on-surface-variant text-xs uppercase tracking-widest font-semibold px-6 py-4">
                  Item Code
                </TableHead>
                <TableHead className="text-on-surface-variant text-xs uppercase tracking-widest font-semibold px-6 py-4">
                  {t("table.header.asset")}
                </TableHead>
                <TableHead className="text-on-surface-variant text-xs uppercase tracking-widest font-semibold px-6 py-4">
                  {t("table.header.borrowedAt")}
                </TableHead>
                <TableHead className="text-on-surface-variant text-xs uppercase tracking-widest font-semibold px-6 py-4">
                  {t("table.header.dueDate")}
                </TableHead>
                <TableHead className="text-on-surface-variant text-xs uppercase tracking-widest font-semibold px-6 py-4">
                  {t("table.header.status")}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {borrowData.map((record) => {
                const status = statusConfig[record.status];
                return (
                  <TableRow
                    key={record.itemCode}
                    className="border-b-outline-variant/10 hover:bg-surface-container-high transition-colors"
                  >
                    <TableCell className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <Avatar className="size-8">
                          <AvatarFallback className="bg-primary/20 text-[10px] font-bold text-primary">
                            {record.initials}
                          </AvatarFallback>
                        </Avatar>
                        <span className="font-medium text-on-surface">
                          {record.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-5 font-mono text-sm text-on-surface-variant">
                      {record.itemCode}
                    </TableCell>
                    <TableCell className="px-6 py-5 text-on-surface">
                      {record.itemName}
                    </TableCell>
                    <TableCell className="px-6 py-5 text-on-surface-variant">
                      {record.borrowedAt}
                    </TableCell>
                    <TableCell className="px-6 py-5 text-on-surface-variant">
                      {record.expectedReturn}
                    </TableCell>
                    <TableCell className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <div
                          className={`size-2 rounded-full ${status.color} ${status.glow}`}
                        />
                        <span
                          className={`text-xs font-semibold ${
                            record.status === "on_track"
                              ? "text-status-available"
                              : record.status === "due_soon"
                                ? "text-status-warning"
                                : "text-status-error"
                          }`}
                        >
                          {t(`table.status.${record.status}`)}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        {/* View Full Log Link */}
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all group"
          >
            {t("table.log")}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}

import { AppSidebar } from "@/components/layout/app-sidebar";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/layout/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import { MonitoringDashboard } from "@/components/data-table";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Page() {
  // throw a false error
  throw new Error("Broken library usage");
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        {/* <Suspense fallback={<Skeleton className="h-[300px] w-full" />}> */}
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>
              <MonitoringDashboard />
            </div>
          </div>
        </div>
        {/* </Suspense> */}
      </SidebarInset>
    </SidebarProvider>
  );
}

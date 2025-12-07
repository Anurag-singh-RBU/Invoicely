"use client";

import ThemeSwitch from "@/components/table-columns/theme-switch";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AnimatePresence, motion } from "motion/react";
import { Separator } from "@/components/ui/separator";
import { SIDEBAR_ITEMS } from "@/components/constants/sidebar";
import { usePathname } from "next/navigation";
import { ISidebarHeader } from "@/types/sidebar";
import { X } from "lucide-react";
import React from "react";
import { useSidebar } from "@/components/ui/sidebar";

const DashboardSidebarHeader = ({ children }: ISidebarHeader) => {
  const pathname = usePathname();

  // Get Route details from sidebar items via pathname
  const route = Object.values(SIDEBAR_ITEMS)
    .flat()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .find((item: any) => item.url === pathname) as any;

  return (
    <header className="bg-background sticky top-0 flex h-12 shrink-0 items-center justify-between gap-2 border-b transition-[width,height] ease-linear select-none group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        {route ? <Separator orientation="vertical" className="mr-2 min-h-4" /> : null}
        <AnimatePresence mode="wait">
          {route ? (
            <motion.div
              key={route.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, type: "spring", bounce: 0 }}
              className="flex flex-row items-center justify-between"
            >
              <div className="flex flex-row items-center gap-2">
                <div className="from-light-primary to-primary rounded-md bg-linear-to-br p-[7px] text-white [&>svg]:size-3.5">
                  {route.icon}
                </div>
                <div className="instrument-serif text-xl font-semibold">{route.name}</div>
              </div>
              <>{children}</>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
      <div className="flex items-center gap-2 px-4">
        <ThemeSwitch/>
      </div>
    </header>
  );
};

export default DashboardSidebarHeader;

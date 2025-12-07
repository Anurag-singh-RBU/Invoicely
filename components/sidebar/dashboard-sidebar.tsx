"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { NavigationItem } from "@/components/sidebar/navigation-item";
import { SIDEBAR_ITEMS } from "@/components/constants/sidebar";
import Link from "next/link";
import Image from "next/image";
import Auth from "./Auth";
import { X } from "lucide-react";

export function DashboardSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="text-secondary-foreground select-none" variant="default" size="lg" asChild>
              <div className="flex items-center justify-between gap-2 w-full">
                <Link className="flex flex-row items-center gap-2" href={"/"}>
                  <Image src="/logo-icon.webp" alt="logo" width={32} height={32} />
                  <div className="instrument-serif text-xl font-semibold">Invoicely</div>
                </Link>

                <button
                  className="sm:hidden p-2 rounded-md hover:bg-accent"
                  onClick={() => toggleSidebar()}>
                  <X className="size-5"/>
                </button>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {Object.keys(SIDEBAR_ITEMS).map((key) => (
          <NavigationItem key={key} title={key} items={SIDEBAR_ITEMS[key]} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <Auth></Auth>
      </SidebarFooter>
    </Sidebar>
  );
}

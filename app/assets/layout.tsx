import { DashboardSidebar } from "@/components/sidebar";
import DashboardSidebarHeader from "@/components/sidebar/dashboard-sidebar-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "sonner";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <DashboardSidebar/>
      <SidebarInset>
        <div className="dash-page h-full overflow-hidden">
          <DashboardSidebarHeader/>
          <main className="dash-layout-page-content-height scroll-bar-hidden overflow-y-scroll">
            <Toaster></Toaster>
            {children}
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
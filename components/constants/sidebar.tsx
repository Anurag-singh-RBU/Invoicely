import { FolderFeatherIcon, ReceiptIcon, VersionsIcon } from "@/assets/icons";
import type { ISidebar } from "@/types/sidebar";

export const SIDEBAR_ITEMS: ISidebar = {
  Navigation: [
    {
      name: "Invoices",
      url: "/user/invoices",
      icon: <VersionsIcon/>,
    },
    {
      name: "Manage Assets",
      url: "/assets",
      icon: <FolderFeatherIcon/>,
    },
  ],
  Create: [
    {
      name: "Create Invoice",
      url: "/create/invoice",
      icon: <ReceiptIcon/>,
    },
  ],
};

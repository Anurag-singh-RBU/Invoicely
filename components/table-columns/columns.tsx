"use client"

import { BoxIcon, DatabaseIcon, FileAlertIcon, FileBanIcon, FileCheckIcon, FileRefreshIcon, HardDriveIcon, HourglassStartIcon } from "@/assets/icons"
import { ColumnDef } from "@tanstack/react-table"
import { JSX } from "react"
import { Badge, BadgeVariants } from "../ui/badge"
import { FormatTableDateObject, HeaderColumnButton } from "./data-table"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { InvoiceStatusType } from "@/types/invoice"

export type Invoices = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    invoiceFields: any
    type: string
    id: string
    storage: string
    "serial no": string
    "created at": Date | null
    items?: number
    actions: JSX.Element
    status: InvoiceStatusType
}

export const columns: ColumnDef<Invoices>[] = [
    {
        accessorKey: "storage",
        header: ({ column }) => <HeaderColumnButton column={column}>Storage</HeaderColumnButton>,
        cell: ({ row }) => (
        <Badge variant={row.original.type === "local" ? "default" : "rose"} icon>
            {row.original.type === "local" ? <HardDriveIcon/> : <DatabaseIcon/>}
            {row.original.type === "local" ? "Local" : "Server"}
        </Badge>
        ),
        enableSorting: false,
    },
    {
        accessorKey: "id",
        header: ({ column }) => <HeaderColumnButton column={column}>ID</HeaderColumnButton>,
        cell: ({ row }) => <div className="text-muted-foreground text-xs">{row.original.id}</div>,
        enableSorting: false,
    },
    {
        accessorKey: "serial no",
        header: ({ column }) => <HeaderColumnButton column={column}>Serial No</HeaderColumnButton>,
        cell: ({ row }) => (
            <div className="text-xs">{`${row.original.invoiceFields.invoiceDetails.prefix}${row.original.invoiceFields.invoiceDetails.serialNumber}`}</div>
        ),
        enableSorting: false,
    },
    {
        accessorKey: "items",
        header: ({ column }) => <HeaderColumnButton column={column}>Items</HeaderColumnButton>,
        cell: ({ row }) => (
        <TooltipProvider>
            <Tooltip>
            <TooltipTrigger asChild>
                <Badge variant="gray" icon>
                <BoxIcon/>
                <span>{row.original.invoiceFields?.items?.length ?? 0}</span>
                </Badge>
            </TooltipTrigger>
            <TooltipContent>
                <p>{row.original.invoiceFields?.items?.length ?? 0} items in this invoice</p>
            </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    ),
    },
    {
        accessorKey: "status",
        header: ({ column }) => <HeaderColumnButton column={column}>Status</HeaderColumnButton>,
        cell: ({ row }) => (
        <Badge className="capitalize" variant={getStatusBadgeVariant(row.original.status)} icon>
            {getStatusIcon(row.original.status)}
            {row.original.status}
        </Badge>

        ),
        enableSorting: false,
    },
    {
        accessorKey: "created at",
        header: ({ column }) => <HeaderColumnButton column={column}>Created At</HeaderColumnButton>,
        cell: ({ row }) => <FormatTableDateObject date={row.original["created at"]}/>,
    },
    {
        accessorKey: "actions",
        header: ({ column }) => <HeaderColumnButton column={column}>Actions</HeaderColumnButton>,
        cell: ({ row }) => row.original.actions,
        enableSorting: false,
    },
]

const getStatusIcon = (status: InvoiceStatusType) => {
  switch (status) {
    case "pending":
      return <HourglassStartIcon/>;
    case "success":
      return <FileCheckIcon/>;
    case "error":
      return <FileBanIcon/>;
    case "expired":
      return <FileAlertIcon/>;
    case "refunded":
      return <FileRefreshIcon/>;
    default:
      return <HourglassStartIcon/>;
  }
};

const getStatusBadgeVariant = (status: InvoiceStatusType): BadgeVariants => {
  switch (status) {
    case "pending":
      return "yellow";
    case "success":
      return "green";
    case "error":
      return "destructive";
    case "expired":
      return "gray";
    case "refunded":
      return "purple";
    default:
      return "gray";
  }
};

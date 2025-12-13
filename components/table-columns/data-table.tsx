"use client"

import {
    Column,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FileAlertIcon } from "@/assets/icons"
import EmptySection from "../ui/icon-placeholder"
import { Button } from "../ui/button"
import { Skeleton } from "../ui/skeleton"
import { cn } from "@/lib/utils"
import { ArrowDownZaIcon, ArrowUpDownIcon, ArrowUpZaIcon } from "lucide-react"
import { format } from "date-fns"
import { authClient } from "@/lib/auth-client"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  isLoading?: boolean;
  onRowClick?: (row: TData) => void;
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  isLoading = false,
  onRowClick,
  data,
}: DataTableProps<TData, TValue>) {
  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  const { data : session } = authClient.useSession();

  if(!session){

    return (
      <div className="flex flex-col gap-4 text-xs">
        <div className="max-w-[calc(100svw-2rem)] overflow-hidden rounded-md border md:max-w-full">
          <Table>
            <TableHeader className="hidden sm:table-header-group w-full">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow className="bg-sidebar hover:bg-sidebar!" key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    );
                  }
                )}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-background">
                <TableCell colSpan={columns.length} className="text-muted-foreground/70 h-[400px] text-center">
                  <EmptySection
                    icon={FileAlertIcon}
                    title="Unauthorized"
                    description="You must be logged in to view this data. Please login to access your data."/>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 text-xs">
      <div className="max-w-[calc(100svw-2rem)] overflow-hidden rounded-md border md:max-w-full">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow className="bg-sidebar hover:bg-sidebar!" key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              Array.from({ length: 10 }).map((_, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={column.id}>
                      <Skeleton className="h-4.5 w-full rounded-sm"/>
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={cn(onRowClick && "cursor-pointer")}
                  onClick={() => onRowClick?.(row.original)}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow className="hover:bg-background">
                <TableCell colSpan={columns.length} className="text-muted-foreground/70 h-[400px] text-center">
                  <EmptySection
                    icon={FileAlertIcon}
                    title="No Data Found"
                    description="No data found for the selected filters. Please try different filters or clear all filters to see all data"
                  />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {/* Pagination */}
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="text-muted-foreground text-xs">
          Page <span className="text-secondary-foreground">{table.getState().pagination.pageIndex + 1}</span> of{" "}
          <span className="text-secondary-foreground">{table.getPageCount()}</span> Page
        </div>
        <div className="flex items-center justify-end space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export function HeaderColumnButton<TData>({
  column,
  children,
  disableChevron = true,
}: {
  column: Column<TData, unknown>;
  children: React.ReactNode;
  disableChevron?: boolean;
}) {
  const isSorted = column.getIsSorted();

  // Disable chevron if sorting is not enabled
  disableChevron = !column.getCanSort();

  return (
    <button
      className={cn(
        disableChevron && "pr-0",
        "text-secondary-foreground -mx-2 my-auto inline-flex h-fit cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-xs font-medium whitespace-nowrap select-none",
      )}
      onClick={() => column.toggleSorting(isSorted === "asc")}>
      {children}
      <div className={cn(disableChevron && "hidden!", "text-secondary-foreground/50 hidden sm:inline-block")}>
        {isSorted === false && <ArrowUpDownIcon size={12}/>}
        {isSorted === "asc" && <ArrowUpZaIcon size={12}/>}
        {isSorted === "desc" && <ArrowDownZaIcon size={12}/>}
      </div>
    </button>
  );
}

export const FormatTableDate = ({ date }: { date: number }) => {
  return (
    <div className="text-muted-foreground text-xs whitespace-nowrap">
      {format(new Date(date * 1000), "dd/MM/yyyy - hh:mm a")}
    </div>
  );
};

export const FormatTableDateObject = ({ date }: { date: Date | null }) => {
  if (!date) return null;

  return <div className="text-muted-foreground text-xs whitespace-nowrap">{format(date, "dd/MM/yyyy - hh:mm a")}</div>;
};
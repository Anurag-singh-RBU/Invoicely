"use client";

import { cn } from "@/lib/utils";
import { FileAlertIcon, FileTreeIcon } from "@/assets/icons";
import { InboxArrowDownIcon } from "@/assets/icons";
import { ChevronDownIcon } from "lucide-react";

export default function TopActionBar() {
  return (
    <div
      className={cn("flex items-center justify-between px-4 py-2","geist-sans")}>
      <div className="flex items-center sm:gap-4 gap-2">
        <button className="cursor-pointer select-none inline-flex items-center duration-200 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground hover:bg-secondary/80 h-8 px-4 py-2 has-[>svg]:px-2.5">
          <FileAlertIcon className="size-4"/>
          Errors
        </button>

        <button className="cursor-pointer select-none inline-flex items-center duration-200 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 px-4 py-2 has-[>svg]:px-2.5">
          <InboxArrowDownIcon className="size-4"/>
          Import
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button className="hidden border-input data-placeholder:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 sm:flex items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-8 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 w-32">
        <div className="flex items-center gap-2">
          <FileTreeIcon className="size-4"/>
          <span className="text-sm font-medium">Both</span>
        </div>
        <ChevronDownIcon className="size-4"/>
        </button>

        <button className="cursor-pointer select-none inline-flex items-center duration-200 justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 button-highlighted-shadow h-8 px-4 py-2 has-[>svg]:px-2.5">
          <InboxArrowDownIcon className="size-4"/>
          Download
        </button>
      </div>
    </div>
  );
}

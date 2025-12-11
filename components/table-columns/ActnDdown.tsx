"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FilePenIcon, PriorityMediumIcon, TrashIcon } from "@/assets/icons";

export function ActnDdown({ }: { id: string }) {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button className="cursor-pointer select-none inline-flex items-center duration-200 justify-center whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-secondary text-secondary-foreground hover:bg-secondary/80 h-5 gap-1.5 px-2 has-[>svg]:px-1.5 text-xs rounded-sm">View</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <Link href={""}>
            <DropdownMenuItem>
                <PriorityMediumIcon/>
                <span className="text-sm leading-none tracking-wider capitalize">Update Invoice</span>
            </DropdownMenuItem>
            </Link>
            <Link href={""}>
            <DropdownMenuItem>
                <FilePenIcon/>
                <span className="text-sm leading-none tracking-wider capitalize">Edit</span>
            </DropdownMenuItem>
            </Link>
            <Link href={""}>
            <DropdownMenuItem>
                <TrashIcon/>
                <span className="text-sm leading-none tracking-wider capitalize">Delete Invoice</span>
            </DropdownMenuItem>
            </Link>
        </DropdownMenuContent>
    </DropdownMenu>
  );
}

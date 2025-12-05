"use client";

import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { SlashIcon } from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function GenerateBreadcrumb({ className }: { className?: string; itemClassName?: string }) {
  const pathname = usePathname();

  return (
    <Breadcrumb className={cn(className)}>
      <BreadcrumbList className="!gap-1">
        {pathname.split("/").map((path, index) => {
          if (path === "") return null;
          return (
            <div className="text-primary-foreground flex flex-row items-center gap-0.5 text-xs" key={index}>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <BreadcrumbItem>{path}</BreadcrumbItem>
            </div>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

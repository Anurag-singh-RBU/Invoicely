import ThemeSwitch from "@/components/table-columns/theme-switch";
import { Button } from "@/components/ui/button";
import { CircleOpenArrowRight } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex h-16 items-center justify-between border-b border-dashed px-4">
      <Link className="flex flex-row items-center gap-2" href={"/"}>
        <Image src="/logo-icon.webp" alt="logo" width={32} height={32}/>
        <span className="instrument-serif text-xl font-semibold">Invoicely</span>
      </Link>
      <div className="flex flex-row items-center gap-3">
        <ThemeSwitch/>
        <Link href={""}>
          <Button variant="secondary" className="cursor-pointer shadow-sm">
            <span>Invoice It</span>
            <CircleOpenArrowRight className="text-muted-foreground -rotate-45"/>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
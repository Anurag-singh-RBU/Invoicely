"use client";

import { GithubIcon } from "@/assets/icons";
import { ScribbledArrowToRight } from "@/assets/svgs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {

  return (
    <div className="relative flex h-[calc(100svh-64px-150px)] flex-row items-center overflow-hidden border-b border-dashed">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Image
          className="h-full min-h-full w-full object-cover object-left invert dark:invert-0"
          src="/og-bg.png"
          alt="Hero"
          width={1920}
          height={1080}/>
      </div>
      <div className="z-10 flex flex-col gap-4">
        <div className="flex flex-row items-center gap-2 sm:px-6 px-4">
            <div className="bg-muted/20 relative flex h-7 w-16 flex-row items-center gap-2 rounded-md border px-2 dark:border-gray-500">
            <span className="urbanist absolute text-center tracking-wider right-3 text-sm font-semibold">
                v1.0.0
            </span>
          </div>
          <div className="flex flex-row items-center">
            <div className="bg-muted/20 h-1.5 w-1.5 border"></div>
            <div className="from-muted h-px w-40 bg-linear-to-r to-transparent"></div>
          </div>
        </div>
        <div className="instrument-serif flex flex-col gap-2 sm:px-6 px-4 text-6xl">
          <h1 className="dark:text-gray-500 text-secondary-foreground/50">
            Create <span className="dark:text-white text-secondary-foreground">Beautiful</span> Invoices
          </h1>
          <h2 className="dark:text-gray-500 text-secondary-foreground/50">
            Not <span className="dark:text-white text-secondary-foreground">Ugly</span> Ones
          </h2>
        </div>
        <div className="mt-4 flex flex-row sm:gap-6 gap-4 sm:px-6 px-4">
          <Link href="/create/invoice">
            <button type="button" className="btn cursor-pointer">
              <div className="top font-bold tracking-tight jetbrains-mono">Get Started</div>
              <div className="bottom"></div>
            </button>
          </Link>
          <div className="relative mt-3">
              <Link target="_blank" href={""}>
                <Button variant="secondary" className="shadow-sm cursor-pointer">
                  <span>Open Source</span>
                  <GithubIcon />
                </Button>
              </Link>
            <span className="jetbrains-mono text-muted-foreground/20 pointer-events-none absolute sm:-top-10 sm:left-40 size-full sm:-rotate-34 top-12 text-[10px] dark:text-yellow-50">
              Give Star <br /> please : 3 <br /> for cookie
            </span>
            <ScribbledArrowToRight className="text-muted-foreground/20 pointer-events-none absolute top-2 left-22 size-full rotate-190 dark:text-yellow-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
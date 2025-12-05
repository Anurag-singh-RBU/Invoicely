import { ModernCardContainer, ModernCardDescription, ModernCardTitle } from "@/components/ui/modern-card";
import { FancyBadgeWithBorders } from "@/components/ui/fancy-badges";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Sponser {
  name: string;
  image: string | null;
  description: string;
  imageClass: string;
  invert?: boolean;
  label?: string;
  link?: string;
}

const sponsers: Sponser[] = [
  {
    name: "Delivery",
    label: "On Time Delivery",
    invert: false,
    imageClass: "h-35 w-80",
    image: "/td.png",
    description:
      "We believe time is the most valuable asset for any business. That’s why every task is planned, executed and delivered with precision. Deadlines are always respected, ensuring smooth and  predictable workflow.",
  },
  {
    name: "Professionalism",
    label: "Professional Service",
    imageClass: "h-30 w-40",
    image: "/pflsm.png",
    description:
      "Our approach is built on clarity, discipline and responsibility. From communication to execution, every step reflects high standards. We maintain transparency and consistency throughout the process.",
  },
  {
    name: "Support",
    label: "Always Here for You",
    imageClass: "h-30 w-40",
    image: "/spt.png",
    description:
      "We stay connected with you throughout the entire journey. Whether you have questions, issues or feedback — we’re always available. Our team ensures quick responses and practical solutions every time.",
  },
  {
    name: "Creativity",
    label: "Fresh & Unique Ideas",
    imageClass: "h-35 w-40",
    image: "/create.png",
    description:
      "Every project begins with fresh ideas and innovative thinking. We focus on unique designs that stand out and create real impact. Our creative approach blends strategy, visuals and functionality together.",
  },
];

const OurSponser = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col items-center border-b border-dashed py-4">
        <FancyBadgeWithBorders>Our Promise</FancyBadgeWithBorders>
      </div>
      <div className="flex flex-col geist-sans">
        {sponsers.map((sponser, index) => (
          <div
            key={sponser.name}
            className={cn("grid grid-flow-row grid-cols-1 border-b border-dashed sm:grid-cols-3 md:h-[150px] geist-sans")}
          >
            <ModernCardContainer className={cn("flex flex-col p-6 sm:col-span-2", index % 2 === 0 && "sm:order-1")}>
              <ModernCardTitle label={sponser.label}>{sponser.name}</ModernCardTitle>
              <ModernCardDescription>{sponser.description}</ModernCardDescription>
            </ModernCardContainer>
            <ModernCardContainer
              className={cn(
                index === sponsers.length - 1 && "p-2!",
                index % 2 === 0 ? "sm:border-r" : "sm:border-l",
                "flex flex-col items-center justify-center border-none p-6 sm:border-dashed",
              )}
            >
              {sponser.image ? (
                <Image
                  className={cn("object-contain sm:block hidden", sponser.invert && "invert dark:invert-0", sponser.imageClass)}
                  src={sponser.image}
                  alt={sponser.name}
                  width={254}
                  height={254}
                />
              ) : (
                <div className="bg-dashed flex h-full w-full items-center justify-center rounded-md px-10 py-5">
                  <span className="jetbrains-mono bg-background text-muted-foreground rounded-sm px-2 py-1 text-center text-xs">
                    Your Image Here
                  </span>
                </div>
              )}
            </ModernCardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurSponser;
"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { ImageSparkleIcon, SignatureIcon } from "@/assets/icons";
import ImageInput from "@/components/ui/imginput";
import SignatureInputModal from "@/components/ui/signinput";

export default function AssetsPage() {
  return (
    <div className="w-full">
      <Accordion type="multiple" defaultValue={["logos", "signatures"]}>
        {/* LOGOS */}
        <AccordionItem value="logos" className="border-b">
            <div className="flex bg-gray-50 dark:bg-neutral-900 items-center gap-2 text-primary hover:bg-card data-[state=open]:bg-card data-[state=open]:text-primary data-[state=open]:[&>svg]:text-primary flex-1 cursor-pointer px-4 py-4 text-left text-sm font-medium outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 border-b w-full">
              <ImageSparkleIcon/>
              <span className="font-medium">Logos</span>
            </div>
          <AccordionContent className="px-6 pb-6 py-4">
            <h3 className="instrument-serif text-xl font-bold" style={{wordSpacing: '2px'}}>Local Logos</h3>
            <p className="text-muted-foreground text-xs mt-1">
              Manage the logos that are stored on your device.
            </p>

            <div className="mt-4 sm:w-fit w-full h-auto">
              <ImageInput></ImageInput>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* SIGNATURES */}
        <AccordionItem value="logos" className="border-b">
            <div className="flex bg-gray-50 dark:bg-neutral-900 items-center gap-2 text-primary hover:bg-card data-[state=open]:bg-card data-[state=open]:text-primary data-[state=open]:[&>svg]:text-primary flex-1 cursor-pointer px-4 py-4 text-left text-sm font-medium outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 border-b w-full">
              <SignatureIcon/>
              <span className="font-medium">Signatures</span>
            </div>
          <AccordionContent className="px-6 pb-6 py-4">
            <h3 className="instrument-serif text-xl font-bold" style={{wordSpacing: '2px'}}>Local Signatures</h3>
            <p className="text-muted-foreground text-xs mt-1">
              Manage the signature that are stored on your device.
            </p>

            <div className="mt-5 sm:w-fit w-full h-auto">
              <SignatureInputModal></SignatureInputModal>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}


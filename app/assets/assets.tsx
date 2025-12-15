"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { ImageSparkleIcon, SignatureIcon, TrashIcon } from "@/assets/icons";
import ImageInput from "@/components/ui/imginput";
import SignatureInputModal from "@/components/ui/signinput";
import { Key, useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AssetsPage() {

  type UserImage = {
    id: string;
    imgUrl: string;
    createdAt: string;
  };

  async function uploadToCloudinary(file : File){

    const formData = new FormData();
    formData.append("image", file);

    await fetch("/api/upload-images", {

      method: "POST",
      body: formData,

    });

  }

  const [images, setImages] = useState<UserImage[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      const res = await fetch("/api/user-images");
      const data = await res.json();
      setImages(data);
      setLoading(false);
    }

    fetchImages();
  }, []);

  return (
    <div className="w-full">
      <Accordion type="multiple" defaultValue={["logos", "signatures"]}>
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

            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-5">
              <div className="relative aspect-square w-full overflow-hidden rounded-md border border-dashed">
                <ImageInput
                  title="Upload Logo"
                  maxSizeMB={2}
                  allowPreview={true}
                  onFileChange={uploadToCloudinary}
                  className="absolute inset-0"
                />
              </div>

              {images.map((image) => (
                <div
                  key={image.id as Key}
                  className="group relative aspect-square w-full overflow-hidden rounded-md bg-border/30">
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="absolute top-2 right-2 z-10 px-0.5! text-red-500 hover:bg-red-500! hover:text-white! transition">
                    <TrashIcon className="size-4"/>
                  </Button>
                  <Image
                    src={image.imgUrl}
                    alt="User logo"
                    fill
                    className="object-cover"
                    sizes="(max-width : 768px) 50vw , 20vw"/>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

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


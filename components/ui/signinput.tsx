/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogContentContainer,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogHeaderContainer,
  DialogIcon,
  DialogTitle,
} from "@/components/ui/dialog";
import { CreatePngFromBase64 } from "@/lib/pngFbase24";
import { AlertCircleIcon, LoaderCircleIcon, XIcon } from "lucide-react";
import { ImageSparkleIcon, SignatureIcon } from "@/assets/icons";
import { useFileUpload } from "@/hooks/use-file-upload";
import SignatureCanvas from "react-signature-canvas";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Button } from "./button";
import { MiniSwitch } from "./switch";

interface SignatureInputModalProps {
  title?: string;
  className?: string;
  defaultUrl?: string;
  isDarkMode?: boolean;
  maxSizeMB?: number;
  allowPreview?: boolean;
  isLoading?: boolean;
  disableIcon?: boolean;
  onBase64Change?: (base64: string | undefined) => void;
  onFileRemove?: () => void;
  onSignatureChange?: (signature: string) => void;
  onSaveCanvas?: (base64: string) => Promise<void> | void;
  onFileSelect?: (file: File) => Promise<void> | void;
}

export default function SignatureInputModal({
  title = "Click here to draw your signature",
  //   className,
  defaultUrl,
  isDarkMode = false,
  maxSizeMB = 5,
  allowPreview = true,
  isLoading = false,
  disableIcon = false,
  onSignatureChange,
  onBase64Change,
  onFileRemove,
  onFileSelect,
  onSaveCanvas,
}: SignatureInputModalProps) {
  const [darkMode, setDarkMode] = useState<boolean>(isDarkMode);
  const [type, setType] = useState<"signature" | "upload" | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const signaturePadRef = useRef<SignatureCanvas>(null);
  const [isSignatureEmpty, setIsSignatureEmpty] = useState<boolean>(true);

  const maxSize = maxSizeMB * 1024 * 1024; 

  const [
    { files, isDragging, errors },
    { handleDragEnter, handleDragLeave, handleDragOver, handleDrop, openFileDialog, removeFile, getInputProps },
  ] = useFileUpload({
    accept: "image/png, image/jpeg, image/jpg",
    maxSize,
    onFilesAdded: async (files) => {
      if (!files[0]) return;

      const file = files[0].file as File;

      if (onFileSelect) {
        await onFileSelect(file);
      }

      if (onSignatureChange) {
        onSignatureChange(files[0].preview || "");
      }

      if (onBase64Change) {
        const reader = new FileReader();
        reader.onload = () => {
          onBase64Change(reader.result as string);
        };
        reader.readAsDataURL(files[0].file as File);
      }
    },
  });

  const previewUrl = defaultUrl || "";

  const handleClear = () => {
    signaturePadRef.current?.clear();
  };

  const handleSave = async () => {
    const base64 = signaturePadRef.current?.toDataURL("image/png");
    if (!base64) return;

    if (onSaveCanvas) {
      await onSaveCanvas(base64);
    }

    closeAndReset();
    toast.success("Signature saved successfully");

  };

  const closeAndReset = () => {

    setIsModalOpen(false);
    signaturePadRef.current?.clear();
    setIsSignatureEmpty(true);

  };

  const handleModalChange = (open: boolean) => {
    setIsModalOpen(open);

    if (!open) {
      signaturePadRef.current?.clear();
      setIsSignatureEmpty(true);
    }
  };

  return (
    <>
      <div className="relative">
        {/* Drop area */}
        <div className="border-input relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-md border border-dashed transition-colors has-disabled:pointer-events-none has-disabled:opacity-50 has-[img]:border-none">
          {previewUrl && allowPreview && !isLoading ? (
            <div className="absolute inset-0">
              <img src={previewUrl} alt="user signature" className="size-full object-cover" />
            </div>
          ) : isLoading ? (
            <div className="flex flex-col items-center justify-center gap-2">
              <LoaderCircleIcon size={20} className={cn("animate-spin")}/>
              <span className="text-muted-foreground text-xs">Uploading</span>
            </div>
          ) : (
            <div className="flex h-full w-full flex-col">
              <div
                role="button"
                onClick={() => {
                  setType("signature");
                  setIsModalOpen(true);
                }}
                className="hover:bg-accent/50 flex h-full flex-col items-center justify-center border-b border-dashed text-center"
              >
                {!disableIcon && (
                  <div
                    className="bg-muted mb-2 flex size-7 shrink-0 items-center justify-center rounded-full sm:size-9"
                    aria-hidden="true"
                  >
                    <SignatureIcon className="size-4 rotate-12" />
                  </div>
                )}
                <p className="text-[10px] font-medium sm:mb-1.5 sm:text-xs">{title}</p>
                <p className="text-muted-foreground text-[10px]">Canvas size : 330x330px</p>
              </div>
              <div
                role="button"
                onClick={() => {
                  setType("upload");
                  openFileDialog();
                }}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                data-dragging={isDragging || undefined}
                className="hover:bg-accent/50 data-[dragging=true]:bg-accent/50 flex h-full flex-col items-center justify-center text-center"
              >
                <input {...getInputProps()} className="sr-only" aria-label="Upload file" />
                {!disableIcon && (
                  <div
                    className="bg-muted mb-2 flex size-7 shrink-0 items-center justify-center rounded-full sm:size-9"
                    aria-hidden="true"
                  >
                    <ImageSparkleIcon className="size-4" />
                  </div>
                )}
                <p className="text-[10px] font-medium sm:mb-1.5 sm:text-xs">Upload Signature</p>
                {errors.length > 0 ? (
                  <div className="flex items-center gap-1 text-[10px] text-red-500" role="alert">
                    {!disableIcon && <AlertCircleIcon className="size-3 shrink-0" />}
                    <span>{errors[0]}</span>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-[10px]">Max size : 150Kb (PNG , JPG)</p>
                )}
              </div>
            </div>
          )}
        </div>
        {previewUrl && allowPreview && !isLoading && (
          <div className="absolute top-4 right-4">
            <button
              type="button"
              className="focus-visible:border-ring focus-visible:ring-ring/50 z-50 flex size-5 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-[color,box-shadow] outline-none hover:bg-black/80 focus-visible:ring-[3px]"
              onClick={(e) => {
                e.preventDefault();

                removeFile(files[0]?.id);

                if (onFileRemove) {
                  onFileRemove();
                }
                if (onBase64Change) {
                  onBase64Change(undefined);
                }
              }}
              aria-label="Remove image"
            >
              <XIcon className="size-3" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
      <Dialog open={isModalOpen} onOpenChange={handleModalChange}>
        <DialogContent className="w-fit">
          <DialogHeaderContainer>
            <DialogIcon>
              <SignatureIcon className="size-4 rotate-12" />
            </DialogIcon>
            <DialogHeader>
              <DialogTitle>Company Signature</DialogTitle>
              <DialogDescription>Draw your signature here</DialogDescription>
            </DialogHeader>
          </DialogHeaderContainer>
          <DialogContentContainer>
            <div className="relative overflow-hidden rounded-md border">
              {!isSignatureEmpty && (
                <motion.div
                  key="signature-clear-btn"
                  initial={{ filter: "blur(1px)", top: -24 }}
                  animate={{ filter: "blur(0px)", top: 6 }}
                  exit={{ filter: "blur(1px)", top: -24 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute right-1.5 z-10 flex items-center justify-center"
                >
                  <Button variant="destructive" size="sm" onClick={handleClear}>
                    Clear
                  </Button>
                </motion.div>
              )}
              <SignatureCanvas
                key={`signature-canvas-${darkMode}`}
                ref={signaturePadRef}
                onBegin={() => setIsSignatureEmpty(false)}
                penColor={darkMode ? "white" : "black"}
                backgroundColor={darkMode ? "#181818" : "#ffffff"}
                canvasProps={{ 
                  className: "signature-canvas w-full h-full max-w-[330px] max-h-[330px] min-w-[280px] min-h-[200px] aspect-square" 
                }}              />
            </div>
          </DialogContentContainer>
          <DialogFooter>
            <div className="flex w-full items-center gap-2">
              <MiniSwitch checked={darkMode} onCheckedChange={setDarkMode} />
              <span className="text-muted-foreground text-xs">Dark Mode</span>
            </div>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}




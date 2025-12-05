import { cn } from "@/lib/utils";
import React from "react";

const FormRow = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={cn("flex flex-row gap-4", className)}>{children}</div>;
};

export default FormRow;

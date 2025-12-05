"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField,
} from "@/components/ui/form/form";
import { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { InfoIcon, TriangleAlertIcon } from "lucide-react";
import { useResizeObserver } from "@mantine/hooks";
import { HexColorPicker } from "react-colorful";
import { Badge } from "@/components/ui/badge";
import { Button } from "../button";
import { cn } from "@/lib/utils";
import { Input } from "../input";
import React from "react";

interface FormColorPickerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends React.InputHTMLAttributes<HTMLDivElement> {
  name: TName;
  label?: string | undefined;
  description?: string | undefined;
  reactform: UseFormReturn<TFieldValues>;
  sublabel?: string | undefined;
  isOptional?: boolean;
}

export const FormColorPicker = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  className,
  isOptional = false,
  ...props
}: FormColorPickerProps<TFieldValues, TName>) => {
  const [resizeRef, container] = useResizeObserver();

  return (
    <FormField
      control={props.reactform.control}
      name={props.name}
      render={({ field }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { error } = useFormField();

        return (
          <FormItem className="w-full">
            {props.label ? (
              <FormLabel className="flex items-center">
                <span className="text-xs capitalize">{props.label}</span>
                {isOptional ? (
                  <Badge size="xs" variant={Boolean(error) ? "destructive" : "secondary"}>
                    {props.sublabel ?? "Optional"}
                  </Badge>
                ) : null}
              </FormLabel>
            ) : null}
            <FormControl>
              <div ref={resizeRef} className={cn(className, "flex flex-row items-center gap-1.5")}>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      size="icon"
                      style={{
                        backgroundColor: field.value,
                      }}
                      className={cn("justify-start text-left font-normal", !field.value && "text-muted-foreground")}
                    ></Button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="p-0"
                    align="start"
                    style={{
                      width: "width" in container ? container.width : "180px",
                    }}
                  >
                    <HexColorPicker
                      style={{
                        width: "auto",
                      }}
                      color={field.value}
                      onChange={field.onChange}
                    />
                  </PopoverContent>
                </Popover>
                <Input type="text" value={field.value} onChange={field.onChange} />
              </div>
            </FormControl>
            {/* i.e Render form error message or form description Give priority to error else description */}
            {error || props.description ? (
              <div className="-mt-0.5">
                {error ? (
                  <div className="flex items-center gap-1">
                    <TriangleAlertIcon className="text-destructive size-2.5" />
                    <FormMessage />
                  </div>
                ) : props.description ? (
                  <div className="flex items-center gap-1">
                    <InfoIcon className="text-muted-foreground size-2.5" />
                    <FormDescription>{props.description}</FormDescription>
                  </div>
                ) : null}
              </div>
            ) : null}
          </FormItem>
        );
      }}
    />
  );
};

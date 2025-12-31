"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarPenIcon } from "@/assets/icons"

interface Calendar22Props {
  title: string;
}

export function Calendar22({ title }: Calendar22Props) {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <div className="flex flex-col gap-3 w-full">
      <Label htmlFor="date" className="px-2">
        {title}
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-full justify-start items-center gap-3 font-normal">
            <CalendarPenIcon/>
            {date
              ? (() => {
                  const d = date;
                  const n = d.getDate();
                  const suffix = (n % 10 === 1 && n !== 11) ? "st"
                                : (n % 10 === 2 && n !== 12) ? "nd"
                                : (n % 10 === 3 && n !== 13) ? "rd"
                                : "th";
                  return `${d.toLocaleString("en-US", { month: "long" })} ${n}${suffix} , ${d.getFullYear()}`
                })()
              : (() => {
                  const d = new Date();
                  const n = d.getDate();
                  const suffix = (n % 10 === 1 && n !== 11) ? "st"
                                : (n % 10 === 2 && n !== 12) ? "nd"
                                : (n % 10 === 3 && n !== 13) ? "rd"
                                : "th";
                  return `${d.toLocaleString("en-US", { month: "long" })} ${n}${suffix} , ${d.getFullYear()}`;
                })()}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <div style={{ display: "flex", alignItems: "center" }}>
            <Calendar mode="single" selected={date} captionLayout="dropdown" onSelect={(date) => { setDate(date); setOpen(false); }}/>
        </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

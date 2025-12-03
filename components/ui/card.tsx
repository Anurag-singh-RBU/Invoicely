import { cn } from '@/lib/utils';
import React from 'react'

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div className={cn("bg-neutral-50 dark:bg-neutral-800 h-full rounded-2xl mx-4 sm:rounded-none sm:mt-0 sm:mx-0" , className)}>{children}</div>
  )
}

export const CardContent = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <h3 className={cn("pb-6 px-4" , className)}>{children}</h3>
  )
}

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <h3 className={cn("text-md font-bold md:text-3xl jetbrains-mono text-center sm:mt-0 pt-5" , className)}>{children}</h3>
  )
}

export const CardSkeleton = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <h3 className={cn("min-h-20 md:min-h-70 mx-auto" , className)}>{children}</h3>
  )
}

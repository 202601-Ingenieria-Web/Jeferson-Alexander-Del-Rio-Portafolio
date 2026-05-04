"use client";


import { cn } from "@/utils/Cn";


interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
}


export function SectionTitle({children, className, subtitle }: SectionTitleProps) {
  return (
    <div className={cn("mb-12", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
      )}
      <div className="mt-4 h-1 w-16 bg-primary" />
    </div>
  );
}

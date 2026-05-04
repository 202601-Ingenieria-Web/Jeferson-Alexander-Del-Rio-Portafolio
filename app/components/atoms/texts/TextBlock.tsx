"use client";
import { cn } from "@/utils/Cn";

type TextBlockProps = {
  children: React.ReactNode;
  textClassName?: string;
}

export default function TextBlock({ children, textClassName }: TextBlockProps) {
  return (
    <p className= {cn("text-textcolor px-2 py-1 text-sm", textClassName)} >
      {children}
    </p>
  )
}
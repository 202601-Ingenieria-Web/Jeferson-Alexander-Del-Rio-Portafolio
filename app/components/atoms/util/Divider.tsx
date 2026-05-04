import { cn } from "@/utils/Cn"

interface DividerProps {
  className?: string
}

export function Divider({ className }: DividerProps) {
  return (
    <div
      className={cn(
        "h-[1px] bg-[#F0F0F6] mx-auto",
        className
      )}
    />
  )
}
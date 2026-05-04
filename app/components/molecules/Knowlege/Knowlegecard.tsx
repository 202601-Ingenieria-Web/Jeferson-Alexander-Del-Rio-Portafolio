"use client"

import { Icon } from "@iconify/react"
import { cn } from "@/utils/Cn"

interface KnowledgeCardProps {
  icon?: string
  title: string
  desc?: string
  className?: string
  children?: React.ReactNode
}

export function Knowledgecard({icon,title,desc,className,children,
}: KnowledgeCardProps) {
  return (
    <div
      className={cn("w-full max-w-[310px] bg-[#F8F8F8] flex flex-col items-center justify-center text-center p-5 sm:p-6 min-h-[180px] sm:min-h-[200px] lg:min-h-[225px]",
        className
      )}
    >
      {icon && (
        <Icon
          icon={icon}
          className="text-[32px] sm:text-[36px] lg:text-[40px] text-[var(--yellow)] mb-3"/>
      )}

      <h3
        className=" text-[clamp(14px,2.5vw,16px)] font-medium text-[#2B2B2B]  " >
        {title}
      </h3>

      {desc && (
        <p
          className="  text-[clamp(13px,2vw,14px)]  text-[#767676]  mt-2  " >
          {desc}
        </p>
      )}

      {children}
    </div>
  )
}
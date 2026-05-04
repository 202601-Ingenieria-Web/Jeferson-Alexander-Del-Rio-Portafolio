"use client";
import { cn } from "@/utils/Cn";


interface KnowledgeCardProps {
  title: string
  description?: string
}

export  function TextPresentation({ title, description }: KnowledgeCardProps) {
  return (
       <div className="text-center max-w-[600px] mx-auto mb-10">
        <h2 className="text-[28px] font-bold text-[#2B2B2B]">
        {title}
        </h2>

        <p className="text-[15px] text-[#767676] mt-4">
          {description}
        </p>
      </div>
  )
}
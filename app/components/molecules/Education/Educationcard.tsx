interface ExperienceItemProps {
  leftTitle: string
  role: string
  date: string
  rightTitle: string
  description: string
}

export function Educationcard({
  leftTitle,
  role,
  date,
  rightTitle,
  description,
}: ExperienceItemProps) {
  return (
    <div  className=" w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 p-4">
      
      <div className="space-y-3 lg:w-[40%]">
        <h3 className="text-[clamp(16px,2.5vw,18px)] font-medium text-titlecolor">
          {leftTitle}
        </h3>

        <div className="grid grid-cols-[1fr_auto] items-center gap-2 text-[clamp(13px,2vw,14px)] text-textcolor">
          <span className="truncate">
            {role}
          </span>

          <span className=" bg-[var(--yellow)] text-white text-[12px] px-2 py-1 rounded ">
            {date}
          </span>
        </div>
      </div>

      <div className="space-y-3 lg:w-[55%]">
        <h3 className="text-[clamp(16px,2.5vw,18px)] font-medium text-titlecolor">
          {rightTitle}
        </h3>

        <p className="text-[clamp(13px,2vw,14px)] text-textcolor leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
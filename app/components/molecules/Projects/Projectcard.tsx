import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  image: string
  title: string
  description: string
  href?: string
}

export function Projectcard({
  image,
  title,
  description,
  href = "#",
}: ProjectCardProps) {
  return (
    <div className="w-[310px] h-[390px] bg-white overflow-hidden flex flex-col">
      <div className="relative w-[310px] h-[180px] shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="310px"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 px-6 pt-4 pb-5">
        <h3 className="text-[18px] font-medium text-titlecolor leading-tight">
          {title}
        </h3>

        <p className="mt-2 text-[14px] leading-6 text-textcolor line-clamp-3">
          {description}
        </p>

        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-1 text-[16px] font-medium text-yellow"
        >
          Learn More <span>›</span>
        </Link>
      </div>
    </div>
  )
}
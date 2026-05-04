import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  image: string
  title: string
  description: string
  href?: string
}

export function Projectcard({image, title, description, href = "#",}: ProjectCardProps) {
  return (
    <div className="  w-full max-w-[310px] bg-white mx-auto overflow-hidden " >
      <div className=" relative w-full aspect-[31/30]">
      
        <Image
        src="/imagenlarga.png"
        alt="profile"
        width={250}
        height={400}
        className="w-full h-auto object-contain"
      />
      </div>

      <div className="px-4 sm:px-6 pt-5 sm:pt-6 pb-6">
        <h3 className="text-[clamp(16px,2.5vw,18px)] font-medium text-[#2B2B2B] leading-tight">
          {title}
        </h3>

        <p className="mt-2 text-[clamp(13px,2vw,15px)] leading-6 text-[#767676]">
          {description}
        </p>

        <Link
          href={href}
          className="mt-3 inline-flex items-center gap-1 text-[clamp(16px,2.5vw,18px)] font-medium text-[var(--yellow)]"
        >
          Learn More <span>›</span>
        </Link>
      </div>
    </div>
  )
}
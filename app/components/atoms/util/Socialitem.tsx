import Link from "next/link"
import Image from "next/image"

export function Socialitem({ src, href }: { src: string; href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-[40px]
        h-[40px]
        rounded-full
        bg-[var(--yellow)]
        flex
        items-center
        justify-center
        cursor-pointer
        hover:scale-110
        transition
      "
    >
      <Image
        src={src}
        alt="social icon"
        width={18}
        height={18}
      />
    </Link>
  )
}
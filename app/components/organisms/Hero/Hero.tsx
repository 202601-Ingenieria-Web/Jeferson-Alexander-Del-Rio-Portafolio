"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/app/components/atoms/buttons/Button" // ajusta la ruta
import { Presentation } from "../../molecules/Hero/Presentation"

export function Hero() {
  return (
    <section className="w-full flex justify-center">
      <div className=" w-[100%]  max-w-[1200px] bg-white rounded-lg px-4 py-8 sm:px-6 lg:px-6 lg:py-10 
        flex flex-collg:flex-row items-center justify-between gap-8" >
        <div className=" w-full max-w-[500px] space-y-6 text-center lg:text-left ">

          <Presentation />

          <Button className="bg-yellow text-black hover:opacity-90 px-6 py-2">
            <Link href="#contact" className="flex items-center gap-2 justify-center lg:justify-start">
              HIRE ME →
            </Link>
          </Button>
        </div>

        
        <div
          className=" hidden  lg:flex w-full max-w-[250px] justify-end ">
          <Image
            src="/imagenlarga.png"
            alt="profile"
            width={250}
            height={400}
            className="w-auto h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
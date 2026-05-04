"use client"
import { Socialitem } from "@/app/components/atoms/util/Socialitem";
export function SocialLinks() {
  return (
    <div className="w-[48px] h-[363px] flex flex-col items-center">

      <span className="text-[14px] text-titlecolor  font-bold mb-6">
        Links
      </span>
      
      <div className="flex flex-col items-center gap-[15px]">
        
        <Socialitem href="https://www.linkedin.com/in/jeferson-delrio" src="/Icons-facebook.png" />
        <Socialitem href="https://www.instagram.com" src="/Icons-instagram.png" />
        <Socialitem href="https://www.linkedin.com/in/jeferson-delrio" src="/Icons-linkedin.png" />  
      </div>

    </div>
  )
}
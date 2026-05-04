"use client";


import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Menu from "@/app/components/molecules/Navbar/Menu/Menu";
import { ProfileCard } from "@/app/components/molecules/Profileinfo/Profilecard"
import { ProfileInfo } from "@/app/components/molecules/Profileinfo/ProfileInfo"
import { ProfileLanguages } from "@/app/components/molecules/Profileinfo/Profilelenguage"
import { ProgrammingLanguages } from "@/app/components/molecules/Profileinfo/Programinlanguage"
import { Skills } from "@/app/components/molecules/Profileinfo/Skills"
import { Divider } from "../../atoms/util/Divider"


export function MovilNavbar() {
  const [open, setOpen] = useState(false); 


  return (
    <header className="w-full bg-foreground shadow-md">
      <div className="flex flex-row items-center justify-around py-4 px-6">
        <Link href="/" className="text-lg font-bold text-white">
          JD
        </Link>


        <button onClick={() => setOpen(!open)} className=" ">
          <Icon icon="material-symbols:menu-rounded" color="#ffffff" width="40" height="24" />
        </button>      
      </div>


      {open && (
        <div className="flex flex-col items-center bg-white px-6 py-4 gap-4 ">
          <ProfileCard />
          
                  <Divider className="my-4 w-[200px]" />
          
                  <ProfileInfo />
          
                  <Divider className="my-4 w-[200px]" />
          
                  <ProfileLanguages />
          
                  <Divider className="my-4 w-[200px]" />
          
                  <ProgrammingLanguages />
          
                  <Divider className="my-4 w-[200px]" />
          
                  <Skills />
        </div>
      )}
    </header>
  );
};



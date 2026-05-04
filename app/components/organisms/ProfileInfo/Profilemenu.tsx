import { ProfileCard } from "@/app/components/molecules/Profileinfo/Profilecard";
import { ProfileInfo } from "@/app/components/molecules/Profileinfo/ProfileInfo";
import { ProfileLanguages } from "@/app/components/molecules/Profileinfo/Profilelenguage";
import { ProgrammingLanguages } from "@/app/components/molecules/Profileinfo/Programinlanguage";
import { Skills } from "@/app/components/molecules/Profileinfo/Skills";
import { Divider } from "../../atoms/util/Divider";


export function Profilemenu() {
  return (
    <aside className=" hidden lg:flex lg:w-[305px] lg:min-h-screen bg-white flex-col items-center py-16 ">
       
      <ProfileCard />

      <Divider className="my-4 w-[200px]" />

      <ProfileInfo />

      <Divider className="my-4 w-[200px]" />

      <ProfileLanguages />

      <Divider className="my-4 w-[200px]" />

      <ProgrammingLanguages />

      <Divider className="my-4 w-[200px]" />

      <Skills />

    </aside>
  )
}
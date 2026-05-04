import { SocialLinks } from "../../molecules/SocialLink/SocialLinks";


export function Sociallink() {
  return (
    <div className=" hidden lg:flex fixed right-0 top-[65px]  h-[calc(100vh-65px)]  w-[90px]
        bg-white  flex-col items-center py-6 z-50 ">
      <SocialLinks />
    </div>
  )
}
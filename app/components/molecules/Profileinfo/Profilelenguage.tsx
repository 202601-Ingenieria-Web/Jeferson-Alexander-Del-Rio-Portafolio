import { Languagescard } from "@/app/components/atoms/Rightmenu/Languagescard"  

type Language = {
  name: string
  level: number
}

const languages = [
  { name: "Spanish", level: 90 },
  { name: "English", level: 50 },
  { name: "German", level: 10 },
]

export function ProfileLanguages() {
  return (
    <>
     <Languagescard title="Languages" languages={languages} />
    </>
  )
}
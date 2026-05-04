import { Languagescard } from "@/app/components/atoms/Rightmenu/Languagescard"  

type Language = {
  name: string
  level: number
}

const languages = [
  { name: "Python", level: 60 },
  { name: "JavaScript", level: 20 },
  { name: "Java", level: 50 },
]

export function ProgrammingLanguages() {
  return (
    <>
     <Languagescard title="Programming Languages" languages={languages} />
    </>
  )
}
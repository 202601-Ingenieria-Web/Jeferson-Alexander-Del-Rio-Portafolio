type ExtraSkillsProps = {
  title?: string
}

const skills = [
  "React, Next.js, Tailwind CSS",
  "Django, Spring Boot, REST APIs",
  "Machine Learning",
  "Git & GitHub",
];
export function Skills() {
  return (
    <div className=" w-[80%] max-w-[260px] min-w-[150px] space-y-4">

      <h3 className=" text-[clamp(16px,2.5vw,18px)] font-medium text-[#2B2B2B] " >
        Extra Skills
      </h3>

      <div className="space-y-2">

        {skills.map((skill) => (
          <div key={skill} className=" flex items-center gap-2 text-[clamp(13px,2vw,15px)] text-[#767676] " >

            <span className=" w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] border border-[var(--yellow)] shrink-0 " />

            <span className="truncate">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
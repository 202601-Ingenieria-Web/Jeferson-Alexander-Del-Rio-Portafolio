type Language = {
  name: string
  level: number
}

interface LanguagesProps {
  languages: Language[]
  title?: string
}

export function Languagescard({ languages, title }: LanguagesProps) {
  return (
    <div className=" w-[80%] max-w-[260px] min-w-[150px]space-y-4">
      <h3
        className=" text-[clamp(15px,2.5vw,16px)] font-medium text-[#2B2B2B]">
        {title}
      </h3>

      {languages.map((lang) => (
        <div key={lang.name}>
          <div
            className=" flex justify-between items-center text-[clamp(13px,2vw,14px)] text-[#767676]">
            <span className="truncate">{lang.name}</span>
            <span>{lang.level}%</span>
          </div>

          <div className="w-full h-[4px] bg-gray-200 mt-1 rounded">
            <div
              className="h-[4px] bg-yellow-400 rounded"
              style={{ width: `${lang.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
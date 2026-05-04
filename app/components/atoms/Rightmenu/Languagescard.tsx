
/**
 * Componente LanguagesCard
 * 
 * Muestra una lista de habilidades o lenguajes con su nivel de dominio
 * representado en porcentaje y visualizado mediante una barra de progreso.
 * 
 * Props:
 * - title: título de la sección (ej: "Languages", "Skills")
 * - languages: array de objetos con:
 *    - name: nombre de la habilidad/lenguaje
 *    - level: nivel en porcentaje (0–100)
 * 
 * Comportamiento:
 * - Renderiza cada elemento con su nombre y porcentaje
 * - Muestra una barra de progreso dinámica basada en el nivel
 * - Usa clamp() para mantener el texto responsivo
 * 
 * Uso:
 * Se utiliza para representar visualmente habilidades técnicas
 * o idiomas dentro del portafolio.
 */


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
        className=" text-[clamp(15px,2.5vw,16px)] font-medium text-titlecolor">
        {title}
      </h3>

      {languages.map((lang) => (
        <div key={lang.name}>
          <div
            className=" flex justify-between items-center text-[clamp(13px,2vw,14px)] text-textcolor">
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
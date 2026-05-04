'use client'

import { cn } from "@/utils/Cn"

/**
 * Componente Label
 * 
 * Renderiza una etiqueta (<label>) reutilizable con estilos consistentes
 * para formularios dentro de la aplicación.
 * 
 * Comportamiento:
 * - Aplica estilos base de Tailwind para alineación, tipografía y espaciado
 * - Usa `cn()` para combinar clases y evitar conflictos
 * 
 * Uso:
 * Se utiliza principalmente junto a inputs para mejorar accesibilidad
 * y mantener consistencia visual en formularios.
 */

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string
}

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none",
        className
      )}
      {...props}
    />
  )
}


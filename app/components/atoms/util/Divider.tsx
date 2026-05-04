import { cn } from "@/utils/Cn"


/**
 * Componente Divider
 * 
 * Renderiza una línea horizontal reutilizable para separar secciones
 * o bloques de contenido dentro de la interfaz.
 * 
 * Props:
 * - className (opcional): permite personalizar estilos como ancho,
 *   márgenes o color adicional usando Tailwind.
 * 
 * Nota:
 * - Incluye estilos base (altura de 1px, color y centrado)
 * - Usa `cn()` para combinar clases y evitar conflictos
 */

interface DividerProps {
  className?: string
}

export function Divider({ className }: DividerProps) {
  return (
    <div
      className={cn(
        "h-[1px] bg-line mx-auto",
        className
      )}
    />
  )
}
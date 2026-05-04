interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

/**
 * Componente Textarea
 * 
 * Renderiza un campo de texto multilínea reutilizable con estilos base consistentes.
 * 
 * Props:
 * - Extiende todas las props nativas de <textarea> (placeholder, value, onChange, etc.)
 * - className (opcional): permite agregar o sobrescribir estilos de Tailwind
 * 
 * Comportamiento:
 * - Aplica estilos base (ancho completo, altura mínima, padding y tipografía)
 * - Permite personalización mediante className
 * 
 * Uso:
 * Se utiliza en formularios para ingresar mensajes o textos largos,
 * como en la sección de contacto.
 */

export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`w-full min-h-[100px] border rounded-md px-3 py-2 text-sm outline-none ${className}`}
      {...props}
    />
  )
}
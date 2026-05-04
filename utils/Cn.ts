import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'


/**
 * Combina múltiples clases de Tailwind de forma inteligente.
 * 
 * - Usa `clsx` para manejar clases condicionales (ej: true/false, arrays, objetos).
 * - Usa `twMerge` para evitar conflictos de clases de Tailwind (ej: "p-2 p-4" → "p-4").
 * 
 * Ejemplo:
 * cn("p-2", isActive && "bg-blue-500", "p-4")
 * → "bg-blue-500 p-4"
 */

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs))
}
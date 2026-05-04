import Link from "next/link"
import Image from "next/image"

/**
 * Componente SocialItem
 * 
 * Renderiza un botón circular con un ícono de red social que redirige
 * a un enlace externo.
 * 
 * Props:
 * - src: ruta de la imagen/icono que se mostrará
 * - href: URL de destino (abre en una nueva pestaña)
 * 
 * Comportamiento:
 * - Usa `next/link` para navegación
 * - Abre enlaces externos con `target="_blank"` y `rel="noopener noreferrer"`
 *   por seguridad
 * - Aplica estilos de botón circular con hover (zoom suave)
 * 
 * Uso:
 * Se utiliza en secciones como redes sociales o contacto para mostrar
 * accesos rápidos a perfiles externos.
 */

export function Socialitem({ src, href }: { src: string; href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className=" w-[40px]  h-[40px] rounded-full bg-yellow  flex items-center justify-center
      cursor-pointer hover:scale-110  transition " >
      <Image
        src={src}
        alt="social icon"
        width={18}
        height={18}
      />
    </Link>
  )
}
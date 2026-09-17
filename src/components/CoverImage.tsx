import Image from "next/image";

export const COVER_ALT =
  "Portada de Días Mundiales Aruser@s. Calendario Gastronómico con Félix Ojeda";

type CoverImageProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function CoverImage({
  className = "",
  priority = false,
  sizes,
}: CoverImageProps) {
  return (
    <Image
      src="/images/portada.jpg"
      alt={COVER_ALT}
      width={1200}
      height={1600}
      priority={priority}
      sizes={sizes}
      className={className}
    />
  );
}

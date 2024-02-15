import Image from "next/image"

/**
 * Full width image component
 * @param {string} src image source
 * @param {string} alt image alt
 * @returns {JSX.Element}
 */
export default function ImageFullWidth ({src, alt}) {
  return (
      <Image
        src={src}
        alt={alt}
        className={`
          w-full
          h-auto
        `}
        width={1920}
        height={1080}
        data-aos="fade-up"
      />
  )
}
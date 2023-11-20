import { titleFont } from '@/lib/fonts'
import Link from 'next/link'

/**
 * Link button
 * @param {string} herf link
 * @param {string} label button label
 * @param {string} className extra css classes
 */
export default function BtnCta({herf, label, className}) {
  return (
    <Link 
      href={herf}
      className={`
        btn-cta
        text-2xl
        px-8
        py-2
        rounded-md
        shadow-lg hover:shadow-none
        border-2
        border-blue
        bg-blue hover:bg-transparent
        text-white hover:text-blue
        duration-300
        hover:scale-105
        ${titleFont.className}
        ${className}

      `}
    >
      {label}
    </Link>
  )
}
import { titleFont } from '@/lib/fonts'
import Link from 'next/link'

/**
 * Link button
 * @param {string} href link
 * @param {string} label button label
 * @param {string} className extra css classes
 * @param {boolean} isPhantom if true, the button will be transparent
 * @param {function} onClick function to handle click
 * @returns {JSX.Element}
 */
export default function BtnCta({href, label, className, isPhantom=false, onClick=()=>{}}) {
  return (
    <Link 
      href={href}
      className={`
        btn-cta
        text-2xl
        px-8
        py-2
        inline-block
        rounded-md
        shadow-lg hover:shadow-none
        border-2
        ${isPhantom ? 'border-white' : 'border-blue'}
        ${isPhantom ? 'bg-transparent hover:bg-white opacity-80' : 'bg-blue hover:bg-transparent'}
        text-white hover:text-blue
        duration-300
        ${titleFont.className}
        ${className}
      `}
      onClick={onClick}
    >
      {label}
    </Link>
  )
}
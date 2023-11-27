import { titleFont } from '@/lib/fonts'

/**
 * Link button
 * @param {string} label button label
 * @param {string} className extra css classes
 * @returns {JSX.Element}
 */
export default function BtnSubmit({ label, className }) {
  return (
    <input
      className={`
        btn-cta
        text-xl
        px-8
        py-2
        inline-block
        rounded-md
        shadow-lg hover:shadow-none
        border-2
        text-white hover:text-blue
        duration-300
        border-blue
        bg-blue hover:bg-transparent
        ${titleFont.className}
        ${className}
        cursor-pointer
      `}
      type="submit"
      value={label}
    />
  )
}
/**
 * Button with icon
 * @param {function} onClick function to execute on click
 * @param {string} path svg path
 * @param {string} className extra csss
 * @param {string} classNameSvg extra csss for svg
 * @returns {JSX.Element}
 */
export default function BtnIcon({onClick, path, className, classNameSvg}) {
  return (
    <button
      className={`
        btn-icon
        w-10
        h-10
        ${className}
      `}
      onClick={onClick}
    >
      <svg 
        viewBox="0 0 24 24"
        className={`
          fill-blue
          ${classNameSvg}
        `}
      >
        {path}
      </svg>

    </button>
  )
}
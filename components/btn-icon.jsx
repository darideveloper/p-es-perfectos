/**
 * Button with icon
 * @param {function} onClick function to execute on click
 * @param {string} path svg path
 * @param {string} className extra csss
 * @returns {jsx}
 */
export default function BtnIcon({onClick, path, className}) {
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
        `}
      >
        {path}
      </svg>

    </button>
  )
}